const jwt = require('jsonwebtoken');

function generateToken(mongo_id) {
    return jwt.sign({}, process.env.ACCESS_JWT_SECRET, { expiresIn: '2s', audience: mongo_id.toString() }, );
}

function generateRefreshToken(mongo_id) {
    return jwt.sign({}, process.env.REFRESH_JWT_SECRET, { expiresIn: '1y', audience: mongo_id.toString(), }, );
}






module.exports = { generateToken, generateRefreshToken };