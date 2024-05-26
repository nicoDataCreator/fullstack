/* const contact = require('../models/contact.model'); */

// Create a new contact
const createContact = async (req, res) => {
    const newContact = req.body;
    res.status(200).send(newContact);
}

// Read contact
const getContacts = async (req, res) => {
    res.status(200).send("Hola, estás en el get del formulario de contacto!");
}

// Delete contact
const deleteContact = async (req, res) => {
    res.status(200).send("Hola, estás en el delete del formulario de contacto!");
}

module.exports = {
    createContact,
    getContacts,
    deleteContact
};  