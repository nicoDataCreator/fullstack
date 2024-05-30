
/**
 * @author Adrián Terciado, Gema Millán, Pablo Rubio, Verónica Parra 
 * @exports client.controller
 */
/**
 * Este archivo conmodeltiene funciones para interactuar con la base de datos relacionadas con la tabla de usuarios.
 * @memberof controllers
 */
const user = require('../models/client.model');

/**
 * Crea un nuevo cliente.
 * @param {Request} req - Objeto de solicitud de Express.
 * @param {Response} res - Objeto de respuesta de Express.
 * @returns {void}
 */
const createClient = async (req, res) => {
    const client = req.body;
    try {
        // Llama a la función para crear un nuevo cliente en el modelo y espera su resultado
        const result = await user.createClient(client);
        // Envía una respuesta de éxito junto con un mensaje y el resultado
        res.status(201).json({ message: 'Cliente creado con éxito', result });
    } catch (error) {
        // Si ocurre un error, envía una respuesta de error
        res.status(500).json({ error: 'Error al crear el cliente' });
    }
};

/**
 * Obtiene un cliente por correo electrónico.
 * @param {Request} req - Objeto de solicitud de Express.
 * @param {Response} res - Objeto de respuesta de Express.
 * @returns {void}
 */
const getClient = async (req, res) => {
    const email = req.params.email; 
    try {
        // Llama a la función para obtener un cliente por correo electrónico en el modelo y espera su resultado
        const response = await user.getClient(email);
        if (!response) {
            return res.status(404).json({ message: 'Cliente no encontrado' });
        }
        // Envía una respuesta de éxito con los datos del cliente
        res.status(200).json(response);
    } catch (error) {
        console.error('Error al obtener el cliente:', error);
        res.status(500).json({ message: 'Error al obtener el cliente' });
    }
};

/**
 * Obtiene todos los clientes.
 * @param {Request} req - Objeto de solicitud de Express.
 * @param {Response} res - Objeto de respuesta de Express.
 * @returns {void}
 */
const getAllClients = async (req, res) => {
    try {
        // Llama a la función para obtener todos los clientes en el modelo y espera su resultado
        const response = await user.getAllClients();
        // Envía una respuesta de éxito con todos los clientes
        res.status(200).json(response);
    } catch (error) {
        console.error('Error al obtener todos los clientes:', error);
        res.status(500).json({ message: 'Error al obtener todos los clientes' });
    }
};

/**
 * Actualiza un cliente.
 * @param {Request} req - Objeto de solicitud de Express.
 * @param {Response} res - Objeto de respuesta de Express.
 * @returns {void}
 */
const updateClient = async (req, res) => {
    // Pendiente - aún no implementado
}; 

/**
 * Elimina un cliente por correo electrónico.
 * @param {Request} req - Objeto de solicitud de Express.
 * @param {Response} res - Objeto de respuesta de Express.
 * @returns {void}
 */
const deleteClient = async (req, res) => {
    const clientEmail = req.params.email;
    try {
        // Llama a la función para eliminar un cliente por correo electrónico en el modelo y espera su resultado
        const result = await user.deleteClient(clientEmail);
        
        if (result) {
            // Envía una respuesta de éxito si el cliente fue eliminado con éxito
            res.status(200).json({ message: 'Cliente eliminado con éxito' });
        } else {
            // Envía una respuesta de error si el cliente no fue encontrado
            res.status(404).json({ message: 'Cliente no encontrado' });
        }
    } catch (error) {
        console.error('Error al eliminar el cliente:', error);
        res.status(500).json({ message: 'Error al eliminar el cliente' });
    }
};

module.exports = {
    createClient,
    getClient,
    getAllClients,
    updateClient,
    deleteClient,
};  
