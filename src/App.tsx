import Header from "./components/ui/header"
import Footer from "./components/ui/footer"
import { Outlet, useLocation } from "react-router-dom"
import { Provider } from "react-redux"
import { store } from "./store"
import { useEffect } from "react"

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return (
    <Provider store={store}>
      <div className="App">
        {/* 
        http://preview.themeforest.net/item/atura-nail-salon-wordpress-theme/full_screen_preview/35352438?_ga=2.85836569.1048488018.1682965854-301774857.1682965854
      */}
        <Header />
        <Outlet />
        <Footer />
      </div>
    </Provider>
  )
}

export default App
