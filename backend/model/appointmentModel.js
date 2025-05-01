const mongoose = require('mongoose')

const appointmentSchema = new mongoose.Schema(
    {
        gcal_event_id: String,
        client_id: mongoose.Schema.Types.ObjectId,
        service_id: mongoose.Schema.Types.ObjectId,
        date_time: Date,
        confirmed: Boolean,
        silent: Boolean,
        details: String
    }
);

module.exports = mongoose.model("Appointments", appointmentSchema)