const express = require('express');
const router = express.Router();
const reservationsController = require('../controllers/reservations.controller');

// READ - Dapatkan semua perangkat
router.get('/messages', reservationsController.getAllMessages);

// READ - Dapatkan perangkat berdasarkan ID
// router.get('/devices/:deviceId', reservationsController.getDeviceById);
router.post('/messages/post', reservationsController.createReservation);

// UPDATE - Perbarui perangkat berdasarkan ID
// router.put('/devices/:deviceId', deviceController.updateDeviceById);

// DELETE - Hapus perangkat berdasarkan ID
// router.delete('/devices/:deviceId', deviceController.deleteDeviceById);


module.exports = {
    messageRoute: router,
  };