import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './store/cart.reducer'
import userReducer from './store/user.reducer'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch