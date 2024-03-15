import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';
import { JWT_SECRET } from '../constants.js';

export const authenticateToken = async (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // "Bearer TOKEN"

    if (token == null) {
        return res.status(401).json({ message: 'No token provided' });
    }

    try {
        
        const decoded = jwt.verify(token, JWT_SECRET );
        
        const user = await User.findById(decoded.userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        req.user = user;

        next(); 
    } catch (error) {
        return res.status(403).json({ message: 'Invalid or expired token' });
    }
};
