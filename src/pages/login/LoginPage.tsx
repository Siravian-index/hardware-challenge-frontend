import * as React from "react"
import Login from "../../components/login/Login";
import {Button, Container, Group} from "@mantine/core";
import SignUp from "../../components/login/SignUp";

interface IProps {
}

const LoginPage: React.FC<IProps> = () => {
    const [showLogin, setShowLogin] = React.useState(false);

    return <Container size="xs" px="xs" my="xl">
        <Group>
            <Button onClick={() => setShowLogin(true)}>Login</Button>
            <Button onClick={() => setShowLogin(false)}>Sign up</Button>
        </Group>
        {
            showLogin ?
                <Login/>
                :
                <SignUp setShowLogin={setShowLogin}/>

        }


    </Container>
}

export default LoginPage


