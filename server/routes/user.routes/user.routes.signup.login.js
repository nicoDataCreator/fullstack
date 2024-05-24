// RUTAS USUARIO - TABLA LOGIN

const router = require("express").Router();
const contactController = require('../../controllers/user.controllers/user.controller.signup.login');

// El usuario introduce sus datos y se envían a la base de datos
router.post('/api/user/signup', contactController.postSignupUser);

module.exports = router;