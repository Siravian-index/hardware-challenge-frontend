import * as React from "react"
import Login from "../../components/login/Login";
import {Button, Container, Group} from "@mantine/core";
import SignUp from "../../components/login/SignUp";
import {useSelector} from "react-redux";
import {selectUser} from "../../redux/features/user/userSlice";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

interface IProps {
}

const LoginPage: React.FC<IProps> = () => {
    const [showLogin, setShowLogin] = React.useState(true);
    const navigate = useNavigate()
    const user = useSelector(selectUser())

    useEffect(() => {
        if (user) {
            console.log("redirrected")
            navigate("/dashboard")
        }
    }, [])

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


