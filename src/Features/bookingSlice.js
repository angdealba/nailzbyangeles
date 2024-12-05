import { createSlice } from '@reduxjs/toolkit';

const bookingSlice = createSlice({
    name: 'booking',
    initialState: {
        service: null,
        appointment: null,
        clientInfo: null,
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