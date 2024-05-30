/**
 * @author Adrián Terciado, Gema Millán, Pablo Rubio, Verónica Parra 
 * @exports login.routes
 * @namespace routes 
 */
/**
 * Este archivo define las rutas para el controlador de inicio de sesión.
 * @memberof routes
 */

const router = require("express").Router();
const loginController = require('../controllers/login.controller');

/**
 * Ruta para iniciar sesión de un usuario.
 * @name PUT/api/login
 * @function
 * @memberof module:routes/login.routes
 * @param {Request} req - Objeto de solicitud de Express.
 * @param {Response} res - Objeto de respuesta de Express.
 * @returns {void}
 */
router.put('/', loginController.loginUser);

/**
 * Ruta para que el administrador obtenga información sobre un usuario o todos los usuarios.
 * @name GET/api/login/:email?
 * @function
 * @memberof module:routes/login.routes
 * @param {Request} req - Objeto de solicitud de Express.
 * @param {Response} res - Objeto de respuesta de Express.
 * @returns {void}
 */
router.get('/:email?', loginController.getUsers);

/**
 * Ruta para que el administrador elimine un usuario de la tabla de inicio de sesión.
 * @name DELETE/api/login/:email
 * @function
 * @memberof module:routes/login.routes
 * @param {Request} req - Objeto de solicitud de Express.
 * @param {Response} res - Objeto de respuesta de Express.
 * @returns {void}
 */
router.delete('/:email', loginController.deleteUser);

module.exports = router;
