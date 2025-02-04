import React from "react";
import Masonry from "react-masonry-css";
import "./portfolio.css"
export default function Portfolio() {

    const images = [
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
            <div className="gallery-container">
                <h4 className="gallery-title">My Work</h4>
                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="masonry-grid"
                    columnClassName="masonry-grid_column"
                >
                    {images.map((src, index) => (
                        <img key={index} src={src} alt={`Nail Design ${index + 1}`} className="masonry-image"/>
                    ))}
                </Masonry>
            </div>
        </>
    );
};