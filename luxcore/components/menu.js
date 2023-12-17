import Image from "next/image"
import steak from "../public/images/steak.png"

export default function Menu() {
    return(
        <main>
        <section class="discover">
            <h1>Discover Menu</h1>
        </section>
        <section class="steak">
        <p class="section-top">World Class Steak</p>
            <p>At LuxCore Steakhouse, we strive to craft an exquisite haven where you and your cherished companions indulge in moments of serenity. With unwavering dedication, we curate an ambiance where each visit becomes a plate of memories, and our culinary artistry, an unparalleled testament to excellence. Welcome to a sanctuary of fine dining, where every dish is a masterpiece and every experience is etched in the elegance of shared stories.</p>
            <div class="steak-image">
                <Image
                    src={steak}
                    width={500}
                    height={500}
                    alt="Picture of the author"
                />
            </div>
        </section>
        <section class="wine">
            <h2>Exceptional Wine Selection</h2>
            <p>Elevate your dining experience at LuxCore Steakhouse with our exceptional wine selection, curated to complement the richness of our steaks. Discover a symphony of flavors as our expertly chosen wines enhance every bite, creating a harmonious and unforgettable palate journey.</p>
        </section>
    </main>
    )
} 
