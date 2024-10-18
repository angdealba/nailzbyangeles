// @desc get Appointments
// @route GET /api/appointments
const getAppointments = (req, res) => {
    res.status(200).json({message: 'Get appointments'})
}

// @desc create Appointment
// @route POST /api/appointments
const createAppointment = (req, res) => {
    res.status(200).json({message: 'Create appointment'})
}

// @desc update existing Appointment
// @route PUT /api/appointments/:id
const updateAppointment = (req, res) => {
    res.status(200).json({message: `Update appointment ${req.params.id}`})
}

// @desc delete existing Appointment
// @route DELETE /api/appointments/:id
const deleteAppointment = (req, res) => {
    res.status(200).json({message: `Delete appointment ${req.params.id}`})
}



module.exports = {
    getAppointments, createAppointment, updateAppointment, deleteAppointment
}