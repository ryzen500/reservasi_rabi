const mongoose = require('mongoose');
const reservationSchema = new mongoose.Schema({
    nama_pengirim: String,
    ucapan: String,
    konfirmasi: String,
    is_datang: Boolean,
  });

const reservation = mongoose.model("reservation", reservationSchema)

module.exports = reservation;