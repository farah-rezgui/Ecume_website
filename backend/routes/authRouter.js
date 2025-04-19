const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const authController = require('../controller/authController');

router.post('/signup', [
  check('email').isEmail().normalizeEmail(),
  check('password').isLength({ min: 6 }),
  check('username').not().isEmpty()
], authController.signup);

router.post('/signin', [
  check('email').isEmail().normalizeEmail(),
  check('password').exists()
], authController.signin);

module.exports = router;