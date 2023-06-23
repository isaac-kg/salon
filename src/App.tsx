import Header from './components/header'
import About from './components/about'
import Service from './components/service'
import Contact from './components/contact'
import Offer from './components/offers'
import ShopNow from './components/shopNow'
import Testimonial from './components/testimonial'
import Booking from './components/bookings'

function App() {

  return (
    <div className="App">
      {/* 
     http://preview.themeforest.net/item/atura-nail-salon-wordpress-theme/full_screen_preview/35352438?_ga=2.85836569.1048488018.1682965854-301774857.1682965854
       */}
       <About />
       <ShopNow />
      <Booking />
      <Testimonial />
      <Contact />
    </div>
  )
}

export default App
