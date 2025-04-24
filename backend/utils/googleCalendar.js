const calendar = require('../config/googleAuth');
require('dotenv').config()
const calendarId = process.env.CALENDAR_ID;

const getAvailableSlots = async (date) => {
    const start = new Date(date);
    start.setHours(0, 0, 0, 0);
    const end = new Date(start);
    end.setDate(end.getDate() + 1);
    console.log("google cal:",start,  end)
    try {
        const response = await calendar.events.list({
            calendarId,
            timeMin: start.toISOString(),
            timeMax: end.toISOString(),
            q: 'Available', // Search for events marked "Available"
            singleEvents: true,
            orderBy: 'startTime',
        });

        return response.data.items.map((event) => ({
            id: event.id,
            start: event.start.dateTime || event.start.date,
            end: event.end.dateTime || event.end.date,
        }));
    } catch (error) {
        console.error('Error fetching available slots:', error);
        return [];
    }
};

const createEvent = async ({ summary, description, startDateTime, endDateTime }) => {
    const event = {
        summary,
        description,
        start: {
            dateTime: startDateTime,
            timeZone: 'America/New_York',
        },
        end: {
            dateTime: endDateTime,
            timeZone: 'America/New_York',
        },
    };

    try {
        const response = await calendar.events.insert({
            calendarId: calendarId,
            resource: event,
        });
        console.log('Event created: %s', response.data.htmlLink);
    } catch (error) {
        console.error('Error creating calendar event:', error);
    }
};

module.exports = { getAvailableSlots, createEvent }