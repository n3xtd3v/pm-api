const router = require('express').Router()
const airCtrl = require('../controllers/airCtrl')

router.get('/air', airCtrl.getAir)

module.exports = router
