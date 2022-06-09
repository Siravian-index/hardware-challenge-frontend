import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {fetchStatus} from "../generalTypes";
import {IReceipt, IReceiptInitialState} from "./receiptTypes";
import {ENDPOINT, HEADERS, HttpMethod, placeErrorInState} from "../generalData";
import {IBill} from "../bill/billTypes";
import {RootState} from "../../app/store";


const initialState: IReceiptInitialState = {
    receiptList: [],
    error: null,
    status: fetchStatus.IDLE
}

//thunks
export const getReceiptsThunk = createAsyncThunk("get/receipts", async () => {
    const response = await fetch(`${ENDPOINT}bill`)
    return (await response.json()) as IReceipt[]
})

export const postReceiptThunk = createAsyncThunk("post/receipt", async (bill: IBill) => {
    const response = await fetch(`${ENDPOINT}bill`, {
        method: HttpMethod.POST,
        headers: HEADERS,
        body: JSON.stringify(bill)
    })
    return (await response.json()) as IReceipt
})

const receiptSlice = createSlice({
    name: "receipt",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getReceiptsThunk.pending, (state) => {
            state.status = fetchStatus.PENDING
        })
        builder.addCase(getReceiptsThunk.rejected, (state,action) => {
            const message = action.error.message;
            state.status = fetchStatus.REJECTED
            if (message) {
                state.error = placeErrorInState(message)
            }
        })
        builder.addCase(getReceiptsThunk.fulfilled, (state, action) => {
            state.receiptList = action.payload
            state.status = fetchStatus.FULFILL
        })
        builder.addCase(postReceiptThunk.pending, (state) => {
            state.status = fetchStatus.PENDING
        })
        builder.addCase(postReceiptThunk.rejected, (state, action) => {
            const message = action.error.message;
            state.status = fetchStatus.REJECTED
            if (message) {
                state.error = placeErrorInState(message)
            }
        })
        builder.addCase(postReceiptThunk.fulfilled, (state, action) => {
            state.receiptList.push(action.payload)
            state.status = fetchStatus.FULFILL
        })
    }
})


//selectors
export const selectReceiptList = () => (state: RootState) => state.receipt.receiptList
export const selectReceiptError = () => (state: RootState) => state.receipt.error
export const selectReceiptStatus = () => (state: RootState) => state.receipt.status

const receiptReducer = receiptSlice.reducer
export default receiptReducer


