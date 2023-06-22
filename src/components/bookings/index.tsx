import "./style.css";

const Booking = () => {
  return (<div className="booking">
    <img src="src/assets/cosmetics.jpg" className="booking__image" />

    <div className="booking__card">
      <div className="booking__title">BOOK TIME TO GET MANICURE</div>
      <div className="booking__description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Voluptatum quibusdam saepe cum aspernatur, iure mollitia laboriosam. 
        Ipsam sit officia dicta officiis placeat culpa, eveniet unde autem suscipit pariatur.
      </div>
      <button className="booking__button">Booking</button>
    </div>
  </div>)
}

export default Booking;
