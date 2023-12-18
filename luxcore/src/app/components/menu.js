import Image from "next/image"
import steak from "../../../public/images/steak.png"
import wine from "../../../public/images/wine.png"

export default function Menu() {
    return(
        <main>
        <section class="discover">
            <h1>Discover Menu</h1>
        </section>
        <p class="steak-section-top">World Class Steak</p>
        <section class="steak">
            <div class="steak-image">
                <Image
                    src={steak}
                    width={500}
                    height={500}
                    alt="Picture of the author"
                />
            </div>
            <p>Indulge in the extraordinary at LuxCore Steakhouse, where each succulent cut is a masterpiece of flavor, grilled to perfection and guaranteed to redefine your appreciation for the artistry of steak.</p>
        </section>

        <p class="wine-section-top">Wine</p>
        <section class="wine">
        <p>Elevate your dining experience at LuxCore Steakhouse with our exceptional wine selection, curated to complement the richness of our steaks. Discover a symphony of flavors as our expertly chosen wines enhance every bite, creating a harmonious and unforgettable palate journey.</p>
            <div class="wine-image">
                <Image
                    src={wine}
                    width={500}
                    height={500}
                    alt="Picture of the author"
                    style={{borderRadius: "10px"}}
                />
            </div>
        </section>    
    </main>
    )
} 
