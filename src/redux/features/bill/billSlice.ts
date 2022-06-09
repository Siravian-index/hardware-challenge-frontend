import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IBill, IBillInitialState} from "./billTypes";
import {fetchStatus} from "../generalTypes";
import {ENDPOINT, HEADERS, HttpMethod, placeErrorInState} from "../generalData";

const initialState: IBillInitialState = {
    billList: [],
    status: fetchStatus.IDLE,
    error: null,
}

//thunk
export const getBillsThunk = createAsyncThunk("get/bills", async () => {
    const response = await fetch(`${ENDPOINT}bill`)
    return (await response.json()) as IBill[]
})

export const postBillThunk = createAsyncThunk("post/bill", async (bill: IBill) => {
    const response = await fetch(`${ENDPOINT}bill`, {
        method: HttpMethod.POST,
        headers: HEADERS,
        body: JSON.stringify(bill)
    })
    return (await response.json()) as IBill
})

export const billSlice = createSlice({
    name: "bill",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getBillsThunk.pending, (state) => {
            state.status = fetchStatus.PENDING
        })
        builder.addCase(getBillsThunk.rejected, (state,action) => {
            const message = action.error.message;
            state.status = fetchStatus.REJECTED
            if (message) {
                state.error = placeErrorInState(message)
            }
        })
        builder.addCase(getBillsThunk.fulfilled, (state, action) => {
            state.billList = action.payload
            state.status = fetchStatus.FULFILL
        })
        builder.addCase(postBillThunk.pending, (state) => {
            state.status = fetchStatus.PENDING
        })
        builder.addCase(postBillThunk.rejected, (state, action) => {
            const message = action.error.message;
            state.status = fetchStatus.REJECTED
            if (message) {
                state.error = placeErrorInState(message)
            }
        })
        builder.addCase(postBillThunk.fulfilled, (state, action) => {
            state.billList.push(action.payload)
            state.status = fetchStatus.FULFILL
        })
    }
})



const billReducer = billSlice.reducer
export default billReducer