import { signOut } from "firebase/auth";
import { auth } from "../firebase-init.js";

document.getElementById("logout")?.addEventListener("click", async () => {
  try {
    await signOut(auth);
    window.location.href = "/login";
  } catch (err) {
    alert("Error signing out: " + err.message);
  }
});