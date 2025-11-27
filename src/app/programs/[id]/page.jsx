"use client";

import LayoutWrapper from "@/components/layout/LayoutWrapper";
import Card from "@/components/shared/Card";
import Button from "@/components/shared/Button";
import { useState } from "react";
import Link from "next/link";
import { getProgramById } from "@/data/programs-data";

export default function ProgramDetailPage({ params }) {
  const [activeWeek, setActiveWeek] = useState(1);
  const [isSaved, setIsSaved] = useState(false);
  const [showAllWeeks, setShowAllWeeks] = useState(false);

  // Get program
  const program = getProgramById(params.id);

  if (!program) {
    return (
      <LayoutWrapper>
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-12 text-center">
            <div className="text-6xl mb-4">❌</div>
            <h1 className="text-3xl font-bold text-white mb-4">
              Program Not Found
            </h1>
            <p className="text-slate-400 mb-6">
              The program you're looking for doesn't exist.
            </p>
            <Link href="/programs">
              <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">
                Back to Programs
              </Button>
            </Link>
          </div>
        </div>
      </LayoutWrapper>
    );
  }

  const levelColors = {
    Beginner: "from-emerald-600 to-emerald-700",
    Intermediate: "from-orange-600 to-orange-700",
    Advanced: "from-red-600 to-red-700",
  };

  const sportIcons = {
    Basketball: "🏀",
    Soccer: "⚽",
  };

  const stats = [
    {
      label: "Athletes Enrolled",
      value: program.enrolled.toLocaleString(),
      icon: "👥",
    },
    { label: "Average Rating", value: `${program.rating}/5.0`, icon: "⭐" },
    {
      label: "Completion Rate",
      value: `${program.completionRate}%`,
      icon: "✓",
    },
    {
      label: "Sessions/Week",
      value: program.sessionsPerWeek.toString(),
      icon: "📅",
    },
  ];

  return (
    <LayoutWrapper>
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Back Button */}
        <Link href="/programs">
          <button className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-6 group">
            <span className="group-hover:-translate-x-1 transition-transform">
              ←
            </span>
            <span>Back to Programs</span>
          </button>
        </Link>

        {/* HERO SECTION */}
        <div className="bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 border border-slate-700 rounded-2xl p-8 mb-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-600/10 to-purple-600/10 blur-3xl rounded-full"></div>

          <div className="relative">
            {/* Badges */}
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <span className="px-4 py-2 rounded-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg flex items-center gap-2">
                {sportIcons[program.sport]} {program.sport}
              </span>
              <span
                className={`px-4 py-2 rounded-lg font-semibold text-white bg-gradient-to-r ${
                  levelColors[program.level]
                } flex items-center gap-2`}
              >
                🎯 {program.level}
              </span>
              <span className="px-4 py-2 rounded-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-purple-700 flex items-center gap-2">
                📅 {program.duration}
              </span>
              <span className="px-4 py-2 rounded-lg font-medium text-slate-300 bg-slate-800 border border-slate-700 flex items-center gap-2">
                ⭐ {program.rating} ({program.reviews} reviews)
              </span>
            </div>

            {/* Title */}
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              {program.title}
            </h1>

            {/* Description */}
            <p className="text-lg text-slate-300 mb-6 leading-relaxed max-w-3xl">
              {program.description}
            </p>

            {/* Coach */}
            <div className="flex items-center gap-3 mb-6 p-4 bg-slate-800/50 rounded-xl border border-slate-700 inline-flex">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-2xl">
                {program.coach.avatar}
              </div>
              <div>
                <p className="font-semibold text-white">{program.coach.name}</p>
                <p className="text-sm text-slate-400">
                  {program.coach.credentials}
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            {/* <div className="flex gap-4 flex-wrap">
              <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg shadow-blue-600/30 hover:scale-105 transition-all text-lg px-8 py-4">
                🚀 Start Program Now
              </Button>

              <button
                onClick={() => setIsSaved(!isSaved)}
                className={`px-6 py-4 rounded-xl font-semibold transition-all hover:scale-105 ${
                  isSaved
                    ? "bg-gradient-to-r from-orange-600 to-orange-700 text-white shadow-lg shadow-orange-600/30"
                    : "bg-slate-800 text-slate-300 border border-slate-700 hover:bg-slate-700"
                }`}
              >
                {isSaved ? "📌 Saved" : "🔖 Save for Later"}
              </button>

              <button className="px-6 py-4 rounded-xl font-semibold bg-slate-800 text-slate-300 border border-slate-700 hover:bg-slate-700 transition-all hover:scale-105">
                📤 Share
              </button>
            </div> */}
          </div>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="p-5 bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 hover:border-slate-600 transition-all hover:scale-[1.02] text-center"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <p className="text-2xl font-bold text-white mb-1">{stat.value}</p>
              <p className="text-sm text-slate-400">{stat.label}</p>
            </Card>
          ))}
        </div>

        {/* PROGRAM GOALS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <Card className="p-6 lg:col-span-2 bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700">
            <h2 className="text-3xl font-bold mb-6 text-white flex items-center gap-3">
              🎯 Program Goals
            </h2>

            <ul className="space-y-4">
              {program.goals.map((goal, index) => (
                <li key={index} className="flex items-start gap-3 group">
                  <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-emerald-600 to-emerald-700 text-white rounded-lg flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                    ✓
                  </span>
                  <span className="text-slate-300 text-lg">{goal}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 p-4 bg-emerald-950/30 border border-emerald-600/30 rounded-xl">
              <div className="flex items-start gap-3">
                <span className="text-2xl">{sportIcons[program.sport]}</span>
                <div>
                  <h4 className="font-semibold text-white mb-1">
                    Expected Results
                  </h4>
                  <p className="text-sm text-slate-300">
                    Athletes typically see {program.avgImprovement}.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* EQUIPMENT */}
          <Card className="p-6 bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700">
            <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
              🏋️ Equipment
            </h3>
            <ul className="space-y-3">
              {program.equipment.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-slate-300 p-2 bg-slate-900/50 rounded-lg hover:bg-slate-800 transition-colors"
                >
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        {/* ABOUT PROGRAM */}
        <Card className="p-6 mb-8 bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700">
          <h2 className="text-3xl font-bold mb-4 text-white flex items-center gap-3">
            📖 About This Program
          </h2>

          <p className="text-slate-300 text-lg leading-relaxed mb-4">
            This program is designed for {program.sport.toLowerCase()} athletes
            at the {program.level.toLowerCase()} level.
          </p>

          <p className="text-slate-300 text-lg leading-relaxed mb-4">
            You’ll complete {program.sessionsPerWeek} sessions per week over{" "}
            {program.duration}. Each week progressively increases load and
            intensity.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="p-4 bg-slate-900/50 rounded-xl border border-slate-700">
              <div className="text-2xl mb-2">📈</div>
              <h4 className="font-semibold text-white mb-1">
                Progressive Training
              </h4>
              <p className="text-sm text-slate-400">
                Gradual increases in intensity.
              </p>
            </div>

            <div className="p-4 bg-slate-900/50 rounded-xl border border-slate-700">
              <div className="text-2xl mb-2">🎯</div>
              <h4 className="font-semibold text-white mb-1">Sport-Specific</h4>
              <p className="text-sm text-slate-400">
                Designed for real game movements.
              </p>
            </div>

            <div className="p-4 bg-slate-900/50 rounded-xl border border-slate-700">
              <div className="text-2xl mb-2">👨‍🏫</div>
              <h4 className="font-semibold text-white mb-1">Expert Coaching</h4>
              <p className="text-sm text-slate-400">Guided by professionals.</p>
            </div>
          </div>
        </Card>

        {/* WEEKLY BREAKDOWN */}
        <Card className="p-6 mb-8 bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700">
          <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              📅 Weekly Breakdown
            </h2>

            <button
              onClick={() => setShowAllWeeks(!showAllWeeks)}
              className="text-sm text-blue-400 hover:text-blue-300 font-medium"
            >
              {showAllWeeks
                ? "Show Less"
                : `View All ${program.weeks.length} Weeks`}{" "}
              →
            </button>
          </div>

          {/* WEEK SELECTOR */}
          <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
            {program.weeks.map((week) => (
              <button
                key={week.week}
                onClick={() => setActiveWeek(week.week)}
                className={`px-4 py-2 rounded-lg font-semibold whitespace-nowrap transition-all ${
                  activeWeek === week.week
                    ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg scale-105"
                    : "bg-slate-800 text-slate-400 hover:bg-slate-700 border border-slate-700"
                }`}
              >
                Week {week.week}
              </button>
            ))}
          </div>

          {/* WEEK CONTENT */}
          <div className="space-y-6">
            {(showAllWeeks
              ? program.weeks
              : program.weeks.filter((w) => w.week === activeWeek)
            ).map((week) => (
              <div
                key={week.week}
                className="border-l-4 border-blue-500 pl-6 py-2"
              >
                <div className="flex items-center justify-between mb-4 flex-wrap gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">
                      Week {week.week}
                    </h3>
                    <p className="text-slate-400 flex items-center gap-2">
                      🎯 Focus: {week.focus}
                    </p>
                  </div>

                  <span className="text-sm bg-blue-900/30 text-blue-300 px-3 py-1 rounded-lg border border-blue-600/30">
                    {week.sessions.length} sessions
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {week.sessions.map((session, index) => (
                    <div
                      key={index}
                      className="bg-slate-900 p-5 rounded-xl border border-slate-700 hover:border-slate-600 hover:bg-slate-800 transition-all cursor-pointer group hover:scale-[1.02]"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="font-semibold text-blue-400 flex items-center gap-2">
                          📅 {session.day}
                        </div>
                        <span className="text-xs bg-slate-800 text-slate-400 px-2 py-1 rounded">
                          {session.duration}
                        </span>
                      </div>

                      <h4 className="font-bold text-white text-lg mb-3 group-hover:text-blue-400 transition-colors">
                        {session.title}
                      </h4>

                      <div className="space-y-2 mb-3">
                        <div className="flex items-center gap-2 text-sm text-slate-400">
                          💪 {session.exercises} exercises
                        </div>

                        {/* EXERCISES */}
                        {session.mainLifts && (
                          <div className="text-xs text-slate-500">
                            <span className="font-medium">Key exercises:</span>

                            <div className="mt-1 space-y-1">
                              {session.mainLifts.map((lift, i) => {
                                const [exerciseName, exerciseDetail] =
                                  lift.includes("(")
                                    ? [
                                        lift
                                          .substring(0, lift.indexOf("("))
                                          .trim(),
                                        lift
                                          .substring(lift.indexOf("("))
                                          .trim(),
                                      ]
                                    : [lift, ""];

                                return (
                                  <div
                                    key={i}
                                    className="flex items-center gap-2 text-sm"
                                  >
                                    <span className="w-1 h-1 bg-blue-500 rounded-full"></span>

                                    <span className="text-slate-200">
                                      {exerciseName}
                                    </span>

                                    {exerciseDetail && (
                                      <span className="text-slate-400">
                                        {exerciseDetail}
                                      </span>
                                    )}
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* SIMILAR PROGRAMS */}
        <Card className="p-6 bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700">
          <h2 className="text-3xl font-bold mb-6 text-white flex items-center gap-3">
            🔄 Similar Programs
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(program.sport === "Basketball"
              ? [
                  {
                    title: "Basketball Vertical Jump",
                    level: "Advanced",
                    weeks: "10",
                    icon: "🏀",
                    id: "2",
                  },
                  {
                    title: "Point Guard Speed",
                    level: "Intermediate",
                    weeks: "6",
                    icon: "🏀",
                    id: "3",
                  },
                  {
                    title: "Big Man Power Training",
                    level: "Advanced",
                    weeks: "12",
                    icon: "🏀",
                    id: "6",
                  },
                ]
              : [
                  {
                    title: "Soccer Speed & Acceleration",
                    level: "Advanced",
                    weeks: "10",
                    icon: "⚽",
                    id: "12",
                  },
                  {
                    title: "Midfielder Conditioning",
                    level: "Intermediate",
                    weeks: "10",
                    icon: "⚽",
                    id: "13",
                  },
                  {
                    title: "Striker Power Training",
                    level: "Advanced",
                    weeks: "8",
                    icon: "⚽",
                    id: "15",
                  },
                ]
            ).map((similar, index) => (
              <Link key={index} href={`/programs/${similar.id}`}>
                <div className="p-6 bg-slate-900 rounded-xl border border-slate-700 hover:border-slate-600 hover:bg-slate-800 cursor-pointer transition-all group hover:scale-[1.02]">
                  <div className="text-4xl mb-3">{similar.icon}</div>
                  <h3 className="font-bold text-white text-lg mb-2 group-hover:text-blue-400 transition-colors">
                    {similar.title}
                  </h3>

                  <div className="flex items-center gap-2 text-sm text-slate-400 mb-3 flex-wrap">
                    <span className="px-2 py-1 rounded bg-slate-800 text-slate-300">
                      {similar.level}
                    </span>
                    <span className="px-2 py-1 rounded bg-slate-800 text-slate-300">
                      {similar.weeks} weeks
                    </span>
                  </div>

                  <p className="text-sm text-slate-500">
                    Click to view full program details
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </Card>
      </div>
    </LayoutWrapper>
  );
}
