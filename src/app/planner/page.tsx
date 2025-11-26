"use client";

import LayoutWrapper from "@/components/layout/LayoutWrapper";
import Card from "@/components/shared/Card";
import SessionCard from "@/components/planner/SessionCard";
import Button from "@/components/shared/Button";
import { useState } from "react";

export default function PlannerPage() {
  const [viewMode, setViewMode] = useState<"week" | "month">("week");
  const [selectedDay, setSelectedDay] = useState<string | null>(null);

  const weekDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const schedule = {
    Monday: [
      {
        id: "1",
        title: "Morning Strength",
        time: "7:00 AM",
        duration: "60 min",
        type: "Strength",
        completed: true,
        intensity: "High",
      },
      {
        id: "2",
        title: "Evening Cardio",
        time: "6:00 PM",
        duration: "30 min",
        type: "Cardio",
        completed: false,
        intensity: "Medium",
      },
    ],
    Tuesday: [
      {
        id: "3",
        title: "Speed Training",
        time: "8:00 AM",
        duration: "45 min",
        type: "Speed",
        completed: false,
        intensity: "High",
      },
    ],
    Wednesday: [
      {
        id: "4",
        title: "Upper Body",
        time: "7:00 AM",
        duration: "60 min",
        type: "Strength",
        completed: false,
        intensity: "High",
      },
      {
        id: "5",
        title: "Yoga Session",
        time: "7:00 PM",
        duration: "45 min",
        type: "Recovery",
        completed: false,
        intensity: "Low",
      },
    ],
    Thursday: [
      {
        id: "6",
        title: "Lower Body",
        time: "7:00 AM",
        duration: "60 min",
        type: "Strength",
        completed: false,
        intensity: "High",
      },
    ],
    Friday: [
      {
        id: "7",
        title: "HIIT Training",
        time: "6:00 AM",
        duration: "45 min",
        type: "Cardio",
        completed: false,
        intensity: "High",
      },
    ],
    Saturday: [
      {
        id: "8",
        title: "Sport Practice",
        time: "10:00 AM",
        duration: "90 min",
        type: "Sport",
        completed: false,
        intensity: "Medium",
      },
    ],
    Sunday: [
      {
        id: "9",
        title: "Active Recovery",
        time: "10:00 AM",
        duration: "30 min",
        type: "Recovery",
        completed: false,
        intensity: "Low",
      },
    ],
  };

  const stats = [
    {
      label: "Total Sessions",
      value: "9",
      icon: "📅",
      color: "from-blue-600 to-blue-700",
      subtext: "This week",
    },
    {
      label: "Completed",
      value: "1",
      icon: "✓",
      color: "from-emerald-600 to-emerald-700",
      subtext: "11% complete",
    },
    {
      label: "Training Time",
      value: "8.5hrs",
      icon: "⏱️",
      color: "from-purple-600 to-purple-700",
      subtext: "Planned hours",
    },
    {
      label: "Recovery Days",
      value: "1",
      icon: "🧘",
      color: "from-orange-600 to-orange-700",
      subtext: "Optimal rest",
    },
  ];

  const workloadByType = [
    { type: "Strength", count: 3, color: "bg-blue-500", percentage: 33 },
    { type: "Cardio", count: 2, color: "bg-red-500", percentage: 22 },
    { type: "Speed", count: 1, color: "bg-yellow-500", percentage: 11 },
    { type: "Recovery", count: 2, color: "bg-green-500", percentage: 22 },
    { type: "Sport", count: 1, color: "bg-purple-500", percentage: 11 },
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Basketball Game",
      date: "Jan 20",
      type: "Competition",
      icon: "🏀",
    },
    {
      id: 2,
      title: "Fitness Assessment",
      date: "Jan 25",
      type: "Test",
      icon: "📊",
    },
  ];

  const getTotalSessions = () => {
    return Object.values(schedule).flat().length;
  };

  const getCompletedSessions = () => {
    return Object.values(schedule)
      .flat()
      .filter((s) => s.completed).length;
  };

  return (
    <LayoutWrapper>
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between flex-wrap gap-4 mb-4">
            <div>
              <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                Training Planner
              </h1>
              <p className="text-slate-400 text-lg flex items-center gap-2">
                <span>📅</span>
                <span>Week of January 15 - January 21, 2024</span>
              </p>
            </div>
            <div className="flex items-center gap-3 flex-wrap">
              {/* View Toggle */}
              <div className="flex gap-2 bg-slate-800 p-1 rounded-lg border border-slate-700">
                <button
                  onClick={() => setViewMode("week")}
                  className={`px-4 py-2 rounded-md font-medium transition-all ${
                    viewMode === "week"
                      ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Week
                </button>
                <button
                  onClick={() => setViewMode("month")}
                  className={`px-4 py-2 rounded-md font-medium transition-all ${
                    viewMode === "month"
                      ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Month
                </button>
              </div>

              {/* Navigation */}
              <button className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg border border-slate-700 transition-all font-medium">
                ← Previous
              </button>
              <button className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg border border-slate-700 transition-all font-medium">
                Today
              </button>
              <button className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg border border-slate-700 transition-all font-medium">
                Next →
              </button>
              <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg">
                <span className="flex items-center gap-2">
                  <span>➕</span>
                  <span>Add Session</span>
                </span>
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <Card
              key={index}
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
                <p className="text-sm text-slate-400 mb-1">{stat.label}</p>
                <p className="text-xs text-slate-500">{stat.subtext}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Training Workload Distribution */}
        <Card className="p-6 mb-8 bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <span>📊</span>
            <span>Training Distribution</span>
          </h3>
          <div className="space-y-3">
            {workloadByType.map((item) => (
              <div key={item.type}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
                    <span className="text-slate-300 font-medium">
                      {item.type}
                    </span>
                  </div>
                  <span className="text-slate-400 text-sm">
                    {item.count} session{item.count !== 1 ? "s" : ""} (
                    {item.percentage}%)
                  </span>
                </div>
                <div className="bg-slate-700 rounded-full h-2 overflow-hidden">
                  <div
                    className={`${item.color} h-full rounded-full transition-all duration-500`}
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Weekly Calendar Grid */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <span>🗓️</span>
              <span>Weekly Schedule</span>
            </h2>
            <div className="flex items-center gap-2 text-sm">
              <span className="flex items-center gap-1 text-slate-400">
                <span className="w-3 h-3 bg-emerald-500 rounded"></span>
                Completed
              </span>
              <span className="flex items-center gap-1 text-slate-400">
                <span className="w-3 h-3 bg-blue-500 rounded"></span>
                Scheduled
              </span>
              <span className="flex items-center gap-1 text-slate-400">
                <span className="w-3 h-3 bg-slate-600 rounded"></span>
                Rest Day
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-3">
            {weekDays.map((day, index) => {
              const sessions = schedule[day as keyof typeof schedule] || [];
              const hasCompleted = sessions.some((s) => s.completed);
              const totalDuration = sessions.reduce((acc, s) => {
                const minutes = parseInt(s.duration);
                return acc + minutes;
              }, 0);

              return (
                <div key={day} className="flex flex-col">
                  <div
                    className={`bg-gradient-to-br from-slate-800 to-slate-900 px-4 py-3 rounded-t-xl font-semibold text-white border border-slate-700 flex items-center justify-between ${
                      index === new Date().getDay() - 1
                        ? "bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-blue-600/50"
                        : ""
                    }`}
                  >
                    <span>{day}</span>
                    {sessions.length > 0 && (
                      <span className="text-xs bg-slate-700 px-2 py-1 rounded-full">
                        {sessions.length}
                      </span>
                    )}
                  </div>
                  <div
                    className={`flex-1 space-y-2 p-3 border border-slate-700 border-t-0 rounded-b-xl min-h-[200px] ${
                      sessions.length === 0 ? "bg-slate-900/50" : "bg-slate-900"
                    }`}
                  >
                    {sessions.length > 0 ? (
                      <>
                        {sessions.map((session) => (
                          <SessionCard key={session.id} {...session} />
                        ))}
                        <div className="mt-3 pt-3 border-t border-slate-800 text-xs text-slate-500 flex items-center justify-between">
                          <span>⏱️ {totalDuration} min</span>
                          {hasCompleted && (
                            <span className="text-emerald-400">✓</span>
                          )}
                        </div>
                      </>
                    ) : (
                      <div className="h-full flex flex-col items-center justify-center text-center">
                        <div className="text-4xl mb-2">🧘</div>
                        <div className="text-sm text-slate-400 font-medium mb-2">
                          Rest Day
                        </div>
                        <button className="text-xs text-blue-400 hover:text-blue-300 transition-colors">
                          + Add Session
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Quick Actions */}
          <Card className="p-6 bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700">
            <h3 className="text-xl font-bold mb-4 text-white flex items-center gap-2">
              <span>⚡</span>
              <span>Quick Actions</span>
            </h3>
            <div className="space-y-2">
              <button className="w-full text-left px-4 py-3 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white rounded-lg border border-slate-700 hover:border-slate-600 transition-all flex items-center gap-3 group">
                <span className="text-xl group-hover:scale-110 transition-transform">
                  💪
                </span>
                <span className="font-medium">Add Workout</span>
              </button>
              <button className="w-full text-left px-4 py-3 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white rounded-lg border border-slate-700 hover:border-slate-600 transition-all flex items-center gap-3 group">
                <span className="text-xl group-hover:scale-110 transition-transform">
                  🧘
                </span>
                <span className="font-medium">Add Rest Day</span>
              </button>
              <button className="w-full text-left px-4 py-3 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white rounded-lg border border-slate-700 hover:border-slate-600 transition-all flex items-center gap-3 group">
                <span className="text-xl group-hover:scale-110 transition-transform">
                  📅
                </span>
                <span className="font-medium">Add Event</span>
              </button>
              <button className="w-full text-left px-4 py-3 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white rounded-lg border border-slate-700 hover:border-slate-600 transition-all flex items-center gap-3 group">
                <span className="text-xl group-hover:scale-110 transition-transform">
                  📋
                </span>
                <span className="font-medium">Copy Last Week</span>
              </button>
              <button className="w-full text-left px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg shadow-lg transition-all flex items-center gap-3 font-semibold hover:scale-[1.02]">
                <span className="text-xl">🤖</span>
                <span>AI Schedule Assistant</span>
              </button>
            </div>
          </Card>

          {/* Weekly Notes */}
          <Card className="p-6 bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700">
            <h3 className="text-xl font-bold mb-4 text-white flex items-center gap-2">
              <span>📝</span>
              <span>Weekly Notes</span>
            </h3>
            <textarea
              className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 min-h-[180px] text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              placeholder="Add notes about your training week, how you're feeling, adjustments needed..."
            ></textarea>
            <div className="mt-3 flex justify-end gap-2">
              <button className="text-sm text-slate-400 hover:text-white px-4 py-2 transition-colors">
                Clear
              </button>
              <Button
                variant="secondary"
                size="sm"
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                💾 Save Notes
              </Button>
            </div>
          </Card>

          {/* Upcoming Events */}
          <Card className="p-6 bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700">
            <h3 className="text-xl font-bold mb-4 text-white flex items-center gap-2">
              <span>🎯</span>
              <span>Upcoming Events</span>
            </h3>
            <div className="space-y-3 mb-4">
              {upcomingEvents.map((event) => (
                <div
                  key={event.id}
                  className="p-4 bg-slate-900 rounded-lg border border-slate-700 hover:border-slate-600 transition-all cursor-pointer group hover:scale-[1.02]"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-2xl group-hover:scale-110 transition-transform">
                      {event.icon}
                    </span>
                    <div className="flex-1">
                      <h4 className="font-semibold text-white mb-1 group-hover:text-blue-400 transition-colors">
                        {event.title}
                      </h4>
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-slate-400">{event.date}</span>
                        <span className="text-slate-600">•</span>
                        <span className="text-slate-500">{event.type}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full text-center py-2 text-sm text-blue-400 hover:text-blue-300 font-medium transition-colors">
              View All Events →
            </button>
          </Card>
        </div>

        {/* Training Tips */}
        <Card className="p-6 mt-6 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 border-blue-600/30">
          <div className="flex items-start gap-4">
            <div className="text-4xl">💡</div>
            <div>
              <h3 className="font-bold text-white text-lg mb-2">
                Weekly Planning Tip
              </h3>
              <p className="text-slate-300 mb-3">
                You have a good balance this week! Consider adding one more
                recovery session after your high-intensity workouts to optimize
                performance and prevent burnout.
              </p>
              <button className="text-sm text-blue-400 hover:text-blue-300 font-medium transition-colors">
                Optimize My Schedule →
              </button>
            </div>
          </div>
        </Card>
      </div>
    </LayoutWrapper>
  );
}
