"use client";

import { useState, useEffect } from "react";
import LayoutWrapper from "@/components/layout/LayoutWrapper";
import Card from "@/components/shared/Card";
import Button from "@/components/shared/Button";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { doc, getDoc, updateDoc, setDoc } from "firebase/firestore";
import { db } from "@/lib/firebase"; // your firebase config path

export default function ProfileSettingsPage() {
  const { logout, user, loading } = useAuth();

  const [activeTab, setActiveTab] = useState("profile");
  const [isSaving, setIsSaving] = useState(false);

  // ===========================
  // FIXED: safe initialization
  // ===========================
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    sport: "",
    position: "",
    height: "",
    weight: "",
    bio: "",
    birthdate: "",
    location: "",
  });

  // After user loads, hydrate name/email
  useEffect(() => {
    if (user) {
      setFormData((prev) => ({
        ...prev,
        name: user.name || "",
        email: user.email || "",
      }));
    }
  }, [user]);

  const [preferences, setPreferences] = useState({
    units: "imperial",
    weekStart: "monday",
    timezone: "America/Los_Angeles",
    language: "en",
  });

  const [notifications, setNotifications] = useState({
    emailWorkouts: true,
    emailProgress: true,
    emailTips: false,
    pushWorkouts: true,
    pushAchievements: true,
    pushReminders: true,
  });

  // ===========================
  // Loading screen
  // ===========================
  if (loading || !user) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-[#0a0a0a]">
        <div className="animate-spin h-12 w-12 border-4 border-blue-600 border-t-transparent rounded-full"></div>
      </div>
    );
  }

  // ===========================
  // Event handlers
  // ===========================
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePreferenceChange = (e) => {
    setPreferences({ ...preferences, [e.target.name]: e.target.value });
  };

  const handleNotificationToggle = (key) => {
    setNotifications({ ...notifications, [key]: !notifications[key] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSaving(true);

    try {
      const ref = doc(db, "users", user.uid);
      await updateDoc(ref, {
        ...formData,
        updatedAt: new Date(),
      });

      console.log("Profile updated in Firestore:", formData);
    } catch (error) {
      console.error("Error updating profile:", error);
    }

    setIsSaving(false);
  };

  const tabs = [
    { id: "profile", label: "Profile", icon: "👤", href: null },
    // { id: "preferences", label: "Preferences", icon: "⚙️", href: null },
    // { id: "notifications", label: "Notifications", icon: "🔔", href: null },
    {
      id: "subscription",
      label: "Subscription",
      icon: "💳",
      href: "/settings/subscription",
    },
  ];

  const stats = [
    {
      label: "Days Active",
      value: "247",
      icon: "📅",
      color: "from-blue-600 to-blue-700",
    },
    {
      label: "Workouts Logged",
      value: "156",
      icon: "💪",
      color: "from-purple-600 to-purple-700",
    },
    {
      label: "Current Streak",
      value: "12",
      icon: "🔥",
      color: "from-orange-600 to-orange-700",
    },
    {
      label: "Programs",
      value: "3",
      icon: "📊",
      color: "from-emerald-600 to-emerald-700",
    },
  ];
  return (
    <LayoutWrapper>
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            Account Settings
          </h1>
          <p className="text-slate-400 text-lg">
            Manage your account settings and preferences
          </p>
        </div>

        {/* Profile Overview Card */}
        <Card className="p-6 mb-8 bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700">
          <div className="flex items-center gap-6 flex-wrap">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-4xl font-bold text-white shadow-lg">
              {formData.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-white mb-1">
                {formData.name}
              </h2>
              <p className="text-slate-400 mb-3">{formData.email}</p>
              <div className="flex items-center gap-3 flex-wrap">
                {user?.subscription === "paid" ? (
                  <span className="px-3 py-1 bg-gradient-to-r from-orange-600 to-orange-700 text-white rounded-lg text-sm font-semibold shadow-lg">
                    ⭐ Premium
                  </span>
                ) : (
                  <></>
                )}
              </div>
            </div>
            {/* <Button variant="secondary">
              <span className="flex items-center gap-2">
                <span>📷</span>
                <span>Change Photo</span>
              </span>
            </Button> */}
          </div>
        </Card>

        {/* Stats Cards */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="p-4 bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 hover:border-slate-600 transition-all hover:scale-[1.02] text-center"
            >
              <div
                className={`w-12 h-12 mx-auto mb-2 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-2xl`}
              >
                {stat.icon}
              </div>
              <p className="text-2xl font-bold text-white mb-1">{stat.value}</p>
              <p className="text-xs text-slate-400">{stat.label}</p>
            </Card>
          ))}
        </div> */}

        {/* Tab Navigation */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2 bg-slate-800/50 p-2 rounded-xl border border-slate-700">
          {tabs.map((tab) =>
            tab.href ? (
              <Link key={tab.id} href={tab.href}>
                <button
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold whitespace-nowrap transition-all ${
                    activeTab === tab.id
                      ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg"
                      : "text-slate-400 hover:text-white hover:bg-slate-700"
                  }`}
                >
                  <span className="text-xl">{tab.icon}</span>
                  <span>{tab.label}</span>
                </button>
              </Link>
            ) : (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg"
                    : "text-slate-400 hover:text-white hover:bg-slate-700"
                }`}
              >
                <span className="text-xl">{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            )
          )}
        </div>

        {/* Profile Tab */}
        {activeTab === "profile" && (
          <Card className="p-8 mb-6 bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700">
            <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
              <span>👤</span>
              <span>Profile Information</span>
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-slate-300">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-slate-300">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-slate-300">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-slate-300">
                    Birth Date
                  </label>
                  <input
                    type="date"
                    name="birthdate"
                    value={formData.birthdate}
                    onChange={handleChange}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-slate-300">
                    Primary Sport
                  </label>
                  <select
                    name="sport"
                    value={formData.sport}
                    onChange={handleChange}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  >
                    <option value="">Select Sport</option>
                    <option value="football">🏈 Football</option>
                    <option value="basketball">🏀 Basketball</option>
                    <option value="soccer">⚽ Soccer</option>
                    <option value="baseball">⚾ Baseball</option>
                    <option value="track">🏃 Track & Field</option>
                    <option value="general">💪 General Fitness</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-slate-300">
                    Position / Role
                  </label>
                  <input
                    type="text"
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    // placeholder="e.g., Quarterback, Point Guard"
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-slate-300">
                    Height
                  </label>
                  <input
                    type="text"
                    name="height"
                    value={formData.height}
                    onChange={handleChange}
                    placeholder="In cm"
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-slate-300">
                    Weight
                  </label>
                  <input
                    type="text"
                    name="weight"
                    value={formData.weight}
                    onChange={handleChange}
                    placeholder="In Kgs"
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium mb-2 text-slate-300">
                    Location
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="City, State"
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-slate-300">
                  Bio / About Me
                </label>
                <textarea
                  name="bio"
                  value={formData.bio}
                  onChange={handleChange}
                  placeholder="Tell us about your athletic background and goals..."
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  rows={4}
                ></textarea>
                <p className="text-xs text-slate-500 mt-1">
                  {formData.bio?.length || 0} / 500 characters
                </p>
              </div>

              <div className="flex gap-3">
                <Button
                  type="submit"
                  disabled={isSaving}
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
                >
                  {isSaving ? "Saving..." : "Save Changes"}
                </Button>
                <Button type="button" variant="secondary">
                  Cancel
                </Button>
              </div>
            </form>
          </Card>
        )}

        {/* Preferences Tab */}
        {activeTab === "preferences" && (
          <Card className="p-8 mb-6 bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700">
            <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
              <span>⚙️</span>
              <span>App Preferences</span>
            </h2>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-slate-300">
                    Measurement Units
                  </label>
                  <select
                    name="units"
                    value={preferences.units}
                    onChange={handlePreferenceChange}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  >
                    <option value="imperial">Imperial (lbs, ft, in)</option>
                    <option value="metric">Metric (kg, cm)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-slate-300">
                    Week Starts On
                  </label>
                  <select
                    name="weekStart"
                    value={preferences.weekStart}
                    onChange={handlePreferenceChange}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  >
                    <option value="sunday">Sunday</option>
                    <option value="monday">Monday</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-slate-300">
                    Timezone
                  </label>
                  <select
                    name="timezone"
                    value={preferences.timezone}
                    onChange={handlePreferenceChange}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  >
                    <option value="America/Los_Angeles">
                      Pacific Time (PT)
                    </option>
                    <option value="America/Denver">Mountain Time (MT)</option>
                    <option value="America/Chicago">Central Time (CT)</option>
                    <option value="America/New_York">Eastern Time (ET)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-slate-300">
                    Language
                  </label>
                  <select
                    name="language"
                    value={preferences.language}
                    onChange={handlePreferenceChange}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  >
                    <option value="en">English</option>
                    <option value="es">Español</option>
                    <option value="fr">Français</option>
                  </select>
                </div>
              </div>
              <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">
                Save Preferences
              </Button>
            </div>
          </Card>
        )}

        {/* Notifications Tab */}
        {activeTab === "notifications" && (
          <Card className="p-8 mb-6 bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700">
            <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
              <span>🔔</span>
              <span>Notification Preferences</span>
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">
                  Email Notifications
                </h3>
                <div className="space-y-3">
                  {[
                    {
                      key: "emailWorkouts",
                      label: "Workout Reminders",
                      desc: "Get reminded about your scheduled workouts",
                    },
                    {
                      key: "emailProgress",
                      label: "Progress Updates",
                      desc: "Weekly summary of your training progress",
                    },
                    {
                      key: "emailTips",
                      label: "Training Tips",
                      desc: "Receive expert tips and advice",
                    },
                  ].map((item) => (
                    <div
                      key={item.key}
                      className="flex items-center justify-between p-4 bg-slate-900 rounded-lg border border-slate-700"
                    >
                      <div>
                        <p className="font-medium text-white">{item.label}</p>
                        <p className="text-sm text-slate-400">{item.desc}</p>
                      </div>
                      <button
                        onClick={() => handleNotificationToggle(item.key)}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          notifications[item.key]
                            ? "bg-blue-600"
                            : "bg-slate-700"
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            notifications[item.key]
                              ? "translate-x-6"
                              : "translate-x-1"
                          }`}
                        />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-4">
                  Push Notifications
                </h3>
                <div className="space-y-3">
                  {[
                    {
                      key: "pushWorkouts",
                      label: "Workout Alerts",
                      desc: "Push notifications for scheduled sessions",
                    },
                    {
                      key: "pushAchievements",
                      label: "Achievements",
                      desc: "Get notified when you unlock achievements",
                    },
                    {
                      key: "pushReminders",
                      label: "Rest Day Reminders",
                      desc: "Gentle reminders to take rest days",
                    },
                  ].map((item) => (
                    <div
                      key={item.key}
                      className="flex items-center justify-between p-4 bg-slate-900 rounded-lg border border-slate-700"
                    >
                      <div>
                        <p className="font-medium text-white">{item.label}</p>
                        <p className="text-sm text-slate-400">{item.desc}</p>
                      </div>
                      <button
                        onClick={() => handleNotificationToggle(item.key)}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          notifications[item.key]
                            ? "bg-blue-600"
                            : "bg-slate-700"
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            notifications[item.key]
                              ? "translate-x-6"
                              : "translate-x-1"
                          }`}
                        />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        )}

        {/* Session Management */}
        <Card className="p-6 mb-6 bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700">
          <h2 className="text-xl font-bold mb-4 text-white flex items-center gap-2">
            <span>🔐</span>
            <span>Session Management</span>
          </h2>
          <p className="text-slate-400 mb-4">
            Sign out of your account on this device. You'll need to log in again
            to access your account.
          </p>
          <Button
            variant="secondary"
            className="flex items-center gap-2"
            onClick={async () => {
              await logout();
              window.location.href = "/auth/login";
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                clipRule="evenodd"
              />
            </svg>
            Sign Out
          </Button>
        </Card>

        {/* Danger Zone */}
        <Card className="p-6 bg-gradient-to-br from-red-950/30 to-slate-800 border-red-600/30">
          <h2 className="text-xl font-bold mb-4 text-red-400 flex items-center gap-2">
            <span>⚠️</span>
            <span>Danger Zone</span>
          </h2>
          <p className="text-slate-400 mb-4">
            Permanently delete your account and all associated data. This action
            cannot be undone and all your training data, programs, and progress
            will be lost forever.
          </p>
          <Button variant="danger" className="bg-red-600 hover:bg-red-700">
            Delete Account
          </Button>
        </Card>
      </div>
    </LayoutWrapper>
  );
}
