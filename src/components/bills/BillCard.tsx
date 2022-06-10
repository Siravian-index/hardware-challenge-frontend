import * as React from "react"
import {IBill} from "../../redux/features/bill/billTypes";
import {Card, Group, Text, useMantineTheme} from "@mantine/core";

interface IProps {
    bill: IBill
}

const BillCard: React.FC<IProps> = ({bill}) => {
    const theme = useMantineTheme();

    console.log(bill)

    const productSold = bill.productsSold.map((product) => {
        return <div key={product.id}>
            <Text weight={500}>name: {product.name}</Text>
            <Text weight={500}>amount: {product.amount}</Text>
            <Text weight={500}>price: {product.price}</Text>
        </div>
    })
    return <>
        <div>
            <Card shadow="sm" p="lg">
                <Group position="apart" style={{marginBottom: 5, marginTop: theme.spacing.sm}}>
                    <Text weight={500}>Seller: {bill.seller}</Text>
                    <Text weight={500}>Customer: {bill.customer}</Text>
                </Group>

                <Text>Products sold:</Text>
                <Group position="apart" style={{marginBottom: 5, marginTop: theme.spacing.sm}}>
                    {productSold}
                </Group>
                <Text>Total: {bill.total}</Text>

            </Card>
        </div>
    </>
}

export default BillCard


