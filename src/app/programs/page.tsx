"use client";

import LayoutWrapper from "@/components/layout/LayoutWrapper";
import ProgramCard from "@/components/programs/ProgramCard";
import { useState } from "react";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";

export default function ProgramsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSport, setSelectedSport] = useState("All");
  const [selectedLevel, setSelectedLevel] = useState("All Levels");
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-[#0a0a0a]">
        <div className="animate-spin h-12 w-12 border-4 border-blue-600 border-t-transparent rounded-full"></div>
      </div>
    );
  }

  console.log(user.subscription);

  const programs = [
    // BASKETBALL PROGRAMS (10 programs)
    {
      id: "1",
      title: "Basketball Agility & Quickness",
      sport: "Basketball",
      level: "Intermediate",
      duration: "8 weeks",
      description:
        "Develop court agility, lateral movement, and explosive jumping ability for superior on-court performance.",
      workouts: 24,
      enrolled: 978,
      rating: 4.6,
      icon: "🏀",
      color: "from-orange-600 to-orange-700",
    },
    {
      id: "2",
      title: "Basketball Vertical Jump Program",
      sport: "Basketball",
      level: "Advanced",
      duration: "10 weeks",
      description:
        "Maximize your vertical leap with plyometrics and strength training designed for dunking and rebounding.",
      workouts: 30,
      enrolled: 1156,
      rating: 4.8,
      icon: "🏀",
      color: "from-orange-600 to-orange-700",
    },
    {
      id: "3",
      title: "Point Guard Speed & Conditioning",
      sport: "Basketball",
      level: "Intermediate",
      duration: "6 weeks",
      description:
        "Build the speed, endurance, and quickness needed to dominate as a playmaker on the court.",
      workouts: 18,
      enrolled: 823,
      rating: 4.7,
      icon: "🏀",
      color: "from-orange-600 to-orange-700",
    },
    {
      id: "4",
      title: "Basketball Strength Foundation",
      sport: "Basketball",
      level: "Beginner",
      duration: "8 weeks",
      description:
        "Build a strong foundation for basketball athletes with compound movements and functional training.",
      workouts: 24,
      enrolled: 1342,
      rating: 4.5,
      icon: "🏀",
      color: "from-orange-600 to-orange-700",
    },
    {
      id: "5",
      title: "Guard Defense Footwork",
      sport: "Basketball",
      level: "Intermediate",
      duration: "6 weeks",
      description:
        "Master defensive footwork, lateral movement, and perimeter defense techniques.",
      workouts: 18,
      enrolled: 654,
      rating: 4.6,
      icon: "🏀",
      color: "from-orange-600 to-orange-700",
    },
    {
      id: "6",
      title: "Big Man Power & Strength",
      sport: "Basketball",
      level: "Advanced",
      duration: "12 weeks",
      description:
        "Build the power and strength needed for post play, rebounding, and interior dominance.",
      workouts: 36,
      enrolled: 467,
      rating: 4.9,
      icon: "🏀",
      color: "from-orange-600 to-orange-700",
    },
    {
      id: "7",
      title: "Basketball Explosive First Step",
      sport: "Basketball",
      level: "Intermediate",
      duration: "8 weeks",
      description:
        "Develop an explosive first step to blow by defenders and attack the basket with authority.",
      workouts: 24,
      enrolled: 891,
      rating: 4.7,
      icon: "🏀",
      color: "from-orange-600 to-orange-700",
    },
    {
      id: "8",
      title: "Off-Season Basketball Conditioning",
      sport: "Basketball",
      level: "Intermediate",
      duration: "10 weeks",
      description:
        "Complete off-season program to maintain fitness and improve overall athleticism.",
      workouts: 30,
      enrolled: 1023,
      rating: 4.6,
      icon: "🏀",
      color: "from-orange-600 to-orange-700",
    },
    {
      id: "9",
      title: "Youth Basketball Development",
      sport: "Basketball",
      level: "Beginner",
      duration: "8 weeks",
      description:
        "Age-appropriate training for young athletes to build fundamental movement patterns and athleticism.",
      workouts: 24,
      enrolled: 1567,
      rating: 4.8,
      icon: "🏀",
      color: "from-orange-600 to-orange-700",
    },
    {
      id: "10",
      title: "Pre-Season Basketball Peak",
      sport: "Basketball",
      level: "Advanced",
      duration: "6 weeks",
      description:
        "Intensive pre-season program to peak your performance right before the season starts.",
      workouts: 18,
      enrolled: 734,
      rating: 4.9,
      icon: "🏀",
      color: "from-orange-600 to-orange-700",
    },

    // SOCCER PROGRAMS (10 programs)
    {
      id: "11",
      title: "Soccer Fitness & Endurance",
      sport: "Soccer",
      level: "Intermediate",
      duration: "8 weeks",
      description:
        "Improve match fitness, stamina, and sport-specific conditioning for 90-minute performances.",
      workouts: 24,
      enrolled: 845,
      rating: 4.6,
      icon: "⚽",
      color: "from-green-600 to-green-700",
    },
    {
      id: "12",
      title: "Soccer Speed & Acceleration",
      sport: "Soccer",
      level: "Advanced",
      duration: "10 weeks",
      description:
        "Develop explosive speed and acceleration to outpace opponents on the pitch.",
      workouts: 30,
      enrolled: 1089,
      rating: 4.8,
      icon: "⚽",
      color: "from-green-600 to-green-700",
    },
    {
      id: "13",
      title: "Midfielder Complete Conditioning",
      sport: "Soccer",
      level: "Intermediate",
      duration: "10 weeks",
      description:
        "Build the endurance, strength, and agility required for box-to-box midfield play.",
      workouts: 30,
      enrolled: 923,
      rating: 4.7,
      icon: "⚽",
      color: "from-green-600 to-green-700",
    },
    {
      id: "14",
      title: "Soccer Strength Foundation",
      sport: "Soccer",
      level: "Beginner",
      duration: "8 weeks",
      description:
        "Build functional strength and injury resistance for soccer athletes of all positions.",
      workouts: 24,
      enrolled: 1456,
      rating: 4.5,
      icon: "⚽",
      color: "from-green-600 to-green-700",
    },
    {
      id: "15",
      title: "Striker Power & Finishing",
      sport: "Soccer",
      level: "Advanced",
      duration: "8 weeks",
      description:
        "Develop explosive power for shooting, heading, and finishing in the box.",
      workouts: 24,
      enrolled: 678,
      rating: 4.8,
      icon: "⚽",
      color: "from-green-600 to-green-700",
    },
    {
      id: "16",
      title: "Defender Physical Dominance",
      sport: "Soccer",
      level: "Intermediate",
      duration: "10 weeks",
      description:
        "Build the strength, power, and aerial ability needed for defensive dominance.",
      workouts: 30,
      enrolled: 567,
      rating: 4.7,
      icon: "⚽",
      color: "from-green-600 to-green-700",
    },
    {
      id: "17",
      title: "Soccer Agility & Change of Direction",
      sport: "Soccer",
      level: "Intermediate",
      duration: "6 weeks",
      description:
        "Master quick changes of direction and agility for one-on-one situations.",
      workouts: 18,
      enrolled: 789,
      rating: 4.6,
      icon: "⚽",
      color: "from-green-600 to-green-700",
    },
    {
      id: "18",
      title: "Goalkeeper Athletic Development",
      sport: "Soccer",
      level: "Intermediate",
      duration: "8 weeks",
      description:
        "Specialized training for goalkeepers focusing on explosiveness, reactions, and strength.",
      workouts: 24,
      enrolled: 423,
      rating: 4.9,
      icon: "⚽",
      color: "from-green-600 to-green-700",
    },
    {
      id: "19",
      title: "Youth Soccer Athletic Foundation",
      sport: "Soccer",
      level: "Beginner",
      duration: "8 weeks",
      description:
        "Age-appropriate athletic development for young soccer players focusing on fundamentals.",
      workouts: 24,
      enrolled: 1623,
      rating: 4.8,
      icon: "⚽",
      color: "from-green-600 to-green-700",
    },
    {
      id: "20",
      title: "Pre-Season Soccer Preparation",
      sport: "Soccer",
      level: "Advanced",
      duration: "6 weeks",
      description:
        "Intensive pre-season program to reach peak fitness before the season begins.",
      workouts: 18,
      enrolled: 892,
      rating: 4.9,
      icon: "⚽",
      color: "from-green-600 to-green-700",
    },
  ];

  const sportFilters = [
    { name: "All", icon: "📚", count: programs.length },
    {
      name: "Basketball",
      icon: "🏀",
      count: programs.filter((p) => p.sport === "Basketball").length,
    },
    {
      name: "Soccer",
      icon: "⚽",
      count: programs.filter((p) => p.sport === "Soccer").length,
    },
  ];

  const levels = [
    { name: "All Levels", color: "from-slate-600 to-slate-700", icon: "📊" },
    { name: "Beginner", color: "from-emerald-600 to-emerald-700", icon: "🌱" },
    {
      name: "Intermediate",
      color: "from-orange-600 to-orange-700",
      icon: "🔥",
    },
    { name: "Advanced", color: "from-red-600 to-red-700", icon: "⚡" },
  ];

  // Calculate total enrolled and average rating
  const totalEnrolled = programs.reduce((sum, p) => sum + p.enrolled, 0);
  const avgRating = (
    programs.reduce((sum, p) => sum + p.rating, 0) / programs.length
  ).toFixed(1);

  const stats = [
    {
      label: "Total Programs",
      value: programs.length.toString(),
      icon: "📚",
      color: "from-blue-600 to-blue-700",
    },
    {
      label: "Active Athletes",
      value: `${(totalEnrolled / 1000).toFixed(1)}K+`,
      icon: "👥",
      color: "from-purple-600 to-purple-700",
    },
    {
      label: "Avg Rating",
      value: avgRating,
      icon: "⭐",
      color: "from-orange-600 to-orange-700",
    },
  ];

  // Filter programs based on search and selections
  const filteredPrograms = programs.filter((program) => {
    const matchesSearch =
      program.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      program.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      program.sport.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesSport =
      selectedSport === "All" || program.sport === selectedSport;

    const matchesLevel =
      selectedLevel === "All Levels" || program.level === selectedLevel;

    return matchesSearch && matchesSport && matchesLevel;
  });

  // Get featured program (highest rated beginner program)
  const featuredProgram = programs
    .filter((p) => p.level === "Beginner")
    .sort((a, b) => b.rating - a.rating)[0];

  return (
    <LayoutWrapper>
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between flex-wrap gap-4 mb-4">
            <div>
              <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                Training Programs
              </h1>
              <p className="text-slate-400 text-lg">
                Basketball & Soccer training programs • {programs.length}{" "}
                programs available
              </p>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="relative overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-xl p-5 hover:border-slate-600 transition-all hover:scale-[1.02] group"
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
            </div>
          ))}
        </div>

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
                placeholder="Search programs by name, sport, or description..."
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

            {/* Sport Filter Pills */}
            <div>
              <p className="text-sm text-slate-400 mb-3 font-medium">Sport</p>
              <div className="flex flex-wrap gap-2">
                {sportFilters.map((filter) => (
                  <button
                    key={filter.name}
                    onClick={() => setSelectedSport(filter.name)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-2 ${
                      selectedSport === filter.name
                        ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-600/30 scale-105"
                        : "bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700"
                    }`}
                  >
                    <span>{filter.icon}</span>
                    <span>{filter.name}</span>
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full ${
                        selectedSport === filter.name
                          ? "bg-white/20"
                          : "bg-slate-700"
                      }`}
                    >
                      {filter.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Level Filter */}
            <div>
              <p className="text-sm text-slate-400 mb-3 font-medium">
                Difficulty Level
              </p>
              <div className="flex flex-wrap gap-2">
                {levels.map((level) => (
                  <button
                    key={level.name}
                    onClick={() => setSelectedLevel(level.name)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-2 ${
                      selectedLevel === level.name
                        ? `bg-gradient-to-r ${level.color} text-white shadow-lg scale-105`
                        : "bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700"
                    }`}
                  >
                    <span>{level.icon}</span>
                    <span>{level.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Active Filters Summary */}
          {(searchQuery ||
            selectedSport !== "All" ||
            selectedLevel !== "All Levels") && (
            <div className="mt-4 pt-4 border-t border-slate-700 flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-2 text-sm flex-wrap">
                <span className="text-slate-400">
                  Showing {filteredPrograms.length} of {programs.length}{" "}
                  programs
                </span>
                {searchQuery && (
                  <span className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full">
                    "{searchQuery}"
                  </span>
                )}
                {selectedSport !== "All" && (
                  <span className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full">
                    {selectedSport}
                  </span>
                )}
                {selectedLevel !== "All Levels" && (
                  <span className="bg-orange-600/20 text-orange-300 px-3 py-1 rounded-full">
                    {selectedLevel}
                  </span>
                )}
              </div>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedSport("All");
                  setSelectedLevel("All Levels");
                }}
                className="text-sm text-blue-400 hover:text-blue-300 font-medium transition-colors"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>

        {/* Featured Programs Banner */}
        {selectedSport === "All" &&
          selectedLevel === "All Levels" &&
          !searchQuery &&
          featuredProgram && (
            <div className="bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 border border-blue-600/30 rounded-xl p-6 mb-8">
              <div className="flex items-start justify-between flex-wrap gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">⭐</span>
                    <h3 className="text-xl font-bold text-white">
                      Featured This Week
                    </h3>
                  </div>
                  <p className="text-slate-300 mb-3">
                    {featuredProgram.title} - Perfect for{" "}
                    {featuredProgram.sport.toLowerCase()} players starting their
                    training journey
                  </p>
                  <div className="flex items-center gap-4 text-sm text-slate-400 flex-wrap">
                    <span className="flex items-center gap-1">
                      <span>👥</span>{" "}
                      {featuredProgram.enrolled.toLocaleString()} enrolled
                    </span>
                    <span className="flex items-center gap-1">
                      <span>⭐</span> {featuredProgram.rating} rating
                    </span>
                    <span className="flex items-center gap-1">
                      <span>📅</span> {featuredProgram.duration}
                    </span>
                  </div>
                </div>
                <Link href={`/programs/${featuredProgram.id}`}>
                  <button className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105 shadow-lg">
                    View Program →
                  </button>
                </Link>
              </div>
            </div>
          )}

        {/* Results Count */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-white">
            {filteredPrograms.length === 0
              ? "No programs found"
              : filteredPrograms.length === programs.length
              ? "All Programs"
              : `${filteredPrograms.length} Program${
                  filteredPrograms.length !== 1 ? "s" : ""
                } Found`}
          </h2>
        </div>

        {/* Programs Grid */}
        {filteredPrograms.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {user.subscription === "paid"
              ? filteredPrograms.map((program) => (
                  <ProgramCard key={program.id} {...program} />
                ))
              : filteredPrograms
                  .slice(0, 20)
                  .map((program, index) => (
                    <ProgramCard
                      key={program.id}
                      {...program}
                      locked={
                        !user?.subscription || user.subscription !== "paid"
                          ? index >= 3
                          : false
                      }
                    />
                  ))}
          </div>
        ) : (
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-xl p-12 text-center">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-2">
              No programs found
            </h3>
            <p className="text-slate-400 mb-6">
              Try adjusting your filters or search terms to find what you're
              looking for
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedSport("All");
                setSelectedLevel("All Levels");
              }}
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105"
            >
              Clear All Filters
            </button>
          </div>
        )}

        {/* Quick Action Cards */}
        {/* <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link href="/programs/my-programs">
            <div className="bg-gradient-to-br from-purple-600/10 to-slate-800 border border-purple-600/30 rounded-xl p-6 hover:border-purple-600/50 transition-all cursor-pointer group hover:scale-[1.02]">
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                📋
              </div>
              <h3 className="text-xl font-bold text-white mb-2">My Programs</h3>
              <p className="text-slate-400 text-sm">
                View and manage your active training programs
              </p>
            </div>
          </Link>

          <Link href="/programs/progress">
            <div className="bg-gradient-to-br from-emerald-600/10 to-slate-800 border border-emerald-600/30 rounded-xl p-6 hover:border-emerald-600/50 transition-all cursor-pointer group hover:scale-[1.02]">
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                📊
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Track Progress
              </h3>
              <p className="text-slate-400 text-sm">
                Monitor your training progress and achievements
              </p>
            </div>
          </Link>
        </div> */}
      </div>
    </LayoutWrapper>
  );
}
