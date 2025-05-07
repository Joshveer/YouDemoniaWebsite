import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getDatabase, ref, get } from "firebase/database";
import { auth, provider, database } from "../firebase-init.js";

window.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form");
  const googleBtn = document.getElementById("googleBtn");

  // Handle email/password login
  loginForm?.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      handleRedirect(user.uid);
    } catch (error) {
      alert("Login failed: " + error.message);
    }
  });

  // Handle Google sign-in
  googleBtn?.addEventListener("click", async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Check if user role exists in database
      const roleRef = ref(database, "users/" + user.uid + "/role");
      const snapshot = await get(roleRef);

      // If not present, assign default role
      if (!snapshot.exists()) {
        await set(ref(database, "users/" + user.uid), {
          email: user.email,
          role: "student",
        });
      }

      handleRedirect(user.uid);
    } catch (error) {
      alert("Google sign-in failed: " + error.message);
    }
  });

  async function handleRedirect(uid) {
    const roleRef = ref(database, "users/" + uid + "/role");
    const snapshot = await get(roleRef);
    const role = snapshot.val();

    if (role === "organizer") {
      window.location.href = "/organizer";
    } else {
      window.location.href = "/student";
    }
  }
});
