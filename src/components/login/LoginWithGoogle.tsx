import * as React from "react"
import {Button} from "@mantine/core";
import {signInWithPopup} from "firebase/auth";
import {auth} from "../../firebase";
import firebase from "firebase/compat";
import {useAppDispatch} from "../../redux/app/store";
import {useNavigate} from "react-router-dom";
import {addUserToState} from "../../redux/features/user/userSlice";
import {IUser} from "../../redux/features/user/userTypes";
import GoogleAuthProvider = firebase.auth.GoogleAuthProvider;

interface IProps {
}


const providerGoogleAuth = new GoogleAuthProvider();

const LoginWithGoogle: React.FC<IProps> = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate()

    const signInWithGoogleButton = () => {

        signInWithPopup(auth, providerGoogleAuth)
            .then((result) => {
                const user = result.user;
                const userToDispatch: IUser = {
                    email: user.email,
                    uid: user.uid,
                    name: user.displayName,
                    photoURL: user.photoURL,
                    emailVerified: user.emailVerified
                }
                dispatch(addUserToState(userToDispatch))
                navigate('/dashboard')
            }).catch((error) => {
            console.log(error)
        });
    }

    return <>
        <Button onClick={signInWithGoogleButton} variant="gradient" gradient={{from: 'orange', to: 'red'}}>Google log in</Button>
    </>
}
export default LoginWithGoogle