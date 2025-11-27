"use client";

import LayoutWrapper from "@/components/layout/LayoutWrapper";
import Card from "@/components/shared/Card";
import SessionCard from "@/components/planner/SessionCard";
import Button from "@/components/shared/Button";
import { useState, useMemo } from "react";
import { usePlannerData } from "@/hooks/usePlannerData";
import { useAuth } from "@/context/AuthContext";

interface Session {
  id: string;
  title: string;
  time: string;
  duration: string;
  type: string;
  completed: boolean;
  intensity: string;
}

interface Event {
  id: number;
  title: string;
  date: string;
  type: string;
  icon: string;
}

interface NewSessionForm {
  title: string;
  time: string;
  duration: string;
  type: string;
  intensity: string;
  day: string;
}

interface NewEventForm {
  title: string;
  date: string;
  type: string;
  icon: string;
}

export default function PlannerPage() {
  const { user, loading: authLoading } = useAuth();
  const [viewMode, setViewMode] = useState<"week" | "month">("week");
  const [currentWeekOffset, setCurrentWeekOffset] = useState(0);
  const [showAddSessionModal, setShowAddSessionModal] = useState(false);
  const [showAddEventModal, setShowAddEventModal] = useState(false);

  // Initialize Firebase data hook with week offset
  const {
    schedule,
    events: upcomingEvents,
    notes: weeklyNotes,
    loading: dataLoading,
    error,
    saveSchedule,
    saveEvents,
    saveNotes: saveNotesToDB,
    setSchedule,
    setEvents,
    setNotes: setWeeklyNotes,
    copyWeekSchedule,
    currentWeekKey,
  } = usePlannerData(user?.uid, currentWeekOffset);

  // New session form state
  const [newSessionForm, setNewSessionForm] = useState<NewSessionForm>({
    title: "",
    time: "09:00",
    duration: "60",
    type: "Strength",
    intensity: "Medium",
    day: "Monday",
  });

  // New event form state
  const [newEventForm, setNewEventForm] = useState<NewEventForm>({
    title: "",
    date: "",
    type: "Competition",
    icon: "🏀",
  });

  const weekDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  // Calculate current week dates
  const getCurrentWeekDates = () => {
    const today = new Date();
    const currentDay = today.getDay();
    const diff = currentDay === 0 ? -6 : 1 - currentDay;
    const monday = new Date(today);
    monday.setDate(today.getDate() + diff + currentWeekOffset * 7);

    const sunday = new Date(monday);
    sunday.setDate(monday.getDate() + 6);

    return {
      start: monday,
      end: sunday,
      formattedRange: `${monday.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
      })} - ${sunday.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })}`,
    };
  };

  const weekDates = getCurrentWeekDates();

  // Calculate stats
  const getTotalSessions = () => {
    return Object.values(schedule).flat().length;
  };

  const getCompletedSessions = () => {
    return Object.values(schedule)
      .flat()
      .filter((s) => s.completed).length;
  };

  const getTotalTrainingTime = () => {
    const total = Object.values(schedule)
      .flat()
      .reduce((acc, session) => {
        const minutes = parseInt(session.duration);
        return acc + minutes;
      }, 0);
    return (total / 60).toFixed(1);
  };

  const getRecoveryDays = () => {
    return Object.values(schedule).filter((sessions) =>
      sessions.some((s) => s.type === "Recovery")
    ).length;
  };

  const completionPercentage =
    Math.round((getCompletedSessions() / getTotalSessions()) * 100) || 0;

  const stats = [
    {
      label: "Total Sessions",
      value: getTotalSessions().toString(),
      icon: "📅",
      color: "from-blue-600 to-blue-700",
      subtext: "This week",
    },
    {
      label: "Completed",
      value: getCompletedSessions().toString(),
      icon: "✓",
      color: "from-emerald-600 to-emerald-700",
      subtext: `${completionPercentage}% complete`,
    },
    {
      label: "Training Time",
      value: `${getTotalTrainingTime()}hrs`,
      icon: "⏱️",
      color: "from-purple-600 to-purple-700",
      subtext: "Planned hours",
    },
    {
      label: "Recovery Days",
      value: getRecoveryDays().toString(),
      icon: "🧘",
      color: "from-orange-600 to-orange-700",
      subtext: "Optimal rest",
    },
  ];

  // Calculate workload distribution
  const workloadByType = useMemo(() => {
    const allSessions = Object.values(schedule).flat();
    const typeCount: Record<string, number> = {};

    allSessions.forEach((session) => {
      typeCount[session.type] = (typeCount[session.type] || 0) + 1;
    });

    const total = allSessions.length;
    const colors: Record<string, string> = {
      Strength: "bg-blue-500",
      Cardio: "bg-red-500",
      Speed: "bg-yellow-500",
      Recovery: "bg-green-500",
      Sport: "bg-purple-500",
      Power: "bg-orange-500",
      Mobility: "bg-pink-500",
    };

    return Object.entries(typeCount)
      .map(([type, count]) => ({
        type,
        count,
        color: colors[type] || "bg-gray-500",
        percentage: Math.round((count / total) * 100),
      }))
      .sort((a, b) => b.count - a.count);
  }, [schedule]);

  // Toggle session completion
  const toggleSessionCompletion = async (day: string, sessionId: string) => {
    const updatedSchedule = {
      ...schedule,
      [day]: schedule[day].map((session) =>
        session.id === sessionId
          ? { ...session, completed: !session.completed }
          : session
      ),
    };
    setSchedule(updatedSchedule);
    await saveSchedule(updatedSchedule);
  };

  // Delete session
  const deleteSession = async (day: string, sessionId: string) => {
    const updatedSchedule = {
      ...schedule,
      [day]: schedule[day].filter((session) => session.id !== sessionId),
    };
    setSchedule(updatedSchedule);
    await saveSchedule(updatedSchedule);
  };

  // Add session
  const addSession = async (day: string, newSession: Omit<Session, "id">) => {
    const id = Date.now().toString();
    const updatedSchedule = {
      ...schedule,
      [day]: [...(schedule[day] || []), { ...newSession, id }],
    };
    setSchedule(updatedSchedule);
    await saveSchedule(updatedSchedule);
  };

  // Quick add workout
  const quickAddWorkout = async (day: string) => {
    const newSession: Omit<Session, "id"> = {
      title: "New Workout",
      time: "9:00 AM",
      duration: "60 min",
      type: "Strength",
      completed: false,
      intensity: "Medium",
    };
    await addSession(day, newSession);
  };

  // Quick add rest day
  const quickAddRestDay = async () => {
    const restDay = "Sunday";
    const newSession: Omit<Session, "id"> = {
      title: "Active Recovery",
      time: "10:00 AM",
      duration: "30 min",
      type: "Recovery",
      completed: false,
      intensity: "Low",
    };
    await addSession(restDay, newSession);
  };

  // Copy last week - updated to use week-based storage
  const copyLastWeek = async () => {
    await copyWeekSchedule(currentWeekOffset - 1);
  };

  // Navigate weeks
  const goToPreviousWeek = () => {
    setCurrentWeekOffset((prev) => prev - 1);
  };

  const goToNextWeek = () => {
    setCurrentWeekOffset((prev) => prev + 1);
  };

  const goToToday = () => {
    setCurrentWeekOffset(0);
  };

  // Save notes
  const saveNotes = async () => {
    const success = await saveNotesToDB(weeklyNotes);
    if (success) {
      alert("Notes saved successfully!");
    } else {
      alert("Failed to save notes. Please try again.");
    }
  };

  // Check if day is today
  const isToday = (dayName: string) => {
    const today = new Date().toLocaleDateString("en-US", { weekday: "long" });
    return dayName === today && currentWeekOffset === 0;
  };

  // Handle add session modal
  const openAddSessionModal = (day?: string) => {
    if (day) {
      setNewSessionForm((prev) => ({ ...prev, day }));
    }
    setShowAddSessionModal(true);
  };

  const closeAddSessionModal = () => {
    setShowAddSessionModal(false);
    setNewSessionForm({
      title: "",
      time: "09:00",
      duration: "60",
      type: "Strength",
      intensity: "Medium",
      day: "Monday",
    });
  };

  const handleAddSession = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newSessionForm.title.trim()) {
      alert("Please enter a session title");
      return;
    }

    const newSession: Omit<Session, "id"> = {
      title: newSessionForm.title,
      time: formatTime(newSessionForm.time),
      duration: `${newSessionForm.duration} min`,
      type: newSessionForm.type,
      intensity: newSessionForm.intensity,
      completed: false,
    };

    await addSession(newSessionForm.day, newSession);
    closeAddSessionModal();
  };

  // Format time to AM/PM
  const formatTime = (time: string) => {
    const [hours, minutes] = time.split(":");
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? "PM" : "AM";
    const displayHour = hour % 12 || 12;
    return `${displayHour}:${minutes} ${ampm}`;
  };

  // Handle add event
  const openAddEventModal = () => {
    setShowAddEventModal(true);
  };

  const closeAddEventModal = () => {
    setShowAddEventModal(false);
    setNewEventForm({
      title: "",
      date: "",
      type: "Competition",
      icon: "🏀",
    });
  };

  const handleAddEvent = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newEventForm.title.trim() || !newEventForm.date) {
      alert("Please fill in all event fields");
      return;
    }

    const newEvent: Event = {
      id: Date.now(),
      title: newEventForm.title,
      date: new Date(newEventForm.date).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      }),
      type: newEventForm.type,
      icon: newEventForm.icon,
    };

    const updatedEvents = [...upcomingEvents, newEvent];
    setEvents(updatedEvents);
    await saveEvents(updatedEvents);
    closeAddEventModal();
  };

  // Delete event
  const deleteEvent = async (eventId: number) => {
    const updatedEvents = upcomingEvents.filter(
      (event) => event.id !== eventId
    );
    setEvents(updatedEvents);
    await saveEvents(updatedEvents);
  };

  // Combined loading state
  const loading = authLoading || dataLoading;

  // Show loading state
  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-[#0a0a0a]">
        <div className="animate-spin h-12 w-12 border-4 border-blue-600 border-t-transparent rounded-full"></div>
      </div>
    );
  }

  // Show error state
  if (error) {
    return (
      <LayoutWrapper>
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center justify-center min-h-[60vh]">
            <Card className="p-6 bg-red-900/20 border-red-500/50 max-w-md">
              <h3 className="text-xl font-bold text-red-400 mb-2">
                Error Loading Data
              </h3>
              <p className="text-slate-300">{error}</p>
              <button
                onClick={() => window.location.reload()}
                className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                Retry
              </button>
            </Card>
          </div>
        </div>
      </LayoutWrapper>
    );
  }

  // Show auth required state
  if (!user) {
    return (
      <LayoutWrapper>
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center justify-center min-h-[60vh]">
            <Card className="p-6 bg-slate-800 border-slate-700 max-w-md text-center">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold text-white mb-2">
                Authentication Required
              </h3>
              <p className="text-slate-300 mb-4">
                Please sign in to access your training planner.
              </p>
              <button
                onClick={() => (window.location.href = "/login")}
                className="px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg transition-all font-medium"
              >
                Sign In
              </button>
            </Card>
          </div>
        </div>
      </LayoutWrapper>
    );
  }

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
                <span>Week of {weekDates.formattedRange}</span>
              </p>
              {/* Debug info - remove in production */}
              {/* <p className="text-xs text-slate-500 mt-1">Week Key: {currentWeekKey}</p> */}
            </div>
            <div className="flex items-center gap-3 flex-wrap">
              {/* Navigation */}
              <button
                onClick={goToPreviousWeek}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg border border-slate-700 transition-all font-medium"
              >
                ← Previous
              </button>
              <button
                onClick={goToToday}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg border border-slate-700 transition-all font-medium"
              >
                Today
              </button>
              <button
                onClick={goToNextWeek}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg border border-slate-700 transition-all font-medium"
              >
                Next →
              </button>
              <Button
                onClick={() => openAddSessionModal()}
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg"
              >
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
        {workloadByType.length > 0 && (
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
                      <div
                        className={`w-3 h-3 rounded-full ${item.color}`}
                      ></div>
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
        )}

        {/* Weekly Calendar Grid */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <span>🗓️</span>
              <span>Weekly Schedule</span>
            </h2>
            <div className="flex items-center gap-2 text-sm flex-wrap">
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {weekDays.map((day) => {
              const sessions = schedule[day] || [];
              const hasCompleted = sessions.some((s) => s.completed);
              const totalDuration = sessions.reduce((acc, s) => {
                const minutes = parseInt(s.duration);
                return acc + minutes;
              }, 0);
              const isDayToday = isToday(day);

              return (
                <div key={day} className="flex flex-col">
                  <div
                    className={`bg-gradient-to-br from-slate-800 to-slate-900 px-4 py-3 rounded-t-xl font-semibold text-white border border-slate-700 flex items-center justify-between ${
                      isDayToday
                        ? "bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-blue-600/50"
                        : ""
                    }`}
                  >
                    <span>
                      {day}
                      {isDayToday && (
                        <span className="ml-2 text-xs bg-blue-600 px-2 py-0.5 rounded-full">
                          Today
                        </span>
                      )}
                    </span>
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
                          <div key={session.id} className="relative group">
                            <SessionCard
                              {...session}
                              onToggle={() =>
                                toggleSessionCompletion(day, session.id)
                              }
                              onDelete={() => deleteSession(day, session.id)}
                            />
                          </div>
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
                        <button
                          onClick={() => openAddSessionModal(day)}
                          className="text-xs text-blue-400 hover:text-blue-300 transition-colors"
                        >
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
          {/* <Card className="p-6 bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700">
            <h3 className="text-xl font-bold mb-4 text-white flex items-center gap-2">
              <span>⚡</span>
              <span>Quick Actions</span>
            </h3>
            <div className="space-y-2">
              <button
                onClick={() => openAddSessionModal()}
                className="w-full text-left px-4 py-3 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white rounded-lg border border-slate-700 hover:border-slate-600 transition-all flex items-center gap-3 group"
              >
                <span className="text-xl group-hover:scale-110 transition-transform">
                  💪
                </span>
                <span className="font-medium">Add Workout</span>
              </button>
              <button
                onClick={quickAddRestDay}
                className="w-full text-left px-4 py-3 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white rounded-lg border border-slate-700 hover:border-slate-600 transition-all flex items-center gap-3 group"
              >
                <span className="text-xl group-hover:scale-110 transition-transform">
                  🧘
                </span>
                <span className="font-medium">Add Rest Day</span>
              </button>
              <button
                onClick={openAddEventModal}
                className="w-full text-left px-4 py-3 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white rounded-lg border border-slate-700 hover:border-slate-600 transition-all flex items-center gap-3 group"
              >
                <span className="text-xl group-hover:scale-110 transition-transform">
                  📅
                </span>
                <span className="font-medium">Add Event</span>
              </button>
              <button
                onClick={copyLastWeek}
                className="w-full text-left px-4 py-3 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white rounded-lg border border-slate-700 hover:border-slate-600 transition-all flex items-center gap-3 group"
              >
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
          </Card> */}

          {/* Weekly Notes */}
          {/* <Card className="p-6 bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700">
            <h3 className="text-xl font-bold mb-4 text-white flex items-center gap-2">
              <span>📝</span>
              <span>Weekly Notes</span>
            </h3>
            <textarea
              value={weeklyNotes}
              onChange={(e) => setWeeklyNotes(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 min-h-[180px] text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              placeholder="Add notes about your training week, how you're feeling, adjustments needed..."
            ></textarea>
            <div className="mt-3 flex justify-end gap-2">
              <button
                onClick={() => setWeeklyNotes("")}
                className="text-sm text-slate-400 hover:text-white px-4 py-2 transition-colors"
              >
                Clear
              </button>
              <Button
                onClick={saveNotes}
                variant="secondary"
                size="sm"
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                💾 Save Notes
              </Button>
            </div>
          </Card> */}

          {/* Upcoming Events */}
          <Card className="p-6 bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700">
            <h3 className="text-xl font-bold mb-4 text-white flex items-center gap-2">
              <span>🎯</span>
              <span>Upcoming Events</span>
            </h3>
            <div className="space-y-3 mb-4">
              {upcomingEvents.length > 0 ? (
                upcomingEvents.map((event) => (
                  <div
                    key={event.id}
                    className="p-4 bg-slate-900 rounded-lg border border-slate-700 hover:border-slate-600 transition-all group relative"
                  >
                    <button
                      onClick={() => deleteEvent(event.id)}
                      className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity text-red-400 hover:text-red-300 text-xs"
                    >
                      ✕
                    </button>
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
                ))
              ) : (
                <div className="text-center py-8 text-slate-400">
                  <div className="text-4xl mb-2">📅</div>
                  <p className="text-sm">No upcoming events</p>
                </div>
              )}
            </div>
            <button
              onClick={openAddEventModal}
              className="w-full text-center py-2 text-sm text-blue-400 hover:text-blue-300 font-medium transition-colors"
            >
              + Add New Event
            </button>
          </Card>
        </div>

        {/* Training Tips */}
        {/* <Card className="p-6 mt-6 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 border-blue-600/30">
          <div className="flex items-start gap-4">
            <div className="text-4xl">💡</div>
            <div>
              <h3 className="font-bold text-white text-lg mb-2">
                Weekly Planning Tip
              </h3>
              <p className="text-slate-300 mb-3">
                {getTotalSessions() >= 5
                  ? `You have ${getTotalSessions()} sessions scheduled - great commitment! Consider adding ${
                      getRecoveryDays() < 2
                        ? "one more recovery session"
                        : "adequate rest"
                    } to optimize performance and prevent burnout.`
                  : getTotalSessions() > 0
                  ? `You have ${getTotalSessions()} sessions this week. Consider adding 2-3 more sessions to meet your training goals while maintaining balance.`
                  : "Start building your training schedule by adding your first workout session!"}
              </p>
              <button className="text-sm text-blue-400 hover:text-blue-300 font-medium transition-colors">
                Optimize My Schedule →
              </button>
            </div>
          </div>
        </Card> */}
      </div>

      {/* Modals remain the same... */}
      {/* Add Session Modal */}
      {showAddSessionModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-slate-800 rounded-2xl border border-slate-700 max-w-md w-full shadow-2xl">
            <div className="p-6 border-b border-slate-700">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-white">
                  Add Training Session
                </h2>
                <button
                  onClick={closeAddSessionModal}
                  className="text-slate-400 hover:text-white text-2xl"
                >
                  ×
                </button>
              </div>
            </div>
            <form onSubmit={handleAddSession} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Session Title
                </label>
                <input
                  type="text"
                  value={newSessionForm.title}
                  onChange={(e) =>
                    setNewSessionForm({
                      ...newSessionForm,
                      title: e.target.value,
                    })
                  }
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., Morning Strength"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Day
                </label>
                <select
                  value={newSessionForm.day}
                  onChange={(e) =>
                    setNewSessionForm({
                      ...newSessionForm,
                      day: e.target.value,
                    })
                  }
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {weekDays.map((day) => (
                    <option key={day} value={day}>
                      {day}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Time
                  </label>
                  <input
                    type="time"
                    value={newSessionForm.time}
                    onChange={(e) =>
                      setNewSessionForm({
                        ...newSessionForm,
                        time: e.target.value,
                      })
                    }
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Duration (min)
                  </label>
                  <input
                    type="number"
                    value={newSessionForm.duration}
                    onChange={(e) =>
                      setNewSessionForm({
                        ...newSessionForm,
                        duration: e.target.value,
                      })
                    }
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    min="15"
                    step="15"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Type
                </label>
                <select
                  value={newSessionForm.type}
                  onChange={(e) =>
                    setNewSessionForm({
                      ...newSessionForm,
                      type: e.target.value,
                    })
                  }
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="Strength">Strength</option>
                  <option value="Cardio">Cardio</option>
                  <option value="Speed">Speed</option>
                  <option value="Power">Power</option>
                  <option value="Sport">Sport</option>
                  <option value="Recovery">Recovery</option>
                  <option value="Mobility">Mobility</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Intensity
                </label>
                <select
                  value={newSessionForm.intensity}
                  onChange={(e) =>
                    setNewSessionForm({
                      ...newSessionForm,
                      intensity: e.target.value,
                    })
                  }
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </select>
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={closeAddSessionModal}
                  className="flex-1 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg transition-all font-medium"
                >
                  Add Session
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Add Event Modal */}
      {showAddEventModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-slate-800 rounded-2xl border border-slate-700 max-w-md w-full shadow-2xl">
            <div className="p-6 border-b border-slate-700">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-white">Add Event</h2>
                <button
                  onClick={closeAddEventModal}
                  className="text-slate-400 hover:text-white text-2xl"
                >
                  ×
                </button>
              </div>
            </div>
            <form onSubmit={handleAddEvent} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Event Title
                </label>
                <input
                  type="text"
                  value={newEventForm.title}
                  onChange={(e) =>
                    setNewEventForm({ ...newEventForm, title: e.target.value })
                  }
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., Championship Game"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Date
                </label>
                <input
                  type="date"
                  value={newEventForm.date}
                  onChange={(e) =>
                    setNewEventForm({ ...newEventForm, date: e.target.value })
                  }
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Type
                </label>
                <select
                  value={newEventForm.type}
                  onChange={(e) =>
                    setNewEventForm({ ...newEventForm, type: e.target.value })
                  }
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="Competition">Competition</option>
                  <option value="Test">Test</option>
                  <option value="Meeting">Meeting</option>
                  <option value="Assessment">Assessment</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Icon
                </label>
                <select
                  value={newEventForm.icon}
                  onChange={(e) =>
                    setNewEventForm({ ...newEventForm, icon: e.target.value })
                  }
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="🏀">🏀 Basketball</option>
                  <option value="⚽">⚽ Soccer</option>
                  <option value="🏈">🏈 Football</option>
                  <option value="🎾">🎾 Tennis</option>
                  <option value="🏋️">🏋️ Weightlifting</option>
                  <option value="📊">📊 Assessment</option>
                  <option value="🏆">🏆 Competition</option>
                  <option value="📅">📅 Meeting</option>
                </select>
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={closeAddEventModal}
                  className="flex-1 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg transition-all font-medium"
                >
                  Add Event
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </LayoutWrapper>
  );
}
