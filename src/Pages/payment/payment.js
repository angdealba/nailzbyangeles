import {useEffect, useState} from "react";
import {Elements, useStripe} from "@stripe/react-stripe-js";
import CheckoutForm from "./checkoutForm";
import { loadStripe } from "@stripe/stripe-js";
import stripeService from "../../Features/stripeService";
import clientService from "../../Features/clientService";
import appointmentService from "../../Features/appointmentService";
import { useSelector } from 'react-redux';
import {Link} from "react-router-dom";
import { Button } from "../../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card"
import { Input } from "../../components/ui/input"
import { Label } from "../../components/ui/label"
import { ChevronLeft, CreditCard, Wallet, ShieldCheck } from "lucide-react"
import { format } from 'date-fns';

export default function Payment (){
    const [stripePromise, setStripePromise] = useState(null)
    const [clientSecret, setClientSecret] = useState("")
    const clientInfo = useSelector((state) => state.clientInfo)
    const appointment = useSelector((state) => state.appointment)
    const service = useSelector((state) => state.service)
    const date = new Date(useSelector((state) => state.appointment.date_time));


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
                "details": `${service.name}-${service.length} $${service.price} 
                Client contact info: ${client.email} ${client.phone} 
                Silent Appointment: ${appointment.silent}
                Appointment Details: ${appointment.details}`
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
            <div className="flex min-h-screen flex-col">
                <header className="sticky top-0 z-10 border-b bg-white">
                    <div className="mx-auto flex h-16 items-center justify-between px-4 md:px-6">
                        <Link to="/" className="flex items-center gap-2 font-semibold">
                            <span>NailzByAngeles</span>
                        </Link>
                        <Button asChild variant="ghost" size="sm">
                            <Link to="/clientInfo" className="gap-1">
                                <ChevronLeft className="h-4 w-4"/>
                                Back to Client Info
                            </Link>
                        </Button>
                    </div>
                </header>
                <main className="flex-1 pb-10">
                    <section className="w-full bg-gradient-to-b from-pink-50 to-white py-12">
                        <div className="mx-auto px-4 md:px-6">
                            <div
                                className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Payment</h1>
                                <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Complete your $10 deposit payment to confirm your appointment.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="w-full py-12">
                        <div className="mx-auto grid gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12 xl:px-32">
                            <div>
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Order Summary</CardTitle>
                                        <CardDescription>Review the following details.</CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-6">
                                        <div className="border-t pt-4">
                                            <h6 className="mb-2 font-semibold">Appointment Details</h6>
                                            <div className="space-y-1">
                                                <div className="flex items-center justify-between">
                                                    <p className="text-muted-foreground">Date</p>
                                                    <p className="font-medium">
                                                        {format(date, "EEEE, MMMM d, yyyy")}
                                                    </p>
                                                </div>
                                                <div className="flex items-center justify-between">
                                                    <p className="text-muted-foreground">Time</p>
                                                    <p className="font-medium">{format(new Date(date), 'h:mm a')}</p>
                                                </div>
                                                <div className="flex items-center justify-between">
                                                    <p className="text-muted-foreground">Client</p>
                                                    <p className="font-medium">
                                                        {clientInfo.first_name} {clientInfo.last_name}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <h6 className="mb-2 font-semibold">Selected Services</h6>
                                            <div className="space-y-2">
                                                <div key={service.id} className="flex items-center justify-between">
                                                    <div>
                                                        <p>{(service.length !== null ? `${service.name} - ${service.length}` : `${service.name}`)}</p>
                                                        <p className="text-sm text-muted-foreground">{service.duration} min</p>
                                                    </div>
                                                    <p className="font-medium">${service.price}</p>
                                                </div>
                                                <div className="flex items-center justify-between">
                                                    <div>
                                                        <p className="font-medium text-pink-600">Deposit (Due Today)</p>
                                                    </div>
                                                    <p className="font-medium text-pink-600">- $10</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="border-t pt-4">
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <p className="text-lg font-semibold">Remaining Balance</p>
                                                    <p className="text-sm text-muted-foreground">Due at appointment</p>
                                                </div>

                                                <p className="text-lg font-bold">${service.price - 10}</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>

                            <div>
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Payment Method</CardTitle>
                                        <CardDescription>Please enter payment information</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        {clientSecret && stripePromise && (
                                            <Elements stripe={stripePromise} options={{clientSecret}}>
                                                <CheckoutForm onPaymentSuccess={handlePaymentSuccess}/>
                                            </Elements>
                                        )}
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </section>
                </main>
                <footer className="border-t bg-white">
                    <div
                        className="mx-auto px-4 md:px-6 flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between md:py-12">
                        <div className="flex flex-col gap-2">
                            <Link to="/" className="flex items-center gap-2 font-semibold">
                                <span>NailzByAngeles</span>
                            </Link>
                            <p className="text-sm text-muted-foreground">Creating beautiful nails since 2023.</p>
                        </div>
                        <nav className="flex gap-4 sm:gap-6">
                            <Link
                                to="/privacy" target="_blank" rel="noreferrer"
                                className="text-sm font-medium text-muted-foreground underline-offset-4 hover:text-pink-600 hover:underline"
                            >
                                Privacy Policy
                            </Link>
                            <Link
                                to="/tos" target="_blank" rel="noreferrer"
                                className="text-sm font-medium text-muted-foreground underline-offset-4 hover:text-pink-600 hover:underline"
                            >
                                Terms of Service
                            </Link>
                            <Link
                                to="#"
                                className="text-sm font-medium text-muted-foreground underline-offset-4 hover:text-pink-600 hover:underline"
                            >
                                Contact
                            </Link>
                        </nav>
                    </div>
                </footer>
            </div>
        </>
    )
}