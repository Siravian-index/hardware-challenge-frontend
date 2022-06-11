import {fetchStatus} from "../generalTypes";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {RootState} from "../../app/store";
import {IProvider, IProviderInitialState} from "./providerTypes";
import {ENDPOINT, HEADERS, HttpMethod, placeErrorInState} from "../generalData";

const initialState: IProviderInitialState = {
    providerList: [],
    error: null,
    status: fetchStatus.IDLE
}

//thunks
export const getProvidersThunk = createAsyncThunk("get/providers", async () => {
    const response = await fetch(`${ENDPOINT}provider`)
    return (await response.json()) as IProvider[]
})

export const postProviderThunk = createAsyncThunk("post/provider", async (provider: IProvider) => {
    const response = await fetch(`${ENDPOINT}provider`, {
        method: HttpMethod.POST,
        headers: HEADERS,
        body: JSON.stringify(provider)
    })
    return (await response.json()) as IProvider
})

export const deleteProvidersThunk = createAsyncThunk("delete/providers", async (id: string) => {
    const response = await fetch(`${ENDPOINT}provider/${id}`, {method: HttpMethod.DELETE})
    return {wasDelete: response.ok, providerId: id}
})

const providerSlice = createSlice({
    name: "provider",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        //GET
        builder.addCase(getProvidersThunk.pending, (state) => {
            state.status = fetchStatus.PENDING
        })
        builder.addCase(getProvidersThunk.rejected, (state, action) => {
            const message = action.error.message;
            state.status = fetchStatus.REJECTED
            if (message) {
                state.error = placeErrorInState(message)
            }
        })
        builder.addCase(getProvidersThunk.fulfilled, (state, action) => {
            state.providerList = action.payload
            state.status = fetchStatus.FULFILL
        })
        //POST
        builder.addCase(postProviderThunk.pending, (state) => {
            state.status = fetchStatus.PENDING
        })
        builder.addCase(postProviderThunk.rejected, (state, action) => {
            const message = action.error.message;
            state.status = fetchStatus.REJECTED
            if (message) {
                state.error = placeErrorInState(message)
            }
        })
        builder.addCase(postProviderThunk.fulfilled, (state, action) => {
            state.providerList.push(action.payload)
            state.status = fetchStatus.FULFILL
        })
    //    DELETE
        builder.addCase(deleteProvidersThunk.pending, (state) => {
            state.status = fetchStatus.PENDING
        })
        builder.addCase(deleteProvidersThunk.rejected, (state, action) => {
            const message = action.error.message;
            state.status = fetchStatus.REJECTED
            if (message) {
                state.error = placeErrorInState(message)
            }
        })
        builder.addCase(deleteProvidersThunk.fulfilled, (state, action) => {
            if (action.payload.wasDelete) {
                state.providerList = state.providerList.filter((p) => p.id !== action.payload.providerId)
                state.status = fetchStatus.FULFILL
            }
        })
    }
})


//export selectors
export const selectProviderList = () => (state: RootState) => state.providers.providerList
export const selectProviderError = () => (state: RootState) => state.providers.error
export const selectProviderStatus = () => (state: RootState) => state.providers.status

//exporting slice's reducer
const providerReducer = providerSlice.reducer;
export default providerReducer;