import * as React from "react"
import {Button, Container, MultiSelect, Paper, Text, TextInput} from "@mantine/core";
import {useSelector} from "react-redux";
import {selectProductList} from "../../redux/features/products/productSlice";

interface IProps {
}

const CreateBillForm: React.FC<IProps> = () => {
    const DEFAULT_SELLER = "Raul"
    //select
    const productList = useSelector(selectProductList())
    //state
    const [customer, setCustomer] = React.useState('');
    const [total, setTotal] = React.useState(0)
    const [productsToBeSold, setProductsToBeSold] = React.useState([] as string[])

    //selectData
    const selectProductData = productList.map((p) => ({label: p.name, value: JSON.stringify(p)}))

    //handleSubmit
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }
    return <>
        <Container size="xs" px="xs" my="xl">
            <Paper shadow="xs" p="xl">
                <form onSubmit={(e) => handleSubmit(e)}>
                    <TextInput
                        value={customer}
                        onChange={(event) => setCustomer(event.currentTarget.value)}
                        placeholder="Name"
                        label="Customer's name"
                        required/>

                    <MultiSelect
                        data={selectProductData}
                        value={productsToBeSold}
                        onChange={setProductsToBeSold}
                        label="Select products to sell"
                        placeholder="Pick all that you need"
                    />
                    {/*<Button color="cyan" type="submit" mt="xs">*/}
                    {/*    Add*/}
                    {/*</Button>*/}

                </form>
            </Paper>

        </Container>
    </>
}

export default CreateBillForm


/*
*
* {
  "customer": "string",
  "seller": "string",
  "productsSold": [
    {
      "id": "string",
      "name": "string",
      "price": 0,
      "amount": 0
    }
  ],
  "total": 0
}
* */