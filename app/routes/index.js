const express = require('express');
const { messageRoute } = require('./reservation.routes');

const router = express.Router();

router.get('/', (req, res) => {
    res.json('This is a simple todolist API');
});

router.use('/reservation', messageRoute);

module.exports = {
    allRouter: router,
};
