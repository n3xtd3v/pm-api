const router = require('express').Router()
const airCtrl = require('../controllers/airCtrl')

router.get('/airin', airCtrl.getAirIn)

router.get('/airout', airCtrl.getAirOut)

module.exports = router
