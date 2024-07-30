import { useState } from "react"
import Button from "../../../components/common/Button"
import "./style.css"

const Testimonial = () => {
  const testimonial = [
    {
      customerName: "Amelia Smith",
      message:
        "From the moment I walked in, I felt welcomed. The staff's expertise and genuine care for their clients make Radiance Haven stand out.",
      pic: "../../assets/woman1.jpg",
    },
    {
      customerName: "Sophia Banks",
      message:
        "Radiance Haven isn't just a salon—it's an experience. Their dedication to enhancing natural beauty shines through in every service.",
      pic: "../../assets/woman2.jpg",
    },
    {
      customerName: "Isabella Obama",
      message:
        "I loved how they personalized the makeup to match my style. It felt like they brought out the best version of me!",
      pic: "../../assets/woman3.jpg",
    },
    {
      customerName: "Chloe Nowonder",
      message:
        "Absolutely love the results! The manicure was fantastic, and my nails have never looked better. Thank you!",
      pic: "../../assets/woman4.jpg",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  return (
    <div className="testimonial">
      <div className="testimonial__header">What Our Clients Say</div>
      <div className="testimonial__body">
        <div>{testimonial[currentIndex]?.message}</div>
        <div className="testimonial__line">------------------------</div>
        <div>
          <img
            className="testimonial__image"
            src={testimonial[currentIndex]?.pic}
            alt=""
          />
        </div>
        <p className="testimonial__username">
          {" "}
          {testimonial[currentIndex]?.customerName}
        </p>
      </div>
      <div className="testimonial__footer">
        <Button
          name="Left"
          onClick={() => {
            if (currentIndex === 0) {
              setCurrentIndex(testimonial.length - 1)
            } else {
              setCurrentIndex((previousValue) => previousValue - 1)
            }
          }}
          buttonType={"primary"}
        />
        <Button
          name="Right"
          onClick={() => {
            if (currentIndex === testimonial.length - 1) {
              setCurrentIndex(0)
            } else {
              setCurrentIndex((previousValue) => previousValue + 1)
            }
          }}
          buttonType={"primary"}
        />
      </div>
    </div>
  )
}

export default Testimonial
