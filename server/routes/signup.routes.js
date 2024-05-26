// RUTAS USUARIO - TABLA LOGIN
const router = require("express").Router();
const signupController = require('../controllers/signup.controller');

// http://localhost:3000/api/signup

// El usuario introduce sus datos y se envían a la base de datos para registrar ese usuario
router.post('/', signupController.createUser);

// El usuario en algún momento debería poder cambiar su contraseña, o el admin asignarle una nueva ¡Ruta protegida!
router.put('/', signupController.updateUser);

module.exports = router;