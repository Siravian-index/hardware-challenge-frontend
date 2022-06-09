import * as React from "react"
import {IProvider} from "../../redux/features/provider/providerTypes";
import { Card, Image, Text, Badge, Button, Group, useMantineTheme } from '@mantine/core';

interface IProps {
    provider: IProvider
}

const ProviderCard: React.FC<IProps> = ({provider}) => {
    const theme = useMantineTheme();

    const secondaryColor = theme.colorScheme === 'dark'
        ? theme.colors.dark[1]
        : theme.colors.gray[7];

    return (
        <div>
            <Card shadow="sm" p="lg">
                <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
                    <Text weight={500}>{provider.name}</Text>
                    <Badge color="pink" variant="light">
                        Remove
                    </Badge>
                </Group>

                <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
                    {provider.card}
                </Text>

                <Button variant="light" color="blue" fullWidth style={{ marginTop: 14 }}>
                    Contact
                </Button>
            </Card>
        </div>
    );
}

export default ProviderCard


