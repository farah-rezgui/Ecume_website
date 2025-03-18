var express = require('express');
var router = express.Router();
const authController = require('../controller/authController');
/* GET users listing. */
router.get('/getAllUsers', authController.getAllUsers); 
router.post('/addUserClient', authController.addUserClient); 


module.exports = router;
