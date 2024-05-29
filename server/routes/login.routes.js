const router = require("express").Router();
const loginController = require('../controllers/login.controller');

// http://localhost:3000/api/login

// El usuario introduce sus datos y se envían a la base de datos
router.put('/', loginController.loginUser);

// El administrador puede ver toda la información de un cliente (se elige por email) o todos ¡Ruta protegida, dentro del dashboard de admin!
router.get('/:email?', loginController.getUsers);

// El administrador puede eliminar un usuario de la tabla login ¡Ruta protegida, dentro del dashboard de admin!
router.delete('/:email', loginController.deleteUser);

module.exports = router;



