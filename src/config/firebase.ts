// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_qoK04uYVUFT1fRX0dM8m8NUzhP0rZeo",
  authDomain: "aunix-studio.firebaseapp.com",
  projectId: "aunix-studio",
  storageBucket: "aunix-studio.firebasestorage.app",
  messagingSenderId: "160031030915",
  appId: "1:160031030915:web:c22575722a08bebf7fe5b6",
  measurementId: "G-CRK58J9P7K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();

export default app;
