
/**
 * @author Adrián Terciado, Gema Millán, Pablo Rubio, Verónica Parra 
 * @exports signup.routes
 * @namespace routes 
 */
/**
 * Este archivo define las rutas para el usuario y la tabla de inicio de sesión.
 * @memberof routes
 * 
 */

const router = require("express").Router();
const signupController = require('../controllers/signup.controller');

/**
 * Ruta para crear un nuevo usuario.
 * @name POST/api/signup
 * @function
 * @memberof module:routes/signup.routes
 * @param {Request} req - Objeto de solicitud de Express.
 * @param {Response} res - Objeto de respuesta de Express.
 * @returns {void}
 */
router.post('/', signupController.createUser);

/**
 * Ruta para actualizar los datos de un usuario.
 * @name PUT/api/signup
 * @function
 * @memberof module:routes/signup.routes
 * @param {Request} req - Objeto de solicitud de Express.
 * @param {Response} res - Objeto de respuesta de Express.
 * @returns {void}
 */
router.put('/', signupController.updateUser);

module.exports = router;
