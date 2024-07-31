import React, { lazy, Suspense } from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Customer from "./views/main/Customer"
import SkeletonLoader from "./components/common/SkeletonLoader"
import Checkout from "./views/checkout"
const ListProduct = lazy(() => import("./views/listProduct"))
const Product = lazy(() => import("./views/product"))
const SignIn = lazy(() => import("./views/signIn"))
const SignUp = lazy(() => import("./views/signUp"))

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
          <Suspense
            fallback={
              <div style={{ padding: 20 }}>
                <SkeletonLoader width={"100%"} height={"55vh"} />
              </div>
            }
          >
            <Product />
          </Suspense>
        ),
      },
      {
        path: "product-list",
        element: (
          <Suspense
            fallback={
              <div style={{ padding: 20 }}>
                <SkeletonLoader width={"100%"} height={"55vh"} />
              </div>
            }
          >
            <ListProduct />
          </Suspense>
        ),
      },
      {
        path: "sign-up",
        element: (
          <Suspense
            fallback={
              <div style={{ padding: 20 }}>
                <SkeletonLoader width={"100%"} height={"55vh"} />
              </div>
            }
          >
            <SignUp />
          </Suspense>
        ),
      },
      {
        path: "sign-in",
        element: (
          <Suspense
            fallback={
              <div style={{ padding: 20 }}>
                <SkeletonLoader width={"100%"} height={"55vh"} />
              </div>
            }
          >
            <SignIn />
          </Suspense>
        ),
      },
      {
        path: "checkout",
        element: (
          <Suspense
            fallback={
              <div style={{ padding: 20 }}>
                <SkeletonLoader width={"100%"} height={"55vh"} />
              </div>
            }
          >
            <Checkout />
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
