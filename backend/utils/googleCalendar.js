const calendar = require('../config/googleAuth');
require('dotenv').config()
const calendarId = process.env.CALENDAR_ID;

const getAvailableSlots = async (date) => {
    const start = new Date(date);
    start.setHours(0, 0, 0, 0);
    const end = new Date(start);
    end.setDate(end.getDate() + 1);
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

const updateEvent = async ({ eventId, summary, description }) => {
    const { data: event, headers } = await calendar.events.get({
        calendarId,
        eventId,
    });
    const etag = headers.etag; // You can also access this via event.etag
    event.summary = summary
    event.description = description

    try {
        const response = await calendar.events.patch({
            eventId: eventId,
            calendarId: calendarId,
            resource: event,
            headers: {
                'If-Match': etag,
            },
        });
        console.log('Calendar event updated: %s', response.data.htmlLink);
    } catch (error) {
        console.error('Error updating calendar event:', error);
    }
};

module.exports = { getAvailableSlots, updateEvent }