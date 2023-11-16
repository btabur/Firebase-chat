// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getAuth, GoogleAuthProvider } from 'firebase/auth'
// Your web app's Firebase configuration
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyAOZlgG1J4E4hYOixyI1Y3E8jJmqwPtgUQ",
  authDomain: "react-project-chat-1d005.firebaseapp.com",
  projectId: "react-project-chat-1d005",
  storageBucket: "react-project-chat-1d005.appspot.com",
  messagingSenderId: "1051291878392",
  appId: "1:1051291878392:web:49cf648a1df7a7b3958c0d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//auth referansını alma
export const auth =getAuth(app);
//sap,ğlayıcının kurulumu yapma
export const provider = new GoogleAuthProvider()

//veritabanı referansının alma

export const db = getFirestore(app);