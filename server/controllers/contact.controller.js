
/**
 * @author Adrián Terciado, Gema Millán, Pablo Rubio, Verónica Parra 
 * @exports client.controller
 */
/**
 * Este archivo conmodeltiene funciones para interactuar con la base de datos relacionadas con la tabla de usuarios.
 * @memberof controllers
 */

const contact = require('../models/contact.model');

/**
 * Crea un nuevo contacto.
 * @param {Request} req - Objeto de solicitud de Express.
 * @param {Response} res - Objeto de respuesta de Express.
 * @returns {void}
 */
const createContact = async (req, res) => {
    const newContact = req.body;

    try {
        // Llama a la función para crear un nuevo contacto en el modelo y espera su resultado
        const result = await contact.createContact(newContact);
        // Envía una respuesta de éxito junto con un mensaje y el resultado
        res.status(201).json({ message: 'Contacto creado con éxito', result });
    } catch (error) {
        // Si ocurre un error, envía una respuesta de error
        res.status(500).json({ error: 'Error al crear el contacto' });
    }
}

/**
 * Obtiene información sobre los contactos.
 * @param {Request} req - Objeto de solicitud de Express.
 * @param {Response} res - Objeto de respuesta de Express.
 * @returns {void}
 */
const getContacts = async (req, res) => {
    // Implementa la lógica para obtener información sobre los contactos
    res.status(200).send("Hola, estás en el get del formulario de contacto!");
}

/**
 * Elimina un contacto.
 * @param {Request} req - Objeto de solicitud de Express.
 * @param {Response} res - Objeto de respuesta de Express.
 * @returns {void}
 */
const deleteContact = async (req, res) => {
    // Implementa la lógica para eliminar un contacto
    res.status(200).send("Hola, estás en el delete del formulario de contacto!");
}

module.exports = {
    createContact,
    getContacts,
    deleteContact
};
