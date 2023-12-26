import React from "react"
import "./style.css"

const Header = (props: any) => {
  return <div className="header">
    <div className="header__title">Radiance Haven</div>
    <div className="header__cal-action">
      <div>
        <img style={{width: "40px"}} src="src/assets/icons/cart.svg" alt="" />
      </div>
    </div>
  </div>
}

export default Header
