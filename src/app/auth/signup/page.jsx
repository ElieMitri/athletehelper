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
  const { user, loading } = useAuth();

  // Redirect logged-in users away from signup
  useEffect(() => {
    if (!loading && user) {
      router.replace("/dashboard");
    }
  }, [loading, user, router]);

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signup(formData.name, formData.email, formData.password);
      // AuthProvider detects login and redirects to dashboard automatically
    } catch (err) {
      console.error(err);
      alert(err instanceof Error ? err.message : "Signup failed");
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
                className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all hover:border-slate-600"
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
                className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all hover:border-slate-600"
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
                className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all hover:border-slate-600"
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
                className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all hover:border-slate-600"
                placeholder="••••••••"
                required
              />
            </div> */}

            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-all transform hover:scale-[1.02] shadow-lg shadow-blue-600/20"
            >
              Create Account
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
