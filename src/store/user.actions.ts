import { Dispatch } from "@reduxjs/toolkit"
import { UserSlice } from "./user.reducer"

const { setUser } = UserSlice.actions
export const addUserInformation = (user: any) => (dispatch: Dispatch) => {
  dispatch(setUser(user))
}
