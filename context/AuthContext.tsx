"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { auth, db } from "@/lib/firebase";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
  updateProfile,
  User,
} from "firebase/auth";
import { doc, setDoc, onSnapshot } from "firebase/firestore";
import {
  setActiveSession,
  watchSession,
  clearSession,
} from "@/lib/sessionManager";

// ------------------------
// TYPES
// ------------------------
interface FirestoreProfile {
  name?: string;
  email?: string;
  subscription?: string;
  subscriptionExpiresAt?: string | null;
  nextBillingDate?: string | null;
  activeSessionId?: string | null;
  lastSessionUpdate?: string;
  uid?: string;
  createdAt?: number;
  [key: string]: any;
}

export interface AuthContextType {
  user: any | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<any>;
  signup: (email: string, password: string, name?: string) => Promise<any>;
  logout: () => Promise<void>;
  isAuthenticated: boolean;
}

// ------------------------
// CONTEXT
// ------------------------
const AuthContext = createContext<AuthContextType | null>(null);

// ------------------------
// PROVIDER
// ------------------------
export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("🚀 AuthProvider initialized");

    let unsubscribeFirestore: (() => void) | null = null;

    const unsubscribeAuth = onAuthStateChanged(
      auth,
      async (firebaseUser: User | null) => {
        console.log(
          "🔐 Auth state changed:",
          firebaseUser ? "Logged in" : "Logged out"
        );

        // Clean up previous listener
        if (unsubscribeFirestore) {
          console.log("🧹 Cleaning up Firestore listener");
          unsubscribeFirestore();
          unsubscribeFirestore = null;
        }

        if (!firebaseUser) {
          console.log("❌ No user logged in");
          setUser(null);
          setLoading(false);
          return;
        }

        console.log("👤 User logged in:", firebaseUser.email);

        // Get initial token
        const token = await firebaseUser.getIdTokenResult();

        // Listen to user document
        console.log("📡 Setting up Firestore listener...");
        unsubscribeFirestore = onSnapshot(
          doc(db, "users", firebaseUser.uid),
          async (snap) => {
            console.log("📄 User document updated");

            const profile: FirestoreProfile | null = snap.exists()
              ? (snap.data() as FirestoreProfile)
              : null;

            const latestToken = await firebaseUser.getIdTokenResult();

            const mergedUser = {
              uid: firebaseUser.uid,
              email: firebaseUser.email,
              displayName: firebaseUser.displayName,
              photoURL: firebaseUser.photoURL,
              emailVerified: firebaseUser.emailVerified,
              providerId: firebaseUser.providerId,
              providers: firebaseUser.providerData,
              creationTime: firebaseUser.metadata.creationTime,
              lastLogin: firebaseUser.metadata.lastSignInTime,
              claims: latestToken.claims,
              ...profile,
            };

            console.log("✅ User data merged:", mergedUser.email);
            setUser(mergedUser);
            setLoading(false);
          },
          (error) => {
            console.error("❌ Firestore listener error:", error);
            setLoading(false);
          }
        );
      }
    );

    return () => {
      console.log("🧹 Cleaning up AuthProvider");
      unsubscribeAuth();
      if (unsubscribeFirestore) unsubscribeFirestore();
    };
  }, []);

  // ------------------------
  // LOGIN
  // ------------------------
  const login = async (email: string, password: string) => {
    console.log("🔑 Login attempt:", email);

    const result = await signInWithEmailAndPassword(auth, email, password);

    console.log("✅ Login successful");

    return result;
  };

  // ------------------------
  // SIGNUP
  // ------------------------
  const signup = async (email: string, password: string, name?: string) => {
    console.log("📝 Signup attempt:", email);

    const result = await createUserWithEmailAndPassword(auth, email, password);

    if (name) {
      await updateProfile(result.user, { displayName: name });
    }

    console.log("💾 Creating user document...");
    await setDoc(doc(db, "users", result.user.uid), {
      name,
      email,
      subscription: "free",
      subscriptionExpiresAt: null,
      nextBillingDate: null,
      uid: result.user.uid,
      createdAt: Date.now(),
    });

    console.log("✅ Signup successful");

    return result.user;
  };

  // ------------------------
  // LOGOUT
  // ------------------------
  const logout = async () => {
    console.log("🚪 Logout initiated");

    await signOut(auth);
    console.log("✅ Logged out successfully");
  };

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
// ------------------------
// HOOK
// ------------------------
export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used inside <AuthProvider>");
  }
  return ctx;
};
