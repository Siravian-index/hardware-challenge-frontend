import * as React from "react"
import {Title} from "@mantine/core";
import ProviderList from "../../../components/providers/ProviderList";

interface IProps {}

const ProvidersPage : React.FC<IProps> = () => {
    return <>
        <Title order={3} mb="xs">Providers</Title>
        <ProviderList />
    </>
}

export default ProvidersPage


