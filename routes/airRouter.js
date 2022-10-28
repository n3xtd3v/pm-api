const router = require('express').Router()
const airCtrl = require('../controllers/airCtrl')

router.get('/air', airCtrl.getAir)

router.get('/airTest', airCtrl.getTest)

module.exports = router
