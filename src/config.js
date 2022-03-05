import firebase from 'firebase';
import rebase from 're-base';

const firebaseConfig = {
    apiKey: "AIzaSyCB-L8UlBpnjsS11qcSiR8HJclI2mftX9I",
    authDomain: "appreactquiz.firebaseapp.com",
    projectId: "appreactquiz",
    storageBucket: "appreactquiz.appspot.com",
    messagingSenderId: "1000251913739",
    appId: "1:1000251913739:web:023eead26c734dcd6a790e",
    measurementId: "G-XFLEWJTBJB"
};

const db = firebase.database(firebaseConfig);
const config = rebase.createClass(db);

export default config;