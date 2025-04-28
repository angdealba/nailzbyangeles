const express = require("express")
const router = express.Router()
const getServiceList = require('../controllers/servicesController')

router.route('/').get(getServiceList)

module.exports = router