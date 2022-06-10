import * as React from "react"
import {Title} from "@mantine/core";
import CreateBillForm from "../../../components/bills/CreateBIllForm";
import ComplexBillForm from "../../../components/bills/ComplexBillForm";

interface IProps {}

const CreateNewBillPage : React.FC<IProps> = () => {
    return <>
        <Title order={3} mb="xs">New Bill</Title>
        <CreateBillForm/>
        {/*<ComplexBillForm/>*/}
    </>
}

export default CreateNewBillPage


