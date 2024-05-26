// RUTAS INFOCLIENT - TABLA ALUMNOS

const express = require('express');
const router = express.Router();
const clientController = require('../controllers/infoClient.controller');

// http://localhost:3000/api/user
// Create a new user in the "alumnos" table (guarda en la base de datos "alumnos" el perfil total del formulario de contrato)
router.post('/', clientController.createClient);

// El usuario ve el formulario de contrato vacío con los datos introducidos (con o sin datos)
router.get('/', clientController.getClients);

// El usuario hace submit de sus datos introducidos en el formulario (siempre se va a hacer un put ya que solo se modifican los campos que inicialmente están vacíos)
router.put('/', clientController.updateClient);

// Desde el dashboard de admin se podría eliminar toda la información de un cliente/alumno/user
router.delete('/', clientController.deleteClient);

module.exports = router;