import axios from 'axios'

const API_URL = process.env.REACT_APP_API_BASE_URL + '/stripe/';

// Create new client
const configStripe = async () => {
    const response = await axios.get(`${API_URL}config`)
    return response.data
}

const createPaymentIntent = async (body) => {
    const response = await axios.post(`${API_URL}create-payment-intent`, body)
    return response.data
}


const stripeService = {
    configStripe, createPaymentIntent
}

export default stripeService