import * as React from "react"
import {Alert, Button, Paper, PasswordInput, Text, TextInput} from "@mantine/core";
import {createUserWithEmailAndPassword} from "firebase/auth";
import {auth} from "../../firebase";
import {AlertCircle} from "tabler-icons-react";

interface IProps {
    setShowLogin: React.Dispatch<React.SetStateAction<boolean>>
}

const SignUp: React.FC<IProps> = ({setShowLogin}) => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');
    const [showAlert, setShowAlert] = React.useState(false)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (email && (password === confirmPassword)) {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    console.log(userCredential)
                    setShowLogin(true)
                })
                .catch((error) => {
                    const errorMessage = error.message;
                    console.log(errorMessage);

                });
            setEmail('')
            setPassword('')
        }else {
            setShowAlert(true)
        }
    }

    return <>

        <Paper shadow="xs" p="xl">
            <form onSubmit={(e) => handleSubmit(e)}>
                <Text align="center" size="lg" color="blue">Sign up</Text>
                <TextInput
                    value={email}
                    onChange={(event) => setEmail(event.currentTarget.value)}
                    placeholder="Your email"
                    label="Email"
                    required/>
                <PasswordInput
                    value={password}
                    onChange={(event) => setPassword(event.currentTarget.value)}
                    placeholder="Password"
                    label="Password"
                    required
                />
                <PasswordInput
                    value={confirmPassword}
                    onChange={(event) => setConfirmPassword(event.currentTarget.value)}
                    placeholder="Confirm password"
                    label="Confirm Password"
                    required
                />
                {showAlert && <Alert icon={<AlertCircle size={16}/>} title="Wrong email or password" color="red">
                    Check your credentials and try again!
                </Alert>}
                <Button color="cyan" type="submit" mt="xs">
                    Sign up
                </Button>
            </form>

        </Paper>
    </>
}


export default SignUp


