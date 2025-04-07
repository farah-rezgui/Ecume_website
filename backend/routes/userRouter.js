var express = require('express');
var router = express.Router();
const userController = require('../controller/userController');

router.get('/getAllUser', userController.getAllUser); 
router.get('/getUserById/:id', userController.getUserById); 
router.post('/addUser', userController.addUser);
router.delete('/deleteUser/:id', userController.deleteUser); 
router.put('/updateUser/:id', userController.updateUser);
router.get('/triUser', userController.triUser); 


module.exports = router;