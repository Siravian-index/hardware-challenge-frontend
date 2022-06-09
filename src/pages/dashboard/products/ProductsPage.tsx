import * as React from "react"
import {Title} from "@mantine/core";
import ProductList from "../../../components/products/ProductList";

interface IProps {
}

const ProductsPage: React.FC<IProps> = () => {
    return <>
        <Title order={3} mb="xs">Products</Title>
        <ProductList/>
    </>
}

export default ProductsPage


