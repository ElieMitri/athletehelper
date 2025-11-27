"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Button from "@/components/shared/Button";
import Image from "next/image";
import Logo from "../../../images/athletehelper.png";

import { signup } from "@/lib/auth";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function SignupPage() {
  const router = useRouter();
  const { user, loading: authLoading } = useAuth();

  // Redirect logged-in users away from signup
  useEffect(() => {
    if (!authLoading && user) {
      router.replace("/dashboard");
    }
  }, [authLoading, user, router]);

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Loading state for form submission
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await signup(formData.name, formData.email, formData.password);
      // AuthProvider detects login and redirects to dashboard automatically
    } catch (err) {
      console.error(err);
      alert(err instanceof Error ? err.message : "Signup failed");
      setIsSubmitting(false); // Re-enable button on error
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-4 py-8">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <div className="inline-block rounded-lg">
            <Image
              alt="AthleteHelper Logo"
              src={Logo}
              className="h-10 w-auto object-contain group-hover:scale-105 transition-transform drop-shadow-lg"
            />
          </div>
          <h1 className="text-4xl font-bold mb-3 text-white">
            Join AthleteHelper!
          </h1>
          <p className="text-slate-400 text-lg">
            Start your training journey today
          </p>
        </div>

        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl shadow-2xl p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* FULL NAME */}
            <div>
              <label className="block text-sm font-semibold mb-2 text-slate-300">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                disabled={isSubmitting}
                className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all hover:border-slate-600 disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="John Doe"
                required
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="block text-sm font-semibold mb-2 text-slate-300">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                disabled={isSubmitting}
                className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all hover:border-slate-600 disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="you@example.com"
                required
              />
            </div>

            {/* PASSWORD */}
            <div>
              <label className="block text-sm font-semibold mb-2 text-slate-300">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                disabled={isSubmitting}
                className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all hover:border-slate-600 disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="••••••••"
                required
              />
              <p className="text-xs text-slate-500 mt-1">
                Must be at least 8 characters
              </p>
            </div>

            {/* CONFIRM PASSWORD */}
            {/* <div>
              <label className="block text-sm font-semibold mb-2 text-slate-300">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                disabled={isSubmitting}
                className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all hover:border-slate-600 disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="••••••••"
                required
              />
            </div> */}

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
                  Creating Account...
                </span>
              ) : (
                "Create Account"
              )}
            </Button>
          </form>

          <div className="mt-8 pt-6 border-t border-slate-800">
            <p className="text-center text-sm text-slate-400">
              Already have an account?{" "}
              <Link
                href="/auth/login"
                className="text-blue-400 hover:text-blue-300 font-semibold transition-colors"
              >
                Sign in
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
                  Join thousands of athletes
                </span>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center text-sm text-slate-500 mt-8">
          By creating an account, you agree to our{" "}
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
      </div>
    </div>
  );
}
