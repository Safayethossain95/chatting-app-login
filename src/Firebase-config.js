// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmwXMlPlJ-npIn-TNsoFZAvWyOeFOHJQQ",
  authDomain: "mern-chat-5be44.firebaseapp.com",
  projectId: "mern-chat-5be44",
  storageBucket: "mern-chat-5be44.appspot.com",
  messagingSenderId: "921246407251",
  appId: "1:921246407251:web:5f8a412d9d21a7f6e3c4a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export let db = getFirestore(app);

const auth = getAuth();

export {auth,createUserWithEmailAndPassword, signInWithEmailAndPassword }