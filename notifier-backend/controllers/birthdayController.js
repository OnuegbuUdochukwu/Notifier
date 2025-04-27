const Birthday = require('../models/birthdayModel')

module.exports.getAllBdays = async(req, res)=>{
    try{
        const birthdayAll = await Birthday.find().sort({birthday: 1})
        if(!birthdayAll) res.status(400).json({message: "no birthdays found"})
        
        res.json({
            count: birthdayAll.length,
            birthdayAll
        })
    }catch(err){
        res.status(500).json({message: err.message})
    }
   
}

module.exports.addBirthday = async(req, res)=>{
    const {firstName, lastName, birthday} = req.body
    try {
        const newBirthday = new Birthday({firstName, lastName, birthday})
        await newBirthday.save()
        res.status(201).json(newBirthday)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
}

module.exports.updateBirthday = async (req, res)=>{
    const {firstName, lastName, birthday} = req.body
    try{
        const birthdayEntry = await Birthday.findOne({
            _id : req.params.id,
            // user: req.user._id
        })
        if(!birthdayEntry) res.status(404).json({message: 'birthday not found'})
        
        if (firstName) birthdayEntry.firstName = firstName;
        if (lastName) birthdayEntry.lastName = lastName;
        if(birthday)birthdayEntry.birthday = birthday;

        const updated = await birthdayEntry.save();
        res.json({
        message: 'Birthday updated successfully',
        birthday: updated
        })
    }catch(err){
        res.status(500).json({message: err.message})
    }
}

module.exports.getCountdown = async (req,res)=>{
    try{
        const { id } = req.params
        const user = await Birthday.findById(id)

        if(!user) res.status(404).json({message: "couldn't find that person"})
        
        const now = new Date
        const nextBirthday = new Date(user.birthday)
        nextBirthday.setFullYear(now.getFullYear())

        if(nextBirthday < now){
            nextBirthday.setFullYear(now.getFullYear() + 1);
        }

        const timeDiff = nextBirthday - now
        const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

        res.json({
            firstName : user.fistName,
            lastName: user.lastName,
            birthday : user.birthday.toDateString(),
            daysTillBirthday: daysLeft
        })
    }catch(err){
        res.status(500).json({message: err.message})
    }
}


module.exports.deleteBirthday  = async(req, res)=>{
    try{
        const birthday = await Birthday.findOne({
            _id: req.params.id,
            // user: req.user._id
        })

        if(!birthday){
            return res.status(404).json({message: "couldn't find birthday"})
        }
        await birthday.deleteOne()
        res.json({message: 'birthday deleted'})
    }catch(err){
        res.status(500).json({message: err.message})
    }
}

// module.exports.searchBirthday = async (req, res)=>{
//     const {name} = req.query
//     if (!name){
//         return res.status(400).json({message: 'enter a name to search'})
//     }

//     try{
//         const results = await Birthday.find({
//             user: req.user._id,
//             name: {$regex: name, $options: 'i'}
//         });

//         res.json(results)
//     }catch(err){
//         res.status(500).json({message: err.message})
//     }
// }
