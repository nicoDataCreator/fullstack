
/**
 * @author Adrián Terciado, Gema Millán, Pablo Rubio, Verónica Parra 
 * @exports server
 */
/**
 * Este archivo representa el servidor Express para el proyecto.
 * @memberof server
 */

process.on("warning", (e) => console.warn(e.stack));

// Requirements: express, pg
const express = require("express");
const session = require("express-session");
const cors = require("cors");
const helmet = require("helmet");
require("../server/config/auth.js");
require("dotenv").config();

// Para rutas del Server
const path = require("path");
require("dotenv").config();
const bodyParser = require("body-parser");

/**
 * Middleware para comprobar si un usuario está autenticado.
 * @param {Request} req - Objeto de solicitud de Express.
 * @param {Response} res - Objeto de respuesta de Express.
 * @param {NextFunction} next - Función de siguiente middleware.
 * @returns {void}
 */
const isLoggedIn = (req, res, next) => {
  req.user ? next() : res.sendStatus(401);
};

const app = express();
const port = 3000;

/* app.use(express.urlencoded()); */
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

// Requirements: routes
const contactRoutes = require("./routes/contact.routes");
const newslettertRoutes = require("./routes/newsletter.routes");
const signupRoutes = require("./routes/signup.routes.js");
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
        scriptSrc: ["'self'", "https://apis.google.com"],
        styleSrc: ["'self'", "https://fonts.googleapis.com"],
        frameSrc: [
          "'self'",
          "https://accounts.google.com",
          "https://chatybe.streamlit.app",
          "https://destinomap.streamlit.app",
          "https://insidebeyondeducation.streamlit.app/"
        ], // Permitir frames desde accounts.google.com y chatybe.streamlit.app        
        imgSrc: ["'self'", "data:", "https://www.gstatic.com"],
        connectSrc: [
          "'self'",
          "http://localhost:3000",
          "https://beyond-education.onrender.com/",
          "https://fullstack-both.onrender.com/",
          "https://accounts.google.com",
          "https://www.google-analytics.com",
        ],
        fontSrc: ["'self'", "https://fonts.gstatic.com"],
      },
    },
  })
);

app.use(express.json());
app.use(session({ secret: "beyond-education" }));
app.use(passport.initialize());
app.use(passport.session());
app.use(
  session({ secret: "your-secret-key", resave: false, saveUninitialized: true })
);

/* ----- WEB ROUTES ----- */
// http://localhost:3000/
// Home page
// Serve static assets in production

/**
 * Middleware para servir archivos estáticos.
 * @param {string} "client/dist" - Directorio de archivos estáticos.
 * @returns {void}
 */
app.use(express.static("client/dist"));
app.use(express.static(path.join(__dirname, "/../client/dist")));

/**
 * Ruta para servir la página principal.
 * @param {Request} req - Objeto de solicitud de Express.
 * @param {Response} res - Objeto de respuesta de Express.
 * @returns {void}
 */
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/../client/dist", "index.html"));
});

/**
 * Ruta para mostrar el botón de autenticación con Google.
 * @param {Request} req - Objeto de solicitud de Express.
 * @param {Response} res - Objeto de respuesta de Express.
 * @returns {void}
 */
app.get("/auth", (req, res) => {
  res.send('<a href="/auth/google">Authenticate with google</a>');
});

/**
 * Ruta para autenticar con Google.
 * @param {Request} req - Objeto de solicitud de Express.
 * @param {Response} res - Objeto de respuesta de Express.
 * @returns {void}
 */
app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["email", "profile"],
  })
);

/**
 * Ruta de callback para autenticación con Google.
 * @param {Request} req - Objeto de solicitud de Express.
 * @param {Response} res - Objeto de respuesta de Express.
 * @returns {void}
 */
app.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: "/protected",
    failureRedirect: "/auth/failure",
  })
);

/**
 * Ruta para manejar fallos de autenticación.
 * @param {Request} req - Objeto de solicitud de Express.
 * @param {Response} res - Objeto de respuesta de Express.
 * @returns {void}
 */
app.get("/auth/failure", (req, res) => {
  res.send("Authentication failed");
});

/**
 * Ruta protegida.
 * @param {Request} req - Objeto de solicitud de Express.
 * @param {Response} res - Objeto de respuesta de Express.
 * @returns {void}
 */
app.get("/protected", isLoggedIn, (req, res) => {
  res.send("Hello User");
});

/* ----- API ROUTES ----- */
app.use("/api/contact", contactRoutes);
app.use("/api/newsletter", newslettertRoutes);
app.use("/api/signup", signupRoutes);
app.use("/api/login", loginRoutes);
app.use("/api/logout", logoutRoutes);
app.use("/api/user", clientRoutes);

/**
 * Objeto del servidor que escucha en el puerto 3000.
 * @type {object}
 */
const server = app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});

module.exports = server;
