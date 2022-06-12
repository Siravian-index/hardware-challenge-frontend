import * as React from "react"
import {useEffect} from "react"
import {Alert, Button, Container, NumberInput, Paper, Select} from "@mantine/core";
import {useSelector} from "react-redux";
import {selectProviderList} from "../../redux/features/provider/providerSlice";
import {selectProductList, updateProductThunk} from "../../redux/features/products/productSlice";
import {IProduct} from "../../redux/features/products/productTypes";
import {IReceipt} from "../../redux/features/receipt/receiptTypes";
import {IProvider} from "../../redux/features/provider/providerTypes";
import {useAppDispatch} from "../../redux/app/store";
import {postReceiptThunk} from "../../redux/features/receipt/receiptSlice";
import {AlertCircle} from "tabler-icons-react";

interface IProps {
}

const AddReceiptForm: React.FC<IProps> = () => {
    //dispatch
    const dispatch = useAppDispatch()
    //selectors
    const providerList = useSelector(selectProviderList())
    const productList = useSelector(selectProductList())
    //state
    const [providerId, setProviderId] = React.useState<string | null>("")
    const [productId, setProductId] = React.useState<string | null>("")
    const [amount, setAmount] = React.useState(0)
    const [productToEdit, setProductToEdit] = React.useState<IProduct>();
    //show state
    const [showButton, setShowButton] = React.useState(false)
    const [showSuccess, setShowSuccess] = React.useState(false)

    const providerSelectData = providerList.map((provider) => ({value: `${provider.id}`, label: provider.name}))
    const productSelectData = productList.map((product) => ({value: `${product.id}`, label: product.name}))

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const optionalProvider = providerList.find((provider) => provider.id === providerId)
        const isValid = [amount, optionalProvider?.name, productToEdit?.name, providerId, providerId].every(value => Boolean(value))
        if (isValid) {
            const provider = optionalProvider as IProvider
            const product = productToEdit as IProduct
            //receipt to save
            const newReceipt: IReceipt = {
                productId: `${productId}`,
                amount,
                provider
            }
            //product stock updated
            const updatedProductStock: IProduct = {...product, stock: product.stock + amount}
            //    dispatchers
            dispatch(postReceiptThunk(newReceipt))
            dispatch(updateProductThunk(updatedProductStock))
            //    setForm to default
            setShowSuccess(true)
            setProviderId("")
            setProductId("")
            setAmount(0)
        }
    }


    useEffect(() => {
        const optionalProduct = productList.find(p => p.id === productId)
        setProductToEdit(optionalProduct)
        setAmount(0)
    }, [productId])

    useEffect(() => {
        if (productToEdit) {
            const limit = productToEdit?.max - productToEdit?.stock
            setShowButton(amount <= limit && Boolean(amount))
        }
    }, [amount])

    const handleNumericChange = (e: number | undefined, setValueCallback: React.Dispatch<React.SetStateAction<number>>) => {
        if (typeof e === "number") {
            setValueCallback(e)
        }
    }
    return <>
        <Container size="xs" px="xs" my="xl">
            <Paper shadow="xs" p="xl">
                {
                    showSuccess &&
                    <Alert icon={<AlertCircle size={16} />} title="Receipt created correctly!!" color="lime" radius="xl">
                        Order placed correctly!
                    </Alert>
                }
                <form onSubmit={(e) => handleSubmit(e)}>
                    <Select
                        label="Select provider"
                        placeholder="Pick one"
                        value={providerId}
                        onChange={setProviderId}
                        data={providerSelectData}
                    />
                    <Select
                        label="Select Product"
                        placeholder="Pick one"
                        value={productId}
                        onChange={setProductId}
                        data={productSelectData}
                    />
                    {
                        productToEdit?.name &&
                        <>
                            <NumberInput
                                min={0}
                                max={productToEdit.max - productToEdit.stock}
                                value={amount}
                                onChange={(e) => handleNumericChange(e, setAmount)}
                                placeholder="Amount"
                                label={`Product's amount: ${productToEdit.stock + amount}/ ${productToEdit.max}`}
                                required
                            />
                            {
                                (productToEdit.stock + amount) >= productToEdit.max &&
                                <Alert title="Stock overflow" color="red">
                                    Product's stock has reached its max: {productToEdit.max}!
                                </Alert>
                            }

                        </>

                    }

                    {
                        showButton &&
                        <Button color="cyan" type="submit" mt="xs">
                            Add
                        </Button>
                    }

                </form>
            </Paper>
        </Container>
    </>
}

export default AddReceiptForm
