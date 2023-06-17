import Header from './components/header'
import About from './components/about'
import Service from './components/service'
import Contact from './components/contact'
import Offer from './components/offers'
import ProductBooking from './components/productBooking'
import Testimonial from './components/testimonial'

function App() {

  return (
    <div className="App">
      {/* 
     http://preview.themeforest.net/item/atura-nail-salon-wordpress-theme/full_screen_preview/35352438?_ga=2.85836569.1048488018.1682965854-301774857.1682965854
       */}
      <Header />
      <About />
      <Service 
        image={"src/assets/nails.jpg"}
        serviceName='We will see'
        description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime sint iste minus."}
      />
      <Offer
        title={"Nails"}
        price={60}
        description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime sint iste minus."}
        image={"src/assets/nails.jpg"}
      />
      <ProductBooking />
      <Testimonial />
      <Contact />
    </div>
  )
}

export default App
