const mongoose = require('mongoose')

const clientSchema = new mongoose.Schema(
    {
        user_id: mongoose.Schema.Types.ObjectId,
        first_name: String,
        last_name: String,
        email: String,
        phone: String,
        instagram: String,
        appointments: [mongoose.Schema.Types.ObjectId]

    }
);

module.exports = mongoose.model("Clients", clientSchema)