// RUTAS ADMINISTRADOR - TABLA NEWSLETTER

const router = require("express").Router();
const contactController = require('../../controllers/admin.controllers/admin.controller.newsletter');

// El administrador puede ver todos los usuarios que se han registrado en la newsletter
router.get('/api/newsletter', contactController.getAllNewsletterUsers);


// El administrador puede eliminar usuarios que se han registrado en la newsletter
router.delete('/api/newsletter', contactController.deleteNewsletterUser);

module.exports = router;