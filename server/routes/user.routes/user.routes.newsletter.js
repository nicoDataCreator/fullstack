// RUTAS ADMINISTRADOR - TABLA NEWSLETTER

const router = require("express").Router();
const contactController = require('../../controllers/user.controllers/user.controller.newsletter');

// El usuario introduce sus email y se envía a la base de datos
router.post('/api/newsletter', contactController.postNewsletterUser);

module.exports = router;