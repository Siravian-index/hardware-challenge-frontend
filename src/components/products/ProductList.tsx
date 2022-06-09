import * as React from "react"
import {useSelector} from "react-redux";
import {selectProductList, selectProductStatus} from "../../redux/features/products/productSlice";
import {useAppDispatch} from "../../redux/app/store";

interface IProps {}

const ProductList : React.FC<IProps> = () => {
    const products = useSelector(selectProductList())
    const status = useSelector(selectProductStatus())
    const dispatch = useAppDispatch()


    return <>
    </>
}

export default ProductList


