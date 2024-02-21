import "./style.css"
const Product = () => {
  
  //have to make cards as a component.
  return (
    <div className="product">
      <div className="product__card">
        <img src="" alt="" />
        <p>R 20.00</p>
        <button style={{ width: "100%" }}>Add to cart</button>
      </div>
      <div className="product__card">
        <img src="" alt="" />
        <p>R 20.00</p>
        <button style={{ width: "100%" }}>Add to cart</button>
      </div>
      <div className="product__card">
        <img src="" alt="" />
        <p>R 20s.00</p>
        <button style={{ width: "100%" }}>Add to cart</button>
      </div>

      <div className="product__card">
        <img src="" alt="" />
        <p>R 20.00</p>
        <button style={{ width: "100%" }}>Add to cart</button>
      </div>
      <div className="product__card">
        <img src="" alt="" />
        <p>R 20.00</p>
        <button style={{ width: "100%" }}>Add to cart</button>
      </div>
    </div>
  )
}

export default Product
