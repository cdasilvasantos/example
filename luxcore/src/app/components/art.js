import Image from "next/image";
import art from "../../../public/images/art.png";

export default function Art() {
    return (
        <main style={{ textAlign: 'center' }}> {/* Center text globally in main */}
            <section style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <h1>Dine in comfort, Revel in Exceptional Quality:
                    Where Culinary Craftsmanship Meets Timeless Elegance.</h1>
            </section>
          
            <section style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div>
                    <Image
                        src={art}
                        width={500}
                        height={500}
                        alt="Picture of the art"
                    />
                </div>
            </section>
        </main>
    );
}
