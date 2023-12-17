import Navbar from "../../components/navbar";
import Hero from "../../components/hero";
import About from "../../components/about";
import Menu from "../../components/menu";
import Footer from "../../components/footer"

export default function Home() {
  return (
    <main>
      <title>Luxcore</title>
      <Navbar/>
      <Hero />
      <About />
      <Menu />
      <Footer />
    </main>
  )
}