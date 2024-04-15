import React, { lazy, Suspense } from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Customer from "./views/main/Customer"
import { Provider } from "react-redux"
import { store } from "./store"
const Product = lazy(() => import("./views/product"))
const ListProduct = lazy(() => import("./views/listProduct"))

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Customer />,
      },
      {
        path: "product",
        element: (
          <Suspense>
            <Product />
          </Suspense>
        ),
      },
      {
        path: "product-list",
        element: (
          <Suspense>
            <ListProduct />
          </Suspense>
        ),
      },
    ],
    errorElement: (
      <h1 style={{ textAlign: "center" }}>404 Ops your are on a wrong page</h1>
    ),
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </React.StrictMode>
)
