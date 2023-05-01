import Header from './components/header'
import About from './components/about'
import Product from './components/product'
import Contact from './components/contact'

function App() {

  return (
    <div className="App">
      {/* 
     http://preview.themeforest.net/item/atura-nail-salon-wordpress-theme/full_screen_preview/35352438?_ga=2.85836569.1048488018.1682965854-301774857.1682965854
       */}
      <Header />
      <About />
      <Product />
      <Contact />
    </div>
  )
}

export default App
