const express = require("express");
const SECRET = process.env.MY_TOKEN_SECRET
const jwt = require('jsonwebtoken');

const decodeToken = express.Router();

decodeToken.use(async (req, res, next) => {
    console.log("Encoded Token", req.token);
    if (req.token) {
        jwt.verify(req.token, SECRET, (err, decoded) => {
            if (err) {
                return res.status(400).json({
                    msg: 'Token error',
                    error: err.message
                });
            } else {
                console.log("decoded", decoded);
                req.token = decoded;
                next();
            }
        });
    } else {
        res.status(401).json({
            msg: 'Token not provided.'
        });
    }
});

module.exports = decodeToken;