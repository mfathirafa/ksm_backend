module.exports = function requireRole(role) {
    return function(req, res, next) {
        if (!req.user || req.user.role !== role) {
            const err = new Error('Forbidden');
            err.status = 403;
            throw err;
        }
        next();
    };
};