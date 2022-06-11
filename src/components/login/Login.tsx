import * as React from "react"
import {Button, Container, Paper, PasswordInput, Text, TextInput} from "@mantine/core";
import { getAuth,signInWithEmailAndPassword,createUserWithEmailAndPassword } from "firebase/auth";
import {useEffect} from "react";


interface IProps {
}

const Login: React.FC<IProps> = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    // const responseGoogle = (response: any) => {
    //     console.log(response);
    // }


    // useEffect(() => {
    //     const auth = getAuth();
    //     signInWithEmailAndPassword(auth, "depch47ff@gmail.com", "testing")
    //         .then((userCredential) => {
    //             // Signed in
    //             const user = userCredential.user;
    //             console.log(user)
    //             // ...
    //         })
    //         .catch((error) => {
    //             const errorCode = error.code;
    //             const errorMessage = error.message;
    //         });
    // }, [])
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()


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
                <Button color="cyan" type="submit" mt="xs">
                    Login
                </Button>
            {/*    Google login here*/}
            {/*    <GoogleLogin*/}
            {/*        clientId="872604210222-fuck1i3b1frm7ndopuuecik5pnhghgu3.apps.googleusercontent.com"*/}
            {/*        buttonText="Login"*/}
            {/*        onSuccess={responseGoogle}*/}
            {/*        onFailure={responseGoogle}*/}
            {/*        cookiePolicy={'none'}*/}
            {/*    />*/}
            </form>
        </Paper>

    </>
}

export default Login


