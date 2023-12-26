import React from "react"
import "./style.css"

const Header = (props: any) => {
  return <div className="header">
    <div className="header__title">Radiance Haven</div>
    <div className="header__cal-action">
      <div>
        <button className="header__button">Read More</button>
      </div>
    </div>
  </div>
}

export default Header
