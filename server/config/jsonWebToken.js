const jwt = require('jsonwebtoken')

const SECRET = process.env.MY_TOKEN_SECRET

const createToken = (payload, expirationTime = "10min") => {

    return jwt.sign(payload, SECRET, {
        expiresIn: expirationTime
    });

};

const decodeToken = (token) => JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());

module.exports = { createToken, decodeToken };