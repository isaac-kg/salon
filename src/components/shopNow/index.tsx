import "./style.css"

const ShopNow = () => {
  return (
    <div className="product-container">
      <div className="product">
        <div className="product__image">
          <img className="product__image-1" src="../../assets/makeup.jpg" alt="" />
        </div>
        <div className="product__description">
          <div className="product__description__title">
            Makeup
          </div>
          <div className="product__description__info">
          Are you ready to shine? Dive into our makeup collection and elevate your beauty game! Discover your perfect look today by exploring our collection and finding the ideal match for your style
          </div>
          <button className="product__description__btn">
            Shop Now
          </button>
        </div>
      </div>
      
      <div className="product">
        <div className="product__image product__image-two">
          <img className="product__image-1" src="../../assets/nails.jpg" alt="" />
        </div>
        <div className="product__description product__description-two">
          <div className="product__description__title">
           Manicure
          </div>
          <div className="product__description__info">
          Get your perfect manicure! Treat your nails to some love and care with our exclusive collection. Shop now and pamper yourself!
          </div>
          <button className="product__description__btn">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default ShopNow;