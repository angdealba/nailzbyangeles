import {useState, useEffect} from "react";
import Calendar from 'react-calendar';
import './customCalendar.css';
import {useNavigate, Link} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { setAppointment } from '../../Features/bookingSlice';
import appointmentService from "../../Features/appointmentService";
import { ChevronLeft, Clock } from "lucide-react"
import { Button } from "../../components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../components/ui/card"
import { RadioGroup, RadioGroupItem } from "../../components/ui/radio-group"
import { format } from 'date-fns';

export default function Appointment(){
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [date, setDate] = useState(new Date());
    const [selectedSlot, setSelectedSlot] = useState(null);
    const [slots, setSlots] = useState([]);
    const service = useSelector((state) => state.service);

    useEffect(() => {
        const fetchSlots = async () => {
            const data = await appointmentService.getAvailability(date);
            setSlots(data);
        };

        fetchSlots();
    }, [date]);

    function handleClickDay(value){
        setDate(value);
        if (selectedSlot) {
            setSelectedSlot(null);
        }
    }

    function handleContinue(){
        dispatch(setAppointment({gcal_event_id: selectedSlot.id, date_time: new Date(selectedSlot.start), silent: false}))
        navigate("/clientInfo");
    }

    return (
        <>
            <div className="flex min-h-screen flex-col">
                <header className="sticky top-0 z-10 border-b bg-white">
                    <div className="mx-auto flex h-16 items-center justify-between px-4 md:px-6">
                        <Link to="/" className="flex items-center gap-2 font-semibold">
                            <span>NailzByAngeles</span>
                        </Link>
                        <Button asChild variant="ghost" size="sm">
                            <Link to="/services" className="gap-1">
                                <ChevronLeft className="h-4 w-4"/>
                                Back to Services
                            </Link>
                        </Button>
                    </div>
                </header>
                <main className="flex-1 pb-10">
                    <section className="w-full bg-gradient-to-b from-pink-50 to-white py-12">
                        <div className="mx-auto px-4 md:px-6">
                            <div
                                className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                    Choose Your Appointment Time
                                </h1>
                                <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Select a date and time that works best for you.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="w-full py-12">
                        <div className="mx-auto grid gap-6 px-4 md:px-6 xl:px-32  lg:grid-cols-2 lg:gap-12">
                            <div>
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Select Date</CardTitle>
                                        <CardDescription>Choose your preferred appointment date.</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="flex justify-center">
                                            <Calendar defaultValue={new Date()} minDate={new Date()}
                                                      onClickDay={handleClickDay}></Calendar>
                                        </div>
                                    </CardContent>
                                </Card>

                                {date && (
                                    <Card className="mt-6">
                                        <CardHeader>
                                            <CardTitle>Select Time</CardTitle>
                                            <CardDescription>
                                                Choose an available time slot
                                                for {format(date, "EEEE, MMMM d, yyyy")}
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            {slots.length > 0 ? (
                                                <RadioGroup
                                                    value={date}
                                                    onValueChange={date}
                                                    className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4"
                                                >
                                                    {slots.map((slot, index) => (
                                                        <Button key={index}
                                                                variant={selectedSlot === slot ? "default" : "outline"}
                                                                onClick={() => setSelectedSlot(selectedSlot === slot ? null : slot)}>
                                                            {format(new Date(slot.start), 'h:mm a')}
                                                        </Button>
                                                    ))}
                                                </RadioGroup>
                                            ) : (
                                                <p className="text-center text-muted-foreground">No available time slots
                                                    for this date.</p>
                                            )}
                                        </CardContent>
                                    </Card>
                                )}
                            </div>

                            <div>
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Your Selected Services</CardTitle>
                                        <CardDescription>Review your selected services before
                                            proceeding.</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-4">
                                            <div key={service.id}
                                                 className="flex items-center justify-between border-b pb-2">
                                                <div>
                                                    <p className="font-medium">{(service.length !== null ? `${service.name} - ${service.length}` : `${service.name}`)}</p>
                                                    {/*<p className="text-sm text-muted-foreground">{service.duration} min</p>*/}
                                                </div>
                                                <p className="font-bold">${service.price}</p>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <p className="text-sm text-muted-foreground">Estimated Duration</p>
                                                <p className="text-sm font-medium">Approx. {service.duration} minutes</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                    <CardFooter className="flex flex-col gap-4">
                                        {date && selectedSlot ? (
                                            <div className="w-full rounded-lg bg-pink-50 p-4 text-center">
                                                <p className="font-medium text-pink-900">Your appointment is scheduled
                                                    for:</p>
                                                <p className="text-lg font-bold text-pink-700">
                                                    {format(date, "EEEE, MMMM d, yyyy")} at {format(new Date(selectedSlot.start), 'h:mm a')}
                                                </p>
                                            </div>
                                        ) : (
                                            <div className="w-full rounded-lg bg-muted p-4 text-center">
                                                <p className="text-muted-foreground">Please select both a date and time
                                                    to continue.</p>
                                            </div>
                                        )}
                                        <Button
                                            onClick={handleContinue}
                                            disabled={!date || !selectedSlot}
                                            className="w-full bg-pink-600 hover:bg-pink-700"
                                        >
                                            Continue to Client Information
                                        </Button>
                                    </CardFooter>
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
    )
};