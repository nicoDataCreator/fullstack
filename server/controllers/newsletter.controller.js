/* const subscriber = require('../models/newsletter.model'); */

// Create a new contact
const createSubscriber = async (req, res) => {
    const newSubscriber = req.body;
    res.status(200).send(newSubscriber);
}

// Read contact
const getSubscribers = async (req, res) => {
    res.status(200).send("Hola, estás en el get del formulario de newsletter!");
}

// Delete contact
const deleteSubscriber = async (req, res) => {
    res.status(200).send("Hola, estás en el delete del formulario de newsletter!");
}

module.exports = {
    createSubscriber,
    getSubscribers,
    deleteSubscriber
}; 