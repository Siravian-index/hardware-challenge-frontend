import * as React from "react"
import {Container, PasswordInput, TextInput} from "@mantine/core";

interface IProps {
}

const Login: React.FC<IProps> = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    return <>
        <form>
            <Container>
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
            </Container>
        </form>
    </>
}

export default Login


