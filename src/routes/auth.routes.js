const express = require('express');
const router = express.Router();
const asyncHandler = require('../middleware/asyncHandler');
const auth = require('../middleware/auth');
const requireRole = require('../middleware/requireRole');
const { register, login } = require('../controllers/auth.controller');

router.post('/register', asyncHandler(register));
router.post('/login', asyncHandler(login));

router.get('/profile', auth, (req, res) => {
    res.json({
        user: req.user
    });
});

router.get('/admin', auth, requireRole('admin'), (req, res) => {
    res.json({
        message: 'Admin area'
    });
});

module.exports = router;