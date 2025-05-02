const express = require('express')
const app = express()
const connectDB = require('./config/db')
const cookieParser = require('cookie-parser')
const authRoutes = require('./routes/authRoutes')
const birthdayRoutes  = require('./routes/birthdayRoutes')
const userRoutes = require('./routes/userRoutes');

connectDB()

app.use(express.json())
app.use(cookieParser())

app.use('/api/birthday', birthdayRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/user', userRoutes);

module.exports = app