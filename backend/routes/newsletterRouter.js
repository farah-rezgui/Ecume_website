var express = require("express");
var router = express.Router();
const newsletterController = require("../controller/newsletterController");

router.post("/addToNewsletter", newsletterController.addToNewsletter);
router.get("/getNewsletter", newsletterController.getNewsletter);


module.exports = router;
