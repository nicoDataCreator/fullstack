const router = require("express").Router();
const logoutController = require('../controllers/logout.controller');

// El usuario introduce sus datos y se envían a la base de datos
router.put('/', logoutController.logoutUser);

// El administrador puede ver toda la información de un cliente (se elige por email) o todos ¡Ruta protegida, dentro del dashboard de admin!
router.get('/:email?', logoutController.getUsers);

// El administrador puede eliminar un usuario de la tabla login ¡Ruta protegida, dentro del dashboard de admin!
router.delete('/:email', logoutController.deleteUser);

module.exports = router;
  