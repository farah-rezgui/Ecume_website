var express = require('express');
var router = express.Router();
const produitController = require('../controller/produitController');
/* GET users listing. */
router.get('/getAllProduit', produitController.getAllProduit); 
router.get('/getProduitById/:id', produitController.getProduitById);
router.get('/triProduit', produitController.triProduit); 
router.post('/addProduit', produitController.addProduit);
router.put('/updateProduit/:id', produitController.updateProduit);
router.delete('/deleteProduit/:id', produitController.deleteProduit);  


module.exports = router;