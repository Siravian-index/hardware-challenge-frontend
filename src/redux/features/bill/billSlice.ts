import {createSlice} from "@reduxjs/toolkit";
import {IBillInitialState} from "./billTypes";
import {fetchStatus} from "../generalTypes";

const initialState: IBillInitialState = {
    billList: [],
    status: fetchStatus.IDLE,
    error: null,
}

export const billSlice = createSlice({
    name: "bill",
    initialState,
    reducers: {},
    extraReducers: (builder) => {

    }
})



const billReducer = billSlice.reducer
export default billReducer