import * as React from "react"
import {Button, Container, Paper, TextInput} from "@mantine/core";
import {useAppDispatch} from "../../redux/app/store";
import {postProviderThunk} from "../../redux/features/provider/providerSlice";


interface IProps {
}

const AddProviderForm: React.FC<IProps> = () => {
    const [name, setName] = React.useState('');
    const [card, setCard] = React.useState('');
    const dispatch = useAppDispatch()
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (name && card) {
            dispatch(postProviderThunk({name, card}))
            setName("")
            setCard("")
        }
    }

    return <>
        <Container size="xs" px="xs" my="xl">

            <Paper shadow="xs" p="xl">
                <form onSubmit={(e) => handleSubmit(e)}>
                    <TextInput
                        value={name}
                        onChange={(event) => setName(event.currentTarget.value)}
                        placeholder="Name"
                        label="Provider's name"
                        required/>
                    <TextInput
                        value={card}
                        onChange={(event) => setCard(event.currentTarget.value)}
                        placeholder="Card number"
                        label="Provider's card number"
                        required
                    />
                    <Button color="cyan" type="submit" mt="xs">
                        Add
                    </Button>
                </form>
            </Paper>
        </Container>
    </>
}

export default AddProviderForm