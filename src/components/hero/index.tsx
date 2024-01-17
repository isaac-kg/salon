import React from "react"
import "./style.css"
import { useNavigate } from "react-router-dom"

const Hero = (props: any) => {
  const navigate = useNavigate()
  return (
    <div className="hero">
      <div className="hero__title">
        Reveal Your Inner Glow at Radiance Haven!
      </div>
      <div className="hero__subtitle">
        Are you ready to embrace a new chapter of beauty and
        <br />
        self-discovery? We invites you to experience a world where every
        <br /> moment is crafted to nurture your unique radiance.
      </div>
      <div>
        <button className="hero__button" onClick={() => navigate("/product")}>
          Shop Now
        </button>
        <button className="hero__button btn-secondary">Booking</button>
      </div>
    </div>
  )
}

export default Hero
