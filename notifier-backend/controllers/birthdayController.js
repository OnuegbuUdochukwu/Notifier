const Birthday = require('../models/birthdayModel')

module.exports.addBirthday = async(req, res)=>{
    const {name, birthday} = Birthday
    try {
        const newBirthday = new Birthday({name, birthday})
        await newBirthday.save()
        res.status(201).json(newBirthday)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
}

module.exports.deleteBirthday  = async(req, res)=>{
    try{
        const birthday = await Birthday.findOne({
            _id: req.params.id,
            user: req.user._id
        })

        if(!birthday){
            return res.status(404).json({message: "couldn't find birthday"})
        }
        await birthday.remove()
        res.json({message: 'birthday deleted'})
    }catch(err){
        res.status(500).json({message: err.message})
    }
}

module.exports.searchBirthday = async (req, res)=>{
    const {name} = req.query
    if (!name){
        return res.status(400).json({message: 'enter a name to search'})
    }

    try{
        const results = await Birthday.find({
            user: req.user._id,
            name: {$regex: name, $options: 'i'}
        });

        res.json(results)
    }catch(err){
        res.status(500).json({message: err.message})
    }
}
