process.on("warning", (e) => console.warn(e.stack));

// Requirements: express, express-session, cors, helmet, passport
const express = require("express");
const session = require("express-session");
const cors = require("cors");
const helmet = require("helmet");
const passport = require("passport");
const path = require("path");

// DotEnv ?
require("dotenv").config();

// Requirements: body-parser, cookie-parser
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');

// Requirements: routes
const contactRoutes = require("./routes/contact.routes");
const newslettertRoutes = require("./routes/newsletter.routes");
const signupRoutes = require("./routes/signup.routes.js");
const loginRoutes = require("./routes/login.routes.js");
const logoutRoutes = require("./routes/logout.routes.js")
const clientRoutes = require("./routes/client.routes.js");
const googleRoutes = require("./routes/google.routes.js");

// Requirements: Google auth
require("../server/config/auth.js");


const isLoggedIn = (req, res, next) => {
  req.user ? next() : res.sendStatus(401);
};

// Para rutas del Server
const app = express();
const port = 3000;
app.use(cookieParser());
app.use(bodyParser.json());
app.use(cors());

/* app.use(express.urlencoded()); */
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'",
          "https://apis.google.com"],
        styleSrc: ["'self'",
          "https://fonts.googleapis.com"],
        frameSrc: ["'self'",
          "https://accounts.google.com",
          "https://chatybe.streamlit.app",
          "https://destinomap.streamlit.app"], // Permitir frames desde accounts.google.com y chatybe.streamlit.app        imgSrc: ["'self'", "data:", "https://www.gstatic.com"],
        connectSrc: [
          "'self'",
          "http://localhost:3000",
          "https://beyond-education.onrender.com/",
          "https://accounts.google.com",
          "https://www.google-analytics.com",
        ],
        fontSrc: ["'self'",
          "https://fonts.gstatic.com"],
      },
    },
  })
);

app.use(express.json());
app.use(session({ secret: "beyond-education" }));
app.use(passport.initialize());
app.use(passport.session());
app.use(session({ secret: 'your-secret-key', resave: false, saveUninitialized: true }));

// Serve static assets in production
app.use(express.static("client/dist"));
app.use(express.static(path.join(__dirname, "/../client/dist")));

// API Routes
app.use("/api/contact", contactRoutes);
app.use("/api/newsletter", newslettertRoutes);
app.use("/api/signup", signupRoutes);
app.use("/api/login", loginRoutes);
app.use("/api/logout", logoutRoutes);
app.use("/api/user", clientRoutes);
app.use("/api/authorize", googleRoutes);

// http://localhost:3000/auth/google
// Shows user selection through Google and allows Sign-up and Sign-in
app.get("/auth/google", passport.authenticate("google", {
  scope: ["email", "profile"],
})
);

// http://localhost:3000/google/callback
// Handles whether Sign-in was successful or not to access the protected route
app.get("/google/callback", passport.authenticate("google", {
  successRedirect: "/protected",
  failureRedirect: "/auth/failure",
}));

// http://localhost:3000/auth/failure
// Redirects the user if the sign-in was un-successful
app.get("/auth/failure", (req, res) => {
  res.send("Authentication failed");
});

// http://localhost:3000/protected
// Redirects the user if the sign-in was successful
app.get("/protected", isLoggedIn, (req, res) => {
  const userInfo = {
    email: req.user.email,
    password: req.user.id
  };

  const userInfoString = JSON.stringify(userInfo);
  // console.log(req.user.email); // email
  // console.log(req.user.id); //contraseña
  // Guardar en la BBDD si no existe
  // Generar JWT con {email,rol}
  res.cookie('user', userInfoString, { httpOnly: true, secure: true }).redirect("/");
  // devolver cookies
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/../client/dist", "index.html"));
});

const server = app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});

module.exports = server;
