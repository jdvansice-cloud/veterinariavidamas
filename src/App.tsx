import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Sterilization from './components/Sterilization'
import Grooming from './components/Grooming'
import AboutUs from './components/AboutUs'
import Testimonials from './components/Testimonials'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Sterilization />
      <Grooming />
      <AboutUs />
      <Testimonials />
      <Gallery />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </>
  )
}
