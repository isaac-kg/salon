import "./style.css"
const Testimonial = () => {
  return (
    <div className="testimonial">
      <div className="testimonial__header">What Our Clients Say</div>
      <div className="testimonial__body">
        <div>
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
          saepe accusantium quasi consequatur modi officia, molestias asperiores
          sit inventore soluta impedit magni."
        </div>
        <div className="testimonial__line">------------------------</div>
        <img className="testimonial__image" src="src/assets/nails.jpg" alt="" />
        <p className="testimonial__username">Name of user</p>
        <p className="testimonial__title">Title of user</p>
      </div>
      <div className="testimonial__footer">
        <button>left</button>
        <button>right</button>
      </div>
    </div>
  )
}

export default Testimonial
