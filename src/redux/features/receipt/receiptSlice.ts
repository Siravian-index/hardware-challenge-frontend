import {createSlice} from "@reduxjs/toolkit";
import {fetchStatus} from "../generalTypes";
import {IReceiptInitialState} from "./receiptTypes";


const initialState: IReceiptInitialState = {
    receiptList: [],
    error: null,
    status: fetchStatus.IDLE
}

//thunks

const receiptSlice = createSlice({
    name: "receipt",
    initialState,
    reducers: {},
    extraReducers: (builder) => {

    }
})


//selectors


const receiptReducer = receiptSlice.reducer
export default receiptReducer


