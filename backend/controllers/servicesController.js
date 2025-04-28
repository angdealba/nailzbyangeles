const asyncHandler = require('express-async-handler')
const Services = require('../model/servicesModel')

// @desc get list of services offered
// @route GET /api/services
const getServiceList = asyncHandler (async (req, res) => {
    const serviceList = await Services.find()
    res.status(200).json(serviceList)
})

module.exports = getServiceList