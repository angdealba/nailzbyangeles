import axios from 'axios'

const API_URL = '/api/clients/'

// Create new client
const createClient = async (clientData) => {
    const response = await axios.post(API_URL, clientData)
    return response.data
}


const clientService = {
    createClient
}

export default clientService