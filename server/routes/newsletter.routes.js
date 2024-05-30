/**
 * @author Adrián Terciado, Gema Millán, Pablo Rubio, Verónica Parra 
 * @exports newsletter.routes
 */
/**
/**
 * Este archivo define las rutas para el administrador y el usuario en la tabla de newsletter.
 * @memberof routes
 */

const router = require("express").Router();
const newsletterController = require('../controllers/newsletter.controller');

/**
 * Ruta para que el usuario cree una suscripción a la newsletter.
 * @name POST/api/newsletter
 * @function
 * @memberof module:routes/newsletter.routes
 * @param {Request} req - Objeto de solicitud de Express.
 * @param {Response} res - Objeto de respuesta de Express.
 * @returns {void}
 */
router.post('/', newsletterController.createSubscriber);

/**
 * Ruta para que el administrador obtenga información sobre los suscriptores de la newsletter.
 * @name GET/api/newsletter/:id?
 * @function
 * @memberof module:routes/newsletter.routes
 * @param {Request} req - Objeto de solicitud de Express.
 * @param {Response} res - Objeto de respuesta de Express.
 * @returns {void}
 */
router.get('/:id?', newsletterController.getSubscribers);

/**
 * Ruta para que el administrador elimine un suscriptor de la newsletter.
 * @name DELETE/api/newsletter/:email
 * @function
 * @memberof module:routes/newsletter.routes
 * @param {Request} req - Objeto de solicitud de Express.
 * @param {Response} res - Objeto de respuesta de Express.
 * @returns {void}
 */
router.delete('/:email', newsletterController.deleteSubscriber);

module.exports = router;
