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
                // This gives you a Google Access Token. You can use it to access the Google API.
                // const credential:OAuthCredential | null = GoogleAuthProvider.credentialFromResult(result);
                // const token = credential!.accessToken;

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
            // // Handle Errors here.
            // const errorCode = error.code;
            // const errorMessage = error.message;
            // // The email of the user's account used.
            // const email = error.email;
            // // The AuthCredential type that was used.
            // const credential = GoogleAuthProvider.credentialFromError(error);
            // // ...
        });
    }

    return <>
        <Button variant="gradient" gradient={{from: 'orange', to: 'red'}}>Google log in</Button>
    </>
}
export default LoginWithGoogle