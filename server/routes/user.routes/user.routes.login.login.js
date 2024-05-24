// RUTAS USUARIO - TABLA LOGIN

const router = require("express").Router();
const contactController = require('../../controllers/user.controllers/user.controller.login.login');

// El usuario introduce sus datos y se envían a la base de datos
router.post('/api/user/login', contactController.postLoginUser);

module.exports = router;