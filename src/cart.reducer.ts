import { createSlice } from "@reduxjs/toolkit"
import { CartItem } from "./types/CartItem"

export interface CartItemsState {
  cartItems: CartItem[]
  totalItemIncart: number
}
const initialState: CartItemsState = {
  cartItems: [],
  totalItemIncart: 0,
}

const getIDs = (products: CartItem[]) => {
  const productIds = products.map((product: CartItem) => product._id)
  return [...new Set(productIds)]
}

const addProduct = (products: CartItem[], newProduct: CartItem) => {
  if (getIDs(products).includes(newProduct._id)) {
    return products.map((product: CartItem) =>
      product._id === newProduct._id
        ? { ...product, items: (product.items ?? 0) + 1 }
        : product
    )
  } else {
    return [...products, { ...newProduct, items: 1 }]
  }
}

const removeProduct = (products: CartItem[], newProduct: CartItem) => {
  return products
    .map((product: CartItem) => {
      if (product._id === newProduct._id) {
        if (product.items === 1) {
          return null
        } else {
          return { ...product, items: (product.items ?? 0) - 1 }
        }
      }

      return product
    })
    .filter(Boolean)
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartItems: (state, action) => {
      state.cartItems = addProduct(
        action.payload.cartItems,
        action.payload.item
      )
    },
    removeItemFromCart: (state, action) => {
      state.cartItems = removeProduct(
        action.payload.cartItems,
        action.payload.item
      )
    },
  },
})

export const { setCartItems, removeItemFromCart } = cartSlice.actions
export default cartSlice.reducer
