import React from "react"
import "./style.css"

const Offer = () => {
  const offers = [
    {
      imageSrc: "../../assets/service_eyeslashes.jpg",
      name: "Eyelash",
      price: "R 175.00",
      description: "Eyelash extensions tailored to enhance your unique beauty.",
    },
    {
      imageSrc: "../../assets/service_makeup.jpg",
      name: "Makeup",
      price: "R 260.00",
      description:
        "Enhance your appearance for any event, making your natural beauty stand out.",
    },
    {
      imageSrc: "../../assets/service_nails.jpg",
      name: "Manicure",
      price: "R 200.00",
      description: "Cosmetic beauty treatment for the fingernails and hands.",
    },
  ]

  return (
    <React.Fragment>
      <h3 className="offer-header">Popular Offers</h3>
      <div className="offer__container">
        {offers.map((offer, index) => (
          <div className="offer" key={index}>
            <div className="offer__images">
              <img className="offer__image_1" src={offer.imageSrc} />
            </div>
            <div>
              <div className="offer__catergory">
                <div className="offer__name">{offer.name}</div>
                <div className="offer__price">{offer.price}</div>
              </div>
              <div className="offer__description">{offer.description}</div>
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  )
}

export default Offer
