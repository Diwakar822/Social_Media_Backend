const User = require('../models/userModel');

const register = (req, res) => {
    const { username, password } = req.body;
    User.create(username, password, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ message: 'User registered successfully' });
    });
};

const login = (req, res) => {
    const { username, password } = req.body;
    User.findByUsername(username, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        if (result.length === 0 || result[0].password !== password) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }
        res.status(200).json({ message: 'Login successful', user: result[0] });
    });
};

module.exports = { register, login };