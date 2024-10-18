const connectDB = require('./db/dbConfig');
const dotenv = require('dotenv').config();
const express = require("express");

connectDB();
const app = express();
const PORT = process.env.PORT;
app.use(express.json())


app.use('/api/appointments', require('./routes/appointmentRoutes'))

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});




