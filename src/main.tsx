import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Product from "./components/product"
import ListProduct from "./components/listProduct"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "product",
        element: <Product />
      },{
        path: "productList",
        element: <ListProduct />
      }
    ],
    errorElement: <h1 style={{textAlign: "center"}} >404 Ops your are on a wrong page</h1>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </React.StrictMode>
)
