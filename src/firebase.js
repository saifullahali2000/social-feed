// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhhU3VP_FMh8P9rZPK0HZMFjG1aZDjpXU",
  authDomain: "social-feed-78d34.firebaseapp.com",
  projectId: "social-feed-78d34",
  storageBucket: "social-feed-78d34.firebasestorage.app",
  messagingSenderId: "850495341535",
  appId: "1:850495341535:web:ab3b271c3f2c2f03113a6a",
  measurementId: "G-L59ETCB38W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);