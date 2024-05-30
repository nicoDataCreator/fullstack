process.on("warning", (e) => console.warn(e.stack));

const express = require("express");
const session = require("express-session");
const cors = require("cors");
const helmet = require("helmet");
require("../server/config/auth.js");
const path = require("path");
require("dotenv").config();
require("./config/db_pgsql.js");

const isLoggedIn = (req, res, next) => {
  req.user ? next() : res.sendStatus(401);
};

const app = express();
const port = process.env.PORT || 3000;

const morgan = require("./middlewares/morgan");

// Logger
//app.use(morgan(":method :host :status :param[id] - :response-time ms :body"));
app.use(morgan("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const contactRoutes = require("./routes/contact.routes");
const newslettertRoutes = require("./routes/newsletter.routes");
const signupRoutes = require("./routes/signup.routes");
const loginRoutes = require("./routes/login.routes.js");
const logoutRoutes = require("./routes/logout.routes.js");
const clientRoutes = require("./routes/client.routes.js");

const passport = require("passport");

// Middlewares
app.use(cors());
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        frameSrc: [
          "'self'",
          "https://accounts.google.com",
          "https://chatybe.streamlit.app",
          "https://destinomap.streamlit.app",
        ],
      },
    },
  })
);

app.use(
  session({
    secret: "beyond-education",
    resave: false,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

/* ----- WEB ROUTES ----- */
app.get("/auth", (req, res) => {
  res.send('<a href="/auth/google">Authenticate with google</a>');
});

app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["email", "profile"],
  })
);

app.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: "/protected",
    failureRedirect: "/auth/failure",
  })
);

app.get("/auth/failure", (req, res) => {
  res.send("Authentication failed");
});

app.get("/protected", isLoggedIn, (req, res) => {
  res.send("Hello User");
});

/* ----- API ROUTES ----- */
app.use("/api/test", (req, res) => {
  res.status(200).json({ status: "connected" });
});
app.use("/api/contact", contactRoutes);
app.use("/api/newsletter", newslettertRoutes);
app.use("/api/signup", signupRoutes);
app.use("/api/login", loginRoutes);
app.use("/api/logout", logoutRoutes);
app.use("/api/user", clientRoutes);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist", "index.html"));
  // Serve static assets in production
});

//app.use(express.static(path.join(__dirname, "/../client/dist")));

const server = app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});

module.exports = server;
