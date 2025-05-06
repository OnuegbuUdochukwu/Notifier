const Birthday = require('../models/birthdayModel')

module.exports.getAllBdays = async(req, res)=>{
    try{
        const birthdayAll = await Birthday.find({user: req.user._id}).sort({birthday: 1})
        if(!birthdayAll) res.status(400).json({message: "no birthdays found"})
        
        res.json({
            count: birthdayAll.length,
            birthdayAll
        })
    }catch(err){
        res.status(500).json({message: err.message})
    }   
}

// module.exports.filterBdays = async (req, res)=>{
//         try{
//             const userId = req.user.id
//             const {name, dateAdded, month} = req.query
            
//             //by name first or lastname
//             let filter = {user: userId}
//             if(name) {
//                 filter.$or = [
                    
//                     {firstName: {$regex: name, $options: "i"}},
//                     {lastName: {$regex: name, $options: "i"}}
//                 ];
//             }

//             //by date added
    
//             if (dateAdded){
//                 const date = new Date(dateAdded);
//                 const nextday = new Date(date)
//                 nextday.setDate(nextday.getDate() + 1)
    
//                 filter.createdAt = {
//                     $gte: date, 
//                     $lt: nextday
//                 }
//             }
            
//             // by month
//             if(month){
//                 const monthNum = parseInt(month)
//                 if(!isNaN(monthNum) && monthNum >= 1 && monthNum <= 12){
//                     filter.$expr = {
//                         $eq: [{$month: '$birthday'}, monthNum]
//                     }
//                 }
//             }
    
//             const birthdays = await Birthday.find(filter).sort({birthday: 1})
//             res.status(200).json({ success: true, data: birthdays });

//         } catch (error) {
//           res.status(500).json({ success: false, message: 'Server Error', error: error.message });
//         }
// };


module.exports.addBirthday = async(req, res)=>{
    const {firstName, lastName, birthday} = req.body
    try {
        const newBirthday = new Birthday({
            firstName, 
            lastName, 
            birthday,
            user: req.user._id,
            image: req.file ? req.file.path : null
        })
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
            user: req.user._id
        })
        if(!birthdayEntry) res.status(404).json({message: 'birthday not found'})
        
        if (firstName) birthdayEntry.firstName = firstName;
        if (lastName) birthdayEntry.lastName = lastName;
        if(birthday)birthdayEntry.birthday = birthday;
        if(req.file) birthday.image = req.file.path

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
        const user = await Birthday.findOne({
            _id : id,
            user: req.user._id
        })

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
            user: req.user._id
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
