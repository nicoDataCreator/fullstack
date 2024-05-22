process.on('warning', e => console.warn(e.stack));

// Requirements: express, pg
const express = require("express");
const session = require("express-session");
const cors = require("cors");
const path = require('path');
require('../server/config/auth.js')

const isLoggedIn = (req, res, next) => {
  req.user ? next() : res.sendStatus(401);
}

const app = express();
const port = process.env.PORT || 3000;


// Requirements: routes
const userRoutes = require("./routes/user.routes");
const passport = require("passport");

// Middlewares
app.use(cors());
app.use(express.json());
app.use(session({ 
  secret: 'beyond-education', 
  resave: false, 
  saveUninitialized: true 
}));
app.use(passport.initialize());
app.use(passport.session());


/* ----- WEB ROUTES ----- */
// http://localhost:3000/
// Home page
app.get('/', (req, res) => {
  res.status(200).send("Hello World!");
});


/* ----- BUILD ROUTES ----- */

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, '../client/build')));
// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname,'../client/build/index.html'));
});



/* ----- AUTH ROUTES ----- */

// http://localhost:3000/auth
// Page shows a button with a link that redirects to '/auth/google'
app.get('/auth', (req, res) => {
  res.send('<a href="/auth/google">Authenticate with google</a>');
});

// http://localhost:3000/auth/google
// Shows user selection through Google and allows Sign-up and Sign-in
app.get('/auth/google',
  passport.authenticate('google', {
    scope: ['email', 'profile']
  })
);

// http://localhost:3000/google/callback
// Handles whether Sign-in was successful or not to access the protected route
app.get('/google/callback',
  passport.authenticate('google', {
    successRedirect: '/protected',
    failureRedirect: '/auth/failure',
  })
);

// http://localhost:3000/auth/failure
// Redirects the user if the sign-in was un-successful
app.get('/auth/failure', (req, res) => {
  res.send('Authentication failed');
})


// http://localhost:3000/protected
// Redirects the user if the sign-in was successful
app.get('/protected', isLoggedIn, (req, res) => {
  res.send('Hello User');
});

/* ----- API ROUTES ----- */
app.use('/api/user', userRoutes);

const server = app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});

module.exports = server;