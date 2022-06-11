import * as React from "react"
import {Button, Container, Group, MultiSelect, Paper, Text, TextInput} from "@mantine/core";
import {useSelector} from "react-redux";
import {selectProductList, updateProductThunk} from "../../redux/features/products/productSlice";
import ProductsToBeSoldCard from "./ProductsToBeSoldCard";
import {IProductToBeSold} from "../../redux/features/products/productTypes";
import {useAppDispatch} from "../../redux/app/store";
import {postBillThunk} from "../../redux/features/bill/billSlice";
import {IBill} from "../../redux/features/bill/billTypes";

interface IProps {
}

const CreateBillForm: React.FC<IProps> = () => {
    const DEFAULT_SELLER = "Raul"
    //dispatch
    const dispatch = useAppDispatch()
    //select
    const productList = useSelector(selectProductList())
    //state
    const [customer, setCustomer] = React.useState('');
    // const [total, setTotal] = React.useState(0) get total from store
    const [productsToBeSoldId, setProductsToBeSold] = React.useState([] as string[])

    //product to be sent to the thunk
    const [productToSellList, setProductsToSellList] = React.useState<IProductToBeSold[]>([])

    //selectData
    // const selectProductData = productList.map((p) => ({label: p.name, value: JSON.stringify(p)}))
    const selectProductData = productList
        .filter((p) => p.stock > 0)
        .map((p) => ({label: p.name, value: `${p.id}`}))



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

    const total = productToSellList.reduce((init, product) => init + (product.amount * product.price), 0)
    //handleSubmit
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (customer && productToSellList.length > 0) {
            //map list of products
            const productsSold = productToSellList.map((p) => ({id: p.id, name: p.name, price: p.price, amount: p.amount}))
            const newBill: IBill = {
                customer,
                seller: DEFAULT_SELLER,
                productsSold,
                total,
            }

        //  dispatch POST new bill
            dispatch(postBillThunk(newBill))
        // dispatch multiple PUT products
            const inStateProducts = productList.slice();
            for (let singleProductSold of productToSellList) {
                for (let productToSave of inStateProducts ) {
                    if (singleProductSold.id === productToSave.id) {
                        productToSave = {...productToSave, stock: productToSave.stock - singleProductSold.amount}
                        dispatch(updateProductThunk(productToSave))
                    }
                }
            }
            handleClearAll()
        }
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
                        mb='md'
                        data={selectProductData}
                        value={productsToBeSoldId}
                        onChange={setProductsToBeSold}
                        label="Select products to sell"
                        placeholder="Pick all that you need"
                    />

                    {content}

                    {
                        showConfirmButton &&
                        <Button  color="green" type="submit" mt="xs">
                            Confirm sell
                        </Button>
                    }
                </form>

                {
                    showClearAllButton &&
                    <Group position="center">

                    <Button onClick={handleClearAll} color="red" type="submit" mt="xs">
                        Reset purchase
                    </Button>
                        <Text>Total: {total}</Text>
                    </Group>

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