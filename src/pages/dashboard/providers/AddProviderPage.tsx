import * as React from "react"
import {Title} from "@mantine/core";
import AddProviderForm from "../../../components/providers/AddProviderForm";

interface IProps {
}

const AddProviderPage: React.FC<IProps> = () => {

    return <>
        <Title order={3} mb="xs">Add new provider</Title>
        <AddProviderForm/>
    </>
}

export default AddProviderPage


