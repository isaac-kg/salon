import "./style.css"
const Testimonial = () => {

  const testimonial = [{
    customerName: "Amelia Smith",
    message: "From the moment I walked in, I felt welcomed. The staff's expertise and genuine care for their clients make Radiance Haven stand out.",
    pic: "src/assets/woman1.jpg"

  },{
    customerName: "Sophia Banks",
    message: "Radiance Haven isn't just a salon—it's an experience. Their dedication to enhancing natural beauty shines through in every service.",
    pic: "src/assets/woman2.jpg"

  },{
    customerName: "Isabella Obama",
    message: "I loved how they personalized the makeup to match my style. It felt like they brought out the best version of me!",
    pic: "src/assets/woman3.jpg"

  },{
    customerName: "Chloe Nowonder",
    message: "Absolutely love the results! The manicure was fantastic, and my nails have never looked better. Thank you!",
    pic: "src/assets/woman4.jpg"

  }]
  return (
    <div className="testimonial">
      <div className="testimonial__header">What Our Clients Say</div>
      <div className="testimonial__body">
        <div>
          "From the moment I walked in, I felt welcomed. The staff's expertise and genuine care for their clients make Radiance Haven stand out."
        </div>
        <div className="testimonial__line">------------------------</div>
        <img className="testimonial__image" src="src/assets/woman4.jpg" alt="" />
        <p className="testimonial__username">Sophia Banks</p>
      </div>
      <div className="testimonial__footer">
        <button>left</button>
        <button>right</button>
      </div>
    </div>
  )
}

export default Testimonial
