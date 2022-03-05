import { initializeApp } from 'firebase/app';
import { getAuth, FacebookAuthProvider, TwitterAuthProvider } from "firebase/auth";
//import { getDatabase } from "firebase/database";
//import Rebase from 're-base';

const firebaseConfig = {
    apiKey: "AIzaSyCB-L8UlBpnjsS11qcSiR8HJclI2mftX9I",
    authDomain: "appreactquiz.firebaseapp.com",
    projectId: "appreactquiz",
    storageBucket: "appreactquiz.appspot.com",
    messagingSenderId: "1000251913739",
    appId: "1:1000251913739:web:023eead26c734dcd6a790e",
    measurementId: "G-XFLEWJTBJB"
};

const app = initializeApp(firebaseConfig);
//const database = getDatabase(app);

export const providers = {
    'facebook': new FacebookAuthProvider(),
    'twitter': new TwitterAuthProvider()
}

export const auth = getAuth();
//export default config;