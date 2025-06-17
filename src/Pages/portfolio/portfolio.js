import React from "react";
import Masonry from "react-masonry-css";
import {Link} from "react-router-dom";
import {Button} from "../../components/ui/button"
import { ChevronLeft } from "lucide-react"
export default function Portfolio() {

    const images = [
        "/images/portfolio/IMG_6367.jpg",
        "/images/portfolio/IMG_6371.jpg",
        "/images/portfolio/IMG_4678.jpg",
        "/images/portfolio/IMG_6372.jpg",
        "/images/portfolio/IMG_5230.jpg",
        "/images/portfolio/IMG_6373.jpg",
        "/images/portfolio/IMG_6775.jpg",
        "/images/portfolio/IMG_6306.jpg",
        "/images/portfolio/IMG_3473.jpg",
        "/images/portfolio/IMG_3679.jpg",
        "/images/portfolio/IMG_2510.jpg",
        "/images/portfolio/IMG_2540.jpg",
        "/images/portfolio/IMG_2646.jpg",
        "/images/portfolio/IMG_2995.jpg",
        "/images/portfolio/IMG_3167.jpg",
        "/images/portfolio/IMG_6202.jpg"
    ];
    const breakpointColumnsObj = {
        default: 3,
        1100: 2,
        700: 1
    };

    return (
        <>
            <div className="flex min-h-screen flex-col">
                <header className="sticky top-0 z-10 border-b bg-white">
                    <div className="mx-auto flex h-16 items-center justify-between px-4 md:px-6">
                        <Link to="/" className="flex items-center gap-2 font-semibold">
                            <span>NailByAngeles</span>
                        </Link>
                        <Button asChild variant="ghost" size="sm">
                            <Link to="/" className="gap-1">
                                <ChevronLeft className="h-4 w-4"/>
                                Back to Home
                            </Link>
                        </Button>
                    </div>
                </header>
                <div className=" xl:px-48">
                    <h4 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl pb-8 pt-8 text-center">My
                        Work</h4>
                    <Masonry
                        breakpointCols={breakpointColumnsObj}
                        className="flex"
                        columnClassName=""
                    >
                        {images.map((src, index) => (
                            <img key={index} src={src} alt={`Nail Design ${index + 1}`}
                                 className="rounded-xl object-cover transition-all hover:scale-105 px-2 py-2"/>
                        ))}
                    </Masonry>
                </div>
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
    );
};