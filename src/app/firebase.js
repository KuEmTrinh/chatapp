// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAArD2XRskisgnFpZmFVO-F_pGc5NE10Co",
  authDomain: "chat-app-86fe9.firebaseapp.com",
  projectId: "chat-app-86fe9",
  storageBucket: "chat-app-86fe9.appspot.com",
  messagingSenderId: "8171530152",
  appId: "1:8171530152:web:f5d735567e61ef5c089f9d",
  measurementId: "G-1KJ617TFW8",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export { db };
export { firebase };
