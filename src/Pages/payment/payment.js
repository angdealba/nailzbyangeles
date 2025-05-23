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
    const service = useSelector((state) => state.service)

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

    const findClient = async (clientEmail) => {
        try {

            let client = await clientService.searchClient({email: clientInfo.email});
            if (client._id) {
                console.log(`Existing client found! ID: ${client._id}`);
            } else {
                client = await clientService.createClient(clientInfo);
                console.log(`Client created successfully! ID: ${client._id}`);
            }
            return client
        } catch (error) {
            console.error('Error creating client. Please try again.', error.message);
        }
    }

    const createAppointment = async (client, appointment, service) => {
        try {
            const appointmentData = {
                "gcal_event_id": appointment.gcal_event_id,
                "client_id": client._id,
                "service_id": service.id,
                "date_time": appointment.date_time,
                "confirmed": false,
                "silent": appointment.silent,
                "details": `${service.name}-${service.length} $${service.price} \\nClient contact info: ${client.email} ${client.phone}`
            }
            const newAppointment = await appointmentService.createAppointment(appointmentData);
            console.log(`Appointment created successfully! ID: ${newAppointment._id}`);
        }
        catch (error) {
            console.error('Error creating appointment. Please try again.', error.message);
        }

    }

    const handlePaymentSuccess = async () => {
        const client = await findClient(clientInfo);
        await createAppointment(client, appointment, service);
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