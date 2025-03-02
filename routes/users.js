var express = require('express');
var router = express.Router();
const userscontroller = require('../controller/usersController');
/* GET users listing. */
router.get('/message', userscontroller.message); 


module.exports = router;
