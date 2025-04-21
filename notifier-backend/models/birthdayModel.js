const mongoose = require('mongoose')

const birthdaySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "please provide a name"]
    },
    birthday:{
        type: Date,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
})

module.exports = mongoose.model('birthday', birthdaySchema)