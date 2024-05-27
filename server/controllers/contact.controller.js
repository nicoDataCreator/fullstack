/* const contact = require('../models/contact.model'); */

// Create a new contact
const createContact = async (req, res) => {
    const client = req.body;
    try {
        const response = await user.createClient(client);
        res.status(201).json({
            "client_created": response,
            data: client
        });
    } catch (error) {
        res.status(400).json({"error":error});
    }
};

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