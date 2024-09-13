import {initializeApp} from 'firebase/app'
import { createContext , useContext } from 'react';
import { getAuth , createUserWithEmailAndPassword } from 'firebase/auth'
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

// Custom Hook
export const useFirebaseContext = () => useContext(FirebaseContext);

// Provider
export const FirebaseProvider = (props) => {

    // Put Data Function
    const putData = (key,data) => set(ref(firebaseDatabase,key),data);

    // Sign Up Function
    const signUp = (email,password) => {
        return createUserWithEmailAndPassword(firebaseAuth,email,password);
    }
    
    return (
        <FirebaseContext.Provider value={{signUp,putData}}>
            {props.children}
        </FirebaseContext.Provider>
    )

}