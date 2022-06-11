import * as React from "react"
import {Alert, Button, Paper, PasswordInput, Text, TextInput} from "@mantine/core";
import {signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "../../firebase";
import {AlertCircle} from "tabler-icons-react";
import {useAppDispatch} from "../../redux/app/store";
import {IUser} from "../../redux/features/user/userTypes";
import {addUserToState} from "../../redux/features/user/userSlice";
import {useNavigate} from "react-router-dom";


interface IProps {
}

const Login: React.FC<IProps> = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [showAlert, setShowAlert] = React.useState(false)


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (email && password) {
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    console.log(user)
                    const userToDispatch: IUser = {
                        email: user.email,
                        uid: user.uid,
                        name: user.displayName,
                        photoURL: user.photoURL,
                        emailVerified: user.emailVerified
                    }
                    //dispatch
                    dispatch(addUserToState(userToDispatch))
                    //navigate
                    navigate("/dashboard")
                })
                .catch((error) => {
                    const errorMessage = error.message;
                    console.log(errorMessage)
                    setShowAlert(true)
                });
        } else {
            setShowAlert(true)
        }
    }

    return <>
        <Paper shadow="xs" p="xl">
            <form onSubmit={(e) => handleSubmit(e)}>
                <Text align="center" size="lg" color="blue">Login</Text>
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
                {showAlert && <Alert icon={<AlertCircle size={16}/>} title="Wrong email or password" color="red">
                    Check your credentials and try again!
                </Alert>}
                <Button color="cyan" type="submit" mt="xs">
                    Login
                </Button>
            </form>
        </Paper>
    </>
}

export default Login


