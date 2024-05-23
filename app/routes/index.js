const express = require('express');
const { messageRoute } = require('./reservation.routes');

const router = express.Router();

const setCorsHeaders = (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Allow all origins
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); // Allow specific methods
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); // Allow specific headers
    
    // Handle preflight requests
    if (req.method === 'OPTIONS') {
        res.sendStatus(204); // No Content
    } else {
        next();
    }
};

router.use(setCorsHeaders); // Apply CORS headers to all routes

router.get('/', (req, res) => {
    res.json('This is a simple todolist API');
});

router.use('/reservation', messageRoute);

module.exports = {
    allRouter: router,
};
