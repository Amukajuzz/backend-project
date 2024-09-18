const express = require('express');
const path = require('path');
const { registerUser, loginUser } = require('../controllers/authController');
const router = express.Router();

router.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/register.html'));
});

router.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/login.html'));
});


router.post('/register', registerUser);

router.post('/login', loginUser);

router.get('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.status(500).json({ error: 'Failed to log out' });
        }
        res.redirect('/login');
    });
});

module.exports = router;
