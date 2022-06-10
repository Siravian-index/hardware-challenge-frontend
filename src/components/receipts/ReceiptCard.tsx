import * as React from "react"
import {Card, Group, Text, useMantineTheme} from "@mantine/core";
import {IReceipt} from "../../redux/features/receipt/receiptTypes";
import {useSelector} from "react-redux";
import {selectProductById, selectProductList} from "../../redux/features/products/productSlice";

interface IProps {
    receipt: IReceipt
}

const ReceiptCard: React.FC<IProps> = ({receipt}) => {
    const theme = useMantineTheme();
    const optionalProduct = useSelector(selectProductById(receipt.productId))

    return <>
        <div>
            <Card shadow="sm" p="lg">
                <Group position="apart" style={{marginBottom: 5, marginTop: theme.spacing.sm}}>
                    {optionalProduct?.name ?
                        <Text weight={500}>Product: {optionalProduct.name}</Text> :
                        <Text weight={500}>Product: {receipt.productId}</Text>

                    }
                    <Text weight={500}>Amount bought: {receipt.amount}</Text>
                </Group>

                <Text size="sm" style={{lineHeight: 1.5}}>
                    {`Date: ${receipt.date}`}
                </Text>
                <Group position="apart" style={{marginBottom: 5, marginTop: theme.spacing.sm}}>
                    <Text weight={500}>Provider: {receipt.provider.name}</Text>
                    <Text weight={500}>Provider's card: {receipt.provider.card}</Text>
                </Group>

            </Card>
        </div>
    </>
}

export default ReceiptCard


