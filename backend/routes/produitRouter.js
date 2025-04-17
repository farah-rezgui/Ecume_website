var express = require("express");
var router = express.Router();
const produitController = require("../controller/produitController");
const upload = require("../middlewares/upload");

/* GET products listing. */
router.get("/getAllProduit", produitController.getAllProduit);
router.get("/getProduitById/:id", produitController.getProduitById);
router.get("/triProduit", produitController.triProduit);
router.post("/addProduit",upload.array("image"),produitController.addProduit);
router.put("/updateProduit/:id",upload.array("newImages"),produitController.updateProduit);
router.delete("/deleteProduit/:id", produitController.deleteProduit);

module.exports = router;
