const contact = require('../models/contact.model');

// Create a new contact
const createContact = async (req, res) => {
    console.log("req.body");
    const newContact = req.body;
    

    try {
        const result = await contact.createContact(newContact);
        res.status(201).json({ message: 'Contacto creado con éxito', result });
    } catch (error) {
        console.log(req.body);
        res.status(500).json({ error: 'Error al crear el contacto' });
    }
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