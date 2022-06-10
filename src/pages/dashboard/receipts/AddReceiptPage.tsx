import * as React from "react"
import {Title} from "@mantine/core";
import AddReceiptForm from "../../../components/receipts/AddReceiptForm";

interface IProps {}

const AddReceiptPage : React.FC<IProps> = () => {
    return <>
        <Title order={3} mb="xs">Place a new Receipt</Title>
        <AddReceiptForm/>
    </>
}

export default AddReceiptPage


