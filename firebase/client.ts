import { initializeApp, getApp, getApps } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_UKRZDKjGrGkkRJp0tCGP4r7khUviVeg",
  authDomain: "prepwise-718fd.firebaseapp.com",
  projectId: "prepwise-718fd",
  storageBucket: "prepwise-718fd.firebasestorage.app",
  messagingSenderId: "567523639821",
  appId: "1:567523639821:web:a8f08f96b0b4c0fc5c8b44",
  measurementId: "G-NEPG0CL1BE",
};

// Initialize Firebase
const app = !getApps.length ?  initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
