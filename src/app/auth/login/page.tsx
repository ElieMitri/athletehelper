"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Button from "@/components/shared/Button";
import Image from "next/image";
import Logo from "../../../images/athletehelper.png";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { login, isAuthenticated, loading: authLoading } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Check if redirected due to session expiry
  const reason = searchParams.get("reason");

  // 🔒 If user is already logged in, redirect to dashboard
  useEffect(() => {
    if (!authLoading && isAuthenticated) {
      router.replace("/dashboard");
    }
  }, [isAuthenticated, authLoading, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await login(email, password);
      // Login successful - session will be set automatically in AuthContext
      console.log("✓ Login successful - other devices logged out");
      router.replace("/dashboard");
    } catch (err: any) {
      console.error("Login error:", err);

      // Handle specific Firebase error codes
      if (err.code === "auth/wrong-password") {
        setError("Incorrect password. Please try again.");
      } else if (err.code === "auth/user-not-found") {
        setError("No account found with this email.");
      } else if (err.code === "auth/invalid-email") {
        setError("Invalid email address.");
      } else if (err.code === "auth/too-many-requests") {
        setError("Too many failed attempts. Please try again later.");
      } else if (err.code === "auth/network-request-failed") {
        setError("Network error. Please check your connection.");
      } else {
        setError(err.message || "Failed to sign in. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <div className="inline-block p-3 rounded-lg mb-4">
            <Image
              alt="AthleteHelper Logo"
              src={Logo}
              className="h-10 w-auto object-contain group-hover:scale-105 transition-transform drop-shadow-lg"
            />
          </div>
          <h1 className="text-4xl font-bold mb-3 text-white">Welcome Back</h1>
          <p className="text-slate-400 text-lg">
            Sign in to continue your training
          </p>
        </div>

        {/* Session Expired Warning */}
        {/* {reason === "session_expired" && (
          <div className="mb-6 p-4 bg-orange-600/20 border border-orange-600/50 rounded-xl">
            <div className="flex items-start gap-3">
              <span className="text-2xl">⚠️</span>
              <div>
                <p className="text-orange-400 font-semibold mb-1">
                  Session Expired
                </p>
                <p className="text-orange-300 text-sm">
                  Your account was logged in from another device. Please log in
                  again to continue.
                </p>
              </div>
            </div>
          </div>
        )} */}

        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl shadow-2xl p-8">
          {/* Single Device Info Banner */}
          {/* <div className="mb-6 p-3 bg-blue-600/10 border border-blue-600/30 rounded-lg">
            <p className="text-blue-400 text-sm flex items-center gap-2">
              <span>🔒</span>
              <span>
                Logging in here will log out any other devices for security.
              </span>
            </p>
          </div> */}

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 bg-red-600/20 border border-red-600/50 rounded-lg">
              <p className="text-red-400 text-sm font-medium">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold mb-2 text-slate-300">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all hover:border-slate-600"
                placeholder="you@example.com"
                required
                disabled={loading}
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-sm font-semibold text-slate-300">
                  Password
                </label>
                <Link
                  href="/auth/forgot-password"
                  className="text-sm text-blue-400 hover:text-blue-300 transition-colors font-medium"
                >
                  Forgot Password?
                </Link>
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all hover:border-slate-600"
                placeholder="••••••••"
                required
                disabled={loading}
              />
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-all transform hover:scale-[1.02] shadow-lg shadow-blue-600/20 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Signing In...
                </span>
              ) : (
                "Sign In"
              )}
            </Button>
          </form>

          <div className="mt-8 pt-6 border-t border-slate-800">
            <p className="text-center text-sm text-slate-400">
              Don't have an account?{" "}
              <Link
                href="/auth/signup"
                className="text-blue-400 hover:text-blue-300 font-semibold transition-colors"
              >
                Create one free
              </Link>
            </p>
          </div>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-800"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-slate-900/50 text-slate-500">
                  Trusted by athletes worldwide
                </span>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center text-sm text-slate-500 mt-8">
          By signing in, you agree to our{" "}
          <Link
            href="/auth/terms"
            className="text-slate-400 hover:text-slate-300 underline"
          >
            Terms
          </Link>{" "}
          and{" "}
          <Link
            href="/auth/privacy"
            className="text-slate-400 hover:text-slate-300 underline"
          >
            Privacy Policy
          </Link>
        </p>

        {/* Additional Security Info */}
        {/* <div className="mt-4 text-center">
          <p className="text-slate-600 text-xs">
            🔒 For security, only one device can be logged in at a time
          </p>
        </div> */}
      </div>
    </div>
  );
}
