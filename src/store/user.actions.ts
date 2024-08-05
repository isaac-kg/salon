import { Dispatch } from "@reduxjs/toolkit"
import { UserSlice } from "./user.reducer"

const { setUser, setUidAndEmail } = UserSlice.actions
export const addUserInformation = (user: any) => (dispatch: Dispatch) => {
  dispatch(setUser(user))
}

export const addUidAndEmail = (playload: any)=> (dispatch: Dispatch) => {
  dispatch(setUidAndEmail(playload))
}