const jwt = require('jsonwebtoken');
const jwtConfig = require('../config/jwt');

module.exports = function auth(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        const err = new Error('Unauthorized');
        err.status = 401;
        throw err;
    }

    const token = authHeader.split(' ')[1];
    try {
        const payload = jwt.verify(token, jwtConfig.secret);
        req.user = {
            id: payload.id,
            role: payload.role
        };
        next();
    } catch (e) {
        const err = new Error('Invalid token');
        err.status = 401;
        throw err;
    }
};