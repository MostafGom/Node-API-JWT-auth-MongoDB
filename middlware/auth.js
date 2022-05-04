// this is replaced by another function in config folder
// in jwt_methods

/*
const jwt = require('jsonwebtoken');

const checkAuth = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]
    if (!token) return res.status(401).json({ error: 'Access Denied' });
    
    try {
        const verify = jwt.verify(token, process.env.SECRET_TOKEN);
        req.userId = verify;
        next();
    } catch (error) {
        return res.status(403).json({ error: 'Invalid Token' });
    }
}
*/

const User = require('../models/User');
const createError = require('http-errors');

const checkAdmin = async (req, res, next) => {
    try {
        const user = await User.findById(req.payload.aud);
        if (user.role !== 'admin') {
            throw createError.Unauthorized('Unauthorized')
        }
        next()
    } catch (error) {
        next(error)
    }
}

module.exports = {
    checkAdmin
}