import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyCAv3BDdPRN1Ol-dHP_RnyHDWcoQXrn6tQ",
    authDomain: "alex-ecommerce-app.firebaseapp.com",
    projectId: "alex-ecommerce-app",
    storageBucket: "alex-ecommerce-app.appspot.com",
    messagingSenderId: "226783415742",
    appId: "1:226783415742:web:36d66eac9e513648f27def"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()
const auth = firebase.auth()

export {db, auth}