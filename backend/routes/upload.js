const express = require('express');
const router = express.Router();
const Produit = require('../models/produitShema');
const upload = require('../middlewares/upload'); // le middleware multer

// Route pour ajouter un produit avec une image
router.post('/add');

module.exports = router;
