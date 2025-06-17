import { Link } from 'react-router-dom'
import { Button } from "../../components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../components/ui/card"
import stripeService from "../../Features/stripeService";
import clientService from "../../Features/clientService";
import appointmentService from "../../Features/appointmentService";
import { useSelector } from 'react-redux';
import { Calendar, Clock, MapPin, CheckCircle, Share2 } from "lucide-react"
import { format } from 'date-fns';

export default function Confirmation(){
    const clientInfo = useSelector((state) => state.clientInfo)
    const appointment = useSelector((state) => state.appointment)
    const service = useSelector((state) => state.service);
    const date = new Date(useSelector((state) => state.appointment.date_time));
    return (
        <>
            <div className="flex min-h-screen flex-col">
                <header className="sticky top-0 z-10 border-b bg-white">
                    <div className="mx-auto flex h-16 items-center justify-between px-4 md:px-6">
                        <Link to="/" className="flex items-center gap-2 font-semibold">
                            <span>NailzByAngeles</span>
                        </Link>
                    </div>
                </header>
                <main className="flex-1 pb-10">
                    <section className="w-full bg-gradient-to-b from-pink-50 to-white py-12 md:py-24">
                        <div className="mx-auto px-4 md:px-6">
                            <div
                                className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
                                <div className="rounded-full bg-green-100 p-3">
                                    <CheckCircle className="h-10 w-10 text-green-600"/>
                                </div>
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Booking
                                    Confirmed!</h1>
                                <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Your appointment has been successfully booked. We look forward to seeing you!
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="w-full">
                        <div className="mx-auto px-4 md:px-6">
                            <div className="mx-auto max-w-[58rem]">
                                <Card className="border-green-200 shadow-md">
                                    <CardHeader className="bg-green-50 border-b border-green-100">
                                        <CardTitle className="flex items-center gap-2">
                                            <CheckCircle className="h-5 w-5 text-green-600"/>
                                            Appointment Confirmed
                                        </CardTitle>
                                        {/*<CardDescription>Confirmation Code: {confirmationCode}</CardDescription>*/}
                                    </CardHeader>
                                    <CardContent className="space-y-6 pt-6">
                                        <div className="grid gap-4 md:grid-cols-2">
                                            <div className="space-y-4">
                                                <div>
                                                    <h3 className="mb-2 font-semibold">Appointment Details</h3>
                                                    <div className="space-y-2">
                                                        <div className="flex items-start gap-2">
                                                            <Calendar className="mt-0.5 h-4 w-4 text-muted-foreground"/>
                                                            <div>
                                                                <p className="font-medium">
                                                                    {format(date, "EEEE, MMMM d, yyyy")}
                                                                </p>
                                                                <p className="text-sm text-muted-foreground">Date</p>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-start gap-2">
                                                            <Clock className="mt-0.5 h-4 w-4 text-muted-foreground"/>
                                                            <div>
                                                                <p className="font-medium">{format(new Date(date), 'h:mm a')}</p>
                                                                <p className="text-sm text-muted-foreground">Time</p>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-start gap-2">
                                                            <MapPin className="mt-0.5 h-4 w-4 text-muted-foreground"/>
                                                            <div>
                                                                <p className="font-medium">Dallas TX, 75229</p>
                                                                <p className="text-sm text-muted-foreground">Location</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <h3 className="mb-2 font-semibold">Client Information</h3>
                                                    <div className="space-y-1">
                                                        <p>
                                                            {clientInfo.first_name} {clientInfo.last_name}
                                                        </p>
                                                        <p className="text-sm text-muted-foreground">{clientInfo.email}</p>
                                                        <p className="text-sm text-muted-foreground">{clientInfo.phone}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="space-y-4">
                                                <div>
                                                    <h3 className="mb-2 font-semibold">Services Booked</h3>
                                                    <div className="space-y-2">
                                                        <div key={service.id}
                                                             className="flex items-center justify-between">
                                                            <div>
                                                                <p>{(service.length !== null ? `${service.name} - ${service.length}` : `${service.name}`)}</p>
                                                                <p className="text-sm text-muted-foreground">{service.duration} min</p>
                                                            </div>
                                                            <p className="font-medium">${service.price}</p>
                                                        </div>
                                                        <div className="flex items-center justify-between">
                                                            <div>
                                                                <p className="font-medium text-green-600">Deposit (Paid)</p>
                                                            </div>
                                                            <p className="font-medium text-green-600">- $10</p>
                                                        </div>
                                                        <div className="border-t pt-2">
                                                            <div className="flex items-center justify-between">
                                                                <p className="font-semibold">Remaining Balance</p>
                                                                <p className="font-bold">${service.price - 10}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {clientInfo.specialRequests && (
                                                    <div>
                                                        <h3 className="mb-2 font-semibold">Special Requests</h3>
                                                        <p className="text-sm">{clientInfo.specialRequests}</p>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </CardContent>
                                    <CardFooter
                                        className="flex flex-col gap-4 border-t bg-muted/50 sm:flex-row items-center pt-4">
                                        <Button variant="outline" className="w-full sm:w-auto">
                                            <Calendar className="mr-2 h-4 w-4"/>
                                            Add to Calendar
                                        </Button>
                                        <Button variant="outline" className="w-full sm:w-auto">
                                            <Share2 className="mr-2 h-4 w-4"/>
                                            Share Appointment
                                        </Button>
                                        <Button asChild
                                                className="w-full bg-pink-600 hover:bg-pink-700 sm:ml-auto sm:w-auto">
                                            <Link to="/">Return to Home</Link>
                                        </Button>
                                    </CardFooter>
                                </Card>
                                <div className="mt-8 space-y-4 text-center">
                                    <h3 className="text-lg font-semibold">Appointment Reminders</h3>
                                    <ul className="mx-auto max-w-xl space-y-2 text-sm text-muted-foreground">
                                        <li>• Please arrive at your scheduled appointment time.</li>
                                        <li>• If you need to cancel or reschedule, please do so at least 24 hours in advance.</li>
                                        <li>• For any questions or concerns, please contact us on Instagram @nailzbyangeles.</li>
                                        <li>• A confirmation email has been sent to {clientInfo.email}.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
                <footer className="border-t bg-white">
                    <div
                        className="mx-auto flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between md:py-12 px-4 md:px-6">
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
                                to="#"
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
    );
};