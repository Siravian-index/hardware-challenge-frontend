import * as React from "react"
import {useEffect} from "react"
import {useSelector} from "react-redux";
import {getProvidersThunk, selectProviderList, selectProviderStatus} from "../../redux/features/provider/providerSlice";
import ProviderCard from "./ProviderCard";
import {useAppDispatch} from "../../redux/app/store";
import {fetchStatus} from "../../redux/features/generalTypes";
import {SimpleGrid} from "@mantine/core";

interface IProps {
}

const ProviderList: React.FC<IProps> = () => {
    const providers = useSelector(selectProviderList());
    const status = useSelector(selectProviderStatus())
    const dispatch = useAppDispatch();

    //dispatch get providers
    useEffect(() => {
        if (status === fetchStatus.IDLE) {
            dispatch(getProvidersThunk())
        }
    }, [])

    const content = providers.map((provider) => <ProviderCard key={provider.id} provider={provider}/>)
    return <SimpleGrid cols={4}
                       spacing="lg"
                       breakpoints={[
                           {maxWidth: 980, cols: 3, spacing: 'md'},
                           {maxWidth: 755, cols: 2, spacing: 'sm'},
                           {maxWidth: 600, cols: 1, spacing: 'sm'},
                       ]}>
        {content}
    </SimpleGrid>
}

export default ProviderList


