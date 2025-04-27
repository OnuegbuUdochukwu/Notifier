const express = require('express')
const router = express.Router()
const {signUp, login, logout} = require('../controllers/authController')

router.post('/login', login)
router.post('/signup', signUp)
router,get('/logout', logout)

module.exports = router;