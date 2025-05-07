import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { auth, provider } from '../firebase-init.js';

const googleBtn = document.getElementById('googleBtn');

if (googleBtn) {
  googleBtn.addEventListener('click', () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("Google sign-in success:", result.user);
        alert("Signed in as: " + result.user.email);
        // Optionally redirect to dashboard
      })
      .catch((error) => {
        console.error("Google sign-in error:", error);
        alert("Google sign-in failed");
      });
  });
}

window.addEventListener("DOMContentLoaded", () => {
  const signupBtn = document.getElementById("signupBtn");
  const googleBtn = document.getElementById("googleBtn");

  signupBtn?.addEventListener("click", async () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const role = document.getElementById("role").value;

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      await set(ref(database, "users/" + user.uid), {
        email: user.email,
        role: role,
      });
      alert("Signed up as " + role);
    } catch (error) {
      alert(error.message);
    }
  });

  googleBtn?.addEventListener("click", async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      await set(ref(database, "users/" + user.uid), {
        email: user.email,
        role: "student",
      });
      alert("Signed in with Google");
    } catch (error) {
      alert(error.message);
    }
  });
});
