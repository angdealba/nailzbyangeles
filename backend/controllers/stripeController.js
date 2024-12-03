const asyncHandler = require('express-async-handler')
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY, {});

// @desc create PaymentIntent returns client_secret
// @route POST /api/stripe/create-payment-intent
const createPaymentIntent = (req, res) => {
    const paymentIntent = stripe.paymentIntents.create({
        amount: 10,
        currency: 'usd',
        automatic_payment_methods: {
            enabled: true,
        },
    });
    res.status(201).json(paymentIntent.client_secret);
}

// @desc send STRIPE_PUBLISHABLE_KEY to client
// @route GET /api/stripe/config
const sendPublishableKey = asyncHandler (async (req, res) => {
    res.status(200).json(process.env.STRIPE_PUBLISHABLE_KEY);
})

module.exports = {
    createPaymentIntent, sendPublishableKey
}