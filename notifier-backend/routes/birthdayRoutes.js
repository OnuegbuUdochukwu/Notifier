const express = require('express')
const router = express.Router()

const {
    addBirthday, 
    searchBirthday,
    deleteBirthday
} = require('../controllers/birthdayController')

router.get('/add', addBirthday)
router.get('/search/', searchBirthday)
router.delete('/delete/:id', deleteBirthday)

module.exports = router;