import React from "react"
import "./style.css"

const ListProduct = () => {
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
        <button>Continue Shopping</button>
        <button>Checkout</button>
      </div>
    </div>
  )
}

export default ListProduct
