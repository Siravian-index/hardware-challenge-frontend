import * as React from "react"
import {Alert, Button, Container, NumberInput, Paper, Select, TextInput} from "@mantine/core";
import {IProvider} from "../../redux/features/provider/providerTypes";
import {useSelector} from "react-redux";
import {selectProviderList} from "../../redux/features/provider/providerSlice";
import {IProduct} from "../../redux/features/products/productTypes";
import {useAppDispatch} from "../../redux/app/store";
import {postProductThunk} from "../../redux/features/products/productSlice";
import {AlertCircle} from "tabler-icons-react";
import {useEffect} from "react";

interface IProps {
}

const ProductForm: React.FC<IProps> = () => {
    const DEFAULT_STOCK = 0
    const providerList = useSelector(selectProviderList())
    const dispatch = useAppDispatch()
    const [showAlert, setShowAlert] = React.useState(false)
    const [showSuccess, setShowSuccess] = React.useState(false)
    const [name, setName] = React.useState("")
    const [description, setDescription] = React.useState("")
    const [price, setPrice] = React.useState(0)
    const [max, setMax] = React.useState(0)
    const [min, setMin] = React.useState(0)
    const [providerId, setProviderId] = React.useState<string | null>("")

    const providerSelectData = providerList.map((provider) => ( {value: `${provider.id}`, label: provider.name}))

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const optionalProvider = providerList.find((provider) => provider.id === providerId)
        const isValid = [name, description, price, max, min, optionalProvider?.name].every(value => Boolean(value))
        const correctMinMaxRatio = max > min
        if (isValid && correctMinMaxRatio) {
            const provider = optionalProvider as IProvider
            const newProduct: IProduct = {
                name,
                description,
                price,
                max,
                min,
                stock: DEFAULT_STOCK,
                provider
            }
            dispatch(postProductThunk(newProduct))
            setShowSuccess(true)
            setName("")
            setDescription("")
            setPrice(0)
            setMax(0)
            setMin(0)
            setProviderId("")
        } else {
            setShowAlert(true)
        }
    }

    const handleNumericChange = (e: number | undefined, setValueCallback: React.Dispatch<React.SetStateAction<number>>) => {
        if (typeof e === "number") {
            setValueCallback(e)
        }
    }

    useEffect(() => {
        let id = setTimeout(() => {
            setShowAlert(false)
        }, 5000)
        return () => {
            clearTimeout(id)
        }
    }, [showAlert])

    return <>
        <Container size="xs" px="xs" my="xl">
            <Paper shadow="xs" p="xl">
                {
                    showSuccess &&
                    <Alert icon={<AlertCircle size={16} />} title="Product added successfully!" color="lime" radius="xl">
                        Product was added to the inventory correctly.
                    </Alert>
                }
                <form onSubmit={(e) => handleSubmit(e)}>
                    <TextInput
                        value={name}
                        onChange={(event) => setName(event.currentTarget.value)}
                        placeholder="Name"
                        label="Product's name"
                        required/>
                    <TextInput
                        value={description}
                        onChange={(event) => setDescription(event.currentTarget.value)}
                        placeholder="Description"
                        label="Product's description"
                        required
                    />
                    <NumberInput
                        min={0}
                        value={min}
                        onChange={(e) => handleNumericChange(e, setMin)}
                        placeholder="Min"
                        label="Min amount"
                        required
                    />
                    <NumberInput
                        min={0}
                        value={max}
                        onChange={(e) => handleNumericChange(e, setMax)}

                        placeholder="Max"
                        label="Max amount"
                        required
                    />
                    <NumberInput
                        min={0}
                        value={price}
                        onChange={(e) => handleNumericChange(e, setPrice)}
                        placeholder="Price"
                        label="Product's price"
                        required
                    />
                    <Select
                        label="Select provider"
                        placeholder="Pick one"
                        value={providerId}
                        onChange={setProviderId}
                        data={providerSelectData}
                        required
                    />
                    {
                        showAlert &&
                        <Alert icon={<AlertCircle size={16} />} title="There is a mistake in the form." color="red" radius="xl">
                            Some properties do not match the requirements. i.e. max is lower than min amount.
                        </Alert>
                    }
                    <Button color="cyan" type="submit" mt="xs">
                        Add
                    </Button>
                </form>
            </Paper>
        </Container>
    </>
}

export default ProductForm


