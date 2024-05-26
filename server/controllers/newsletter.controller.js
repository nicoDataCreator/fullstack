const subscriber = require('../models/newsletter.model');
const regex = require('../utils/regex')

// Create a new subscriber
const createSubscriber = async(req, res) => {
    let data;
    try {
        if(regex.validateEmail(req.body.email)){

            data = await subscriber.createSubscriber(req.body.email);
            res.status(201).json(data);
        }else{
            res.status(400).json({msg: 'Invalid email'});
        }  
    } catch (error) {
        res.status(400).json({"error":error});
    }
};

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