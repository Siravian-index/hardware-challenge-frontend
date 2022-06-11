import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUser, IUserInitialState} from "./userTypes";
import {RootState} from "../../app/store";

const initialState: IUserInitialState = {
    user: null
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addUserToState: (state, action:PayloadAction<IUser>) => {
            state.user = action.payload
        },
        removeUserFromState: (state, action:PayloadAction<IUser>) => {
            state.user = null
        }
    },
})


export const {removeUserFromState, addUserToState} = userSlice.actions


export const selectUser = () => (state: RootState) => state.user.user



const userReducer= userSlice.reducer
export default userReducer