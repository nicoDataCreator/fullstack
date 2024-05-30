
/**
 * @author Adrián Terciado, Gema Millán, Pablo Rubio, Verónica Parra 
 * @exports newsletter.controller
 */
/**
 * Este archivo conmodeltiene funciones para interactuar con la base de datos relacionadas con la tabla de usuarios.
 * @memberof controllers
 */

const subscriber = require('../models/newsletter.model');
const regex = require('../utils/regex');

/**
 * Crea un nuevo suscriptor para la newsletter.
 * @param {Request} req - Objeto de solicitud de Express.
 * @param {Response} res - Objeto de respuesta de Express.
 * @returns {void}
 */
const createSubscriber = async(req, res) => {
    let data;
    try {
        // Validar el formato del correo electrónico antes de crear el suscriptor
        if(regex.validateEmail(req.body.email)){
            data = await subscriber.createSubscriber(req.body.email);
            res.status(201).json(data);
        } else {
            res.status(400).json({msg: 'Correo electrónico inválido'});
        }  
    } catch (error) {
        res.status(500).json({"error": error});
    }
};

/**
 * Obtiene todos los suscriptores de la newsletter o un suscriptor por su correo electrónico.
 * @param {Request} req - Objeto de solicitud de Express.
 * @param {Response} res - Objeto de respuesta de Express.
 * @returns {void}
 */
const getSubscribers = async (req, res) => {
    let subscribers = "";
    if (req.params.email) {
        // Si se proporciona un correo electrónico, obtén un suscriptor por correo electrónico
        subscribers = await subscriber.getSubscriberByEmail(req.params.email);
    } else {
        // De lo contrario, obtén todos los suscriptores
        subscribers = await subscriber.getAllSubscribers();
    }
    res.status(200).json(subscribers);
}

/**
 * Elimina un suscriptor de la newsletter por su correo electrónico.
 * @param {Request} req - Objeto de solicitud de Express.
 * @param {Response} res - Objeto de respuesta de Express.
 * @returns {void}
 */
const deleteSubscriber = async (req, res) => {
    if (req.params.email) {
        // Si se proporciona un correo electrónico, elimina el suscriptor correspondiente
        await subscriber.deleteSubscriberByEmail(req.params.email);
        res.status(200).json({
            "suscriptor_eliminado": `${req.params.email}`
        });
    } else {
        // Si no se proporciona un correo electrónico, devuelve un error
        res.status(400).json({
            "error": "Falta el correo electrónico para eliminar"
        });
    }
}

module.exports = {
    createSubscriber,
    getSubscribers,
    deleteSubscriber
}; 
