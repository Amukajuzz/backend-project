const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/', (req, res) => {
    res.redirect('/home');
});

router.get('/home', (req, res) => {
    if (req.session && req.session.user) {
        res.render('index', { email: req.session.user.email });
    } else {
        res.render('index', { email: null });
    }
});

module.exports = router;
