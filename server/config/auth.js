
/**
 * @author Adrián Terciado, Gema Millán, Pablo Rubio, Verónica Parra 
 * @exports auth
 */
/**
 * Este archivo conmodeltiene funciones para interactuar con la base de datos relacionadas con la tabla de usuarios.
 * @module auth
 * @memberof config
 */
const passport = require('passport');
require('dotenv').config();

const GoogleStrategy = require('passport-google-oauth2').Strategy;

// Obtiene las credenciales de cliente de Google de las variables de entorno
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/google/callback", // URL de retorno después de la autenticación
    passReqToCallback: true
},
function (request, accessToken, refreshToken, profile, done) {
    // Callback que se llama después de la autenticación exitosa
    return done(null, profile);
}
));

// Serializa el usuario para almacenar en la sesión
passport.serializeUser(function(user, done) {
    done(null, user);
});

// Deserializa el usuario desde la sesión
passport.deserializeUser(function(user, done) {
    done(null, user);
});

module.exports = passport; // Exporta Passport configurado
