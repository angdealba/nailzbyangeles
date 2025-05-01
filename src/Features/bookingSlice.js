import { createSlice } from '@reduxjs/toolkit';

const bookingSlice = createSlice({
    name: 'booking',
    initialState: {
        service: {
            id: null,
            name: "",
            length: "",
            price: ""
        },
        appointment: {
            gcal_event_id: null,
            date_time: null,
            silent: false
        },
        clientInfo: {
            first_name: "",
            last_name: "",
            email: "",
            phone: "",
            instagram: ""
        },
    },
    reducers: {
        setService: (state, action) => {
            state.service = action.payload;
        },
        setAppointment: (state, action) => {
            state.appointment = action.payload;
        },
        setClientInfo: (state, action) => {
            state.clientInfo = action.payload;
        },
    },
});

export const { setService, setAppointment, setClientInfo, } = bookingSlice.actions;
export default bookingSlice.reducer;