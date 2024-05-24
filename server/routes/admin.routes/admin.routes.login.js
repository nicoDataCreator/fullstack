// RUTAS ADMINISTRADOR - TABLA LOGIN

const router = require("express").Router();
const contactController = require('../../controllers/admin.controllers/admin.controller.login');

// El administrador puede ver toda la información de un cliente (se elige por email)
router.get('/api/user/login', contactController.getLoginUser);

// El administrador puede ver todos los clientes en la tabla login
router.get('/api/user/login/all', contactController.getAllLoginUsers);

// El administrador puede editar información de un cliente en la tabla login
router.put('/api/user/login/', contactController.updateLoginUser);

// El administrador puede eliminar la información de un usuario de la tabla login
router.delete('/api/user/login/', contactController.deleteLoginUser);

module.exports = router;