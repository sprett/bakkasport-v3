import Navbar from "../../frontend/components/Navbar/Navbar"
import Hero from "../../frontend/components/Landing/LandingHero"
import BottomSection from "../../frontend/components/Landing/LandingSection"
import Footer from "../../frontend/components/Footer/Footer"


function Landing() {
  return (
    <div>
      <Navbar />
      <Hero />
      <BottomSection />
      <Footer />
    </div>
  ); 
}

export default Landing

      