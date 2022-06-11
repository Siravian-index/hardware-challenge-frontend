import * as React from "react"
import {useEffect} from "react"
import {useSelector} from "react-redux";
import {getProductsThunk, selectProductList, selectProductStatus} from "../../redux/features/products/productSlice";
import {useAppDispatch} from "../../redux/app/store";
import {fetchStatus} from "../../redux/features/generalTypes";
import ProductCard from "./ProductCard";
import {SimpleGrid} from "@mantine/core";

interface IProps {}

const ProductList : React.FC<IProps> = () => {
    const products = useSelector(selectProductList())
    const status = useSelector(selectProductStatus())
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (status === fetchStatus.IDLE) {
            dispatch(getProductsThunk())
        }
    }, [])

    const content = products.map(product => <ProductCard key={product.id} product={product} />)

    return <SimpleGrid
        cols={4}
        spacing="lg"
        breakpoints={[
            {maxWidth: 980, cols: 3, spacing: 'md'},
            {maxWidth: 755, cols: 2, spacing: 'sm'},
            {maxWidth: 600, cols: 1, spacing: 'sm'},
        ]}>
        {content}
    </SimpleGrid>
}

export default ProductList


