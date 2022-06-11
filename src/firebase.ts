// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
    apiKey: "AIzaSyD6ZAIG2PhIkBEW7myi6s5u_yiPYISJ75U",
    authDomain: "hardware-store-96800.firebaseapp.com",
    projectId: "hardware-store-96800",
    storageBucket: "hardware-store-96800.appspot.com",
    messagingSenderId: "815983784899",
    appId: "1:815983784899:web:24ee14b91d9f8323abc376"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app);
