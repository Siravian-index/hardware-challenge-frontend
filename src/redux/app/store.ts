import {configureStore} from "@reduxjs/toolkit";
import {useDispatch} from "react-redux";
import productReducer from "../features/products/productSlice";
import providerReducer from "../features/provider/providerSlice";

export const store = configureStore({
    reducer: {
        products: productReducer,
        providers: providerReducer,
    }
})

// ts types
export type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()