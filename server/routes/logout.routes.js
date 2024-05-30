/**
 * @author Adrián Terciado, Gema Millán, Pablo Rubio, Verónica Parra 
 * @exports logout.routes
 */
/**
 * Este archivo define las rutas para el controlador de cierre de sesión.
 * @memberof routes
 */

const router = require("express").Router();
const logoutController = require('../controllers/logout.controller');

/**
 * Ruta para cerrar la sesión de un usuario.
 * @name PUT/api/logout
 * @function
 * @memberof module:routes/logout.routes
 * @param {Request} req - Objeto de solicitud de Express.
 * @param {Response} res - Objeto de respuesta de Express.
 * @returns {void}
 */
router.put('/', logoutController.logoutUser);

/**
 * Ruta para que el administrador obtenga información sobre un usuario o todos los usuarios.
 * @name GET/api/logout/:email?
 * @function
 * @memberof module:routes/logout.routes
 * @param {Request} req - Objeto de solicitud de Express.
 * @param {Response} res - Objeto de respuesta de Express.
 * @returns {void}
 */
router.get('/:email?', logoutController.getUsers);

/**
 * Ruta para que el administrador elimine un usuario de la tabla de inicio de sesión.
 * @name DELETE/api/logout/:email
 * @function
 * @memberof module:routes/logout.routes
 * @param {Request} req - Objeto de solicitud de Express.
 * @param {Response} res - Objeto de respuesta de Express.
 * @returns {void}
 */
router.delete('/:email', logoutController.deleteUser);

module.exports = router;
