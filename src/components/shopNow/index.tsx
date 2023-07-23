import "./style.css"

const ShopNow = () => {
  return (
    <div className="product-container">
      <div className="product">
        <div className="product__image">
          <img className="product__image-1" src="src/assets/nails.jpg" alt="" />
        </div>
        <div className="product__description">
          <div className="product__description__title">
            Lorem ipsum dolor sit.
          </div>
          <div className="product__description__info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quos perferendis, ab quidem beatae corporis recusandae, itaque impedit velit odit soluta nulla.
          </div>
          <button className="product__description__btn">
            Show Now
          </button>
        </div>
      </div>
      
      <div className="product">
        <div className="product__image product__image-two">
          <img className="product__image-1" src="src/assets/nails.jpg" alt="" />
        </div>
        <div className="product__description product__description-two">
          <div className="product__description__title">
            Lorem ipsum dolor sit.
          </div>
          <div className="product__description__info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quos perferendis, ab quidem beatae corporis recusandae, itaque impedit velit odit soluta nulla.
          </div>
          <button className="product__description__btn">
            Show Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default ShopNow;