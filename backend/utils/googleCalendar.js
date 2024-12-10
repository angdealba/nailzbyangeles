const calendar = require('../config/googleAuth');

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
            calendarId: 'angeles.dealba6734@gmail.com',
            resource: event,
        });
        console.log('Event created: %s', response.data.htmlLink);
    } catch (error) {
        console.error('Error creating calendar event:', error);
    }
};

module.exports = createEvent;