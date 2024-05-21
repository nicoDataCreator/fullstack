const user = require('../models/user.model');

// Create a new user
const createUser = async (req, res) => {
    const newUser = req.body; // {first_name, last_name, username, email, password, login_status}
    const response = await user.createUser(newUser);
    res.status(201).json({
        "user_created": response,
        data: newUser
    });
}


module.exports = {
    createUser,
};  