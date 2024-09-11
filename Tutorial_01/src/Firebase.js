import {initializeApp} from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyBLEKNDHiffxu3qSNu2s3vibZOM4SUkwzg",
    authDomain: "fir-project-1-47077.firebaseapp.com",
    projectId: "fir-project-1-47077",
    storageBucket: "fir-project-1-47077.appspot.com",
    messagingSenderId: "268771086272",
    appId: "1:268771086272:web:c1b7ed572142facacd0225",
    databaseURL :"https://fir-project-1-47077-default-rtdb.firebaseio.com"
};

export const app = initializeApp(firebaseConfig);