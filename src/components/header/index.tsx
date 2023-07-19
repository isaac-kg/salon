import React from "react"
import "./style.css"

const Header = (props: any) => {
  return <div className="header">
    <div className="header__title">Lorem, ipsum dolor.</div>
    <div className="header__navigation">
      <a href="" className="header__links">Home</a>
      <a href="" className="header__links">About Us</a>
      <a href="" className="header__links">Product</a>
      <a href="" className="header__links">Contact Us</a>
    </div>
    <div className="header__cal-action">
      <p className="header__contact">+27 123 142 4422</p>
      <div>
        <button className="header__button">Read More</button>
      </div>
    </div>
  </div>
}

export default Header
