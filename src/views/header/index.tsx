import React from "react"
import "./style.css"
import { useNavigate } from "react-router-dom"
import { useAppSelector } from "../../hooks"



const Header = (props: any) => {

  const { totalItemIncart, cartItems } = useAppSelector((state) => state.cart)

  console.log("Cart Items: ", cartItems)
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
          {cartItems.map((item) => item.items).reduce((accumulator, currentValue) => accumulator + currentValue, 0)}
        </div>
      </div>
    </div>
  )
}

export default Header
