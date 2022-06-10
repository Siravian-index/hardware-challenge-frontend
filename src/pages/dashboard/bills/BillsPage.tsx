import * as React from "react"
import {Title} from "@mantine/core";
import BillList from "../../../components/bills/BillList";

interface IProps {}

const BillsPage : React.FC<IProps> = () => {
    return <>
        <Title order={3} mb="xs">Bills</Title>
        <BillList/>
    </>
}

export default BillsPage


