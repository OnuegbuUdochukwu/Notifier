const express = require('express')
const router = express.Router()
const {
    getAllBdays,
    filterBdays,
    addBirthday, 
    searchBirthday,
    updateBirthday,
    getCountdown,
    deleteBirthday
} = require('../controllers/birthdayController')

const protect = require('../middleware/authMiddleware')
const {upload} = require('../middleware/cloudinary')

// router.get('/filter', protect, filterBdays)
router.get('/', protect, getAllBdays )
router.get('/add', protect , addBirthday)
// router.get('/search/', searchBirthday)
router.get('/countdown/:id', protect,  getCountdown)
router.put('/edit/:id', protect,  updateBirthday)
router.delete('/delete/:id', protect,  deleteBirthday)
router.post('/add', protect, upload.single('image'), addBirthday)
router.put('/:id', protect, upload.single('image'), updateBirthday)

// manually test email reminder
router.get('/test-email', async(req, res)=>{
    const {sendBirthdayReminder } = require('../utils/emailService')
    await sendBirthdayReminder('ikechukwujo45@gmail.com', "dummy guy")
    res.send('email sent')
})

module.exports = router;