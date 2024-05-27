const subscriberModel = require('../models/newsletter.model');

// Create a new contact
const createSubscriber = async (req, res) => {
    const newSubscriber = req.body;
    const response = await subscriberModel.createSubscriber(newSubscriber);
    res.status(200).json({
        "subscriber_created": response
    }, {
        message: "usuario creado"
    });
}

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