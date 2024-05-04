// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBN_kwy2waSy6wDz-Xzo_IqQemnlRk2Edc",
  authDomain: "ngn-app.firebaseapp.com",
  projectId: "ngn-app",
  storageBucket: "ngn-app.appspot.com",
  messagingSenderId: "132684450676",
  appId: "1:132684450676:web:0397b3357b46acecc13a21",
  measurementId: "G-Y42S676YGG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const  auth = getAuth(app)
export const storage = getStorage(app)
export const db = getFirestore(app)
