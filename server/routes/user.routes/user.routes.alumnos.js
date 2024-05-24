// RUTAS USUARIO - TABLA ALUMNOS

const router = require("express").Router();
const contactController = require('../../controllers/user.controllers/user.controller.alumnos');

// El usuario ve el formulario de contrato vacío con los datos introducidos (con o sin datos)
router.get('/dashboard/user:email', contactController.getAlumnoData);

// El usuario hace submit de sus datos introducidos en el formulario (siempre se va a hacer un put ya que solo se modifican los campos que inicialmente están vacíos)
router.put('/dashboard/user:email', contactController.updateAlumnoData);

module.exports = router;