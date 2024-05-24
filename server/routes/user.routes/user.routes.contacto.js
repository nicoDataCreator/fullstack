// RUTAS USUARIOS - TABLA FORMULARIO CONTACTO

const router = require("express").Router();
const contactController = require('../../controllers/user.controllers/user.controller.contacto');

// El usuario introduce sus datos y se envían a la base de datos
router.post('/api/contact', contactController.postContact);

module.exports = router;