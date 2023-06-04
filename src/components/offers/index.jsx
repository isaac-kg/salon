
import './style.css';

const Offer  = ({title, price, description, image}) => {
  return (
    <div className="offer">
      <div className="offer__images">
        <img className="offer__image_1" src={image}/>
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
  )
}

export default Offer;