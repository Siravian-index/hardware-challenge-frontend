import * as React from "react"
import {useForm, formList} from '@mantine/form';
import {
    TextInput,
    Switch,
    Group,
    ActionIcon,
    Box,
    Text,
    Button,
    Code,
    MultiSelect,
    Select,
    NumberInput
} from '@mantine/core';
import {randomId} from '@mantine/hooks';
import {Trash} from 'tabler-icons-react';
import {useSelector} from "react-redux";
import {selectProductList} from "../../redux/features/products/productSlice";

interface IProps {
}

const ComplexBillForm: React.FC<IProps> = () => {
    const productList = useSelector(selectProductList())

    const selectData = productList.map(p => ({label: p.name, value: `${p.id}`, min: p.min, max:p.max, stock: p.stock}))

    console.log(selectData)
    const form = useForm({
        initialValues: {
            products: formList([{amount: 0, productId: '', key: randomId(), min: 0}]),
        },
    });

    const fields = form.values.products.map((item, index) => (
        <Group key={item.key} mt="xs">
            <Select
                data={selectData}
                sx={{flex: 1}}
                {...form.getListInputProps('products', index, 'productId')}
                required
                placeholder="Product"
            />
            <NumberInput
                placeholder="Amount"
                min={item.min}
                sx={{flex: 1}}
                {...form.getListInputProps('products', index, 'amount')}
                required
            />
            <ActionIcon
                color="red"
                variant="hover"
                onClick={() => form.removeListItem('products', index)}
            >
                <Trash size={16}/>
            </ActionIcon>
        </Group>
    ));

    return (
        <Box sx={{maxWidth: 500}} mx="auto">
            {fields.length > 0 ? (
                <Group mb="xs">
                    <Text weight={500} size="sm" sx={{flex: 1}}>
                        Products
                    </Text>
                    <Text weight={500} size="sm" pr={90}>
                        Amount
                    </Text>
                </Group>
            ) : (
                <Text color="dimmed" align="center">
                    No one here...
                </Text>
            )}

            {fields}

            <Group position="center" mt="md">
                <Button
                    onClick={() =>
                        form.addListItem('products', {amount: 0, productId: '', key: randomId(), min: 0})
                    }
                >
                    Add Product
                </Button>
            </Group>

            <Text size="sm" weight={500} mt="md">
                Form values:
            </Text>
            <Code block>{JSON.stringify(form.values, null, 2)}</Code>
        </Box>
    );
}

export default ComplexBillForm


