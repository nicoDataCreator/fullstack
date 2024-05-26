const signup = require('../models/signup.model');

const createUser = async (req, res) => {
    const newUser = req.body;
    try {
        const response = await signup(newUser);
        res.status(201).json({
            "user_created": response,
            data: newUser
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateUser = async (req, res) => { }

module.exports = {
    createUser,
    updateUser
}; 