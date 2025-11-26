import { auth, db } from "@/lib/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

/* --------------------------
   SIGNUP
--------------------------- */
export async function signup(name, email, password) {
  const userCred = await createUserWithEmailAndPassword(auth, email, password);
  const user = userCred.user;

  await updateProfile(user, { displayName: name });

  try {
    await setDoc(doc(db, "users", user.uid), {
      name,
      email,
      uid: user.uid,
      createdAt: Date.now(),
      subscription: "free",
    });
  } catch (err) {
    console.error("FIRESTORE ERROR:", err);
    throw err; // Re-throw so your form sees it
  }

  return user;
}

/* --------------------------
   LOGIN
--------------------------- */
export async function login(email, password) {
  const result = await signInWithEmailAndPassword(auth, email, password);
  return result.user;
}

/* --------------------------
   LOGOUT
--------------------------- */
export async function logout() {
  await signOut(auth);
}
