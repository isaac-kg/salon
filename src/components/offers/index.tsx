
import './style.css';

interface OfferProps {
  title: string;
  price: number;
  description: string;
  image: string;
}

const Offer = ({title, price, description, image}: OfferProps ) => {
  return (
    <div className="offer__container">
      <div className="offer">
        <div className="offer__images">
          <img className="offer__image_1" src={"src/assets/service_eyeslashes.jpg"}/>
        </div>
        <div>
        <div className="offer__catergory">
          <div className="offer__name">
            {title}.
          </div>
          <div className="offer__price">
            {"R "}{price}
          </div>
        </div>
        <div className="offer__description">
          {description}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime sint iste minus.
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
            {title}.
          </div>
          <div className="offer__price">
            {"-----------R "}{price}
          </div>
        </div>
        <div className="offer__description">
          {description}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime sint iste minus.
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
            {title}.
          </div>
          <div className="offer__price">
            {"R "}{price}
          </div>
        </div>
        <div className="offer__description">
          {description}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime sint iste minus.
        </div>
        </div>
      </div>
    </div>
  )
}

export default Offer;