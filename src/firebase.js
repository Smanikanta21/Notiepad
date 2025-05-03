// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBE-8LFjcjWBBvbiRTYukhN0YMVwN7wl-c",
  authDomain: "notiepad.firebaseapp.com",
  projectId: "notiepad",
  storageBucket: "notiepad.firebasestorage.app",
  messagingSenderId: "224950074539",
  appId: "1:224950074539:web:490dc2b6c0da987009cbee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
const auth = getAuth(app);
const db = getFirestore(app);

// Export services
export { auth, db };