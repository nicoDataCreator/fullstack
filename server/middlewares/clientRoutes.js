const express = require("express");

const userRoutes = express.Router();

userRoutes.use(async (req, res, next) => {
    if (req.token.role === "client") {
        console.log("CLIENT USER");
        next();
    } else {
        res.status(401);
    }

});

module.exports = userRoutes;








