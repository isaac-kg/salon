import { useState } from "react"
import About from "../about"
import Booking from "../bookings"
import Contact from "../contact"
import Hero from "../hero"
import Offer from "../offers"
import Service from "../service"
import ShopNow from "../shopNow"
import Testimonial from "../testimonial"

const Customer = () => {

  const [canScroll, setCanScroll] = useState(0);

  const handleScroll = () => {
    setCanScroll((previousState) => previousState + 1)
  }

  return (
    <div>
      <Hero handleScroll={handleScroll} />
      <About />
      <Service
        image="../../assets/icons/lips.svg"
        serviceName="Service name"
        description={
          "I must make sure every thing is connected and is responsive "
        }
      />
      <ShopNow/>
      <Offer
        title={"This is title"}
        price={300}
        description={
          "I must make sure every thing is connected and is responsive "
        }
        image={"imagewill got her"}
      />
      <Booking  canScroll={canScroll} />
      <Testimonial />
      <Contact />
    </div>
  )
}

export default Customer
