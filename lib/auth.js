import { auth, db } from "@/lib/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
  deleteUser,
  EmailAuthProvider,
  reauthenticateWithCredential,
  sendPasswordResetEmail,
} from "firebase/auth";
import { doc, setDoc, deleteDoc } from "firebase/firestore";

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

/* --------------------------
   DELETE ACCOUNT
--------------------------- */
export async function deleteAccount(password) {
  const user = auth.currentUser;

  if (!user) {
    throw new Error("No user is currently signed in");
  }

  try {
    // Step 1: Re-authenticate user (required by Firebase for security)
    const credential = EmailAuthProvider.credential(user.email, password);
    await reauthenticateWithCredential(user, credential);

    // Step 2: Delete user data from Firestore
    await deleteDoc(doc(db, "users", user.uid));

    // Step 3: Delete the authentication account
    await deleteUser(user);

    return { success: true };
  } catch (error) {
    console.error("DELETE ACCOUNT ERROR:", error);

    // Handle specific error cases
    if (error.code === "auth/wrong-password") {
      throw new Error("Incorrect password. Please try again.");
    } else if (error.code === "auth/requires-recent-login") {
      throw new Error(
        "Please log out and log back in before deleting your account."
      );
    } else {
      throw new Error("Failed to delete account. Please try again.");
    }
  }
}

/* --------------------------
   FORGOT PASSWORD
--------------------------- */
export async function resetPassword(email) {
  try {
    await sendPasswordResetEmail(auth, email);
    return { success: true };
  } catch (error) {
    console.error("PASSWORD RESET ERROR:", error);

    // Handle specific error cases
    if (error.code === "auth/user-not-found") {
      throw new Error("No account found with this email address.");
    } else if (error.code === "auth/invalid-email") {
      throw new Error("Invalid email address.");
    } else {
      throw new Error("Failed to send reset email. Please try again.");
    }
  }
}
