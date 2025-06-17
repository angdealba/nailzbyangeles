import axios from 'axios'

let API_URL = ""
console.log(process.env.REACT_APP_MODE)
if (process.env.REACT_APP_MODE === "test"){
    API_URL = "http://localhost:8000/api/stripe/"
}
else {
    API_URL = process.env.REACT_APP_API_BASE_URL + '/stripe/';
}
console.log(API_URL)
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