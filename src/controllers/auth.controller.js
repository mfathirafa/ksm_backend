const jwt = require('jsonwebtoken');
const jwtConfig = require('../config/jwt');
const { register, login } = require('../services/auth.service');

exports.register = async (req, res) => {
    const { email, password } = req.body;

    const user = await register(email, password);

    res.status(201).json({
        message: 'User created',
        user
    });
};

exports.login = async (req, res) => {
    const { email, password } = req.body;

    const user = await login(email, password);

    const payload = {
        id: user.id,
        role: user.role
    };

    const token = jwt.sign(payload, jwtConfig.secret, {
        expiresIn: jwtConfig.expiresIn
    });

    res.json({
        token
    });
};