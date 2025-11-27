"use client";

import { useState } from "react";
import Link from "next/link";
import Button from "@/components/shared/Button";
import { resetPassword } from "@/lib/auth";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    console.log("🔍 Attempting password reset for:", email);

    try {
      console.log("📧 Calling resetPassword function...");
      await resetPassword(email);
      console.log("✅ Password reset email sent successfully!");
      setSubmitted(true);
    } catch (err) {
      console.error("❌ Password reset failed:", err);
      setError(
        err instanceof Error ? err.message : "Failed to send reset email"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <div className="inline-block p-3 bg-blue-600 rounded-lg mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
              />
            </svg>
          </div>
          <h1 className="text-4xl font-bold mb-3 text-white">Reset Password</h1>
          <p className="text-slate-400 text-lg">
            Enter your email to receive reset instructions
          </p>
        </div>

        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl shadow-2xl p-8">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-semibold mb-2 text-slate-300">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isSubmitting}
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all hover:border-slate-600 disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="you@example.com"
                  required
                />
              </div>

              {error && (
                <div className="p-3 bg-red-600/10 border border-red-600/30 rounded-lg text-red-400 text-sm">
                  {error}
                </div>
              )}

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-all transform hover:scale-[1.02] shadow-lg shadow-blue-600/20 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  "Send Reset Link"
                )}
              </Button>
            </form>
          ) : (
            <div className="text-center py-4">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-green-500/20">
                <span className="text-white text-4xl">✓</span>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-white">
                Check Your Email
              </h3>
              <p className="text-slate-400 mb-6 leading-relaxed">
                We've sent password reset instructions to
                <br />
                <span className="text-white font-semibold">{email}</span>
              </p>
              <p className="text-slate-500 text-sm mb-6">
                If you don't see the email, check your spam folder.
              </p>
              <Button
                onClick={() => {
                  setSubmitted(false);
                  setEmail("");
                  setError("");
                }}
                variant="secondary"
                className="w-full"
              >
                Try Another Email
              </Button>
            </div>
          )}

          <div className="mt-8 pt-6 border-t border-slate-800">
            <p className="text-center text-sm text-slate-400">
              Remember your password?{" "}
              <Link
                href="/auth/login"
                className="text-blue-400 hover:text-blue-300 font-semibold transition-colors"
              >
                Back to Sign In
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
                  Secure password recovery
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
