import * as React from "react"
import {Alert, Button, Container, NumberInput, Paper, Select, TextInput} from "@mantine/core";
import {IProvider} from "../../redux/features/provider/providerTypes";

interface IProps {
}

const ProductForm: React.FC<IProps> = () => {
    const [name, setName] = React.useState("")
    const [description, setDescription] = React.useState("")
    const [price, setPrice] = React.useState(0)
    const [max, setMax] = React.useState(0)
    const [min, setMin] = React.useState(0)
    const [provider, setProvider] = React.useState({} as IProvider)

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    return <>
        <Container size="xs" px="xs" my="xl">
            <Paper shadow="xs" p="xl">
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
                        defaultValue={0}
                        placeholder="Min"
                        label="Min amount"
                        required
                    />
                    <NumberInput
                        defaultValue={0}
                        placeholder="Max"
                        label="Max amount"
                        required
                    />
                    <NumberInput
                        defaultValue={0}
                        placeholder="Price"
                        label="Product's price"
                        required
                    />
                    <Select
                        label="Select provider"
                        placeholder="Pick one"
                        data={[
                            { value: 'react', label: 'React' },
                            { value: 'ng', label: 'Angular' },
                            { value: 'svelte', label: 'Svelte' },
                            { value: 'vue', label: 'Vue' },
                        ]}
                    />
                    <Button color="cyan" type="submit" mt="xs">
                        Add
                    </Button>
                </form>
            </Paper>
        </Container>
    </>
}

export default ProductForm


