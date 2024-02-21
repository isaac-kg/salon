import React from "react"
import "./style.css"
import Button from "../../components/common/Button"
import { useNavigate } from "react-router-dom"


const ListProduct = () => {

  const navigate = useNavigate();
  return (
    <div className="productList">
      <h3>Shopping Cart</h3>
      <table className="productList__tb">
        <thead>
          <th>Image</th>
          <th>Product Name</th>
          <th>Quantity</th>
          <th>Unit Price</th>
          <th>Total</th>
        </thead>
        <tr>
          <td>Lorem, ipsum.</td>
          <td>2 Lorem </td>
          <td>3 Lorem, ipsum.</td>
          <td>4 Lorem, ipsum.</td>
          <td>Lorem, ipsum. 5</td>
        </tr>
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
