const express = require('express');
const router = express.Router();
const { requireAuth, requireAdmin } = require('../controller/authController');

// Route protégée admin
router.get('/dashboard', requireAuth, requireAdmin, (req, res) => {
res.json({ message: 'Admin Dashboard',user: req.user });
});

module.exports = router;