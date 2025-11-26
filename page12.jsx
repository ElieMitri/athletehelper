"use client";

import LayoutWrapper from "@/components/layout/LayoutWrapper";
import Card from "@/components/shared/Card";
import Link from "next/link";
import ProtectedRoute from "./src/components/ProtectedRoute";
import { useAuth } from "@/context/AuthContext";
import { useEffect, useState } from "react";

export default function DashboardPage() {
  const { user, loading } = useAuth();

  // Premium modal state + logic
  const [showPremiumModal, setShowPremiumModal] = useState(false);
  const [hasDismissed, setHasDismissed] = useState(false);

  // Load "Maybe Later" state
  useEffect(() => {
    const dismissed = localStorage.getItem("dismissedPremiumModal");
    if (dismissed === "true") {
      setHasDismissed(true);
    }
  }, []);

  // Show modal after 3 seconds ONLY for non-premium users
  useEffect(() => {
    if (!user) return;

    // skip for premium users
    if (user?.premium) return;

    // skip if user dismissed permanently
    if (hasDismissed) return;

    const timer = setTimeout(() => {
      setShowPremiumModal(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, [user, hasDismissed]);

  // Handle "Maybe Later"
  const handleMaybeLater = () => {
    localStorage.setItem("dismissedPremiumModal", "true");
    setHasDismissed(true);
    setShowPremiumModal(false);
  };

  // Fullscreen loading state
  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-[#0a0a0a]">
        <div className="animate-spin h-12 w-12 border-4 border-blue-600 border-t-transparent rounded-full"></div>
      </div>
    );
  }

  // Prevent errors if somehow no user
  const displayName = user?.displayName || "Athlete";

  const stats = [
    {
      label: "Active Programs",
      value: "3",
      icon: "📊",
      color: "from-blue-600 to-blue-700",
      change: "+1 this month",
      changeType: "positive",
    },
    {
      label: "Week Completion",
      value: "71%",
      icon: "🎯",
      color: "from-emerald-600 to-emerald-700",
      change: "5 of 7 days",
      changeType: "positive",
    },
    {
      label: "Training Hours",
      value: "47",
      icon: "⏱️",
      color: "from-purple-600 to-purple-700",
      change: "+12 this month",
      changeType: "positive",
    },
    {
      label: "Current Streak",
      value: "7 days",
      icon: "🔥",
      color: "from-orange-600 to-orange-700",
      change: "Personal best!",
      changeType: "positive",
    },
  ];

  const todaySchedule = [
    {
      time: "06:00 AM",
      title: "Morning Run",
      type: "Cardio",
      duration: "45 min",
      completed: true,
    },
    {
      time: "04:00 PM",
      title: "Strength Training",
      type: "Upper Body",
      duration: "60 min",
      completed: false,
    },
    {
      time: "07:30 PM",
      title: "Stretching & Recovery",
      type: "Flexibility",
      duration: "20 min",
      completed: false,
    },
  ];

  const weeklyProgress = [
    { day: "Mon", completed: true, workouts: 2 },
    { day: "Tue", completed: true, workouts: 1 },
    { day: "Wed", completed: true, workouts: 2 },
    { day: "Thu", completed: false, workouts: 0 },
    { day: "Fri", completed: false, workouts: 0 },
    { day: "Sat", completed: false, workouts: 0 },
    { day: "Sun", completed: false, workouts: 0 },
  ];

  const recentAchievements = [
    {
      id: 1,
      title: "Personal Best",
      description: "New deadlift PR: 315 lbs",
      icon: "🏆",
      date: "Yesterday",
      color: "from-yellow-500 to-amber-600",
    },
    {
      id: 2,
      title: "Consistency Streak",
      description: "7 days in a row",
      icon: "🔥",
      date: "2 days ago",
      color: "from-orange-500 to-red-600",
    },
    {
      id: 3,
      title: "Milestone Reached",
      description: "Completed 50 workouts",
      icon: "⭐",
      date: "1 week ago",
      color: "from-purple-500 to-pink-600",
    },
  ];

  const activeProgramsDetail = [
    {
      id: 1,
      name: "Speed Development",
      sport: "Football",
      progress: 65,
      nextSession: "Tomorrow",
      sessionsLeft: 12,
      color: "bg-gradient-to-br from-blue-600 to-cyan-600",
    },
    {
      id: 2,
      name: "Upper Body Strength",
      sport: "General",
      progress: 40,
      nextSession: "Today, 4:00 PM",
      sessionsLeft: 18,
      color: "bg-gradient-to-br from-purple-600 to-pink-600",
    },
    {
      id: 3,
      name: "Endurance Building",
      sport: "Running",
      progress: 80,
      nextSession: "Friday",
      sessionsLeft: 6,
      color: "bg-gradient-to-br from-emerald-600 to-teal-600",
    },
  ];

  const performanceMetrics = [
    {
      exercise: "Bench Press",
      current: "225 lbs",
      previous: "215 lbs",
      improvement: "+10 lbs",
      date: "2 days ago",
      trend: "up",
    },
    {
      exercise: "Squat",
      current: "315 lbs",
      previous: "305 lbs",
      improvement: "+10 lbs",
      date: "5 days ago",
      trend: "up",
    },
    {
      exercise: "5K Run",
      current: "22:15",
      previous: "23:45",
      improvement: "-1:30",
      date: "1 week ago",
      trend: "up",
    },
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Basketball Tournament",
      date: "Dec 15, 2024",
      type: "Competition",
      daysAway: 18,
      color: "purple",
    },
    {
      id: 2,
      title: "5K Charity Run",
      date: "Dec 22, 2024",
      type: "Event",
      daysAway: 25,
      color: "blue",
    },
    {
      id: 3,
      title: "Strength Assessment",
      date: "Jan 5, 2025",
      type: "Test",
      daysAway: 39,
      color: "emerald",
    },
  ];

  const trainingInsights = [
    {
      title: "Recovery Alert",
      message: "Consider adding a rest day - you've trained 5 days straight",
      type: "warning",
      icon: "⚠️",
    },
    {
      title: "Strength Progress",
      message: "Your upper body lifts are up 8% this month",
      type: "success",
      icon: "💪",
    },
    {
      title: "Cardio Goal",
      message: "You're 2 sessions away from your weekly cardio target",
      type: "info",
      icon: "🎯",
    },
  ];

  const recentWorkouts = [
    {
      id: 1,
      title: "Leg Day Power",
      date: "Today, 6:00 AM",
      duration: "75 min",
      exercises: 8,
      calories: 420,
      intensity: "High",
    },
    {
      id: 2,
      title: "Upper Body Hypertrophy",
      date: "Yesterday",
      duration: "60 min",
      exercises: 6,
      calories: 350,
      intensity: "Medium",
    },
    {
      id: 3,
      title: "HIIT Cardio",
      date: "2 days ago",
      duration: "30 min",
      exercises: 5,
      calories: 280,
      intensity: "High",
    },
  ];

  const nutritionSummary = {
    calories: { consumed: 2100, target: 2500, remaining: 400 },
    protein: { consumed: 165, target: 180, unit: "g" },
    carbs: { consumed: 220, target: 280, unit: "g" },
    fats: { consumed: 65, target: 75, unit: "g" },
  };

  const injuryPrevention = [
    {
      area: "Right Shoulder",
      status: "Monitor",
      lastReported: "3 days ago",
      severity: "low",
    },
    {
      area: "Left Knee",
      status: "Recovered",
      lastReported: "2 weeks ago",
      severity: "resolved",
    },
  ];

  const quickActions = [
    {
      label: "Log Workout",
      icon: "✏️",
      href: "/workouts/log",
      color:
        "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800",
    },
    {
      label: "Start Timer",
      icon: "⏱️",
      href: "/timer",
      color:
        "bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800",
    },
    {
      label: "Track Meal",
      icon: "🍎",
      href: "/nutrition",
      color:
        "bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800",
    },
    {
      label: "Log Progress",
      icon: "📈",
      href: "/progress/log",
      color:
        "bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800",
    },
  ];

  const skillTracking = [
    { skill: "Vertical Jump", current: '32"', goal: '36"', progress: 80 },
    { skill: "40-Yard Dash", current: "4.8s", goal: "4.5s", progress: 60 },
    { skill: "Free Throw %", current: "78%", goal: "85%", progress: 91 },
  ];

  return (
    <ProtectedRoute>
      {/* Premium Modal - appears after 3 seconds with blur effect */}
      {showPremiumModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop with blur */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
            onClick={handleMaybeLater}
          ></div>

          {/* Modal */}
          <div className="relative w-full max-w-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl shadow-2xl border border-slate-700 overflow-hidden animate-in fade-in zoom-in duration-300">
            {/* Gradient accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"></div>

            {/* Close button */}
            <button
              onClick={handleMaybeLater}
              className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors z-10"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Content */}
            <div className="p-8 md:p-12">
              {/* Icon */}
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-4xl">⚡</span>
              </div>

              {/* Heading */}
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                Unlock Premium Features
              </h2>

              <p className="text-center text-slate-300 text-lg mb-8">
                Take your training to the next level with advanced tools and
                personalized coaching
              </p>

              {/* Features grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {[
                  {
                    icon: "🎯",
                    title: "AI-Powered Programs",
                    desc: "Personalized training plans",
                  },
                  {
                    icon: "📊",
                    title: "Advanced Analytics",
                    desc: "Deep performance insights",
                  },
                  {
                    icon: "👥",
                    title: "Expert Coaching",
                    desc: "Direct access to trainers",
                  },
                  {
                    icon: "🏆",
                    title: "Competition Ready",
                    desc: "Event-specific preparation",
                  },
                ].map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-slate-600 transition-colors"
                  >
                    <span className="text-2xl">{feature.icon}</span>
                    <div>
                      <h3 className="font-semibold text-white mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-slate-400">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pricing */}
              <div className="bg-gradient-to-br from-blue-600/10 to-purple-600/10 border border-blue-500/30 rounded-xl p-6 mb-8">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-slate-300">Premium Plan</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-white">$29</span>
                    <span className="text-slate-400">/month</span>
                  </div>
                </div>
                <p className="text-sm text-slate-400">
                  First 7 days free • Cancel anytime
                </p>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/premium" className="flex-1">
                  <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-xl shadow-lg shadow-blue-600/25 transition-all hover:shadow-xl hover:shadow-blue-600/40 hover:scale-[1.02]">
                    Start Free Trial
                  </button>
                </Link>
                <button
                  onClick={handleMaybeLater}
                  className="flex-1 bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold py-4 px-6 rounded-xl border border-slate-700 transition-colors"
                >
                  Maybe Later
                </button>
              </div>

              <p className="text-center text-xs text-slate-500 mt-6">
                Join 10,000+ athletes already training with Premium
              </p>
            </div>
          </div>
        </div>
      )}

      <LayoutWrapper>
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                  Welcome Back, {displayName}
                </h1>
                <p className="text-slate-400 flex items-center gap-2">
                  <span>Wednesday, November 27, 2024</span>
                  <span className="text-slate-600">•</span>
                  <span className="text-blue-400">
                    2 sessions scheduled today
                  </span>
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg px-4 py-2">
                  <p className="text-xs text-slate-400 mb-1">Week Progress</p>
                  <p className="text-lg font-bold text-white">71%</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {quickActions.map((action) => (
              <Link key={action.label} href={action.href}>
                <button
                  className={`w-full ${action.color} text-white px-6 py-4 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] flex items-center justify-center gap-3`}
                >
                  <span className="text-2xl">{action.icon}</span>
                  <span>{action.label}</span>
                </button>
              </Link>
            ))}
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat) => (
              <Card
                key={stat.label}
                className="p-6 bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 hover:border-slate-600 transition-all hover:scale-[1.02] relative overflow-hidden"
              >
                {/* Background gradient accent */}
                <div
                  className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${stat.color} opacity-10 blur-3xl rounded-full`}
                ></div>

                <div className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl">{stat.icon}</span>
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} opacity-20`}
                    ></div>
                  </div>
                  <p className="text-sm text-slate-400 mb-2">{stat.label}</p>
                  <p className="text-3xl font-bold text-white mb-2">
                    {stat.value}
                  </p>
                  <p
                    className={`text-sm ${
                      stat.changeType === "positive"
                        ? "text-emerald-400"
                        : "text-slate-400"
                    }`}
                  >
                    {stat.change}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          {/* Training Insights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {trainingInsights.map((insight, idx) => (
              <Card
                key={idx}
                className={`p-5 border-l-4 ${
                  insight.type === "warning"
                    ? "border-orange-500 bg-gradient-to-r from-orange-950/30 to-slate-800"
                    : insight.type === "success"
                    ? "border-emerald-500 bg-gradient-to-r from-emerald-950/30 to-slate-800"
                    : "border-blue-500 bg-gradient-to-r from-blue-950/30 to-slate-800"
                } hover:scale-[1.02] transition-all`}
              >
                <div className="flex items-start gap-3">
                  <span className="text-3xl">{insight.icon}</span>
                  <div>
                    <h3 className="font-semibold text-white mb-1">
                      {insight.title}
                    </h3>
                    <p className="text-sm text-slate-300">{insight.message}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Today's Schedule */}
            <Card className="p-6 bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 lg:col-span-2">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">
                  Today's Schedule
                </h2>
                <Link
                  href="/planner"
                  className="text-sm text-blue-400 hover:text-blue-300 font-medium transition-colors"
                >
                  View Calendar →
                </Link>
              </div>
              <div className="space-y-4">
                {todaySchedule.map((session, idx) => (
                  <div
                    key={idx}
                    className={`p-5 rounded-xl border transition-all ${
                      session.completed
                        ? "bg-gradient-to-r from-emerald-950/30 to-slate-800 border-emerald-600/50"
                        : "bg-slate-900/50 border-slate-700 hover:border-slate-600"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 flex-1">
                        <div
                          className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 font-bold ${
                            session.completed
                              ? "bg-gradient-to-br from-emerald-600 to-emerald-700 text-white text-2xl"
                              : "bg-slate-800 text-slate-400 text-lg"
                          }`}
                        >
                          {session.completed ? "✓" : session.time.split(":")[0]}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-white text-lg mb-1">
                            {session.title}
                          </h3>
                          <div className="flex items-center gap-3 text-sm text-slate-400">
                            <span>{session.type}</span>
                            <span className="text-slate-600">•</span>
                            <span>{session.duration}</span>
                            <span className="text-slate-600">•</span>
                            <span className="text-slate-500">
                              {session.time}
                            </span>
                          </div>
                        </div>
                      </div>
                      {!session.completed && (
                        <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-2 rounded-lg font-medium transition-all hover:scale-105 shadow-lg">
                          Start
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Weekly Progress */}
            <Card className="p-6 bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700">
              <h2 className="text-2xl font-bold text-white mb-6">This Week</h2>
              <div className="flex justify-between mb-6">
                {weeklyProgress.map((day) => (
                  <div
                    key={day.day}
                    className="flex flex-col items-center gap-2"
                  >
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center font-semibold transition-all ${
                        day.completed
                          ? "bg-gradient-to-br from-emerald-600 to-emerald-700 text-white scale-110 shadow-lg shadow-emerald-600/30"
                          : "bg-slate-800 text-slate-500"
                      }`}
                    >
                      {day.completed ? "✓" : ""}
                    </div>
                    <span
                      className={`text-xs font-medium ${
                        day.completed ? "text-slate-300" : "text-slate-500"
                      }`}
                    >
                      {day.day}
                    </span>
                    {day.workouts > 0 && (
                      <span className="text-xs text-emerald-400 font-medium">
                        {day.workouts}×
                      </span>
                    )}
                  </div>
                ))}
              </div>
              <div className="bg-slate-700 rounded-full h-3 overflow-hidden mb-3">
                <div
                  className="bg-gradient-to-r from-emerald-600 to-emerald-500 h-full rounded-full transition-all duration-500"
                  style={{ width: "43%" }}
                ></div>
              </div>
              <p className="text-sm text-slate-300 text-center font-medium">
                5 of 7 workout days completed
              </p>
              <p className="text-xs text-slate-500 text-center mt-1">
                Keep it up! 2 more to go 💪
              </p>
            </Card>
          </div>

          {/* Active Programs */}
          <Card className="p-6 bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Active Programs</h2>
              <Link
                href="/programs"
                className="text-sm text-blue-400 hover:text-blue-300 font-medium transition-colors"
              >
                Browse All →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {activeProgramsDetail.map((program) => (
                <div
                  key={program.id}
                  className="group relative overflow-hidden rounded-xl border border-slate-700 hover:border-slate-600 transition-all hover:scale-[1.02] cursor-pointer"
                >
                  {/* Gradient background */}
                  <div className={`${program.color} p-6`}>
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="font-bold text-white text-lg mb-1">
                          {program.name}
                        </h3>
                        <p className="text-sm text-white/80">{program.sport}</p>
                      </div>
                      <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-lg">
                        <span className="text-sm font-bold text-white">
                          {program.progress}%
                        </span>
                      </div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-full h-2 overflow-hidden mb-4">
                      <div
                        className="bg-white h-full rounded-full transition-all duration-500"
                        style={{ width: `${program.progress}%` }}
                      ></div>
                    </div>
                    <div className="flex items-center justify-between text-sm text-white/90">
                      <span>{program.sessionsLeft} sessions left</span>
                      <span className="font-medium">{program.nextSession}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Performance Metrics */}
            <Card className="p-6 bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">
                  Performance Tracking
                </h2>
                <Link
                  href="/performance"
                  className="text-sm text-blue-400 hover:text-blue-300 font-medium transition-colors"
                >
                  View All →
                </Link>
              </div>
              <div className="space-y-4">
                {performanceMetrics.map((metric, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-slate-900/50 rounded-xl border border-slate-700/50 hover:border-slate-600 transition-all"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold text-white text-lg">
                        {metric.exercise}
                      </h3>
                      <span className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-3 py-1 rounded-lg text-sm font-semibold">
                        {metric.improvement}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm mb-2">
                      <div>
                        <span className="text-slate-400">Current: </span>
                        <span className="text-white font-semibold">
                          {metric.current}
                        </span>
                      </div>
                      <div>
                        <span className="text-slate-500">
                          Previous: {metric.previous}
                        </span>
                      </div>
                    </div>
                    <p className="text-xs text-slate-500">{metric.date}</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Recent Workouts */}
            <Card className="p-6 bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">
                  Recent Workouts
                </h2>
                <Link
                  href="/workouts"
                  className="text-sm text-blue-400 hover:text-blue-300 font-medium transition-colors"
                >
                  View All →
                </Link>
              </div>
              <div className="space-y-4">
                {recentWorkouts.map((workout) => (
                  <div
                    key={workout.id}
                    className="p-4 bg-slate-900/50 rounded-xl border border-slate-700/50 hover:border-slate-600 hover:bg-slate-800/50 transition-all cursor-pointer"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-semibold text-white text-lg">
                          {workout.title}
                        </h3>
                        <p className="text-xs text-slate-500">{workout.date}</p>
                      </div>
                      <span
                        className={`px-3 py-1 rounded-lg text-sm font-semibold ${
                          workout.intensity === "High"
                            ? "bg-gradient-to-r from-red-600 to-red-700 text-white"
                            : workout.intensity === "Medium"
                            ? "bg-gradient-to-r from-orange-600 to-orange-700 text-white"
                            : "bg-gradient-to-r from-emerald-600 to-emerald-700 text-white"
                        }`}
                      >
                        {workout.intensity}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-slate-400">
                      <span className="flex items-center gap-1">
                        ⏱️ {workout.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        💪 {workout.exercises}
                      </span>
                      <span className="flex items-center gap-1">
                        🔥 {workout.calories} cal
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Skill Tracking */}
            <Card className="p-6 bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">
                  Skill Development
                </h2>
                <Link
                  href="/skills"
                  className="text-sm text-blue-400 hover:text-blue-300 font-medium transition-colors"
                >
                  Manage →
                </Link>
              </div>
              <div className="space-y-5">
                {skillTracking.map((skill, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-slate-900/50 rounded-xl border border-slate-700/50"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold text-white text-lg">
                        {skill.skill}
                      </h3>
                      <span className="text-sm text-slate-400 font-medium">
                        {skill.progress}%
                      </span>
                    </div>
                    <div className="bg-slate-700 rounded-full h-2.5 overflow-hidden mb-3">
                      <div
                        className="bg-gradient-to-r from-purple-600 to-purple-500 h-full rounded-full transition-all duration-500"
                        style={{ width: `${skill.progress}%` }}
                      ></div>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400">
                        Current:{" "}
                        <span className="text-white font-medium">
                          {skill.current}
                        </span>
                      </span>
                      <span className="text-slate-500">Goal: {skill.goal}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Nutrition Summary */}
            <Card className="p-6 bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">
                  Today's Nutrition
                </h2>
                <Link
                  href="/nutrition"
                  className="text-sm text-blue-400 hover:text-blue-300 font-medium transition-colors"
                >
                  Full Tracker →
                </Link>
              </div>
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-slate-300 font-medium">Calories</span>
                  <span className="text-white font-bold text-xl">
                    {nutritionSummary.calories.consumed} /{" "}
                    {nutritionSummary.calories.target}
                  </span>
                </div>
                <div className="bg-slate-700 rounded-full h-3 overflow-hidden mb-2">
                  <div
                    className="bg-gradient-to-r from-blue-600 to-blue-500 h-full rounded-full transition-all duration-500"
                    style={{
                      width: `${
                        (nutritionSummary.calories.consumed /
                          nutritionSummary.calories.target) *
                        100
                      }%`,
                    }}
                  ></div>
                </div>
                <p className="text-sm text-slate-400 text-right">
                  {nutritionSummary.calories.remaining} remaining
                </p>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="p-4 bg-slate-900/50 rounded-xl border border-slate-700/50 text-center">
                  <p className="text-xs text-slate-400 mb-2">Protein</p>
                  <p className="text-2xl font-bold text-white">
                    {nutritionSummary.protein.consumed}
                    <span className="text-sm">
                      {nutritionSummary.protein.unit}
                    </span>
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    of {nutritionSummary.protein.target}
                    {nutritionSummary.protein.unit}
                  </p>
                </div>
                <div className="p-4 bg-slate-900/50 rounded-xl border border-slate-700/50 text-center">
                  <p className="text-xs text-slate-400 mb-2">Carbs</p>
                  <p className="text-2xl font-bold text-white">
                    {nutritionSummary.carbs.consumed}
                    <span className="text-sm">
                      {nutritionSummary.carbs.unit}
                    </span>
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    of {nutritionSummary.carbs.target}
                    {nutritionSummary.carbs.unit}
                  </p>
                </div>
                <div className="p-4 bg-slate-900/50 rounded-xl border border-slate-700/50 text-center">
                  <p className="text-xs text-slate-400 mb-2">Fats</p>
                  <p className="text-2xl font-bold text-white">
                    {nutritionSummary.fats.consumed}
                    <span className="text-sm">
                      {nutritionSummary.fats.unit}
                    </span>
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    of {nutritionSummary.fats.target}
                    {nutritionSummary.fats.unit}
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Upcoming Events */}
            <Card className="p-6 bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">
                  Upcoming Events
                </h2>
                <Link
                  href="/events"
                  className="text-sm text-blue-400 hover:text-blue-300 font-medium transition-colors"
                >
                  Add Event →
                </Link>
              </div>
              <div className="space-y-4">
                {upcomingEvents.map((event) => (
                  <div
                    key={event.id}
                    className="p-4 bg-slate-900/50 rounded-xl border-l-4 border-purple-600 hover:bg-slate-800/50 transition-all"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold text-white text-lg mb-1">
                          {event.title}
                        </h3>
                        <p className="text-sm text-slate-400 mb-2">
                          {event.date}
                        </p>
                        <span className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-lg text-sm font-medium inline-block">
                          {event.type}
                        </span>
                      </div>
                      <div className="text-right ml-4">
                        <p className="text-3xl font-bold text-white">
                          {event.daysAway}
                        </p>
                        <p className="text-xs text-slate-400">days</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Injury Prevention */}
            <Card className="p-6 bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">
                  Injury Prevention
                </h2>
                <Link
                  href="/health"
                  className="text-sm text-blue-400 hover:text-blue-300 font-medium transition-colors"
                >
                  Health Log →
                </Link>
              </div>
              <div className="space-y-4 mb-6">
                {injuryPrevention.map((injury, idx) => (
                  <div
                    key={idx}
                    className={`p-4 rounded-xl border ${
                      injury.severity === "low"
                        ? "bg-yellow-950/20 border-yellow-600/30"
                        : "bg-emerald-950/20 border-emerald-600/30"
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold text-white text-lg">
                          {injury.area}
                        </h3>
                        <p className="text-xs text-slate-400 mt-1">
                          {injury.lastReported}
                        </p>
                      </div>
                      <span
                        className={`px-3 py-1 rounded-lg text-sm font-semibold ${
                          injury.severity === "low"
                            ? "bg-yellow-600/20 text-yellow-300"
                            : "bg-emerald-600/20 text-emerald-300"
                        }`}
                      >
                        {injury.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-5 bg-gradient-to-r from-blue-950/30 to-slate-900 rounded-xl border border-blue-600/30 text-center">
                <p className="text-sm text-slate-300 mb-3 font-medium">
                  Prehab exercises recommended
                </p>
                <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-2.5 rounded-lg font-semibold transition-all hover:scale-105 shadow-lg">
                  View Exercises
                </button>
              </div>
            </Card>
          </div>

          {/* Recent Achievements */}
          <Card className="p-6 bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">
              Recent Achievements
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {recentAchievements.map((achievement) => (
                <div
                  key={achievement.id}
                  className="relative overflow-hidden rounded-xl border border-slate-700 hover:border-slate-600 hover:scale-[1.02] transition-all cursor-pointer group"
                >
                  <div className={`bg-gradient-to-br ${achievement.color} p-6`}>
                    <div className="text-5xl mb-4">{achievement.icon}</div>
                    <h3 className="font-bold text-white text-xl mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-white/90 mb-3">
                      {achievement.description}
                    </p>
                    <p className="text-sm text-white/70">{achievement.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Quick Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Link href="/exercises">
              <Card className="p-6 text-center hover:border-blue-500 cursor-pointer transition-all hover:scale-[1.02] bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 group">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                  💪
                </div>
                <h3 className="font-bold mb-2 text-white text-lg">
                  Exercise Library
                </h3>
                <p className="text-sm text-slate-400">Browse 500+ exercises</p>
              </Card>
            </Link>
            <Link href="/programs">
              <Card className="p-6 text-center hover:border-blue-500 cursor-pointer transition-all hover:scale-[1.02] bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 group">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                  📋
                </div>
                <h3 className="font-bold mb-2 text-white text-lg">Programs</h3>
                <p className="text-sm text-slate-400">
                  Structured training plans
                </p>
              </Card>
            </Link>
            <Link href="/community">
              <Card className="p-6 text-center hover:border-blue-500 cursor-pointer transition-all hover:scale-[1.02] bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 group">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                  👥
                </div>
                <h3 className="font-bold mb-2 text-white text-lg">Community</h3>
                <p className="text-sm text-slate-400">Connect with athletes</p>
              </Card>
            </Link>
            <Link href="/coach">
              <Card className="p-6 text-center hover:border-blue-500 cursor-pointer transition-all hover:scale-[1.02] bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 group">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                  🎓
                </div>
                <h3 className="font-bold mb-2 text-white text-lg">Coaching</h3>
                <p className="text-sm text-slate-400">Get expert guidance</p>
              </Card>
            </Link>
          </div>
        </div>
      </LayoutWrapper>
    </ProtectedRoute>
  );
}
