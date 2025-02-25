// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-_ABZKCF7aMWxN8lmrhxRi47UCu9IMgQ",
  authDomain: "e-auth-bfa1a.firebaseapp.com",
  projectId: "e-auth-bfa1a",
  storageBucket: "e-auth-bfa1a.firebasestorage.app",
  messagingSenderId: "654154435598",
  appId: "1:654154435598:web:a56b51393ca239cee3405f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export { app , auth }