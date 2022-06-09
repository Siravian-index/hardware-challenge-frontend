import * as React from "react"
import {Button, Card, Group, Text, useMantineTheme} from "@mantine/core";
import {IReceipt} from "../../redux/features/receipt/receiptTypes";

interface IProps {
    receipt: IReceipt
}

const ReceiptCard : React.FC<IProps> = ({receipt}) => {
    const theme = useMantineTheme();

    const handleClick = () => {
        console.log("todo navigate to handle receipt")
        // navigate("/dashboard/receipt")
    }

    return <>
        <div>
            <Card shadow="sm" p="lg">
                <Group position="apart" style={{marginBottom: 5, marginTop: theme.spacing.sm}}>
                    <Text weight={500}>productId: {receipt.productId}</Text>
                    <Text weight={500}>amount bought: {receipt.amount}</Text>
                </Group>

                <Text size="sm" style={{lineHeight: 1.5}}>
                    {`${receipt.date}`}
                </Text>
                <Group position="apart" style={{marginBottom: 5, marginTop: theme.spacing.sm}}>
                    <Text weight={500}>Provider: {receipt.provider.name}</Text>
                    <Text weight={500}>{receipt.provider.card}</Text>
                    <Text weight={500}>{receipt.provider.name}</Text>
                </Group>

                <Button onClick={handleClick} variant="light" color="blue" fullWidth style={{marginTop: 14}}>
                    Manage
                </Button>
            </Card>
        </div>
    </>
}

export default ReceiptCard


