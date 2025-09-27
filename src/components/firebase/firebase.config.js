// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxtivBLDqxJAp8Mwl-MJj0dFz69L5IcuE",
  authDomain: "clothing-donation-f4a93.firebaseapp.com",
  projectId: "clothing-donation-f4a93",
  storageBucket: "clothing-donation-f4a93.firebasestorage.app",
  messagingSenderId: "371302487685",
  appId: "1:371302487685:web:1876326b2c9ec120673bec",
  measurementId: "G-CVGE5B8MFG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;