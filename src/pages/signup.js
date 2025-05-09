import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { ref, set } from "firebase/database";
import { auth, provider, database } from "../firebase-init.js";

document.addEventListener("DOMContentLoaded", () => {
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const roleSelect = document.getElementById("role");
  const signupBtn = document.getElementById("signupBtn");
  const googleBtn = document.getElementById("googleBtn");

  signupBtn?.addEventListener("click", async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, emailInput.value, passwordInput.value);
      const user = userCredential.user;
      await set(ref(database, "users/" + user.uid), {
        email: user.email,
        role: roleSelect.value,
      });
      alert("Signed up as " + roleSelect.value);
    } catch (err) {
      alert(err.message);
    }
  });

  googleBtn?.addEventListener("click", async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      await set(ref(database, "users/" + user.uid), {
        email: user.email,
        role: "student",
      });
      alert("Signed in with Google");
    } catch (err) {
      alert(err.message);
    }
  });
});