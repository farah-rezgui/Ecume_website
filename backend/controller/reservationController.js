const Reservation = require("../models/reservationShema");

exports.getAllReservations = async (req, res) => {
  try {
    const reservations = await Reservation.find();
    res.status(200).json(reservations);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
exports.deleteReservation = async (req, res) => {
  try {
    const { id } = req.params;
    const checkIfReservationExists = await Reservation.findById(id);
        if (!checkIfReservationExists) {
        return res.status(404).json({ message: "Reservation not found" });
        }
    const deleted = await Reservation.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({ message: "Réservation non trouvée" });
    }
    res.status(200).json({ message: "Réservation supprimée avec succès" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


