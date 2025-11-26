"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "@/lib/firebase";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (firebaseUser) => {
      if (!firebaseUser) {
        setUser(null);
        setLoading(false);
        return;
      }

      // Fetch Firestore profile
      const snap = await getDoc(doc(db, "users", firebaseUser.uid));

      const profile = snap.exists() ? snap.data() : null;

      // Merge auth + profile
      const token = await firebaseUser.getIdTokenResult();

      const merged = {
        uid: firebaseUser.uid,
        email: firebaseUser.email,
        displayName: firebaseUser.displayName,
        photoURL: firebaseUser.photoURL,
        emailVerified: firebaseUser.emailVerified,
        providerId: firebaseUser.providerId,
        providers: firebaseUser.providerData,
        creationTime: firebaseUser.metadata.creationTime,
        lastLogin: firebaseUser.metadata.lastSignInTime,
        claims: token.claims,
        ...profile, // <- subscription, etc.
      };

      setUser(merged);
      setLoading(false);
    });

    return () => unsub();
  }, []);

  // LOGIN
  const login = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  // SIGNUP (create Firestore profile)
  const signup = async (email, password, name) => {
    const result = await createUserWithEmailAndPassword(auth, email, password);

    if (name) {
      await updateProfile(result.user, { displayName: name });
    }

    // Create Firestore user doc
    await setDoc(doc(db, "users", result.user.uid), {
      name,
      email,
      subscription: "free",
      uid: result.user.uid,
      createdAt: Date.now(),
    });

    return result.user;
  };

  const logout = () => signOut(auth);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        signup,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
