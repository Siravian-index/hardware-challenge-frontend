import * as React from "react"
import {Title} from "@mantine/core";
import ProductForm from "../../../components/products/ProductForm";

interface IProps {}

const AddProductPage : React.FC<IProps> = () => {
    return <>
        <Title order={3} mb="xs">New Product</Title>
        <ProductForm/>
    </>
}

export default AddProductPage


