import React from "react"
import "./style.css"
import Button from "../../components/common/Button"
import { useNavigate } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../hooks"
import { setCartItems, removeItemFromCart } from "../../cart.reducer"
import { CartItem } from "../../types/CartItem"
import { formatPriceToZAR } from "../../utils/money"

const ListProduct = () => {
  const { cartItems } = useAppSelector((state) => state.cart)
  const dispatch = useAppDispatch()

  const navigate = useNavigate()

  const calculateSubTotal = () => {
    const totalByItem = cartItems
      .map((cartItems) => cartItems.items * cartItems.price)
      .reduce(
        (accumulator, currentValue) => (accumulator ?? 0) + (currentValue ?? 0),
        0
      )
    return totalByItem
  }

  const calculateVATOfPrice = () => {
    return calculateSubTotal() * 0.15
  }

  return (
    <div className="productList">
      <h3>Shopping Cart</h3>
      {cartItems && cartItems.length > 0 ? (
        <React.Fragment>
          <table className="productList__tb">
            <thead>
              <th>Product Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </thead>
            <tbody>
              {cartItems.map((cartItem: CartItem, index) => (
                <tr>
                  <td>{cartItem.productName}</td>
                  <td>{formatPriceToZAR(cartItem.price)}</td>
                  <td>
                    <span
                      style={{ background: "#fae7ea", borderRadius: "20px" }}
                    >
                      <span
                        style={{
                          cursor: "pointer",
                          borderRadius: "50px",
                          background: "pink",
                          padding: "0px 6px",
                          border: "50%",
                        }}
                        onClick={() =>
                          dispatch(
                            removeItemFromCart({ cartItems, item: cartItem })
                          )
                        }
                      >
                        {" "}
                        -{" "}
                      </span>
                      <span style={{ margin: "0px 8px" }}>
                        {cartItem.items}
                      </span>
                      <span
                        style={{
                          cursor: "pointer",
                          borderRadius: "50px",
                          background: "pink",
                          padding: "0px 6px",
                          border: "50%",
                        }}
                        onClick={() =>
                          dispatch(setCartItems({ cartItems, item: cartItem }))
                        }
                      >
                        {" "}
                        +{" "}
                      </span>
                    </span>
                  </td>
                  <td>{formatPriceToZAR(cartItem.price * cartItem.items)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <table className="productList__tb-checkout">
            <tr>
              <th>Sub Total</th>
              <td>{formatPriceToZAR(calculateSubTotal())}</td>
            </tr>
            <tr>
              <th>VAT (15%)</th>
              <td>{formatPriceToZAR(calculateVATOfPrice())}</td>
            </tr>
            <tr>
              <th>Total</th>
              <td>{formatPriceToZAR(calculateVATOfPrice() + calculateSubTotal())}</td>
            </tr>
          </table>
        </React.Fragment>
      ) : (
        <React.Fragment>You have no items in the shopping cart.</React.Fragment>
      )}
      <div className="productList__buttons">
        <Button
          name="Continue Shopping"
          onClick={() => navigate("/product")}
          buttonType={"primary"}
        />
        {cartItems && cartItems.length > 0 && (
          <Button
            name="Checkout"
            onClick={function (): void {
              throw new Error("Function not implemented.")
            }}
            buttonType={"primary"}
          />
        )}
      </div>
    </div>
  )
}

export default ListProduct
