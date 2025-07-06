const { google } = require('googleapis');
require('dotenv').config()

const path = require('path');
const scopes = ['https://www.googleapis.com/auth/calendar'];

const base64EncodedServiceAccount = process.env.BASE64_ENCODED_SERVICE_ACCOUNT;
const decodedServiceAccount = Buffer.from(base64EncodedServiceAccount, 'base64').toString('utf-8');
const credentials = JSON.parse(decodedServiceAccount);

const auth = new google.auth.GoogleAuth({
    credentials,
    scopes,
});

const calendar = google.calendar({ version: 'v3', auth });

module.exports = calendar;