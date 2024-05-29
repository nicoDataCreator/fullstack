const user = require('../models/client.model');

// Create a new client 
const createClient = async (req, res) => {
    console.log("req.body");
    const client = req.body;
    try {
        const result = await user.createClient(client);
        res.status(201).json({ message: 'Cliente creado con éxito', result });
    } catch (error) {
        res.status(500).json({ error: 'Error al crear cliente' });
    }
};

// Get client by email
const getClient = async (req, res) => {
    const email = req.params.email; 
    try {
        const response = await user.getClient(email);
        if (!response) {
            return res.status(404).json({ message: 'Cliente no encontrado' });
        }
        res.status(200).json(response);
    } catch (error) {
        console.error('Error al obtener el cliente:', error);
        res.status(500).json({ message: 'Error al obtener el cliente' });
    }
};

// Get all clients
const getAllClients = async (req, res) => {
    try {
        const response = await user.getAllClients();
        res.status(200).json(response);
    } catch (error) {
        console.error('Error al obtener todos los clientes:', error);
        res.status(500).json({ message: 'Error al obtener todos los clientes' });
    }
};


const updateClient = async (req, res) => { }; // pending- not implemented yet

// Delete client by email
const deleteClient = async (req, res) => {
    const clientEmail = req.params.email;
    try {
        const result = await user.deleteClient(clientEmail);
        
        if (result) {
            res.status(200).json({ message: 'Cliente eliminado con éxito' });
        } else {
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