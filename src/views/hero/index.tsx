import React from "react"
import "./style.css"
import { useNavigate } from "react-router-dom"
import Button from "../../components/common/Button"

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
        <Button
          name={"Shop Now"}
          onClick={() => navigate("/product")}
          buttonType={"primary"}
        />
        <span style={{marginLeft: "20px"}}></span>
        <Button
          name={"Booking"}
          onClick={function (): void {
            throw new Error("Function not implemented.")
          }}
          buttonType={"secondary"}
        />
      </div>
    </div>
  )
}

export default Hero
