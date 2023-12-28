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

function App() {

  return (
    <div className="App">
      {/* 
     http://preview.themeforest.net/item/atura-nail-salon-wordpress-theme/full_screen_preview/35352438?_ga=2.85836569.1048488018.1682965854-301774857.1682965854
       */}
       <Header />
       <Hero />
       <About />

      
      <Service 
        image="../../assets/icons/lips.svg"
        serviceName="Service name"
        description={"I must make sure every thing is connected and is responsive "}
      />
      <ShopNow />
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
