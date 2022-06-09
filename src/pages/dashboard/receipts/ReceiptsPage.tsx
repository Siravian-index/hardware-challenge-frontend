import * as React from "react"
import {Title} from "@mantine/core";
import ReceiptList from "../../../components/receipts/ReceiptList";

interface IProps {}

const ReceiptsPage : React.FC<IProps> = () => {
    return <>
        <Title order={3} mb="xs">Receipts</Title>
        <ReceiptList/>
    </>
}

export default ReceiptsPage


