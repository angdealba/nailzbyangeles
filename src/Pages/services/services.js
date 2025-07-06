import { React, useEffect, useState } from "react";
import axios from "axios";
import {useNavigate, Link} from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setService } from '../../Features/bookingSlice';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../../components/ui/card';
import { ChevronLeft, Clock, Check } from "lucide-react";

export default function Services() {
    const navigate = useNavigate();
    const [services, setServices] = useState([]);
    const [selectedService, setSelectedService] = useState(null);
    const [selectedLength, setSelectedLength] = useState(null);
    const [price, setPrice] = useState(null);
    const [duration, setDuration] = useState(null);
    const dispatch = useDispatch();

    function handleContinue(){
        const service = services[selectedService];
        let length = null;
        if (service.hasLengthOptions) {
            length = service.lengths[selectedLength].length;
        }
        dispatch(setService({id: service._id, name: service.service_name, length: length, price: price, duration: duration}))
        navigate("/appointment");
    }

    function handleSelect(index){
        if (index !== selectedService){
            setSelectedService(index);
            setSelectedLength(null);
        }
        setDuration(selectedService === index ? null : services[index].duration);
        setPrice(selectedService === index ? null : services[index].basePrice)
    }

    useEffect(() => {
        const fetchServices = async () => {
            let API_URL = ""
            if (process.env.REACT_APP_MODE === "test"){
                API_URL = "http://localhost:8000/api/services/"
            }
            else {
                API_URL = process.env.REACT_APP_API_BASE_URL + '/services/';
            }
            try {
                const response = await axios.get(API_URL);
                setServices(response.data);
            } catch (error) {
                console.error("Error fetching services:", error);
            }
        };
        fetchServices();
    }, []);

    return (
        <div className="flex min-h-screen flex-col">
            <header className="sticky top-0 z-10 border-b bg-white">
                <div className="mx-auto flex h-16 items-center justify-between px-4 md:px-6">
                    <Link to="/" className="flex items-center gap-2 font-semibold">
                        <span>NailzByAngeles</span>
                    </Link>
                    <Button asChild variant="ghost" size="sm">
                        <Link to="/" className="gap-1">
                            <ChevronLeft className="h-4 w-4"/>
                            Back to Home
                        </Link>
                    </Button>
                </div>
            </header>
            <main className="flex-1 pb-10">
                <section className="w-full bg-gradient-to-b from-pink-50 to-white py-12">
                    <div className="mx-auto px-4 md:px-6">
                        <div
                            className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Select Your
                                Services</h1>
                            <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                Choose from our range of premium nail services to create your perfect look.
                            </p>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12">
                    <div className="mx-auto px-4 md:px-6 xl:px-32">
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {services.map((service, index) => (
                                <Card key={service._id}
                                      className={`cursor-pointer transition-all hover:shadow-md border-2 flex flex-col justify-between h-full
                                      ${selectedService === index ? "shadow-lg scale-[1.01] border-pink-500 ring-2 ring-pink-500" : ""}`}
                                      onClick={() => handleSelect(index)}
                                >
                                    <CardHeader>
                                        <div className="flex items-start justify-between">
                                            <CardTitle>{service.service_name}</CardTitle>
                                        </div>
                                        <CardDescription>{service.description}</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        {selectedService === index && service.hasLengthOptions && (
                                            <div>
                                                <p className="font-semibold">Choose a length:</p>
                                                <div className="flex gap-2 py-2">
                                                    {service.lengths.map((lengthObj, index) => (
                                                        <Button
                                                            key={lengthObj.length}
                                                            variant={selectedLength === index ? "default" : "outline"}
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                setSelectedLength(selectedLength === index ? null : index);
                                                                setDuration(selectedLength === index ? service.duration : service.duration + lengthObj.duration);
                                                                setPrice(selectedLength === index ? service.basePrice : service.basePrice + lengthObj.price)
                                                            }}
                                                        >
                                                            {lengthObj.length}
                                                        </Button>
                                                    ))}
                                                </div>
                                            </div>

                                        )}
                                    </CardContent>
                                    <CardFooter
                                        className="flex justify-between items-center text-sm text-muted-foreground  px-4 py-2 min-h-10 h-10">
                                        <div className="flex items-center gap-2">
                                            <Clock className="h-4 w-4"/>
                                            <span>{service.duration + (selectedService === index && selectedLength !== null ? service.lengths[selectedLength].duration : 0)} minutes</span>
                                        </div>
                                        <div
                                            className="font-semibold text-lg text-black">${service.basePrice + (selectedService === index && selectedLength !== null ? service.lengths[selectedLength].price : 0)}</div>

                                    </CardFooter>
                                </Card>
                            ))}
                        </div>

                        <div className="mt-12 flex flex-col items-center justify-center gap-4">
                            <div className="text-center">
                                <p className="text-2xl font-bold">{selectedService !== null ? `Total: $${price}` : "Total: $0"}</p>
                            </div>
                            <Button
                                onClick={handleContinue}
                                disabled={selectedService === null}
                                className="bg-pink-600 hover:bg-pink-700"
                            >
                                Continue to Select Time
                            </Button>
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
    );
}