import { createSlice } from '@reduxjs/toolkit';

const bookingSlice = createSlice({
    name: 'booking',
    initialState: {
        service: {
            id: null,
            name: null,
            length: null,
            price: null,
            duration: null
        },
        appointment: {
            gcal_event_id: null,
            date_time: null,
            silent: false,
            details: null
        },
        clientInfo: {
            first_name: null,
            last_name: null,
            email: null,
            phone: null,
            instagram: null
        },
    },
    reducers: {
        setService: (state, action) => {
            state.service = action.payload;
        },
        setAppointment: (state, action) => {
            state.appointment = {
                ...state.appointment,
                ...action.payload
            };
        },
        setClientInfo: (state, action) => {
            state.clientInfo = action.payload;
        },
    },
});

export const { setService, setAppointment, setClientInfo, } = bookingSlice.actions;
export default bookingSlice.reducer;