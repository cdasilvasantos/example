import Image from "next/image";
import art from "../../../public/images/art.png";

export default function Art() {
    return (
        <main className="art">
            <section>
                <h1 className="art-heading">Dine in comfort, Revel in Exceptional Quality:
                    Where Culinary Craftsmanship Meets Timeless Elegance.</h1>
            </section>
            
            <section className="art-images-section">
                <div className="art-image-wrapper">
                    <Image
                        src={art}
                        layout="responsive"
                        width={500}
                        height={500}
                        alt="Picture of the art"
                    />
                </div>
                {/* Add more Image components as needed */}
            </section>
        </main>
    );
}
