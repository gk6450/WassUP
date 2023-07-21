import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCTeJnQDJEmvll3-kRhgOQ4ANCdkTYKKzA",
    authDomain: "wassup-59b1c.firebaseapp.com",
    projectId: "wassup-59b1c",
    storageBucket: "wassup-59b1c.appspot.com",
    messagingSenderId: "562797103398",
    appId: "1:562797103398:web:b25e47eef7b21433b0d9e7",
    measurementId: "G-4HZD5B25WK"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);