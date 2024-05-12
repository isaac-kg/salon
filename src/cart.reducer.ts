import { createSlice } from "@reduxjs/toolkit"

export interface CartItem {
  price: number;
  name: string;
  image: string;
  decription: string;
}

const initialState = {
  cartItems: [],
  totalItemIncart: 0
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartItems: (state, action) => {
      state.cartItems.push(action.payload)
    },
    setCountItems: (state, action) =>{
      state.cartItems = 3
    },
    addItemToCart (state, action: any) {
      state.cartItems.push({fdsf: 'dsfdsa'})
    },
    removeItemFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter((item) => item._id !== action.payload._id)
    },
    updateItemInCart: (state, action) => {

    }
  },
})

export const {setCartItems, setCountItems} = cartSlice.actions
export default cartSlice.reducer
