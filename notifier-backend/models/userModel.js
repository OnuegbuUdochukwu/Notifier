const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const {isEmail} = require('validator')

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required : true
    },
    email:{
        type: String,
        required: [true, 'your email is required'],
        lowercase: true,
        unique: true,
        validate: [isEmail, 'please enter a valid email']
    },
    password:{
        type: String,
        required : [true, 'please enter a password'],
        minlength: [8, 'password must be more than 8 characters long']
    }
},{timestamps: true})


userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) {
      return next(); // If password not modified (e.g., update profile), skip hashing
    }
  
    const salt = await bcrypt.genSalt(10); // 10 is a good safe number
    this.password = await bcrypt.hash(this.password, salt);
    next();
  })

userSchema.statics.login = async function(email, password){
    const user = await this.findOne({email})
    if(user){
        const auth = await bcrypt.compare(password, user.password)
        if(auth){
            return user
        }else{
            throw new Error("incorrect password");       
        }
    }
    throw new Error("incorrect email");
    
}

module.exports = mongoose.model('User', userSchema);