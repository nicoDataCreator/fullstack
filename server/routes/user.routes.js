const express = require('express');
const userController = require('../controllers/user.controller');
const router = express.Router();

// http://localhost:3000/api/user/create
// Create a new user in the "alumnos" table (guarda en la base de datos "alumnos" el perfil total del formulario de contrato)
router.post('/create', userController.createUser);

// añadir ruta para crear usuario en la base de datos (tabla login)

module.exports = router;



