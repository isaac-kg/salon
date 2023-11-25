import "./style.css";

const Booking = () => {
  return (<div className="booking">
    <img src="src/assets/cosmetics.jpg" className="booking__image" />

    <div className="booking__card">
      <div className="booking__title">BOOK TIME TO GET MANICURE</div>
      <div className="booking__description">
        Step into a Sanctuary of Beauty: Book an appointment with our skilled artisans, and let our personalized services unveil your true beauty potential.
      </div>
      <button className="booking__button">Booking</button>
    </div>
  </div>)
}

export default Booking;
