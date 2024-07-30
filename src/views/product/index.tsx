import { setCartItems } from "../../cart.reducer"
import Button from "../../components/common/Button"
import { useAppDispatch, useAppSelector } from "../../hooks"
import { CartItem } from "../../types/CartItem"
import { formatPriceToZAR } from "../../utils/money"
import "./style.css"
const Product = () => {
  const dispatch = useAppDispatch()

  //have to make cards as a component.
  const items: CartItem[] = [
    {
      _id: "783912",
      image: "../../assets/products/bar_soap.png",
      productName: "Bar Soap",
      price: 10,
      decription: "",
    },
    {
      _id: "456782",
      image: "../../assets/products/hand_lotion.png",
      productName: "Hand Lotion",
      price: 12,
      decription: "",
    },
    {
      _id: "123456",
      image: "../../assets/products/lip_sticks.png",
      productName: "Lip Sticks",
      price: 13,
      decription: "",
    },
    {
      _id: "987654",
      image: "../../assets/products/lip_sticks2.png",
      productName: "Lips sticks",
      price: 12,
      decription: "",
    },
    {
      _id: "132621",
      image: "../../assets/products/nail_polish.png",
      productName: "Nail Polish",
      price: 14,
      decription: "",
    },
    {
      _id: "2423422",
      image: "../../assets/products/nail_polish2.png",
      productName: "Nail Polish",
      price: 15,
      decription: "",
    },
    {
      _id: "345678",
      image: "../../assets/products/perfume.png",
      productName: "Perfume",
      price: 4.2,
      decription: "",
    },
  ]

  const { cartItems } = useAppSelector((state) => state.cart)

  return (
    <div className="product">
      {items.map((item, index) => {
        return (
          <div key={index} className="product__card">
            <div style={{display: "flex"}}>
              <img src={item.image} alt="" className="product__card__image" />
            </div>
            <div style={{display: "flex", justifyContent: "space-between"}}>
            <p style={{fontWeight: 700}}>{item.productName}</p>
            <p>
              {formatPriceToZAR(item.price)}
            </p>
            </div>
            <Button
              width="100%"
              onClick={() => {
                dispatch(setCartItems({ cartItems, item }))
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
