import {initializeApp} from 'firebase/app'
import { createContext , useContext } from 'react';
import { getAuth , createUserWithEmailAndPassword , GoogleAuthProvider , signInWithPopup , GithubAuthProvider } from 'firebase/auth'
import { getDatabase , set , ref } from 'firebase/database'

const FirebaseContext = createContext(null);

const firebaseConfig = {
    apiKey: "AIzaSyCUocwYDBEwe5t0dEpHooHFhNBp7xON6us",
    authDomain: "fir-project-2-b30ea.firebaseapp.com",
    projectId: "fir-project-2-b30ea",
    storageBucket: "fir-project-2-b30ea.appspot.com",
    messagingSenderId: "803620389099",
    appId: "1:803620389099:web:16533e3b0fc7b9a4e6beae",
    measurementId: "G-8KFQJ35J6D",
    databaseURL: "https://fir-project-2-b30ea-default-rtdb.firebaseio.com"
};

// App Instance
const firebaseApp = initializeApp(firebaseConfig);

// Database Instance
const firebaseDatabase = getDatabase(firebaseApp);

// Auth Instance
const firebaseAuth = getAuth(firebaseApp);

// Google Auth Instance
const googleProvider = new GoogleAuthProvider();

// Github Auth Instance
const githubProvider = new GithubAuthProvider();

// Custom Hook
export const useFirebaseContext = () => useContext(FirebaseContext);

// Provider
export const FirebaseProvider = (props) => {

    // Sign Up With Google
    const signUpWithGoogle = () => {
        return signInWithPopup(firebaseAuth,googleProvider).then((value) => alert("Success Google Sign Up")).catch((error) => alert("Error"));
    }

    // Sign Up With Github
    const signUpWithGithub = () => {
        return signInWithPopup( firebaseAuth , githubProvider ).then((value) => alert("Success Github Sign Up")).catch((error) => alert("Error"));
    }


    // Put Data Function
    const putData = (key,data) => set(ref(firebaseDatabase,key),data);

    // Sign Up Function
    const signUp = (email,password) => {
        return createUserWithEmailAndPassword(firebaseAuth,email,password).then((value) => alert("Success Gmail Sign Up")).catch((error) => alert("Error"));
    }
    
    return (
        <FirebaseContext.Provider value={{signUp,putData,signUpWithGoogle,signUpWithGithub}}>
            {props.children}
        </FirebaseContext.Provider>
    )

}