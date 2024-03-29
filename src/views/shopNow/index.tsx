import Button from "../../components/common/Button"
import "./style.css"
import { useNavigate } from "react-router-dom"

const ShopNow = () => {
  const navigate = useNavigate()
  return (
    <div className="shopNow-container">
      <div className="shopNow">
        <div className="shopNow__image">
          <img
            className="shopNow__image-1"
            src="../../assets/makeup.jpg"
            alt=""
          />
        </div>
        <div className="shopNow__description">
          <div className="shopNow__description__title">Makeup</div>
          <div className="shopNow__description__info">
            Are you ready to shine? Dive into our makeup collection and elevate
            your beauty game! Discover your perfect look today by exploring our
            collection and finding the ideal match for your style
          </div>
          <div>
            <Button
              name="Shop Now"
              onClick={() => navigate("/product")}
              buttonType={"primary"}
            />
          </div>
        </div>
      </div>

      <div className="shopNow">
        <div className="shopNow__image shopNow__image-two">
          <img
            className="shopNow__image-1"
            src="../../assets/nails.jpg"
            alt=""
          />
        </div>
        <div className="shopNow__description shopNow__description-two">
          <div className="shopNow__description__title">Manicure</div>
          <div className="shopNow__description__info">
            Get your perfect manicure! Treat your nails to some love and care
            with our exclusive collection. Shop now and pamper yourself!
          </div>
          <div>
            <Button
              name="Shop Now"
              onClick={() => navigate("/product")}
              buttonType={"primary"}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShopNow
