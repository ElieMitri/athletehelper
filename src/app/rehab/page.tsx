"use client";

import LayoutWrapper from "@/components/layout/LayoutWrapper";
import InjuryCard from "@/components/rehab/InjuryCard";
import Card from "@/components/shared/Card";
import { useState } from "react";
import Link from "next/link";
import { rehabPrograms, getAllBodyParts } from "@/data/rehab-programs";
import { useAuth } from "@/context/AuthContext";

export default function RehabPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBodyPart, setSelectedBodyPart] = useState("All");
  const [selectedSeverity, setSelectedSeverity] = useState("All");
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-[#0a0a0a]">
        <div className="animate-spin h-12 w-12 border-4 border-blue-600 border-t-transparent rounded-full"></div>
      </div>
    );
  }

  // Generate body parts filter from data
  const uniqueBodyParts = getAllBodyParts();
  const bodyParts = [
    { name: "All", icon: "📚", count: rehabPrograms.length },
    ...uniqueBodyParts.map((part) => ({
      name: part,
      icon: getBodyPartIcon(part),
      count: rehabPrograms.filter((p) => p.bodyPart === part).length,
    })),
  ];

  const severities = [
    { name: "All", color: "from-slate-600 to-slate-700", icon: "📊" },
    { name: "Mild", color: "from-emerald-600 to-emerald-700", icon: "🟢" },
    { name: "Moderate", color: "from-orange-600 to-orange-700", icon: "🟡" },
    { name: "Severe", color: "from-red-600 to-red-700", icon: "🔴" },
  ];

  // Calculate severity counts
  const severityCounts = {
    mild: rehabPrograms.filter((p) => p.severity === "mild").length,
    moderate: rehabPrograms.filter((p) => p.severity === "moderate").length,
    severe: rehabPrograms.filter((p) => p.severity === "severe").length,
  };

  const stats = [
    {
      label: "Total Programs",
      value: rehabPrograms.length.toString(),
      icon: "📚",
      color: "from-blue-600 to-blue-700",
    },
    {
      label: "Body Parts Covered",
      value: uniqueBodyParts.length.toString(),
      icon: "🦴",
      color: "from-purple-600 to-purple-700",
    },
    {
      label: "Severity Levels",
      value: "3",
      icon: "📊",
      color: "from-orange-600 to-orange-700",
    },
    {
      label: "Evidence-Based",
      value: "100%",
      icon: "✓",
      color: "from-emerald-600 to-emerald-700",
    },
  ];

  const activeInjuries = [
    {
      id: 1,
      bodyPart: "Right Shoulder",
      program: "Shoulder Rotator Cuff",
      status: "In Progress",
      progress: 65,
      daysRemaining: 21,
      color: "orange",
    },
    {
      id: 2,
      bodyPart: "Lower Back",
      program: "Lower Back Pain Relief",
      status: "Early Stage",
      progress: 25,
      daysRemaining: 35,
      color: "blue",
    },
  ];

  const rehabTips = [
    {
      title: "Consistency is Key",
      description:
        "Regular, daily exercises are more effective than sporadic intense sessions",
      icon: "📅",
    },
    {
      title: "Listen to Your Body",
      description:
        "Mild discomfort is okay, but sharp pain means stop immediately",
      icon: "👂",
    },
    {
      title: "Track Progress",
      description: "Document your pain levels and range of motion improvements",
      icon: "📊",
    },
    {
      title: "Professional Guidance",
      description:
        "Consult with healthcare providers before starting any program",
      icon: "👨‍⚕️",
    },
  ];

  // Filter programs
  const filteredPrograms = rehabPrograms.filter((program) => {
    const matchesSearch =
      program.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      program.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      program.bodyPart.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesBodyPart =
      selectedBodyPart === "All" || program.bodyPart === selectedBodyPart;
    const matchesSeverity =
      selectedSeverity === "All" ||
      program.severity.toLowerCase() === selectedSeverity.toLowerCase();

    return matchesSearch && matchesBodyPart && matchesSeverity;
  });

  return (
    <LayoutWrapper>
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between flex-wrap gap-4 mb-4">
            <div>
              <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                Injury Rehabilitation
              </h1>
              <p className="text-slate-400 text-lg">
                Science-based recovery programs for common injuries •{" "}
                {rehabPrograms.length} protocols available
              </p>
            </div>
            {/* <Link href="/rehab/tracker">
              <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-xl font-semibold transition-all hover:scale-105 shadow-lg flex items-center gap-2">
                <span>📊</span>
                <span>Injury Tracker</span>
              </button>
            </Link> */}
          </div>
        </div>

        {/* Important Notice */}
        <div className="bg-gradient-to-r from-blue-600/10 via-blue-600/10 to-blue-600/5 border border-blue-600/30 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
              <span className="text-3xl">ℹ️</span>
            </div>
            <div>
              <h3 className="font-bold text-white text-lg mb-2">
                Important Medical Notice
              </h3>
              <p className="text-slate-300 mb-3">
                These programs are for educational purposes and should not
                replace professional medical advice. Always consult with a
                healthcare professional, physical therapist, or sports medicine
                doctor before starting any rehabilitation program.
              </p>
              <div className="flex items-center gap-4 text-sm text-slate-400 flex-wrap">
                <span className="flex items-center gap-1">
                  <span>✓</span> Evidence-based protocols
                </span>
                <span className="flex items-center gap-1">
                  <span>✓</span> Progressive difficulty
                </span>
                <span className="flex items-center gap-1">
                  <span>✓</span> Professional reviewed
                </span>
                <span className="flex items-center gap-1">
                  <span>✓</span> {rehabPrograms.length} comprehensive programs
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat) => (
            <Card
              key={stat.label}
              className="p-5 bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 hover:border-slate-600 transition-all hover:scale-[1.02] relative overflow-hidden"
            >
              <div
                className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${stat.color} opacity-10 blur-2xl rounded-full`}
              ></div>
              <div className="relative">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-3xl">{stat.icon}</span>
                  <div
                    className={`w-10 h-10 rounded-lg bg-gradient-to-br ${stat.color} opacity-20`}
                  ></div>
                </div>
                <p className="text-3xl font-bold text-white mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-slate-400">{stat.label}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Active Injuries */}
        {/* {activeInjuries.length > 0 && (
          <Card className="p-6 mb-8 bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <span>🏥</span>
                <span>Active Recovery Programs</span>
              </h2>
              <Link href="/rehab/tracker">
                <button className="text-sm text-blue-400 hover:text-blue-300 font-medium transition-colors">
                  View All →
                </button>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {activeInjuries.map((injury) => (
                <div
                  key={injury.id}
                  className="p-5 bg-slate-900 rounded-xl border border-slate-700 hover:border-slate-600 transition-all cursor-pointer group hover:scale-[1.02]"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-bold text-white text-lg mb-1 group-hover:text-blue-400 transition-colors">
                        {injury.bodyPart}
                      </h3>
                      <p className="text-sm text-slate-400 mb-2">
                        {injury.program}
                      </p>
                      <p
                        className={`text-xs px-2 py-1 rounded inline-block ${
                          injury.color === "orange"
                            ? "bg-orange-600/20 text-orange-300"
                            : "bg-blue-600/20 text-blue-300"
                        }`}
                      >
                        {injury.status}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-white">
                        {injury.progress}%
                      </p>
                      <p className="text-xs text-slate-400">Complete</p>
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="bg-slate-700 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-500 ${
                          injury.color === "orange"
                            ? "bg-orange-500"
                            : "bg-blue-500"
                        }`}
                        style={{ width: `${injury.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  <p className="text-sm text-slate-400">
                    {injury.daysRemaining} days remaining
                  </p>
                </div>
              ))}
            </div>
          </Card>
        )} */}

        {/* Search and Filters */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-xl p-6 mb-8">
          <div className="flex flex-col gap-4">
            {/* Search Bar */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <span className="text-slate-400 text-xl">🔍</span>
              </div>
              <input
                type="text"
                placeholder="Search rehabilitation programs by injury, body part, or description..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg pl-12 pr-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-white transition-colors"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Body Part Filter */}
            <div>
              <p className="text-sm text-slate-400 mb-3 font-medium">
                Body Part
              </p>
              <div className="flex flex-wrap gap-2">
                {bodyParts.map((part) => (
                  <button
                    key={part.name}
                    onClick={() => setSelectedBodyPart(part.name)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-2 ${
                      selectedBodyPart === part.name
                        ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-600/30 scale-105"
                        : "bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700"
                    }`}
                  >
                    <span>{part.icon}</span>
                    <span>{part.name}</span>
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full ${
                        selectedBodyPart === part.name
                          ? "bg-white/20"
                          : "bg-slate-700"
                      }`}
                    >
                      {part.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Severity Filter */}
            <div>
              <p className="text-sm text-slate-400 mb-3 font-medium">
                Severity Level
              </p>
              <div className="flex flex-wrap gap-2">
                {severities.map((severity) => {
                  const count =
                    severity.name === "All"
                      ? rehabPrograms.length
                      : severityCounts[
                          severity.name.toLowerCase() as keyof typeof severityCounts
                        ];
                  return (
                    <button
                      key={severity.name}
                      onClick={() => setSelectedSeverity(severity.name)}
                      className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-2 ${
                        selectedSeverity === severity.name
                          ? `bg-gradient-to-r ${severity.color} text-white shadow-lg scale-105`
                          : "bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700"
                      }`}
                    >
                      <span>{severity.icon}</span>
                      <span>{severity.name}</span>
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full ${
                          selectedSeverity === severity.name
                            ? "bg-white/20"
                            : "bg-slate-700"
                        }`}
                      >
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Active Filters Summary */}
          {(searchQuery ||
            selectedBodyPart !== "All" ||
            selectedSeverity !== "All") && (
            <div className="mt-4 pt-4 border-t border-slate-700 flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-2 text-sm flex-wrap">
                <span className="text-slate-400">
                  Showing {filteredPrograms.length} of {rehabPrograms.length}{" "}
                  programs
                </span>
                {searchQuery && (
                  <span className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full">
                    "{searchQuery}"
                  </span>
                )}
                {selectedBodyPart !== "All" && (
                  <span className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full">
                    {selectedBodyPart}
                  </span>
                )}
                {selectedSeverity !== "All" && (
                  <span className="bg-orange-600/20 text-orange-300 px-3 py-1 rounded-full">
                    {selectedSeverity}
                  </span>
                )}
              </div>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedBodyPart("All");
                  setSelectedSeverity("All");
                }}
                className="text-sm text-blue-400 hover:text-blue-300 font-medium transition-colors"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-white">
            {filteredPrograms.length === 0
              ? "No programs found"
              : filteredPrograms.length === rehabPrograms.length
              ? "All Rehabilitation Programs"
              : `${filteredPrograms.length} Program${
                  filteredPrograms.length !== 1 ? "s" : ""
                } Found`}
          </h2>
          {filteredPrograms.length > 0 && (
            <p className="text-slate-400 mt-1">
              From mild to severe injuries • Evidence-based protocols
            </p>
          )}
        </div>

        {/* Programs Grid */}
        {filteredPrograms.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {filteredPrograms.map((program, index) => (
              <InjuryCard
                key={program.id}
                {...program}
                locked={user.subscription !== "paid" && index >= 4} // 🔥 BLUR AFTER FIRST 4
              />
            ))}
          </div>
        ) : (
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-xl p-12 text-center mb-8">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-2">
              No programs found
            </h3>
            <p className="text-slate-400 mb-6">
              Try adjusting your filters or search terms to find the right
              rehabilitation program
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedBodyPart("All");
                setSelectedSeverity("All");
              }}
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105"
            >
              Clear All Filters
            </button>
          </div>
        )}

        {/* Rehab Tips */}
        <Card className="p-6 mb-8 bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <span>💡</span>
            <span>Rehabilitation Tips</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {rehabTips.map((tip, index) => (
              <div
                key={index}
                className="p-5 bg-slate-900/50 rounded-xl border border-slate-700 hover:border-slate-600 transition-all group hover:scale-[1.02]"
              >
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">
                  {tip.icon}
                </div>
                <h3 className="font-bold text-white mb-2">{tip.title}</h3>
                <p className="text-sm text-slate-400">{tip.description}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Quick Actions */}
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/rehab/assessment">
            <div className="bg-gradient-to-br from-blue-600/10 to-slate-800 border border-blue-600/30 rounded-xl p-6 hover:border-blue-600/50 transition-all cursor-pointer group hover:scale-[1.02]">
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                📋
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Injury Assessment
              </h3>
              <p className="text-slate-400 text-sm">
                Take a guided assessment to find the right program for your
                injury
              </p>
            </div>
          </Link>

          <Link href="/rehab/tracker">
            <div className="bg-gradient-to-br from-purple-600/10 to-slate-800 border border-purple-600/30 rounded-xl p-6 hover:border-purple-600/50 transition-all cursor-pointer group hover:scale-[1.02]">
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                📊
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Track Recovery
              </h3>
              <p className="text-slate-400 text-sm">
                Monitor your progress and pain levels throughout rehabilitation
              </p>
            </div>
          </Link>

          <Link href="/rehab/professionals">
            <div className="bg-gradient-to-br from-emerald-600/10 to-slate-800 border border-emerald-600/30 rounded-xl p-6 hover:border-emerald-600/50 transition-all cursor-pointer group hover:scale-[1.02]">
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                👨‍⚕️
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Find a Professional
              </h3>
              <p className="text-slate-400 text-sm">
                Connect with certified physical therapists in your area
              </p>
            </div>
          </Link>
        </div> */}
      </div>
    </LayoutWrapper>
  );
}

// Helper function to get body part icons
function getBodyPartIcon(bodyPart: string): string {
  const iconMap: Record<string, string> = {
    Knee: "🦵",
    Ankle: "🦶",
    Shoulder: "💪",
    Back: "🧘",
    Elbow: "💪",
    Hip: "🦴",
    Hamstring: "🦵",
    Quadriceps: "🦵",
    Calf: "🦵",
    Wrist: "✋",
    Neck: "🧘",
    Shin: "🦵",
    Foot: "🦶",
  };
  return iconMap[bodyPart] || "🦴";
}
