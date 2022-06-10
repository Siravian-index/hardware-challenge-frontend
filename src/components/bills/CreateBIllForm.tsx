import * as React from "react"
import {Button, Container, MultiSelect, Paper, Text, TextInput} from "@mantine/core";
import {useSelector} from "react-redux";
import {selectProductList} from "../../redux/features/products/productSlice";
import ProductsToBeSoldCard from "./ProductsToBeSoldCard";
import {IProductToBeSold} from "../../redux/features/products/productTypes";

interface IProps {
}

const CreateBillForm: React.FC<IProps> = () => {
    const DEFAULT_SELLER = "Raul"
    //select
    const productList = useSelector(selectProductList())
    //state
    const [customer, setCustomer] = React.useState('');
    // const [total, setTotal] = React.useState(0) get total from store
    const [productsToBeSoldId, setProductsToBeSold] = React.useState([] as string[])

    //product to be sent to the thunk
    const [productToSellList, setProductsToSellList] = React.useState<IProductToBeSold[]>([])

    console.log("miracle", productToSellList)
    console.log("id list", productsToBeSoldId)
    //selectData
    // const selectProductData = productList.map((p) => ({label: p.name, value: JSON.stringify(p)}))
    const selectProductData = productList
        .filter((p) => p.stock > 0)
        .map((p) => ({label: p.name, value: `${p.id}`}))

    //handleSubmit
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    const handleClearAll = () => {
        setProductsToBeSold([])
        setProductsToSellList([])
    }

    const showConfirmButton = productsToBeSoldId.length > 0 && productToSellList.length > 0 && productToSellList.length === productsToBeSoldId.length
    const showClearAllButton = productsToBeSoldId.length > 0 || productToSellList.length > 0

    const content = productsToBeSoldId.map((productId) => <ProductsToBeSoldCard key={productId}
                                                                                idCallbackSetter={setProductsToBeSold}
                                                                                callbackSetter={setProductsToSellList}
                                                                                productId={productId}/>)

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
                        mb='md'
                        data={selectProductData}
                        value={productsToBeSoldId}
                        onChange={setProductsToBeSold}
                        label="Select products to sell"
                        placeholder="Pick all that you need"
                    />

                    {content}
                    {/*total*/}


                    {
                        showConfirmButton &&
                        <Button color="green" type="submit" mt="xs">
                            Confirm sell
                        </Button>
                    }
                </form>

                {
                    showClearAllButton &&
                    <Button onClick={handleClearAll} color="red" type="submit" mt="xs">
                        Reset purchase
                    </Button>
                }

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