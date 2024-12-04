const asyncHandler = require('express-async-handler')
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY, {});

// @desc create PaymentIntent returns client_secret
// @route POST /api/stripe/create-payment-intent
const createPaymentIntent = asyncHandler(async (req, res) => {
    try{
        const paymentIntent = await stripe.paymentIntents.create({
            amount: 1000,
            currency: 'usd',
            automatic_payment_methods: {
                enabled: true,
            },
        });
        res.send({clientSecret: paymentIntent.client_secret});
    }
    catch (e){
        return res.status(400).send({
            error: {
                message: e.message,
            },
        });
    }
})

// @desc send STRIPE_PUBLISHABLE_KEY to client
// @route GET /api/stripe/config
const sendPublishableKey =  (req, res) => {
    res.send({publishableKey: process.env.STRIPE_PUBLISHABLE_KEY});
}

module.exports = {
    createPaymentIntent, sendPublishableKey
}