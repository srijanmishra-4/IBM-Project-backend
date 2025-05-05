const jwt = require('jsonwebtoken');
require('dotenv').config();

const secretKey = process.env.JWT_SECRET;


// function generateToken(name) {
//     return jwt.sign({ name }, secretKey, { algorithm: 'HS256' });

// }

function generateToken(name , email , userId) {
    return jwt.sign({ name , email ,userId}, secretKey, { algorithm: 'HS256', expiresIn: '1d' });
}

function verifyToken(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ message: "Access denied. No token provided." });
    }

    const token = authHeader.split(" ")[1]; 
    try {
        const decoded = jwt.verify(token, secretKey);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Invalid token.' });
    }


}


module.exports = { generateToken, verifyToken };
