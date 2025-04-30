const express = require('express')

const protect = require('../middleware/authMiddleware')
const {getUsername} = require('../controllers/userController')

const router = express.Router()

router.get('/username', protect, getUsername)

module.exports = router;