const express = require("express")
const router = express.Router()

const {sendPublishableKey, createPaymentIntent} = require('../controllers/stripeController')

router.route('/config').get(sendPublishableKey)
router.route('/create-payment-intent').post(createPaymentIntent)

module.exports = router