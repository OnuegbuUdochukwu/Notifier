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

const protect = require('../middleware/authMiddleware')


router.get('/', protect, getAllBdays )
router.get('/add', protect , addBirthday)
// router.get('/search/', searchBirthday)
router.get('/countdown/:id', protect,  getCountdown)
router.put('/edit/:id', protect,  updateBirthday)
router.delete('/delete/:id', protect,  deleteBirthday)

module.exports = router;