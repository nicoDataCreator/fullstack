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
        res.status(500).json({"error": error.message});
    }
};

// Read contact
const getSubscribers = async (req, res) => {
    let subscribers = "";
    if (req.body) {
        subscribers = await subscriberModel.getSubscriberByEmail(req.body);
    } else {
        subscribers = await subscriberModel.getAllSubscribers();
    }
    res.status(200).json(subscribers);
}

// Delete contact
const deleteSubscriber = async (req, res) => {
    if (req.params.email) {
        await subscriberModel.deleteSubscriberByEmail(req.params.email);
        res.status(200).json({
            "author_deleted": `${req.params.email}`
        });
    } else {
        res.status(400), json({
            "error": "No email, no delete"
        });
    }
}

module.exports = {
    createSubscriber,
    getSubscribers,
    deleteSubscriber
}; 