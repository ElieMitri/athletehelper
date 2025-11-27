// lib/sessionManager.ts
// SIMPLIFIED VERSION - More reliable

import { doc, updateDoc, getDoc, onSnapshot } from "firebase/firestore";
import { db, auth } from "@/lib/firebase";
import { signOut } from "firebase/auth";

/**
 * Generate a unique session ID per device
 * Includes timestamp + random string + browser fingerprint
 */
function generateSessionId(): string {
  // Add more randomness
  const timestamp = Date.now();
  const random1 = Math.random().toString(36).substr(2, 15);
  const random2 = Math.random().toString(36).substr(2, 15);

  // Add browser/device specific data
  const userAgent = navigator.userAgent;
  const screenInfo = `${window.screen.width}x${window.screen.height}`;
  const browserInfo = `${userAgent}_${screenInfo}`;

  // Create a simple hash from browser info
  let hash = 0;
  for (let i = 0; i < browserInfo.length; i++) {
    hash = (hash << 5) - hash + browserInfo.charCodeAt(i);
    hash = hash & hash;
  }

  return `${timestamp}_${random1}_${random2}_${Math.abs(hash)}`;
}

/**
 * Get session ID from localStorage (creates if doesn't exist)
 * @param forceNew - If true, generates a new session ID even if one exists
 */
export function getSessionId(forceNew: boolean = false): string {
  const key = "session_id";

  if (forceNew) {
    // Force generate new session ID
    const id = generateSessionId();
    localStorage.setItem(key, id);
    console.log("🔄 Force generated new session ID:", id);
    return id;
  }

  let id = localStorage.getItem(key);

  if (!id) {
    id = generateSessionId();
    localStorage.setItem(key, id);
    console.log("✨ Generated new session ID:", id);
  } else {
    console.log("📱 Using existing session ID:", id);
  }

  return id;
}

/**
 * Set this device as the active session in Firebase
 * Forces a new session ID to be generated to ensure uniqueness
 */
export async function setActiveSession(userId: string): Promise<void> {
  // Force generate a NEW session ID on every login
  const sessionId = getSessionId(true);

  console.log("📱 Setting active session:", sessionId);

  try {
    await updateDoc(doc(db, "users", userId), {
      activeSessionId: sessionId,
      lastSessionUpdate: new Date().toISOString(),
    });

    console.log("✅ Active session set successfully");
  } catch (error) {
    console.error("❌ Error setting active session:", error);
  }
}

/**
 * Monitor for session changes and logout if another device logs in
 */
export function watchSession(userId: string): () => void {
  const mySessionId = getSessionId();

  console.log("👀 Starting session watch for:", mySessionId);

  const unsubscribe = onSnapshot(
    doc(db, "users", userId),
    (snapshot) => {
      if (!snapshot.exists()) {
        console.log("⚠️ User document doesn't exist");
        return;
      }

      const data = snapshot.data();
      const activeSession = data.activeSessionId;

      console.log(
        "🔍 Checking session - Mine:",
        mySessionId,
        "Active:",
        activeSession
      );

      // If there's an active session and it's not ours, logout
      if (activeSession && activeSession !== mySessionId) {
        console.log("🚫 Another device logged in! Logging out...");

        // Show alert
        alert(
          "Your account has been logged in from another device. You will be logged out."
        );

        // Logout
        signOut(auth).then(() => {
          window.location.href = "/auth/login?reason=session_expired";
        });
      }
    },
    (error) => {
      console.error("❌ Session watch error:", error);
    }
  );

  return unsubscribe;
}

/**
 * Clear session on logout
 */
export async function clearSession(userId: string): Promise<void> {
  console.log("🧹 Clearing session");

  try {
    await updateDoc(doc(db, "users", userId), {
      activeSessionId: null,
      lastSessionUpdate: new Date().toISOString(),
    });

    console.log("✅ Session cleared");
  } catch (error) {
    console.error("❌ Error clearing session:", error);
  }
}
