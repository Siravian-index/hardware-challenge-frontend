import {configureStore} from "@reduxjs/toolkit";
import {useDispatch} from "react-redux";
import productReducer from "../features/products/productSlice";
import providerReducer from "../features/provider/providerSlice";
import billReducer from "../features/bill/billSlice";
import receiptReducer from "../features/receipt/receiptSlice";
import userReducer from "../features/user/userSlice";

export const store = configureStore({
    reducer: {
        products: productReducer,
        providers: providerReducer,
        bill: billReducer,
        receipt: receiptReducer,
        user: userReducer
    }
})

// ts types
export type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()