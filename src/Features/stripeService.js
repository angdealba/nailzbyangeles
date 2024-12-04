import axios from 'axios'

const API_URL = 'http://localhost:8000/api/stripe/'

// Create new client
const configStripe = async () => {
    const response = await axios.get('http://localhost:8000/api/stripe/config')
    return response.data
}

const createPaymentIntent = async (body) => {
    const response = await axios.post('http://localhost:8000/api/stripe/create-payment-intent', body)
    return response.data
}


const stripeService = {
    configStripe, createPaymentIntent
}

export default stripeService