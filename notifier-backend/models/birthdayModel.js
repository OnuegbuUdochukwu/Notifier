const mongoose = require('mongoose')

const birthdaySchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "please provide a name"]
    },
    lastName: {
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
    },
    image:{
        type: String,
        default: null
    }
},{timestamps: true})

module.exports = mongoose.model('birthday', birthdaySchema)