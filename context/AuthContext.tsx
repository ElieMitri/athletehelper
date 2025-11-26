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
import { doc, getDoc, setDoc } from "firebase/firestore";

// ------------------------
// TYPES
// ------------------------
interface FirestoreProfile {
  name?: string;
  email?: string;
  subscription?: string;
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
// CONTEXT (NO RED UNDERLINE)
// ------------------------
const AuthContext = createContext<AuthContextType | null>(null);

// ------------------------
// PROVIDER
// ------------------------
export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(
      auth,
      async (firebaseUser: User | null) => {
        if (!firebaseUser) {
          setUser(null);
          setLoading(false);
          return;
        }

        const snap = await getDoc(doc(db, "users", firebaseUser.uid));
        const profile: FirestoreProfile | null = snap.exists()
          ? snap.data()
          : null;

        const token = await firebaseUser.getIdTokenResult();

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
          claims: token.claims,
          ...profile,
        };

        setUser(mergedUser);
        setLoading(false);
      }
    );

    return () => unsub();
  }, []);

  // LOGIN
  const login = (email: string, password: string) =>
    signInWithEmailAndPassword(auth, email, password);

  // SIGNUP
  const signup = async (email: string, password: string, name?: string) => {
    const result = await createUserWithEmailAndPassword(auth, email, password);

    if (name) {
      await updateProfile(result.user, { displayName: name });
    }

    await setDoc(doc(db, "users", result.user.uid), {
      name,
      email,
      subscription: "free",
      uid: result.user.uid,
      createdAt: Date.now(),
    });

    return result.user;
  };

  // LOGOUT
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

// ------------------------
// HOOK (NO RED UNDERLINE)
// ------------------------
export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside <AuthProvider>");
  return ctx;
};
