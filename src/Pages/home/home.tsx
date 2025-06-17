import { Link } from 'react-router-dom';
import { Button } from "../../components/ui/button"
import { CalendarDays, Clock, CreditCard, SoapDispenserDroplet, Users} from "lucide-react";

export default function Home (){
    return (
        <>
            <div className="flex min-h-screen flex-col justify-center">
                <header className=" sticky top-0 z-10 border-b bg-white">
                    <div className="mx-auto flex h-16 items-center justify-between px-4 md:px-6">
                        <Link to="/" className="flex items-center gap-2 font-semibold">
                            <span>NailzByAngeles</span>
                        </Link>
                        <nav className="hidden gap-6 md:flex">
                            <Link to="/"
                                  className="text-sm font-medium text-pink-600 underline-offset-4 hover:underline">
                                Home
                            </Link>
                            <Link
                                to="/services"
                                className="text-sm font-medium text-muted-foreground underline-offset-4 hover:text-pink-600 hover:underline">
                                Services
                            </Link>
                            <Link
                                to="/portfolio"
                                className="text-sm font-medium text-muted-foreground underline-offset-4 hover:text-pink-600 hover:underline"
                            >
                                Portfolio
                            </Link>
                            <Link
                                to="#"
                                className="text-sm font-medium text-muted-foreground underline-offset-4 hover:text-pink-600 hover:underline"
                            >
                                Contact
                            </Link>
                        </nav>
                        <Button asChild variant="default">
                            <Link to="/services">Book Now</Link>
                        </Button>
                    </div>
                </header>
                <main className="flex-1 pb-10">
                    <section className="w-full bg-gradient-to-b from-pink-50 to-white py-12 md:py-24 lg:py-32">
                        <div className="mx-auto px-4 md:px-6 xl:px-32">
                            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                                <div className="space-y-5">
                                    <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                        Welcome to NailzByAngeles
                                    </h1>
                                    <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                        Hello, beauty! I'm Angeles, a certified nail technician with
                                        over 2 years of experience acrylic nails. I am home based in Northwest
                                        Dallas,
                                        TX
                                        approximately 15 mins away from Lovefield Airport.
                                    </p>
                                    <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                        <Button asChild variant="default">
                                            <Link to="/services">Book Appointment</Link>
                                        </Button>
                                        <Button variant="outline" asChild>
                                            <Link to="/portfolio">View Portfolio</Link>
                                        </Button>
                                    </div>
                                </div>
                                <div className="flex justify-center">
                                    <img
                                        src="/images/portfolio/IMG_6306.jpg"
                                        alt="Nail art showcase"
                                        className=" rounded-xl object-cover"
                                        height="50%"
                                        width="50%"
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="w-full py-12 md:py-24 lg:py-32">
                        <div className="mx-auto px-4 md:px-6">
                            <div
                                className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About
                                    Me</h2>
                                <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    I specialize in a variety of nail designs and take pride in turning your vision
                                    into reality, ensuring you leave feeling confident and beautiful.
                                    I'm truly passionate about what I do, and I'm so grateful you've chosen me as
                                    your nail tech!
                                </p>
                            </div>
                            <div
                                className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                                <img
                                    src="/images/home/IMG_3277.jpg"
                                    alt="Angeles, nail technician"
                                    className="mx-auto aspect-square rounded-xl object-cover"
                                    height="400"
                                    width="400"
                                />
                                <div className="flex flex-col justify-center space-y-4">
                                    <ul className="grid gap-6">
                                        <li>
                                            <div className="grid gap-1">
                                                <h3 className="text-xl font-bold">Premium Products</h3>
                                                <p className="text-muted-foreground">
                                                    I’m committed to using high-quality, long-lasting products that
                                                    provide over 4 weeks of retention,
                                                    all while being gentle on your natural nails and keeping your
                                                    natural nail health a top priority.
                                                </p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="grid gap-1">
                                                <h3 className="text-xl font-bold">Personalized Service</h3>
                                                <p className="text-muted-foreground">
                                                    Every client receives my full attention and a customized
                                                    experience
                                                    tailored to their preferences. I truly love creating a safe,
                                                    welcoming space where my
                                                    clients feel at home—and where lasting relationships can grow.
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="w-full bg-pink-50 py-12 md:py-24 lg:py-32">
                        <div className="mx-auto px-4 md:px-6">
                            <div
                                className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                    Salon Policies</h2>
                                <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    To ensure the best experience for all clients, please take a moment to review my
                                    policies
                                    before booking.
                                </p>
                            </div>
                            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
                                <div
                                    className="flex flex-col items-center space-y-4 rounded-lg border bg-white p-6 shadow-sm">
                                    <CreditCard className="h-12 w-12 text-pink-500"/>
                                    <h3 className="text-xl font-bold">Payment Policy</h3>
                                    <p className="text-center text-muted-foreground">
                                        A $10 deposit is required for bookings. This deposit is deducted from the
                                        total,
                                        which can be payed through any
                                        major mobile payments or cash.
                                    </p>
                                </div>
                                <div
                                    className="flex flex-col items-center space-y-4 rounded-lg border bg-white p-6 shadow-sm">
                                    <Clock className="h-12 w-12 text-pink-500"/>
                                    <h3 className="text-xl font-bold">Cancellation Policy</h3>
                                    <p className="text-center text-muted-foreground">
                                        Please reschedule or cancel at least 24 hours in advance in order to use the
                                        same deposit. No-shows will require
                                        a 50% fee to rebook.
                                    </p>
                                </div>
                                <div
                                    className="flex flex-col items-center space-y-4 rounded-lg border bg-white p-6 shadow-sm">
                                    <Users className="h-12 w-12 text-pink-500"/>
                                    <h3 className="text-xl font-bold">Guest Policy</h3>
                                    <p className="text-center text-muted-foreground">
                                        For everyone's comfort and safety, please do not bring extra guests or
                                        children
                                        unless they are also receiving a service.
                                    </p>
                                </div>
                            </div>
                            <div className="mx-auto grid max-w-5xl gap-8 py-2 md:grid-cols-1 lg:grid-cols-2">
                                <div
                                    className="flex flex-col items-center space-y-4 rounded-lg border bg-white p-6 shadow-sm">
                                    <SoapDispenserDroplet className="h-12 w-12 text-pink-500"/>
                                    <h3 className="text-xl font-bold">Fill-ins/Soak offs</h3>
                                    <p className="text-center text-muted-foreground">
                                        Please arrive with bare, clean nails unless you are booking a fill-in
                                        service.
                                        If you will need a soak off, please let me know when booking. I’m unable to
                                        fill
                                        in MMA products, and soak-offs for MMA nails will incur a $10 fee due to the
                                        difficulty of removal.
                                    </p>
                                </div>
                                <div
                                    className="flex flex-col items-center space-y-4 rounded-lg border bg-white p-6 shadow-sm">
                                    <CalendarDays className="h-12 w-12 text-pink-500"/>
                                    <h3 className="text-xl font-bold">Appointment Policy</h3>
                                    <p className="text-center text-muted-foreground">
                                        I understand life happens, please let me know if you're running late.
                                        Arrivals
                                        over 15 minutes late may incur a $10 fee and a shortened service time so I
                                        can
                                        stay on schedule.
                                    </p>
                                </div>
                            </div>
                            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 py-8 text-center">
                                <Button asChild variant="default">
                                    <Link to="/services">Book Your Appointment</Link>
                                </Button>
                            </div>
                        </div>
                    </section>

                    <section id="gallery" className="w-full py-12 md:py-24 lg:py-32">
                        <div className="mx-auto px-4 md:px-6">
                            <div
                                className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My
                                    Work</h2>
                                <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Browse through some of my recent nail designs and creations.
                                </p>
                            </div>
                            <div className="mx-auto justify-center items-center grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
                                <img
                                    src={'/images/portfolio/IMG_6371.jpg'}
                                    alt={`Nail design 1`}
                                    className="aspect-square rounded-xl object-cover transition-all hover:scale-105"
                                    height="300"
                                    width="300"
                                />
                                <img
                                    src={'/images/portfolio/IMG_6372.jpg'}
                                    alt={`Nail design 2`}
                                    className="aspect-square rounded-xl object-cover transition-all hover:scale-105"
                                    height="300"
                                    width="300"
                                />
                                <img
                                    src={'/images/portfolio/IMG_3473.jpg'}
                                    alt={`Nail design 3`}
                                    className="aspect-square rounded-xl object-cover transition-all hover:scale-105"
                                    height="300"
                                    width="300"
                                />
                            </div>
                            <div
                                className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
                                <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Want to see more designs? Browse my full portfolio or follow me on Instagram
                                    @nailzbyangeles for the latest sets and behind-the-scenes looks.
                                </p>
                            </div>
                            <div className="mx-auto flex max-w-[58rem] flex-row items-center justify-center gap-4 pt-4">
                                <Button asChild variant="default">
                                    <Link to="/portfolio">View Portfolio</Link>
                                </Button>
                                <Button asChild variant="outline">
                                    <Link to="https://www.instagram.com/nailzbyangeles/">Follow on Instagram</Link>
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
