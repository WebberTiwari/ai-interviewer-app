// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyAC06nLwvCWllRijcrhNlDUo1aS79S0IAQ",
  authDomain: "prepwise-cd793.firebaseapp.com",
  projectId: "prepwise-cd793",
  storageBucket: "prepwise-cd793.firebasestorage.app",
  messagingSenderId: "299420861889",
  appId: "1:299420861889:web:afa62fc8df1445c91a1b40",
  measurementId: "G-7YW7M92LLL"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();


export const auth= getAuth(app);
export const db= getFirestore(app); 