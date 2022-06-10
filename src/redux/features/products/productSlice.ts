import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IProduct, IProductInitialState} from "./productTypes";
import {fetchStatus} from "../generalTypes";
import {RootState} from "../../app/store";
import {ENDPOINT, HEADERS, HttpMethod, placeErrorInState} from "../generalData";

//initial state
const initialState: IProductInitialState = {
    productsList: [],
    error: null,
    status: fetchStatus.IDLE
}

//thunks
export const getProductsThunk = createAsyncThunk("get/products",
    async () => {
        const response = await fetch(`${ENDPOINT}product`)
        return (await response.json()) as IProduct[]
    }
)

export const postProductThunk = createAsyncThunk("post/product", async (product: IProduct) => {
    const response = await fetch(`${ENDPOINT}product`, {
        method: HttpMethod.POST,
        headers: HEADERS,
        body: JSON.stringify(product)
    })
    return (await response.json()) as IProduct
})

export const deleteProductThunk = createAsyncThunk("delete/product", async (product: IProduct) => {
    const response = await fetch(`${ENDPOINT}product/${product.id}`, {method: HttpMethod.DELETE})
    return {wasDelete: response.ok, productId: product.id}
})

export const updateProductThunk = createAsyncThunk('put/product',
    async (product: IProduct) => {
        const response = await fetch(`${ENDPOINT}product/`, {
            method: HttpMethod.PUT,
            headers: HEADERS,
            body: JSON.stringify(product)
        })
        return (await response.json()) as IProduct
    }
)


const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getProductsThunk.pending, (state) => {
            state.status = fetchStatus.PENDING
        })
        builder.addCase(getProductsThunk.rejected, (state, action) => {
            const message = action.error.message;
            state.status = fetchStatus.REJECTED
            if (message) {
                state.error = placeErrorInState(message)
            }
        })
        builder.addCase(getProductsThunk.fulfilled, (state, action) => {
            state.productsList = action.payload
            state.status = fetchStatus.FULFILL
        })
        //POST
        builder.addCase(postProductThunk.pending, (state) => {
            state.status = fetchStatus.PENDING

        })
        builder.addCase(postProductThunk.rejected, (state, action) => {
            const message = action.error.message;
            state.status = fetchStatus.REJECTED
            if (message) {
                state.error = placeErrorInState(message)
            }
        })
        builder.addCase(postProductThunk.fulfilled, (state, action) => {
            state.productsList.push(action.payload)
        })
        //Delete
        builder.addCase(deleteProductThunk.pending, (state) => {
            state.status = fetchStatus.PENDING

        })
        builder.addCase(deleteProductThunk.rejected, (state, action) => {
            const message = action.error.message;
            state.status = fetchStatus.REJECTED
            if (message) {
                state.error = placeErrorInState(message)
            }
        })
        builder.addCase(deleteProductThunk.fulfilled, (state, action) => {
            if (action.payload.wasDelete) {
                state.productsList = state.productsList.filter((p) => p.id !== action.payload.productId)
                state.status = fetchStatus.FULFILL
            }
        })
        //PUT
        builder.addCase(updateProductThunk.pending, (state) => {
            state.status = fetchStatus.PENDING

        })
        builder.addCase(updateProductThunk.rejected, (state, action) => {
            const message = action.error.message;
            state.status = fetchStatus.REJECTED
            if (message) {
                state.error = placeErrorInState(message)
            }
        })
        builder.addCase(updateProductThunk.fulfilled, (state, action) => {
            const updatedProduct = action.payload
            state.productsList = state.productsList.map(p => p.id === updatedProduct.id ? updatedProduct : p)
            state.status = fetchStatus.FULFILL
        })

    }
})


//export selectors
export const selectProductList = () => (state: RootState) => state.products.productsList
export const selectProductById = (id:string) => (state: RootState) => state.products.productsList.find(p => p.id === id)
export const selectProductError = () => (state: RootState) => state.products.error
export const selectProductStatus = () => (state: RootState) => state.products.status

//exporting slice's reducer
const productReducer = productSlice.reducer;
export default productReducer;