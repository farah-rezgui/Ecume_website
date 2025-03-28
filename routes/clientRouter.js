var express = require('express');
var router = express.Router();
const clientController = require('../controller/clientController');

router.get('/getAllClient', clientController.getAllClient); 
router.get('/getClenitById/:id', clientController.getClenitById); 
router.post('/addClient', clientController.addClient);
router.delete('/deleteClient/:id', clientController.deleteClient); 
router.put('/updateClient/:id', clientController.updateClient);
router.get('/triClient', clientController.triClient); 


module.exports = router;