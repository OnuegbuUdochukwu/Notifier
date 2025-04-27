const jwt = require('jsonwebtoken')
const User = require('../models/userModel')

const protect = async (req, res, next) => {
    const token = req.cookie.jwt
    if(!token) res.status(401).json({message: "Not authorized, no token"})
    res.redirect('/login')
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = User.findById(decoded.id).select('-password')
        next()
    }catch(err){
        res.status(401).json({message: "Not authorized, token failed"})
        res.redirect('/login')

    }
}
module.exports = protect;