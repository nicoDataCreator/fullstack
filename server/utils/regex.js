/**
 * @author Adrián Terciado, Gema Millán, Pablo Rubio, Verónica Parra 
 * @exports regex
 * @memberof utils
 */
/**
 * Función para validar un correo electrónico.
 * @param {string} email - Correo electrónico a validar.
 * @returns {boolean} - True si el correo electrónico es válido, false en caso contrario.
 */
const validateEmail = (email) => {
    const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regexEmail.test(email.toLowerCase());
};

/**
 * Función para validar una contraseña.
 * @param {string} password - Contraseña a validar.
 * @returns {boolean} - True si la contraseña es válida, false en caso contrario.
 */
const validatePassword = (password) => {
    const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*\_\-])(?=.{8,})/;
    return regexPassword.test(password);
};

/**
 * Objeto que contiene las funciones de validación.
 */
const regex = {
    validateEmail,
    validatePassword
};

module.exports = regex;
