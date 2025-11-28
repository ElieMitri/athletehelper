"use client";

import { useState } from "react";
import { auth } from "@/lib/firebase";
import { sendPasswordResetEmail } from "firebase/auth";

export default function TestResetPage() {
  const [email, setEmail] = useState("");
  const [result, setResult] = useState("");

  const testReset = async () => {
    setResult("Testing...");
    try {
      await sendPasswordResetEmail(auth, email);
      setResult("✅ SUCCESS! Email sent to " + email);
    } catch (error: any) {
      setResult("❌ ERROR: " + error.code + " - " + error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 p-4">
      <div className="max-w-md w-full bg-slate-900 p-8 rounded-lg">
        <h1 className="text-white text-2xl font-bold mb-4">
          Test Password Reset
        </h1>

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
          className="w-full bg-slate-800 border border-slate-700 text-white px-4 py-2 rounded mb-4"
        />

        <button
          onClick={testReset}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          Test Reset
        </button>

        {result && (
          <div className="mt-4 p-4 bg-slate-800 rounded text-white whitespace-pre-wrap">
            {result}
          </div>
        )}
      </div>
    </div>
  );
}
