import React from "react"
import "./style.css"
import { useNavigate } from "react-router-dom"
import { useAppSelector } from "../../hooks"



const Header = (props: any) => {

  const { totalItemIncart, cartItems } = useAppSelector((state) => state.cart)
  console.log("This is cart items....", cartItems)
  const navigate = useNavigate()
  return (
    <div className="header">
      <div className="header__title" onClick={() => navigate("/")}>
        Radiance Haven
      </div>
      <div className="header__cal-action">
        <div style={{display: "flex", alignItems: "center", gap: "4px"}} onClick={() => navigate("product-list")}>
          <img
            style={{ width: "40px" }}
            src="../../assets/icons/cart.svg"
            alt=""
          />
          {cartItems.length}
        </div>
      </div>
    </div>
  )
}

export default Header
