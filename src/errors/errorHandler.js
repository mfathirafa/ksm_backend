module.exports = function errorHandler(err, req, res, next) {
    console.log('ERROR:', err.message);
    console.log(err.stack);
    
    res.status(err.status || 500).json({
        error: err.message
    });
}