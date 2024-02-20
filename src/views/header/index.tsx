import React from "react"
import "./style.css"
import { useNavigate } from "react-router-dom"

const Header = (props: any) => {
  const navigate = useNavigate()
  return (
    <div className="header">
      <div className="header__title" onClick={() => navigate("/")}>
        Radiance Haven
      </div>
      <div className="header__cal-action">
        <div onClick={() => navigate("product-list")}>
          <img
            style={{ width: "40px" }}
            src="../../assets/icons/cart.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  )
}

export default Header
