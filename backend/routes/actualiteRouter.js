var express = require("express");
var router = express.Router();
const actualiteController = require("../controller/actualiteController");

router.get("/getAllActualites", actualiteController.getAllActualites);
router.get("/getActualiteById/:id", actualiteController.getActualiteById);
router.get("/getActualiteHome", actualiteController.getActualiteHome);

module.exports = router;
