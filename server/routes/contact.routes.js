/**
 * @author Adrián Terciado, Gema Millán, Pablo Rubio, Verónica Parra 
 * @exports contact.routes
 */
/**
 * Este archivo define las rutas para el controlador de contacto para la tabla de contacto.
 * @memberof routes
 */

const router = require("express").Router();
const contactController = require('../controllers/contact.controller');

/**
 * Ruta para que el usuario cree un nuevo contacto.
 * @name POST/api/contact
 * @function
 * @memberof module:routes/contact.routes
 * @param {Request} req - Objeto de solicitud de Express.
 * @param {Response} res - Objeto de respuesta de Express.
 * @returns {void}
 */
router.post('/', contactController.createContact);

/**
 * Ruta para que el administrador obtenga información sobre los contactos.
 * @name GET/api/contact/:id?
 * @function
 * @memberof module:routes/contact.routes
 * @param {Request} req - Objeto de solicitud de Express.
 * @param {Response} res - Objeto de respuesta de Express.
 * @returns {void}
 */
router.get('/:id?', contactController.getContacts);

/**
 * Ruta para que el administrador elimine un contacto de la tabla de contacto.
 * @name DELETE/api/contact/:id
 * @function
 * @memberof module:routes/contact.routes
 * @param {Request} req - Objeto de solicitud de Express.
 * @param {Response} res - Objeto de respuesta de Express.
 * @returns {void}
 */
router.delete('/:id', contactController.deleteContact);

module.exports = router;
