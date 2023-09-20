import Header from './components/header'
import About from './components/about'
import Service from './components/service'
import Contact from './components/contact'
import Offer from './components/offers'
import ShopNow from './components/shopNow'
import Testimonial from './components/testimonial'
import Booking from './components/bookings'
import Footer from './components/footer'
import Hero from './components/hero'
import BookingForm from './components/bookingForm'

function App() {

  return (
    <div className="App">
      {/* 
     http://preview.themeforest.net/item/atura-nail-salon-wordpress-theme/full_screen_preview/35352438?_ga=2.85836569.1048488018.1682965854-301774857.1682965854
       */}

       {/* 
          do a hero page and a header
          Have to make the page have all the neccessary components
          I must make sure every thing is connected and is responsive 
          I have to add colors and property images.
          I have  to host the site.
          I have to start implementing the logic.
       */}
       <Header />
       <Hero />
       <About />
       <BookingForm />

      <h3 style={{textAlign: "center"}}>Some Of Our Services</h3>
      <Service 
        image=".fdsfs"
        serviceName="Service name"
        description={"I must make sure every thing is connected and is responsive "}
      />
       <ShopNow />
       <h3 style={{textAlign: "center"}}>Popular Offers</h3>

      <Offer 
        title={"This is title"}
        price={300}
        description={"I must make sure every thing is connected and is responsive "}
        image={"imagewill got her"}
      />
      <Booking />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
