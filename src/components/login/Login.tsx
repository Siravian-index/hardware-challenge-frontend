import * as React from "react"
import {Button, Container, Paper, PasswordInput, Text, TextInput} from "@mantine/core";

interface IProps {
}

const Login: React.FC<IProps> = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    return <>
        <Paper shadow="xs" p="xl">
            <form>
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
            </form>
        </Paper>

    </>
}

export default Login


