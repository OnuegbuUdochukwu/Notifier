const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const createToken = (res, userId) => {
    const token = jwt.sign({ id: userId }, process.env.JWT_SECRET, {
        expiresIn: '7d',
    });

    res.cookie('jwt', token, {
        maxAge: 7 * 24 * 60 * 60 * 1000, 
        httpOnly: true,
    });
};

const handleErrors = (err) => {
    console.log(err.message, err.code);
    const errors = { email: '', password: '' };

    if (err.code === 11000) errors.email = 'That email already exists';

    if (err.message === 'incorrect email') errors.email = 'That email doesn\'t exist';
    if (err.message === 'incorrect password') errors.password = 'That password is incorrect';

    return errors;
};

module.exports.signUp = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: "That user already exists" });
        }

        const user = await User.create({ username, email, password });
        createToken(res, user._id);

        res.status(201).json({ message: "User successfully created", user: { username, email } });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.login(email, password);
        createToken(res, user._id);
        res.status(201).json({ message: "User login successful", user: { id: user._id, name: user.username, email } });
    } catch (err) {
        const errors = handleErrors(err);
        res.status(400).json({ errors });
    }
};

module.exports.logout = async (req, res) => {
    res.cookie('jwt', '', { httpOnly: true, expires: new Date(0) });
    res.json({ message: 'Logged out successfully' });
};
