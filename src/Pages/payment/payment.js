import {useEffect, useState} from "react";
import {Elements, useStripe} from "@stripe/react-stripe-js";
import CheckoutForm from "./checkoutForm";
import { loadStripe } from "@stripe/stripe-js";
import stripeService from "../../Features/stripeService";

export default function Payment (){
    const [stripePromise, setStripePromise] = useState(null)
    const [clientSecret, setClientSecret] = useState("")


    useEffect(() => {
        stripeService.configStripe().then(async (r) => {
            const {publishableKey} = await r;
            const stripe = await loadStripe(publishableKey);
            setStripePromise(stripe);
        })
    }, [])

    useEffect(() => {
        stripeService.createPaymentIntent(JSON.stringify({})).then(async (result) => {
            const {clientSecret} = await result;
            setClientSecret(clientSecret);
        });
    }, []);


    return (
        <>

            <h5>To finalize your booking, all appointments require a $10 deposit. The deposit will count towards the remaining balance. </h5>
            {clientSecret && stripePromise && (
                <Elements stripe={stripePromise} options={{clientSecret}}>
                    <CheckoutForm />
                </Elements>
            )}
        </>
    )
}