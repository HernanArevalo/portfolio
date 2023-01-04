// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZcb9iXydKJ-rdRjDVMAwfqzYlLZssfSw",
  authDomain: "portfolio-1fe7f.firebaseapp.com",
  projectId: "portfolio-1fe7f",
  storageBucket: "portfolio-1fe7f.appspot.com",
  messagingSenderId: "820206694016",
  appId: "1:820206694016:web:011f40f262d99d48b20065"
};

// Initialize Firebase
export const FirebaseApp  = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB   = getFirestore( FirebaseApp );