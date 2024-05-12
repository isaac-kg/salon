import { setCartItems } from "../../cart.reducer"
import { useAppDispatch } from "../../hooks"
import "./style.css"
const Product = () => {
  const dispatch = useAppDispatch()

  //have to make cards as a component.
  return (
    <div className="product">
      <div className="product__card">
        <img src="" alt="" />
        <p>R 20.00</p>
        <button
          style={{ width: "100%" }}
          onClick={() => {
            dispatch(setCartItems({ _id: 1, name: "thisf", disc: "fdf" }))
          }}
        >
          Add to cart
        </button>
      </div>
      <div className="product__card">
        <img src="" alt="" />
        <p>R 20.00</p>
        <button
          style={{ width: "100%" }}
          onClick={() => {
            dispatch(setCartItems({ _id: 2, name: "thisf", disc: "fdf" }))
          }}
        >
          Add to cart
        </button>
      </div>
      <div className="product__card">
        <img src="" alt="" />
        <p>R 20s.00</p>
        <button
          style={{ width: "100%" }}
          onClick={() => {
            setCartItems({ _id: 3, name: "thisf", disc: "fdf" })
          }}
        >
          Add to cart
        </button>
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
