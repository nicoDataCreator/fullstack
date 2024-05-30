const express = require("express");

const adminRoutes = express.Router();

adminRoutes.use(async (req, res, next) => {
    if (req.token.role === "admin") {
        console.log("ADMIN USER");
        next();
    }else{
        res.status(401);
    }
    
});

module.exports = adminRoutes;