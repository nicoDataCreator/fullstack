/**
 * @author Adrián Terciado, Gema Millán, Pablo Rubio, Verónica Parra 
 * @exports client.routes
 */
/**
 * Este archivo define las rutas para el controlador de clientes para la tabla de alumnos.
 * @memberof routes
 */

const router = require("express").Router();
const clientController = require('../controllers/client.controller');

/**
 * Ruta para crear un nuevo cliente en la tabla de alumnos.
 * @name POST/api/user
 * @function
 * @memberof module:routes/client.routes
 * @param {Request} req - Objeto de solicitud de Express.
 * @param {Response} res - Objeto de respuesta de Express.
 * @returns {void}
 */
router.post('/', clientController.createClient);

/**
 * Ruta para que el usuario vea el formulario de contrato con los datos introducidos.
 * @name GET/api/user/:email?
 * @function
 * @memberof module:routes/client.routes
 * @param {Request} req - Objeto de solicitud de Express.
 * @param {Response} res - Objeto de respuesta de Express.
 * @returns {void}
 */
router.get('/:email?', clientController.getClient);

/**
 * Ruta para que el administrador obtenga información sobre todos los clientes/alumnos.
 * @name GET/api/user/
 * @function
 * @memberof module:routes/client.routes
 * @param {Request} req - Objeto de solicitud de Express.
 * @param {Response} res - Objeto de respuesta de Express.
 * @returns {void}
 */
router.get('/', clientController.getAllClients);

/**
 * Ruta para que el usuario actualice sus datos introducidos en el formulario de contrato.
 * @name PUT/api/user/
 * @function
 * @memberof module:routes/client.routes
 * @param {Request} req - Objeto de solicitud de Express.
 * @param {Response} res - Objeto de respuesta de Express.
 * @returns {void}
 */
router.put('/', clientController.updateClient);

/**
 * Ruta para que el administrador elimine toda la información de un cliente/alumno.
 * @name DELETE/api/user/
 * @function
 * @memberof module:routes/client.routes
 * @param {Request} req - Objeto de solicitud de Express.
 * @param {Response} res - Objeto de respuesta de Express.
 * @returns {void}
 */
router.delete('/', clientController.deleteClient);

module.exports = router;
