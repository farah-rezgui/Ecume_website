var express = require('express');
var router = express.Router();
const usercontroller = require('../controller/usersController');
/* GET users listing. */
router.get('/message', usercontroller.message); 


module.exports = router;
