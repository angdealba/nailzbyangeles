import {useEffect, useState} from "react";
import {Elements, useStripe} from "@stripe/react-stripe-js";
import CheckoutForm from "./checkoutForm";
import { loadStripe } from "@stripe/stripe-js";
import stripeService from "../../Features/stripeService";
import clientService from "../../Features/clientService";
import appointmentService from "../../Features/appointmentService";
import { useSelector } from 'react-redux';

export default function Payment (){
    const [stripePromise, setStripePromise] = useState(null)
    const [clientSecret, setClientSecret] = useState("")
    const clientInfo = useSelector((state) => state.clientInfo)
    const appointment = useSelector((state) => state.appointment)

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
    
    const handlePaymentSuccess = async () => {
        try {
            const client = await clientService.createClient(clientInfo);
            console.log(`Client created successfully! ID: ${client._id}`);

            const appointmentData = {
                "client_id": client._id,
                "service_id": client._id, //temporary,
                "date_time": appointment.date_time, //temporary
                "confirmed": false,
                "silent": appointment.silent,
                "details": "none"
            }
            try {
                const appointment = await appointmentService.createAppointment(appointmentData);
                console.log(`Appointment created successfully! ID: ${appointment._id}`);
            } catch (error) {
                console.error('Error creating appointment. Please try again.');
            }
        } catch (error) {
            console.error('Error creating client. Please try again.');
        }
    };

    return (
        <>

            <h5>To finalize your booking, all appointments require a $10 deposit. The deposit will count towards the remaining balance. </h5>
            {clientSecret && stripePromise && (
                <Elements stripe={stripePromise} options={{clientSecret}}>
                    <CheckoutForm onPaymentSuccess={handlePaymentSuccess} />
                </Elements>
            )}
        </>
    )
}