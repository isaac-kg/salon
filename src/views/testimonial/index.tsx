import Button from "../../components/common/Button"
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
  return (
    <div className="testimonial">
      <div className="testimonial__header">What Our Clients Say</div>
      <div className="testimonial__body">
        <div>
          "From the moment I walked in, I felt welcomed. The staff's expertise
          and genuine care for their clients make Radiance Haven stand out."
        </div>
        <div className="testimonial__line">------------------------</div>
        <img
          className="testimonial__image"
          src="../../assets/woman4.jpg"
          alt=""
        />
        <p className="testimonial__username">Sophia Banks</p>
      </div>
      <div className="testimonial__footer">
        <Button
          name="Left"
          onClick={function (): void {
            throw new Error("Function not implemented.")
          }}
          buttonType={"primary"}
        />
        <Button
          name="Right"
          onClick={function (): void {
            throw new Error("Function not implemented.")
          }}
          buttonType={"primary"}
        />
      </div>
    </div>
  )
}

export default Testimonial
