import React, { useState } from "react"
import About from "./about"
import Booking from "./bookings"
import Contact from "./contact"
import Hero from "./hero"
import Offer from "./offers"
import Service from "./service"
import ShopNow from "./shopNow"
import Testimonial from "./testimonial"

const Customer = () => {
  const [canScroll, setCanScroll] = useState(0)

  const handleScroll = () => {
    setCanScroll((previousState) => previousState + 1)
  }

  return (
    <React.Fragment>
      <Hero handleScroll={handleScroll} />
      <About />
      <Service />
      <ShopNow />
      <Offer />
      <Booking canScroll={canScroll} />
      <Testimonial />
      <Contact />
    </React.Fragment>
  )
}

export default Customer
