// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";


// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxVtk8EhJX9MxcfsZn1zfAfn40XWe5dzs",
  authDomain: "bermax-global-1977b.firebaseapp.com",
  projectId: "bermax-global-1977b",
  storageBucket: "bermax-global-1977b.appspot.com", // Corrigido .app para .appspot.com
  messagingSenderId: "85137372364",
  appId: "1:85137372364:web:bde9491b8fc53925a0fe69",
  measurementId: "G-SZESK27S3E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Export individually
export { createUserWithEmailAndPassword, auth };
