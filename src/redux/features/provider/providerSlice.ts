import {fetchStatus} from "../generalTypes";
import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "../../app/store";
import {IProviderInitialState} from "./providerTypes";

const initialState: IProviderInitialState = {
    providerList: [],
    error: null,
    status: fetchStatus.IDLE
}

//thunks


const providerSlice = createSlice({
    name: "provider",
    initialState,
    reducers: {},
    extraReducers: (builder) => {

    }
})


//export selectors
export const selectProviderList = () => (state: RootState) => state.providers.providerList
export const selectProviderError = () => (state: RootState) => state.providers.error
export const selectProviderStatus = () => (state: RootState) => state.providers.status

//exporting slice's reducer
const providerReducer = providerSlice.reducer;
export default providerReducer;