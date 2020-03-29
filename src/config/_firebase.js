import * as firebase from "firebase/app";
import "firebase/auth";

// Firebase configuration

const firebaseApp = firebase.initializeApp({
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
});

export default firebaseApp;