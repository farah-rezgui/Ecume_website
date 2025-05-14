const mongoose = require("mongoose");

const reservationSchema = new mongoose.Schema(
  {
    hebergement: String,
    date: Date,
    nombrePersonnes: Number,
    trancheAge: String,
    niveauExperience: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Reservation", reservationSchema);
