const express = require('express')
const router = express.Router()

const {
    getAllBdays,
    addBirthday, 
    searchBirthday,
    updateBirthday,
    getCountdown,
    deleteBirthday
} = require('../controllers/birthdayController')


router.get('/', getAllBdays )
router.get('/add', addBirthday)
// router.get('/search/', searchBirthday)
router.get('/countdown/:id', getCountdown)
router.put('/edit/:id', updateBirthday)
router.delete('/delete/:id', deleteBirthday)

module.exports = router;