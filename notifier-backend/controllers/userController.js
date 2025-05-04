module.exports.getUsername = async(req, res)=>{
    try{
        const user = req.user
        if(!user) res.status(400).json({message: 'user not found'})
        
        res.json({
            username: user.username || user.email
            });
    } 
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}

    
    