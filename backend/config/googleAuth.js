const { google } = require('googleapis');
require('dotenv').config()

const path = require('path');

const keyFilePath = path.join(__dirname, '../keyfile.json');
const scopes = ['https://www.googleapis.com/auth/calendar'];

const auth = new google.auth.GoogleAuth({
    keyFile: keyFilePath,
    scopes,
});

const calendar = google.calendar({ version: 'v3', auth });

module.exports = calendar;