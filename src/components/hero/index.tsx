import React from "react"
import "./style.css"

const Hero = (props: any) => {
  return <div className="hero">
    <div className="hero__title">Reveal Your Inner Glow at Radiance Haven!</div>
    <div className="hero__subtitle">
    Are you ready to embrace a new chapter of beauty and<br /> 
    self-discovery? We invites you to experience a world where every<br /> moment is crafted to nurture your unique radiance.
    </div>
    <div>

    <button className="hero__button">Shop Now</button>
    <button className="hero__button btn-secondary">Booking</button>
    </div>
  </div>
}

export default Hero
