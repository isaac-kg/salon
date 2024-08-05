import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  user: null,
  uidAndEmail: null
}
export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload
    },
    setUidAndEmail: (state, action) => {
      state.uidAndEmail = action.payload
    }
  },
})

export default UserSlice.reducer
