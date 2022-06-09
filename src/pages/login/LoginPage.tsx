import * as React from "react"
import Login from "../../components/login/Login";

interface IProps {}

const LoginPage : React.FC<IProps> = () => {
    const [show, setShow] = React.useState(false);

    return <div>
        <Login/>
    </div>
}

export default LoginPage


