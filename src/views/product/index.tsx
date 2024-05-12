import { setCartItems } from "../../cart.reducer"
import Button from "../../components/common/Button"
import { useAppDispatch } from "../../hooks"
import "./style.css"
const Product = () => {
  const dispatch = useAppDispatch()

  //have to make cards as a component.
  const items = [
    {
      _id: 1,
      image: "",
      productName: "Product 1",
      price: 120,
    },
    {
      _id: 2,
      image: "",
      productName: "Product 2",
      price: 12531.4,
    },
    {
      _id: 3,
      image: "",
      productName: "Product w",
      price: 104.2,
    },
    {
      _id: 4,
      image: "",
      productName: "Product 4",
      price: 102,
    },
    {
      _id: 11,
      image: "",
      productName: "Product s2",
      price: 120,
    },
    {
      _id: 12,
      image: "",
      productName: "Product fs2",
      price: 12531.4,
    },
    {
      _id: 23,
      image: "",
      productName: "Product 2fdsa",
      price: 104.2,
    },
  ]

  return (
    <div className="product">
      {items.map((item, index) => {
        return (
          <div key={index} className="product__card">
            <img src="" alt="" />
            <p>
              {item.price.toLocaleString("en-ZA", {
                style: "currency",
                currency: "ZAR",
              })}
            </p>
            <Button
              width="100%"
              onClick={() => {
                dispatch(setCartItems(item))
              }}
              name="Add"
              buttonType={"primary"}
            />
          </div>
        )
      })}
    </div>
  )
}

export default Product
