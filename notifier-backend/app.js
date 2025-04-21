const express = require('express')
const app = express()
const connectDB = require('./config/db')
const birthdayRoutes  = require('./routes/birthdayRoutes')

connectDB()

app.use(express.json())

app.use('/api/birthday', birthdayRoutes)


module.exports = app