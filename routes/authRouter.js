var express = require('express');
var router = express.Router();
const authController = require('../controller/authController');
/* GET users listing. */
router.get('/getAllUsers', authController.getAllUsers); 
router.get('/getUserById/:id', authController.getUserById); 
router.post('/addUserClient', authController.addUserClient);
router.post('/deleteUser/:id',);  


module.exports = router;