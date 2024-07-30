import { setCartItems } from "../../cart.reducer"
import Button from "../../components/common/Button"
import { useAppDispatch, useAppSelector } from "../../hooks"
import { CartItem } from "../../types/CartItem"
import "./style.css"
const Product = () => {
  const dispatch = useAppDispatch()

  //have to make cards as a component.
  const items: CartItem[] = [
    {
      _id: "783912",
      image: "",
      productName: "Product 1",
      price: 10,
      decription: ""
    },
    {
      _id: "456782",
      image: "",
      productName: "Product 2",
      price: 12,
      decription: ""
    },
    {
      _id: "123456",
      image: "",
      productName: "Product w",
      price: 13,
      decription: ""
    },
    {
      _id: "987654",
      image: "",
      productName: "Product 4",
      price: 12,
      decription: ""
    },
    {
      _id: "132621",
      image: "",
      productName: "Product s2",
      price: 14,
      decription: ""
    },
    {
      _id: "2423422",
      image: "",
      productName: "Product fs2",
      price: 15,
      decription: ""
    },
    {
      _id: "345678",
      image: "",
      productName: "Product 2fdsa",
      price: 4.2,
      decription: ""
    },
  ]

  const { cartItems } = useAppSelector((state) => state.cart)

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
                dispatch(setCartItems({cartItems, item}))
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
