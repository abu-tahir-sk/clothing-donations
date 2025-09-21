// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4IuQEIVMQbstcDAOx1yjoD2RpehUEIm4",
  authDomain: "clothinf-donation.firebaseapp.com",
  projectId: "clothinf-donation",
  storageBucket: "clothinf-donation.firebasestorage.app",
  messagingSenderId: "772454426115",
  appId: "1:772454426115:web:ee7411c95c68ea198c5036",
  measurementId: "G-DWWKNHESD1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;