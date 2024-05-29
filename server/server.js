process.on('warning', e => console.warn(e.stack));

// Requirements: express, express-session, cors
const express = require("express");
const session = require("express-session");
const cors = require("cors");

// Requirements: routes
const userRoutes = require("./routes/user.routes");
const passport = require("passport");
require('../server/config/auth.js')

const isLoggedIn = (req, res, next) => {
  req.user ? next() : res.sendStatus(401);
}

const app = express();
const port = 3000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(session({ secret: 'beyond-education' }));
app.use(passport.initialize());
app.use(passport.session());


app.get('/', (req, res) => {
  res.status(200).send("Hello World!");
});

app.get('/auth', (req, res) => {
  res.send('<a href="/auth/google">Authenticate with google</a>');
});

app.get('/auth/google',
  passport.authenticate('google', {
    scope: ['email', 'profile']
  })
);

app.get('/google/callback',
  passport.authenticate('google', {
    successRedirect: '/protected',
    failureRedirect: '/auth/failure',
  })
);

app.get('/auth/failure', (req, res) => {
  res.send('Authentication failed');
})

app.get('/protected', isLoggedIn, (req, res) => {
  res.send('Hello User');
});

app.use('/api/user', userRoutes);

const server = app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});

module.exports = server;