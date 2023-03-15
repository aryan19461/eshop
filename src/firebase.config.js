
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'



const firebaseConfig = {
  apiKey: "AIzaSyCjqa8HT9Cc0MELU6udn166kndojr_z3KY",
  authDomain: "e-shop-3fb6c.firebaseapp.com",
  projectId: "e-shop-3fb6c",
  storageBucket: "e-shop-3fb6c.appspot.com",
  messagingSenderId: "30759791490",
  appId: "1:30759791490:web:c45c20cb1b042cc540bd9b",
  measurementId: "G-8522R1NJ62"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
export default app;