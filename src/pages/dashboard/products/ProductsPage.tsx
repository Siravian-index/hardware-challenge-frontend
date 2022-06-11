import * as React from "react"
import {Title} from "@mantine/core";
import ProductList from "../../../components/products/ProductList";
import AlertLowSupply from "../../../components/products/AlertLowSupply";

interface IProps {
}

const ProductsPage: React.FC<IProps> = () => {
    return <>
        <Title order={3} mb="xs">Products</Title>
        {/*alert here*/}
        <AlertLowSupply/>
        <ProductList/>
    </>
}

export default ProductsPage


