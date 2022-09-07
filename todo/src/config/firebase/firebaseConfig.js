// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, set} from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWI-aKiS3rXoLGMNu17OJdjw2g-ZeBRgg",
  authDomain: "bank-app-54d36.firebaseapp.com",
  projectId: "bank-app-54d36",
  storageBucket: "bank-app-54d36.appspot.com",
  messagingSenderId: "16550612147",
  appId: "1:16550612147:web:a8a35d6911b199b25234c6",
  measurementId: "G-21F2K1Y3YX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export const db = getDatabase(app);