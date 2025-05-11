import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBFnteFrVcO9d66ECjMd9moqp_X0EDHmp0",
  authDomain: "youdemonia-560ee.firebaseapp.com",
  projectId: "youdemonia-560ee",
  storageBucket: "youdemonia-560ee.firebasestorage.app",
  messagingSenderId: "77843773503",
  appId: "1:77843773503:web:aafdf746580ef05feee08a",
  measurementId: "G-E6XNJQC0ZC"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
