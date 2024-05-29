// RUTAS ADMIN & USER - TABLA NEWSLETTER

const router = require("express").Router();
const newsletterController = require('../controllers/newsletter.controller');

// http://localhost:3000/api/newsletter

// El usuario introduce sus email y se envía a la base de datos
router.post('/', newsletterController.createSubscriber);

// El administrador puede ver todos los usuarios que se han registrado en la newsletter desde su dashboard. ¡Ruta protegida!
router.get('/:id?', newsletterController.getSubscribers);

/* Al igual que en contact, no vamos a incluir un put porque no vamos a modificar los datos que el usuario nos da para suscribirse*/

// El administrador puede eliminar usuarios que se han registrado en la newsletter desde su dashboard. ¡Ruta protegida!
router.delete('/:email', newsletterController.deleteSubscriber);

module.exports = router;