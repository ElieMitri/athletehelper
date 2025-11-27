"use client";

import LayoutWrapper from "@/components/layout/LayoutWrapper";
import Card from "@/components/shared/Card";
import Button from "@/components/shared/Button";
import { useState } from "react";
import Link from "next/link";
import { getRehabDetailOrDefault } from "@/data/rehab-details";

export default function RehabDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const [activePhase, setActivePhase] = useState(1);
  const [isSaved, setIsSaved] = useState(false);

  // Get rehab data dynamically - works for all 30 programs
  const rehab = getRehabDetailOrDefault(params.id);

  // Determine severity color
  const getSeverityColor = () => {
    switch (rehab.severity.toLowerCase()) {
      case "severe":
        return "from-red-600 to-red-700";
      case "moderate":
        return "from-orange-600 to-orange-700";
      case "mild":
        return "from-emerald-600 to-emerald-700";
      default:
        return "from-blue-600 to-blue-700";
    }
  };

  const getSeverityIcon = () => {
    switch (rehab.severity.toLowerCase()) {
      case "severe":
        return "🔴";
      case "moderate":
        return "🟡";
      case "mild":
        return "🟢";
      default:
        return "📊";
    }
  };

  const getBodyPartIcon = () => {
    const icons: Record<string, string> = {
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
    return icons[rehab.bodyPart] || "🦴";
  };

  const stats = [
    {
      label: "Success Rate",
      value: `${rehab.successRate}%`,
      icon: "✓",
      color: "from-emerald-600 to-emerald-700",
    },
    {
      label: "Total Phases",
      value: rehab.totalPhases.toString(),
      icon: "📋",
      color: "from-blue-600 to-blue-700",
    },
    {
      label: "Exercises",
      value: rehab.totalExercises.toString(),
      icon: "💪",
      color: "from-purple-600 to-purple-700",
    },
    {
      label: "Avg Recovery",
      value: rehab.avgRecoveryTime,
      icon: "⏱️",
      color: "from-orange-600 to-orange-700",
    },
  ];

  return (
    <LayoutWrapper>
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Back Navigation */}
        <Link href="/rehab">
          <button className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-6 group">
            <span className="group-hover:-translate-x-1 transition-transform">
              ←
            </span>
            <span>Back to Rehabilitation Programs</span>
          </button>
        </Link>

        {/* Medical Warning */}
        <div className="bg-gradient-to-r from-yellow-600/10 via-yellow-600/10 to-yellow-600/5 border border-yellow-600/30 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-yellow-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
              <span className="text-3xl">⚠️</span>
            </div>
            <div>
              <h3 className="font-bold text-white text-lg mb-2">
                Medical Supervision Required
              </h3>
              <p className="text-slate-300 mb-3">
                This protocol should only be followed under the direct guidance
                of a licensed healthcare professional. Do not attempt without
                proper medical clearance and ongoing supervision.
              </p>
              <div className="flex items-center gap-4 text-sm text-slate-400 flex-wrap">
                <span className="flex items-center gap-1">
                  <span>🏥</span> Medical clearance required
                </span>
                <span className="flex items-center gap-1">
                  <span>👨‍⚕️</span> PT supervision mandatory
                </span>
                <span className="flex items-center gap-1">
                  <span>📋</span> Regular assessments needed
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 border border-slate-700 rounded-2xl p-8 mb-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-600/10 to-purple-600/10 blur-3xl rounded-full"></div>

          <div className="relative">
            {/* Badges */}
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <span
                className={`px-4 py-2 rounded-lg font-semibold text-white bg-gradient-to-r ${getSeverityColor()} shadow-lg flex items-center gap-2`}
              >
                <span>{getSeverityIcon()}</span>
                {rehab.severity}
              </span>
              <span className="px-4 py-2 rounded-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg flex items-center gap-2">
                <span>{getBodyPartIcon()}</span>
                {rehab.bodyPart}
              </span>
              <span className="px-4 py-2 rounded-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-purple-700 shadow-lg flex items-center gap-2">
                <span>⏱️</span>
                {rehab.duration}
              </span>
              <span className="px-4 py-2 rounded-lg font-medium text-slate-300 bg-slate-800 border border-slate-700 flex items-center gap-2">
                <span>✓</span>
                {rehab.successRate}% Success Rate
              </span>
            </div>

            {/* Title */}
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              {rehab.title}
            </h1>

            {/* Description */}
            <p className="text-lg text-slate-300 mb-6 leading-relaxed max-w-3xl">
              {rehab.description}
            </p>

            {/* Therapist Info */}
            <div className="flex items-center gap-3 mb-6 p-4 bg-slate-800/50 rounded-xl border border-slate-700 inline-flex">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-2xl">
                {rehab.therapist.avatar}
              </div>
              <div>
                <p className="font-semibold text-white">
                  {rehab.therapist.name}
                </p>
                <p className="text-sm text-slate-400">
                  {rehab.therapist.credentials}
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            {/* <div className="flex gap-4 flex-wrap">
              <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg shadow-blue-600/30 hover:scale-105 transition-all text-lg px-8 py-4">
                <span className="flex items-center gap-2">
                  <span>🚀</span>
                  <span>Start Protocol</span>
                </span>
              </Button>
              <button
                onClick={() => setIsSaved(!isSaved)}
                className={`px-6 py-4 rounded-xl font-semibold transition-all hover:scale-105 ${
                  isSaved
                    ? "bg-gradient-to-r from-orange-600 to-orange-700 text-white shadow-lg shadow-orange-600/30"
                    : "bg-slate-800 text-slate-300 border border-slate-700 hover:bg-slate-700"
                }`}
              >
                <span className="flex items-center gap-2">
                  <span>{isSaved ? "📌" : "🔖"}</span>
                  <span>{isSaved ? "Saved" : "Save Protocol"}</span>
                </span>
              </button>
              <button className="px-6 py-4 rounded-xl font-semibold bg-slate-800 text-slate-300 border border-slate-700 hover:bg-slate-700 transition-all hover:scale-105">
                <span className="flex items-center gap-2">
                  <span>📄</span>
                  <span>Download PDF</span>
                </span>
              </button>
            </div> */}
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="p-5 bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 hover:border-slate-600 transition-all hover:scale-[1.02] text-center"
            >
              <div
                className={`w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-2xl`}
              >
                {stat.icon}
              </div>
              <p className="text-2xl font-bold text-white mb-1">{stat.value}</p>
              <p className="text-sm text-slate-400">{stat.label}</p>
            </Card>
          ))}
        </div>

        {/* Recovery Timeline */}
        <Card className="p-6 mb-8 bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <span>📅</span>
            <span>Recovery Timeline</span>
          </h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-slate-700"></div>

            <div className="space-y-6">
              {rehab.milestones.map((milestone, index) => (
                <div key={index} className="flex items-start gap-4 relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center flex-shrink-0 relative z-10 shadow-lg">
                    <span className="font-bold text-white text-sm">
                      {milestone.week}w
                    </span>
                  </div>
                  <div className="flex-1 pt-2">
                    <p className="text-white font-semibold mb-1">
                      Week {milestone.week}
                    </p>
                    <p className="text-slate-400 text-sm">{milestone.goal}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Phase Navigation */}
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-2">
            <span>📋</span>
            <span>Recovery Phases</span>
          </h2>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {rehab.phases.map((phase) => (
              <button
                key={phase.phase}
                onClick={() => setActivePhase(phase.phase)}
                className={`px-6 py-3 rounded-lg font-semibold whitespace-nowrap transition-all ${
                  activePhase === phase.phase
                    ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg scale-105"
                    : "bg-slate-800 text-slate-400 hover:bg-slate-700 border border-slate-700"
                }`}
              >
                Phase {phase.phase}
              </button>
            ))}
          </div>
        </div>

        {/* Active Phase Content */}
        {rehab.phases
          .filter((p) => p.phase === activePhase)
          .map((phase) => (
            <Card
              key={phase.phase}
              className="p-8 mb-8 bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700"
            >
              <div className="border-l-4 border-blue-500 pl-6">
                <div className="flex items-start justify-between mb-6 flex-wrap gap-4">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">
                      Phase {phase.phase}: {phase.name}
                    </h3>
                    <div className="flex items-center gap-4 text-slate-400 flex-wrap">
                      <span className="flex items-center gap-1">
                        <span>⏱️</span>
                        <span>{phase.duration}</span>
                      </span>
                      <span className="flex items-center gap-1">
                        <span>📅</span>
                        <span>{phase.frequency}</span>
                      </span>
                      <span
                        className={`px-3 py-1 rounded-lg text-sm font-medium ${
                          phase.intensity === "Low"
                            ? "bg-emerald-600/20 text-emerald-300"
                            : phase.intensity === "Low-Medium"
                            ? "bg-blue-600/20 text-blue-300"
                            : phase.intensity === "Medium"
                            ? "bg-orange-600/20 text-orange-300"
                            : phase.intensity === "Medium-High"
                            ? "bg-orange-600/20 text-orange-300"
                            : "bg-red-600/20 text-red-300"
                        }`}
                      >
                        {phase.intensity} Intensity
                      </span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {/* Goals */}
                  <div className="p-5 bg-slate-900/50 rounded-xl border border-slate-700">
                    <h4 className="font-bold text-white text-lg mb-4 flex items-center gap-2">
                      <span>🎯</span>
                      <span>Phase Goals</span>
                    </h4>
                    <ul className="space-y-3">
                      {phase.goals.map((goal, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-emerald-600 to-emerald-700 text-white rounded-lg flex items-center justify-center text-sm">
                            ✓
                          </span>
                          <span className="text-slate-300 leading-relaxed">
                            {goal}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Exercises */}
                  <div className="p-5 bg-slate-900/50 rounded-xl border border-slate-700">
                    <h4 className="font-bold text-white text-lg mb-4 flex items-center gap-2">
                      <span>💪</span>
                      <span>Key Exercises</span>
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      {phase.exercises.map((exercise, index) => (
                        <div
                          key={index}
                          className="p-3 bg-slate-800 rounded-lg text-slate-200 hover:bg-slate-700 transition-colors cursor-pointer group"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-sm">{exercise}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}

        {/* Precautions & Outcomes */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Precautions */}
          <Card className="p-6 bg-gradient-to-br from-red-950/30 to-slate-800 border-red-600/30">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <span>⚠️</span>
              <span>Important Precautions</span>
            </h2>
            <ul className="space-y-4">
              {rehab.precautions.map((precaution, index) => (
                <li key={index} className="flex items-start gap-3 group">
                  <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-red-600 to-red-700 text-white rounded-lg flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                    ⚠️
                  </span>
                  <span className="text-slate-300 leading-relaxed pt-1">
                    {precaution}
                  </span>
                </li>
              ))}
            </ul>
          </Card>

          {/* Expected Outcomes */}
          <Card className="p-6 bg-gradient-to-br from-emerald-950/30 to-slate-800 border-emerald-600/30">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <span>✓</span>
              <span>Expected Outcomes</span>
            </h2>
            <ul className="space-y-4">
              {rehab.expectedOutcomes.map((outcome, index) => (
                <li key={index} className="flex items-start gap-3 group">
                  <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-emerald-600 to-emerald-700 text-white rounded-lg flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                    ✓
                  </span>
                  <span className="text-slate-300 leading-relaxed pt-1">
                    {outcome}
                  </span>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        {/* Progress Tracking */}
        <Card className="p-6 bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700">
          <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-2">
            <span>📊</span>
            <span>Progress Tracking</span>
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed mb-6">
            Regular assessments with your physical therapist will determine
            progression through each phase. Advancement is based on achieving
            functional milestones and meeting specific criteria, not just time
            elapsed. Document your pain levels, range of motion, and strength
            improvements throughout the process.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="p-4 bg-slate-900/50 rounded-xl border border-slate-700 text-center hover:scale-[1.02] transition-all">
              <div className="text-3xl mb-2">📝</div>
              <h4 className="font-semibold text-white mb-1">Daily Logging</h4>
              <p className="text-sm text-slate-400">Track pain and exercises</p>
            </div>
            <div className="p-4 bg-slate-900/50 rounded-xl border border-slate-700 text-center hover:scale-[1.02] transition-all">
              <div className="text-3xl mb-2">📏</div>
              <h4 className="font-semibold text-white mb-1">
                ROM Measurements
              </h4>
              <p className="text-sm text-slate-400">Weekly assessments</p>
            </div>
            <div className="p-4 bg-slate-900/50 rounded-xl border border-slate-700 text-center hover:scale-[1.02] transition-all">
              <div className="text-3xl mb-2">💪</div>
              <h4 className="font-semibold text-white mb-1">
                Strength Testing
              </h4>
              <p className="text-sm text-slate-400">Bi-weekly evaluations</p>
            </div>
          </div>
          {/* <Link href="/rehab/tracker">
            <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">
              <span className="flex items-center gap-2">
                <span>📊</span>
                <span>Start Tracking Progress</span>
              </span>
            </Button>
          </Link> */}
        </Card>
      </div>
    </LayoutWrapper>
  );
}
