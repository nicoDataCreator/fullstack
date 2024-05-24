const router = require("express").Router();
const contactController = require('../controllers/contact.controller');

// http://localhost:3000/api/contactForm
router.get('/', contactController.getContact);
router.post('/', contactController.createContact);
router.put('/', contactController.updateContact);
router.delete('/:id', contactController.deleteContact);

module.exports = router;