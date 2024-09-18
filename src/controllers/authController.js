const bcrypt = require('bcryptjs');
const User = require('../models/User');
const jwt = require('jsonwebtoken');

exports.registerUser = async (req, res) => {
    const { email, password } = req.body;

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    try {
        const newUser = await User.create(email, hashedPassword);
        req.session.user = { email: newUser.email };
        res.redirect('/home');
    } catch (error) {
        res.redirect('/register?error=' + encodeURIComponent(error.message));
    }
};

exports.loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findByEmail(email);

        if (!user) {
            return res.redirect('/login?error=' + encodeURIComponent('Invalid email or password'));
        }

        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.redirect('/login?error=' + encodeURIComponent('Invalid email or password'));
        }

        req.session.user = { email: user.email };
        res.redirect('/home');
    } catch (error) {
        res.redirect('/login?error=' + encodeURIComponent(error.message));
    }
};
