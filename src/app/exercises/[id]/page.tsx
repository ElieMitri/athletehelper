"use client";

import LayoutWrapper from "@/components/layout/LayoutWrapper";
import Card from "@/components/shared/Card";
import Button from "@/components/shared/Button";
import { useState } from "react";
import Link from "next/link";
import { getExerciseById, getAllExerciseDetails } from "@/data/exercise-data";
import { useAuth } from "@/context/AuthContext";

export default function ExerciseDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const [activeTab, setActiveTab] = useState<
    "instructions" | "tips" | "variations"
  >("instructions");
  const [isFavorite, setIsFavorite] = useState(false);
  const { user } = useAuth();
  const isPaid = user?.subscription === "paid";

  // Fetch exercise data from database
  const exercise = getExerciseById(params.id);

  // == GET ALL EXERCISES SO WE CAN KNOW WHICH INDEX THIS EXERCISE IS ==
  const allExercises = getAllExerciseDetails();
  const exerciseIndex = allExercises.findIndex((e) => e.id === params.id);

  // == LOCK FREE USERS (ONLY ACCESS FIRST 3 EXERCISES) ==
  const FREE_LIMIT = 12; // change to any number you want

  if (!isPaid && exerciseIndex >= FREE_LIMIT) {
    return (
      <LayoutWrapper>
        <div className="max-w-6xl mx-auto px-4 py-20 text-center">
          <div className="text-7xl mb-6">🔒</div>
          <h1 className="text-4xl font-bold text-white mb-4">
            Premium Exercise
          </h1>
          <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
            This exercise is available only for Premium members. Upgrade to
            unlock full access to all exercises.
          </p>

          <Link href="/settings/subscription">
            <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-10 py-4 rounded-xl text-lg font-semibold transition-all hover:scale-105 shadow-lg">
              Upgrade to Premium →
            </button>
          </Link>

          <Link
            href="/exercises"
            className="block mt-6 text-slate-400 hover:text-white"
          >
            ← Back to Exercise Library
          </Link>
        </div>
      </LayoutWrapper>
    );
  }

  // Handle exercise not found
  if (!exercise) {
    return (
      <LayoutWrapper>
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-12 text-center">
            <div className="text-6xl mb-4">❌</div>
            <h1 className="text-3xl font-bold text-white mb-4">
              Exercise Not Found
            </h1>
            <p className="text-slate-400 mb-6">
              The exercise you're looking for doesn't exist.
            </p>
            <Link href="/exercises">
              <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">
                Back to Exercise Library
              </Button>
            </Link>
          </div>
        </div>
      </LayoutWrapper>
    );
  }

  const difficultyColors = {
    Beginner: "from-emerald-600 to-emerald-700",
    Intermediate: "from-orange-600 to-orange-700",
    Advanced: "from-red-600 to-red-700",
  };

  const categoryIcons = {
    Strength: "💪",
    Cardio: "❤️",
    Plyometric: "⚡",
    Power: "🔋",
    Mobility: "🧘",
  };

  return (
    <LayoutWrapper>
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Back Navigation */}
        <Link href="/exercises">
          <button className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-6 group">
            <span className="group-hover:-translate-x-1 transition-transform">
              ←
            </span>
            <span>Back to Exercise Library</span>
          </button>
        </Link>

        {/* Hero Section */}
        <div className="bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 border border-slate-700 rounded-2xl p-8 mb-8 relative overflow-hidden">
          {/* Background gradient accent */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-600/10 to-purple-600/10 blur-3xl rounded-full"></div>

          <div className="relative">
            {/* Badges */}
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <span
                className={`px-4 py-2 rounded-lg font-semibold text-white bg-gradient-to-r ${
                  difficultyColors[
                    exercise.difficulty as keyof typeof difficultyColors
                  ]
                } shadow-lg flex items-center gap-2`}
              >
                <span>🎯</span>
                {exercise.difficulty}
              </span>
              <span className="px-4 py-2 rounded-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg flex items-center gap-2">
                <span>
                  {
                    categoryIcons[
                      exercise.category as keyof typeof categoryIcons
                    ]
                  }
                </span>
                {exercise.category}
              </span>
              <span className="px-4 py-2 rounded-lg font-medium text-slate-300 bg-slate-800 border border-slate-700">
                🏋️ {exercise.equipment}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              {exercise.name}
            </h1>

            {/* Description */}
            <p className="text-lg text-slate-300 mb-6 leading-relaxed max-w-3xl">
              {exercise.description}
            </p>
          </div>
        </div>

        {/* Quick Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6 bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 hover:border-slate-600 transition-all hover:scale-[1.02]">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-purple-700 flex items-center justify-center text-2xl">
                🎯
              </div>
              <h3 className="font-bold text-white text-lg">Target Muscles</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {exercise.muscleGroups.map((muscle, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 rounded-lg text-sm font-medium bg-gradient-to-r from-purple-600/20 to-purple-700/20 text-purple-300 border border-purple-600/30"
                >
                  {muscle}
                </span>
              ))}
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 hover:border-slate-600 transition-all hover:scale-[1.02]">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center text-2xl">
                📋
              </div>
              <h3 className="font-bold text-white text-lg">Recommended</h3>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-slate-400 text-sm">Sets:</span>
                <span className="text-white font-semibold">
                  {exercise.recommendedSets}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400 text-sm">Reps:</span>
                <span className="text-white font-semibold">
                  {exercise.recommendedReps}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400 text-sm">Rest:</span>
                <span className="text-white font-semibold">
                  {exercise.restPeriod}
                </span>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 hover:border-slate-600 transition-all hover:scale-[1.02]">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-600 to-emerald-700 flex items-center justify-center text-2xl">
                🏋️
              </div>
              <h3 className="font-bold text-white text-lg">Equipment</h3>
            </div>
            <p className="text-slate-300 leading-relaxed">
              {exercise.equipment}
            </p>
          </Card>
        </div>

        {/* Video Player Placeholder */}
        <Card className="p-8 mb-8 bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-white">Video Tutorial</h2>
            <span className="text-sm text-slate-400">HD Quality</span>
          </div>
          <div className="aspect-video bg-slate-900 rounded-xl border-2 border-slate-700 flex items-center justify-center relative overflow-hidden group cursor-pointer hover:border-blue-600 transition-all">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5"></div>
            <div className="relative z-10 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-blue-600/50">
                <span className="text-4xl text-white">▶</span>
              </div>
              <p className="text-slate-300 font-medium">
                Play Exercise Tutorial
              </p>
              <p className="text-slate-500 text-sm mt-1">3:45 duration</p>
            </div>
          </div>
        </Card>

        {/* Tabs Navigation */}
        <div className="flex gap-2 mb-6 bg-slate-800/50 p-2 rounded-xl border border-slate-700">
          {[
            { id: "instructions", label: "Step-by-Step", icon: "📝" },
            { id: "tips", label: "Pro Tips & Mistakes", icon: "💡" },
            { id: "variations", label: "Variations", icon: "🔄" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`flex-1 px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg"
                  : "text-slate-400 hover:text-white hover:bg-slate-700"
              }`}
            >
              <span className="flex items-center justify-center gap-2">
                <span>{tab.icon}</span>
                <span className="hidden sm:inline">{tab.label}</span>
              </span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === "instructions" && (
          <Card className="p-8 mb-8 bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700">
            <h2 className="text-3xl font-bold mb-6 text-white flex items-center gap-3">
              <span className="text-4xl">📝</span>
              How to Perform
            </h2>
            <ol className="space-y-4">
              {exercise.instructions.map((instruction, index) => (
                <li key={index} className="flex gap-4 group">
                  <span className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-xl flex items-center justify-center font-bold text-lg shadow-lg group-hover:scale-110 transition-transform">
                    {index + 1}
                  </span>
                  <span className="flex-1 text-slate-300 text-lg leading-relaxed pt-1.5">
                    {instruction}
                  </span>
                </li>
              ))}
            </ol>
          </Card>
        )}

        {activeTab === "tips" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <Card className="p-8 bg-gradient-to-br from-emerald-950/30 to-slate-800 border-emerald-600/30">
              <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
                <span className="text-3xl">✓</span>
                Pro Tips
              </h2>
              <ul className="space-y-4">
                {exercise.tips.map((tip, index) => (
                  <li key={index} className="flex items-start gap-3 group">
                    <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-emerald-600 to-emerald-700 text-white rounded-lg flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                      ✓
                    </span>
                    <span className="text-slate-300 leading-relaxed pt-1">
                      {tip}
                    </span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-red-950/30 to-slate-800 border-red-600/30">
              <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
                <span className="text-3xl">✗</span>
                Common Mistakes
              </h2>
              <ul className="space-y-4">
                {exercise.commonMistakes.map((mistake, index) => (
                  <li key={index} className="flex items-start gap-3 group">
                    <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-red-600 to-red-700 text-white rounded-lg flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                      ✗
                    </span>
                    <span className="text-slate-300 leading-relaxed pt-1">
                      {mistake}
                    </span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        )}

        {activeTab === "variations" && (
          <Card className="p-8 mb-8 bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700">
            <h2 className="text-3xl font-bold mb-6 text-white flex items-center gap-3">
              <span className="text-4xl">🔄</span>
              Exercise Variations
            </h2>
            <p className="text-slate-400 mb-6">
              Try these variations to challenge yourself or target muscles
              differently
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {exercise.variations.map((variation, index) => (
                <div
                  key={index}
                  className="p-5 bg-slate-900 rounded-xl border border-slate-700 hover:border-blue-600 hover:bg-slate-800 cursor-pointer transition-all group hover:scale-[1.02]"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-white text-lg group-hover:text-blue-400 transition-colors">
                      {variation}
                    </h3>
                    <span className="text-slate-400 group-hover:text-white transition-colors">
                      →
                    </span>
                  </div>
                  <p className="text-sm text-slate-400">
                    Click to view details
                  </p>
                </div>
              ))}
            </div>
          </Card>
        )}

        {/* Related Exercises */}
        <Card className="p-8 bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700">
          <h2 className="text-3xl font-bold mb-6 text-white flex items-center gap-3">
            <span className="text-4xl">🎯</span>
            Related Exercises
          </h2>
          <p className="text-slate-400 mb-6">
            Exercises that target similar muscle groups
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* These would be dynamically generated based on the exercise category/muscles */}
            {["Romanian Deadlift", "Leg Press", "Lunges"].map(
              (related, index) => (
                <div
                  key={index}
                  className="p-6 bg-slate-900 rounded-xl border border-slate-700 hover:border-slate-600 hover:bg-slate-800 cursor-pointer transition-all group hover:scale-[1.02]"
                >
                  <div className="text-4xl mb-3">
                    {["🏋️", "💪", "🦵"][index]}
                  </div>
                  <h3 className="font-bold text-white text-lg mb-2 group-hover:text-blue-400 transition-colors">
                    {related}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-slate-400 mb-3">
                    <span className="px-2 py-1 rounded bg-slate-800 text-slate-300">
                      Strength
                    </span>
                    <span className="px-2 py-1 rounded bg-slate-800 text-slate-300">
                      Intermediate
                    </span>
                  </div>
                </div>
              )
            )}
          </div>
        </Card>
      </div>
    </LayoutWrapper>
  );
}
