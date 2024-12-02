import axios from 'axios'

const API_URL = 'http://localhost:8000/api/appointments/'

// Create new appointment
const createAppointment = async (appointmentData) => {
    const response = await axios.post(API_URL, appointmentData)
    return response.data
}


const appointmentService = {
    createAppointment
}

export default appointmentService