const express = require('express')
const router = express.Router()
const {protect} = require('../middleware/authMiddleware')
const {getUsername} = require('../controllers/userController')

router.get('/username', protect, getUsername)

module.exports = router;