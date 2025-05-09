import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { ref, get } from "firebase/database";
import { auth, provider, database } from "../firebase-init.js";

document.addEventListener("DOMContentLoaded", () => {
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const loginBtn = document.getElementById("loginBtn");
  const googleBtn = document.getElementById("googleBtn");

  loginBtn?.addEventListener("click", async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, emailInput.value, passwordInput.value);
      const user = userCredential.user;
      handleRedirect(user.uid);
    } catch (err) {
      alert(err.message);
    }
  });

  googleBtn?.addEventListener("click", async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      handleRedirect(user.uid);
    } catch (err) {
      alert(err.message);
    }
  });

  async function handleRedirect(uid) {
    const roleRef = ref(database, `users/${uid}/role`);
    const snapshot = await get(roleRef);
    const role = snapshot.val();
    window.location.href = role === "organizer" ? "/organizer" : "/student";
  }
});