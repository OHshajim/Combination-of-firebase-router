// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD5lhbmWdm3YNWJ-BC7jSuWTyvgBTgOxII",
    authDomain: "combination-of-firebase-router.firebaseapp.com",
    projectId: "combination-of-firebase-router",
    storageBucket: "combination-of-firebase-router.appspot.com",
    messagingSenderId: "536845642447",
    appId: "1:536845642447:web:1af0623489ca8d7409a5ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;