import {useState} from "react";
import clientService from "../../Features/clientService";
import appointmentService from "../../Features/appointmentService";
import {useNavigate, Link} from "react-router-dom";
import validator from "validator";
import { Button } from "../../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card"
import { Input } from "../../components/ui/input"
import { Label } from "../../components/ui/label"
import { Textarea } from "../../components/ui/textarea"
import { Switch } from "../../components/ui/switch"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../../components/ui/form"
import { ChevronLeft, CalendarIcon, Clock } from "lucide-react"
import { format } from 'date-fns';
import { useSelector, useDispatch } from 'react-redux';
import {setAppointment, setClientInfo} from '../../Features/bookingSlice';

export default function ClientInfo(){
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        instagram: "",
        silentAppt: "",
        apptDetails: "",
    })
    const [error, setError] = useState(false);
    const service = useSelector((state) => state.service);
    const date = new Date(useSelector((state) => state.appointment.date_time));


    const FormSchema = z.object({
        firstName: z.string().nonempty({ message: "First name is required" }).min(1, {message: "First name is required",}),
        lastName: z.string().nonempty({ message: "Last name is required" }).min(2, {message: "Last name is required",}),
        email: z.string().nonempty({ message: "Email is required" }).email( {message: "Please enter a valid email address",}),
        phone: z.string().nonempty({ message: "Phone number is required" }).refine(validator.isMobilePhone, { message: "Please enter a valid phone number",}),
        instagram: z.string().nonempty({ message: "Instagram username is required" }).min(2, {message: "Please enter a valid username",}),
        silentAppt: z.boolean().default(false),
        apptDetails: z.string().optional(),
    })

        const form = useForm({
            resolver: zodResolver(FormSchema),
            defaultValues: {
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                instagram: "",
            },
        });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value,
        })
    }


    const handleSubmit = async (data) => {

        if(error) return

        dispatch(setClientInfo({
            first_name: data.firstName,
            last_name: data.lastName,
            email: data.email,
            phone: data.phone,
            instagram: data.instagram,
        }));

        dispatch(setAppointment({
            silent: data.silentAppt,
            details: data.apptDetails,
        }));

        navigate('/payment');
    }

    return (
        <>
            <div className="flex min-h-screen flex-col">
                <header className="sticky top-0 z-10 border-b bg-white">
                    <div className="mx-auto flex h-16 items-center justify-between px-4 md:px-6">
                        <Link to="/" className="flex items-center gap-2 font-semibold">
                            <span>NailByAngeles</span>
                        </Link>
                        <Button asChild variant="ghost" size="sm">
                            <Link to="/appointment" className="gap-1">
                                <ChevronLeft className="h-4 w-4"/>
                                Back to Appointment Time
                            </Link>
                        </Button>
                    </div>
                </header>
                <main className="flex-1 pb-10">
                    <section className="w-full bg-gradient-to-b from-pink-50 to-white py-12">
                        <div className="mx-auto px-4 md:px-6">
                            <div
                                className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Client
                                    Information</h1>
                                <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Please provide your details to complete your booking.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="w-full py-12">
                        <div className="mx-auto grid gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12 xl:px-32">
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
                                                 className="flex items-center justify-between ">
                                                <div>
                                                    <p className="font-medium">{(service.length !== null ? `${service.name} - ${service.length}` : `${service.name}`)}</p>
                                                    <p className="text-sm text-muted-foreground">{service.duration} min</p>
                                                </div>
                                                <p className="font-bold">${service.price}</p>
                                            </div>
                                            {/*<div className="flex items-center justify-between pt-2">*/}
                                            {/*    <p className="font-semibold">Total</p>*/}
                                            {/*    <p className="text-xl font-bold">*/}
                                            {/*        ${service.price}*/}
                                            {/*    </p>*/}
                                            {/*</div>*/}
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card className="mt-6">
                                    <CardHeader>
                                        <CardTitle>Appointment Details</CardTitle>
                                        <CardDescription>Your selected date and time.</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-4">
                                            <div className="flex items-start gap-3 rounded-lg bg-pink-50 p-4">
                                                <CalendarIcon className="mt-0.5 h-5 w-5 text-pink-600"/>
                                                <div>
                                                    <p className="font-medium text-pink-900">Date</p>
                                                    <p className="text-lg font-bold text-pink-700">
                                                        {format(date, "EEEE, MMMM d, yyyy")}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3 rounded-lg bg-pink-50 p-4">
                                                <Clock className="mt-0.5 h-5 w-5 text-pink-600"/>
                                                <div>
                                                    <p className="font-medium text-pink-900">Time</p>
                                                    <p className="text-lg font-bold text-pink-700">{format(new Date(date), 'h:mm a')}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>

                            <div>
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Personal Details</CardTitle>
                                        <CardDescription>Enter your information to book your
                                            appointment.</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <Form {...form}>
                                            <form onSubmit={form.handleSubmit(handleSubmit)}
                                                  className="w-full space-y-4">
                                                <div className="grid grid-cols-2 gap-4">
                                                    <div className="space-y-2">
                                                        <FormField
                                                            control={form.control}
                                                            name="firstName"
                                                            render={({field}) => (
                                                                <FormItem>
                                                                    <FormLabel>First Name</FormLabel>
                                                                    <FormControl>
                                                                        <Input placeholder="First Name" {...field}
                                                                               className={(form.formState.errors.firstName ? "border-red-500 focus-visible:ring-red-500" : "")}/>
                                                                    </FormControl>
                                                                    <FormMessage className="text-sm text-red-500"/>
                                                                </FormItem>
                                                            )}
                                                        />
                                                    </div>
                                                    <div className="space-y-2">
                                                        <FormField
                                                            control={form.control}
                                                            name="lastName"
                                                            render={({field}) => (
                                                                <FormItem>
                                                                    <FormLabel>Last Name</FormLabel>
                                                                    <FormControl>
                                                                        <Input placeholder="Last Name" {...field}
                                                                               className={(form.formState.errors.lastName ? "border-red-500 focus-visible:ring-red-500" : "")}/>
                                                                    </FormControl>
                                                                    <FormMessage className="text-sm text-red-500"/>
                                                                </FormItem>
                                                            )}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="space-y-2">
                                                    <FormField
                                                        control={form.control}
                                                        name="email"
                                                        render={({field}) => (
                                                            <FormItem>
                                                                <FormLabel>Email</FormLabel>
                                                                <FormControl>
                                                                    <Input placeholder="Email address" {...field}
                                                                           className={(form.formState.errors.email ? "border-red-500 focus-visible:ring-red-500" : "")}/>
                                                                </FormControl>
                                                                <FormMessage className="text-sm text-red-500"/>
                                                            </FormItem>
                                                        )}
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <FormField
                                                        control={form.control}
                                                        name="phone"
                                                        render={({field}) => (
                                                            <FormItem>
                                                                <FormLabel>Phone</FormLabel>
                                                                <FormControl>
                                                                    <Input placeholder="Phone Number" {...field}
                                                                           className={(form.formState.errors.phone ? "border-red-500 focus-visible:ring-red-500" : "")}/>
                                                                </FormControl>
                                                                <FormMessage className="text-sm text-red-500"/>
                                                            </FormItem>
                                                        )}
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <FormField
                                                        control={form.control}
                                                        name="instagram"
                                                        render={({field}) => (
                                                            <FormItem>
                                                                <FormLabel>Instagram</FormLabel>
                                                                <FormControl>
                                                                    <Input
                                                                        placeholder="Your Instagram Username" {...field}
                                                                        className={(form.formState.errors.instagram ? "border-red-500 focus-visible:ring-red-500" : "")}/>
                                                                </FormControl>
                                                                <FormMessage className="text-sm text-red-500"/>
                                                            </FormItem>
                                                        )}
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <FormField
                                                        control={form.control}
                                                        name="silentAppt"
                                                        render={({field}) => (
                                                            <FormItem
                                                                className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                                                                <div className="space-y-0.5">
                                                                    <FormLabel>Silent Appointment</FormLabel>
                                                                    <FormDescription>
                                                                        Enjoy a quiet, relaxing session without the
                                                                        pressure of engaging in conversation. Feel free
                                                                        to request your favorite music or show — your
                                                                        comfort is my priority.
                                                                    </FormDescription>
                                                                </div>
                                                                <FormControl>
                                                                    <Switch
                                                                        checked={field.value}
                                                                        onCheckedChange={field.onChange}
                                                                    />
                                                                </FormControl>
                                                            </FormItem>
                                                        )}
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <FormField
                                                        control={form.control}
                                                        name="apptDetails"
                                                        render={({field}) => (
                                                            <FormItem>
                                                                <FormLabel>Special Requests</FormLabel>
                                                                <FormControl>
                                                                    <Textarea
                                                                        placeholder="Anything you need me to know before your appointment..." {...field} />
                                                                </FormControl>
                                                                <FormMessage/>
                                                            </FormItem>
                                                        )}
                                                    />
                                                </div>
                                                <Button type="submit" className="w-full bg-pink-600 hover:bg-pink-700">
                                                    Continue to Payment
                                                </Button>
                                            </form>
                                        </Form>
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
    );
};