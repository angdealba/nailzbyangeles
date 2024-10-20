const asyncHandler = require('express-async-handler')
const Appointments = require('../model/appointmentModel')

// @desc get Appointments
// @route GET /api/appointments
const getAppointments = asyncHandler (async (req, res) => {
    const appointments = await Appointments.find()
    res.status(200).json(appointments)
})

// @desc create Appointment
// @route POST /api/appointments
const createAppointment = asyncHandler (async (req, res) => {

    if(!req.body.text){
        res.status(400)
        throw new Error("Please add a text field")
    }
    res.status(200).json({message: 'Create appointment'})
})

// @desc update existing Appointment
// @route PUT /api/appointments/:id
const updateAppointment = asyncHandler (async (req, res) => {
    res.status(200).json({message: `Update appointment ${req.params.id}`})
})

// @desc delete existing Appointment
// @route DELETE /api/appointments/:id
const deleteAppointment = asyncHandler (async (req, res) => {
    res.status(200).json({message: `Delete appointment ${req.params.id}`})
})



module.exports = {
    getAppointments, createAppointment, updateAppointment, deleteAppointment
}