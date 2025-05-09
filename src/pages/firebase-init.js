import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAsB2vh4MuaLAXqX_yR9wfuWEmlPoi5ExA",
  authDomain: "youdemonia-eb696.firebaseapp.com",
  projectId: "youdemonia-eb696",
  storageBucket: "youdemonia-eb696.appspot.com",
  messagingSenderId: "723304438267",
  appId: "1:723304438267:web:7989eb79b86c763040135e",
  measurementId: "G-DXSENG0YRW"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const database = getDatabase(app);

export { auth, provider, database };