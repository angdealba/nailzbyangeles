const mongoose = require('mongoose')
const fs = require('fs');
const path = require('path');
const Service = require('../model/servicesModel');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB Connected: ${conn.connection.host}`)

        const servicesPath = path.join(__dirname, 'serviceList.json');
        const services = JSON.parse(fs.readFileSync(servicesPath, 'utf8'));

        for (const service of services) {
            await Service.updateOne(
                { service_name: service.service_name },
                { $set: service },
                { upsert: true }
            );
        }
        console.log('Static services initialized.');
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDB
