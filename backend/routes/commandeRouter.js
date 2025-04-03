var express = require('express');
var router = express.Router();
const commandeController = require('../controller/commandeController');

router.get('/getAllCommande', commandeController.getAllCommande); 
router.get('/getCommandeById /:id', commandeController.getCommandeById); 
router.post('/addCommande', commandeController.addCommande);
router.delete('/deleteCommande/:id', commandeController.deleteCommande); 
router.put('/updateCommande/:id', commandeController.updateCommande);
router.get('/triCommande ', commandeController.triCommande); 


module.exports = router;