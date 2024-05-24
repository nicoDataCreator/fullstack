/* const contact = require('../models/contact.model'); */

// Create a new contact
const createContact = async (req, res) => {
    const newContact = req.body;

    res.status(200).send(newContact);


/*     try {
        const response = await contact.createContact(newContact);
        res.status(201).json({
            "contact_created": response,
            data: newContact
        });
    } catch (error) {
        console.error('Error creating contact:', error);
        res.status(500).json({
            error: 'Error creating contact',
            details: error.message
        });
    } */
}

// Read contact
const getContact = async (req, res) => {
    res.status(200).send("Hola, estás en el get del formulario de contacto!");
}

// Update contact
const updateContact = async (req, res) => {
    res.status(200).send("Hola, estás en el put del formulario de contacto!");
}

// Delete contact
const deleteContact = async (req, res) => {
    res.status(200).send("Hola, estás en el delete del formulario de contacto!");
}

module.exports = {
    createContact,
    getContact,
    updateContact,
    deleteContact
};  