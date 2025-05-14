const express = require("express");
const router = express.Router();
const reservationController = require("../controller/reservationController");

router.get("/all", reservationController.getAllReservations);
router.delete("/delete/:id", reservationController.deleteReservation);

module.exports = router;
