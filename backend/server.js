
const dotenv = require('dotenv').config({ path: './backend/.env' });
const connectDB = require('./config/dbConfig');
const express = require("express");

connectDB();
const app = express();
const PORT = process.env.PORT;
const cors = require('cors');

//alow requests from front end
app.use(cors({ origin: process.env.CLIENT_URL }));
app.use(express.json())
app.use(express.urlencoded())

//define route for cron-job to execute
app.get('/', (req, res) => {
    res.status(200).send(''); // Empty response
});
app.use('/api/appointments', require('./routes/appointmentRoutes'));
app.use('/api/clients', require('./routes/clientRoutes'));
app.use('/api/stripe', require('./routes/stripeRoutes'));

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});



