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


const getIDs = (products: any) => {
  const productIds = products.map(product => product._id);
  return [...new Set(productIds)];
};

const addProduct = (products: any, newProduct:any) => {
  
  if (getIDs(products).includes(newProduct?._id)) {
    return products.map((product:any) => product._id === newProduct._id ? {...product, items: product.items + 1} : product)
  } else {
    return [...products, {...newProduct, items: 1}]
  }
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartItems: (state, action) => {
      state.cartItems = addProduct(action.payload.cartItems, action.payload.item);
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
