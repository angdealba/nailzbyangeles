const asyncHandler = require('express-async-handler')
const Appointments = require('../model/appointmentModel')
const Clients = require('../model/clientModel')
const { getAvailableSlots, updateEvent } = require('../utils/googleCalendar');

// @desc get Available Appointment slots
// @route GET /api/appointments/availability:date
const getAvailability = asyncHandler (async (req, res) => {
    const slots = await getAvailableSlots(req.params.date)
    res.status(200).json(slots)
})

// @desc get Appointments
// @route GET /api/appointments
const getAppointments = asyncHandler (async (req, res) => {
    const appointments = await Appointments.find()
    res.status(200).json(appointments)
})

// @desc create Appointment
// @route POST /api/appointments
const createAppointment = asyncHandler (async (req, res) => {
    const { gcal_event_id, client_id, service_id, date_time, confirmed, silent, details } = req.body
    if(!gcal_event_id || !client_id || !service_id || !date_time || silent === undefined){
        res.status(400)
        throw new Error("Please add all fields")
    }

    const appointment = await Appointments.create({client_id, service_id, date_time, confirmed, silent, details })
    if (appointment) {
        const client = await Clients.findByIdAndUpdate(client_id,
            { $push: { appointments: appointment.id } }, // Add appointment ID to client's appointments array
        );

        if (!client) {
            res.status(404);
            throw new Error('Client not found');
        }

        await updateEvent({
            eventId: gcal_event_id,
            summary: `Appointment with ${client.first_name} ${client.last_name} `,
            description: `${appointment.details}`
        });

        res.status(201).json({
            _id: appointment.id,
            client_id: appointment.client_id,
            service_id: appointment.service_id,
            date_time: appointment.date_time,
            confirmed: appointment.confirmed,
            silent: appointment.silent,
            details: appointment.details
        })
    } else {
        res.status(400)
        throw new Error('Invalid client data')
    }

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
    getAvailability, getAppointments, createAppointment, updateAppointment, deleteAppointment
}