import Header from "./views/header"
import Footer from "./views/footer"
import { Outlet } from "react-router-dom"

function App() {
  return (
    <div className="App">
      {/* 
        http://preview.themeforest.net/item/atura-nail-salon-wordpress-theme/full_screen_preview/35352438?_ga=2.85836569.1048488018.1682965854-301774857.1682965854
      */}
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
