const express = require("express")
const router = express.Router()
const {getAvailability, getAppointments, createAppointment, updateAppointment, deleteAppointment} = require('../controllers/appointmentController')

router.route('/availability/:date').get(getAvailability)
router.route('/').get(getAppointments).post(createAppointment)
router.route('/:id').put(updateAppointment).delete(deleteAppointment)

module.exports = router