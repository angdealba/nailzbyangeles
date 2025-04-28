const mongoose = require('mongoose')

const serviceSchema = new mongoose.Schema(
    {
        service_name: String,
        description: String,
        duration: Number,
        basePrice: Number,
        hasLengthOptions: Boolean,
        lengths: [
            {
                length: String,
                price: Number,
                duration: Number
            }
        ],
    }
);

module.exports = mongoose.model("Services", serviceSchema)