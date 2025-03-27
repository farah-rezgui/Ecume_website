var express = require('express');
var router = express.Router();
const authController = require('../controller/authController');
/* GET users listing. */
router.get('/getAllUsers', authController.getAllUsers); 
router.get('/getUserById/:id', authController.getUserById); 
router.post('/addUserAdmin', authController.addUserAdmin);
router.put('/updateUser/:id', authController.updateUser);
router.delete('/deleteUser/:id', authController.deleteUser);  


module.exports = router;