import axios from 'axios'

// const API_URL = process.env.REACT_APP_API_BASE_URL + '/appointments/';
let API_URL = ""
if (process.env.REACT_APP_MODE === "test"){
    API_URL = "http://localhost:8000/api/appointments/"
}
else {
    API_URL = process.env.REACT_APP_API_BASE_URL + '/appointments/';
}

//get availability
const getAvailability = async (date) => {
    const response = await axios.get(API_URL + `availability/${date}`)
    return response.data
}

// Create new appointment
const createAppointment = async (appointmentData) => {
    const response = await axios.post(API_URL, appointmentData)
    return response.data
}


const appointmentService = {
    getAvailability, createAppointment
}

export default appointmentService