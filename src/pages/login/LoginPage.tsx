import * as React from "react"
import Login from "../../components/login/Login";
import {Container} from "@mantine/core";

interface IProps {}

const LoginPage : React.FC<IProps> = () => {
    const [show, setShow] = React.useState(false);

    return <Container size="xs" px="xs" my="xl">
        <Login/>
    </Container>
}

export default LoginPage


