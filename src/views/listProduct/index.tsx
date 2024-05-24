import React from "react"
import "./style.css"
import Button from "../../components/common/Button"
import { useNavigate } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../hooks"
import { setCartItems, removeItemFromCart } from "../../cart.reducer"

const ListProduct = () => {
  const { totalItemIncart, cartItems } = useAppSelector((state) => state.cart)
  const dispatch = useAppDispatch()

  const navigate = useNavigate()

  return (
    <div className="productList">
      <h3>Shopping Cart</h3>
      <table className="productList__tb">
        <thead>
          <th>Product Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
        </thead>
        <tbody>
          {cartItems.map((cartItem, index) => (
            <tr>
              <td>{cartItem.productName}</td>
              <td>{cartItem.price}</td>
              <td>
                <span style={{background: "#fae7ea", borderRadius: "20px"}}>
                  <span
                    style={{ cursor: "pointer",borderRadius: "50px", background: "pink", padding: "0px 6px", border: "50%" }}
                    onClick={() =>
                      dispatch(
                        removeItemFromCart({ cartItems, item: cartItem })
                      )
                    }
                  >
                    {" "}
                    -{" "}
                  </span>
                  <span style={{margin: "0px 8px"}}>{cartItem.items}</span>
                  <span
                    style={{ cursor: "pointer",borderRadius: "50px", background: "pink", padding: "0px 6px", border: "50%" }}
                    onClick={() =>
                      dispatch(setCartItems({ cartItems, item: cartItem }))
                    }
                  >
                    {" "}
                    +{" "}
                  </span>
                </span>
              </td>
              <td>{cartItem.price * cartItem.items}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <table className="productList__tb-checkout">
        <tr>
          <th>Sub Total</th>
          <td>R 100.00</td>
        </tr>
        <tr>
          <th>VAT (15%)</th>
          <td>R 15.00</td>
        </tr>
        <tr>
          <th>Total</th>
          <td>R 115.00</td>
        </tr>
      </table>
      <div className="productList__buttons">
        <Button
          name="Continue Shopping"
          onClick={() => navigate("/product")}
          buttonType={"primary"}
        />
        <Button
          name="Checkout"
          onClick={function (): void {
            throw new Error("Function not implemented.")
          }}
          buttonType={"primary"}
        />
      </div>
    </div>
  )
}

export default ListProduct
