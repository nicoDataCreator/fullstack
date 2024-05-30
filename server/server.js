process.on("warning", (e) => console.warn(e.stack));

// Load environment variables
require("dotenv").config();

// Requirements: Modules
const express = require("express");
const session = require("express-session");
const cors = require("cors");
const helmet = require("helmet");
const passport = require("passport");
const path = require("path");
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');

// Requirements: Web Routes
const contactRoutes = require("./routes/contact.routes");
const newslettertRoutes = require("./routes/newsletter.routes");
const signupRoutes = require("./routes/signup.routes.js");
const loginRoutes = require("./routes/login.routes.js");
const logoutRoutes = require("./routes/logout.routes.js")
const clientRoutes = require("./routes/client.routes.js");
const googleRoutes = require("./routes/google.routes.js");

// Requirements: Google Auth
require("../server/config/auth.js");

// Initialize App
const app = express();
const port = 3000;

// Middlewares
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "https://apis.google.com"],
      styleSrc: ["'self'", "https://fonts.googleapis.com"],
      frameSrc: [
        "'self'", 
        "https://accounts.google.com", 
        "https://chatybe.streamlit.app", 
        "https://destinomap.streamlit.app"
      ],
      imgSrc: ["'self'", "data:", "https://www.gstatic.com"],
      connectSrc: [
        "'self'", 
        "http://localhost:3000", 
        "https://beyond-education.onrender.com/", 
        "https://accounts.google.com", 
        "https://www.google-analytics.com"
      ],
      fontSrc: ["'self'", "https://fonts.gstatic.com"]
    }
  }
}));

app.use(express.json());
app.use(session({ secret: 'your-secret-key', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

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

// Catch-all route to serve index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/../client/dist", "index.html"));
});

// Start the server
const server = app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});

module.exports = server;
