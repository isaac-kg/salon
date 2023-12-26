
import React from 'react';
import './style.css';

interface OfferProps {
  title: string;
  price: number;
  description: string;
  image: string;
}

const Offer = ({title, price, description, image}: OfferProps ) => {
  return (
    <React.Fragment>
      <h3 className="offer-header">Popular Offers</h3>
      <div className="offer__container">
        <div className="offer">
          <div className="offer__images">
            <img className="offer__image_1" src={"src/assets/service_eyeslashes.jpg"}/>
          </div>
          <div>
          <div className="offer__catergory">
            <div className="offer__name">
              Eyelash
            </div>
            <div className="offer__price">
              {"R "}175.00
            </div>
          </div>
          <div className="offer__description">
            Eyelash extensions tailored to enhance your unique beauty.
          </div>
          </div>
         </div>

        <div className="offer">
          <div className="offer__images">
            <img className="offer__image_1" src={"src/assets/service_makeup.jpg"}/>
          </div>
          <div>
          <div className="offer__catergory">
            <div className="offer__name">
              Makeup
            </div>
            <div className="offer__price">
              {"R "}260.00
            </div>
          </div>
          <div className="offer__description">
          Enhance your appearance for any event, making your natural beauty stand out.
         </div>
          </div>
        </div>

        <div className="offer">
          <div className="offer__images">
            <img className="offer__image_1" src={"src/assets/service_nails.jpg"}/>
          </div>
          <div>
          <div className="offer__catergory">
            <div className="offer__name">
              Manicure
            </div>
            <div className="offer__price">
              {"R "}200.00
            </div>
          </div>
          <div className="offer__description">
          Cosmetic beauty treatment for the fingernails and hands.
          </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Offer;