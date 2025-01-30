// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnRpiJLDJjQx6Os7uidR_T0KKiksH-KZ0",
  authDomain: "bd-makeup.firebaseapp.com",
  projectId: "bd-makeup",
  storageBucket: "bd-makeup.firebasestorage.app",
  messagingSenderId: "405619178654",
  appId: "1:405619178654:web:5183509fb5875fdf768f8f"
};

// Initialize Firebase
let app;
if (!getApps().length) {
    app = initializeApp(firebaseConfig);
} else {
    app = getAuth() [0];
}
const db = getFirestore(app);
export const auth = getAuth(app);

export default db;