import {createSlice} from "@reduxjs/toolkit";
import {IProductInitialState} from "./productTypes";
import {fetchStatus} from "../generalTypes";
import {RootState} from "../../app/store";

//initial state
const initialState: IProductInitialState = {
    productsList: [],
    error: null,
    status: fetchStatus.IDLE
}

//thunks


const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {

    }
})


//export selectors
export const selectProductList = () => (state: RootState) => state.products.productsList
export const selectProductError = () => (state: RootState) => state.products.error
export const selectProductStatus = () => (state: RootState) => state.products.status

//exporting slice's reducer
const productReducer = productSlice.reducer;
export default productReducer;