import axios from 'axios'

let API_URL = ""
if (process.env.REACT_APP_MODE === "test"){
    API_URL = "http://localhost:8000/api/clients/"
}
else {
    API_URL = process.env.REACT_APP_API_BASE_URL + '/clients/';
}

// Create new client
const createClient = async (clientData) => {
    const response = await axios.post(API_URL, clientData)
    return response.data
}

const searchClient = async (clientEmail) => {
    const response = await axios.post(API_URL + 'search/', clientEmail)
    return response.data
}


const clientService = {
    createClient, searchClient
}

export default clientService