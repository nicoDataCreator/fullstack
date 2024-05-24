// RUTAS ADMINISTRADOR - TABLA FORMULARIO CONTACTO

const router = require("express").Router();
const contactController = require('../../controllers/admin.controllers/admin.controller.contacto');

// El administrador puede ver todos los usuarios que se han registrado
router.get('/api/contact', contactController.getAllContacts);


// El administrador puede eliminar usuarios que se han registrado
router.delete('/api/contact', contactController.deleteContact);

module.exports = router;