// RUTAS ADMIN & USER - TABLA CONTACTO

const router = require("express").Router();
const contactController = require('../controllers/contact.controller');

// http://localhost:3000/api/contact

// El usuario introduce sus datos y se envían a la base de datos.
router.post('/', contactController.createContact);

// El administrador puede ver todos los usuarios que se han registrado. ¡Ruta protegida!
router.get('/:id?', contactController.getContacts);

/* Al igual que en newsletter, no vamos a incluir un put porque no vamos a modificar los datos que el usuario nos da para pedir información*/

// El administrador puede eliminar usuarios que se han registrado ¡Ruta protegida!
router.delete('/:id', contactController.deleteContact);

module.exports = router;