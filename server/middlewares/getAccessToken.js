const express = require("express");
const getAccessToken = express.Router();


getAccessToken.use(async (req, res, next) => {
    const { cookie, authorization } = req.headers;

    //Check authorization header
    if (authorization.includes(`Bearer`)) {
        const token = authorization.split(' ')[1];
        if (token) {
            req.token = token;
            next();
        } else {
            res.sendStatus(403)
        }

    //Check cookies
    } else if (cookie.includes(`access_token=`)) {
        const cookies = cookie.split(',');
        const accessToken = cookies[0];
        const token = accessToken.split('=')[1];
        if (token) {
            req.token = token;
            next();
        } else {
            res.sendStatus(403)
        }
    } else {
        console.log();
        res.sendStatus(403)
    };
});


module.exports = getAccessToken;
