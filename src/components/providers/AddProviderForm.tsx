import * as React from "react"
import {useEffect} from "react"
import {Alert, Button, Container, Paper, TextInput} from "@mantine/core";
import {useAppDispatch} from "../../redux/app/store";
import {postProviderThunk} from "../../redux/features/provider/providerSlice";


interface IProps {
}

const AddProviderForm: React.FC<IProps> = () => {
    const [name, setName] = React.useState('');
    const [card, setCard] = React.useState('');
    const [showAlert, setShowAlert] = React.useState(false)
    const dispatch = useAppDispatch()
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (name && card) {
            dispatch(postProviderThunk({name, card}))
            setName("")
            setCard("")
            setShowAlert(true)
        }
    }
    useEffect(() => {
        setTimeout(() => {
            setShowAlert(false)
        }, 5000)
    }, [showAlert])

    const validateCardBeforeSet = (underTest: string) => {
        const isNumeric = underTest.match(/^\d*$/)
        if (isNumeric) {
            setCard(underTest)
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
                        onChange={(event) => validateCardBeforeSet(event.currentTarget.value)}
                        placeholder="Card number"
                        label="Provider's card number"
                        required
                    />
                    <Button color="cyan" type="submit" mt="xs">
                        Add
                    </Button>
                </form>
            </Paper>
            {
                showAlert &&
                <Alert title="Added!" color="teal">
                    Provider added successfully
                </Alert>
            }

        </Container>
    </>
}

export default AddProviderForm