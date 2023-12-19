import React from 'react';
import Image from 'next/image';
import restaurant from "../../../public/images/restaurant.png";

export default function Hero() {
    return (
        <main>
            <section className="banner">
                <Image 
                    src={restaurant} 
                    alt="Banner Image" 
                    layout="fill" // This makes the image fill the container
                    objectFit="cover" // Keeps the aspect ratio and covers the area
                    quality={100} // Adjust for desired image quality
                />
                <section className="calltoaction">
                    <h1>Where culinary craftsmanship meets timeless elegance</h1>
                    <p>Join our members club for exclusive offers.</p>
                    <a href="#contact-us" className="btn about1">C&M Members Club</a>
                </section>
            </section>
        </main>
    );
}
