import * as React from "react"
import {IProvider} from "../../redux/features/provider/providerTypes";
import { Card, Image, Text, Badge, Button, Group, useMantineTheme } from '@mantine/core';
import {useAppDispatch} from "../../redux/app/store";
import {deleteProvidersThunk} from "../../redux/features/provider/providerSlice";
import {useNavigate} from "react-router-dom";
import {capitalizeFirstLetterOf} from "../../util";

interface IProps {
    provider: IProvider
}

const ProviderCard: React.FC<IProps> = ({provider}) => {
    const theme = useMantineTheme();

    const secondaryColor = theme.colorScheme === 'dark'
        ? theme.colors.dark[1]
        : theme.colors.gray[7];

    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const handleDelete = (provider: IProvider) => {
        if (provider.id) {
            dispatch(deleteProvidersThunk(provider.id))
        }
    }
    const handleClick = () => {
        navigate("/dashboard/receipt")
    }

    return (
        <div>
            <Card shadow="sm" p="lg">
                <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
                    <Text weight={500}>{capitalizeFirstLetterOf(provider.name)}</Text>
                    <Button onClick={() => handleDelete(provider)} color='red' compact>Delete</Button>
                </Group>

                <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
                    {provider.card}
                </Text>

                <Button onClick={handleClick} variant="light" color="blue" fullWidth style={{ marginTop: 14 }}>
                    Contact
                </Button>
            </Card>
        </div>
    );
}

export default ProviderCard


