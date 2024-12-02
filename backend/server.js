
const dotenv = require('dotenv').config({ path: './backend/.env' });
const connectDB = require('./db/dbConfig');
const express = require("express");

connectDB();
const app = express();
const PORT = process.env.PORT;
const cors = require('cors');
app.use(cors());
app.use(express.json())
app.use(express.urlencoded())

app.use('/api/appointments', require('./routes/appointmentRoutes'));
app.use('/api/clients', require('./routes/clientRoutes'));
console.log(PORT)

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});




