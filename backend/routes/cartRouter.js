var express = require("express");
var router = express.Router();
const cartController = require("../controller/cartController");

router.get("/initCart", cartController.initCart);
router.put("/addToCart", cartController.addToCart);
router.put("/deleteFromCart", cartController.deleteFromCart);
router.post("/getCart", cartController.getCart);

module.exports = router;
