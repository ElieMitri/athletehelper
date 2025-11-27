import { useEffect, useState } from "react";
import { doc, getDoc, setDoc, onSnapshot } from "firebase/firestore";
import { db } from "@/lib/firebase";

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

interface WeekData {
  schedule: Record<string, Session[]>;
  notes: string;
}

interface PlannerData {
  weeks: Record<string, WeekData>; // weekKey -> WeekData
  events: Event[];
  lastUpdated: number;
}

// Helper function to get week key from date
const getWeekKey = (weekOffset: number = 0): string => {
  const today = new Date();
  const currentDay = today.getDay();
  const diff = currentDay === 0 ? -6 : 1 - currentDay;
  const monday = new Date(today);
  monday.setDate(today.getDate() + diff + weekOffset * 7);

  // Format as YYYY-MM-DD for the Monday of the week
  const year = monday.getFullYear();
  const month = String(monday.getMonth() + 1).padStart(2, "0");
  const day = String(monday.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

export const usePlannerData = (
  userId: string | undefined,
  weekOffset: number = 0
) => {
  const [schedule, setSchedule] = useState<Record<string, Session[]>>({
    Monday: [],
    Tuesday: [],
    Wednesday: [],
    Thursday: [],
    Friday: [],
    Saturday: [],
    Sunday: [],
  });
  const [events, setEvents] = useState<Event[]>([]);
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const currentWeekKey = getWeekKey(weekOffset);

  // Load data from Firebase
  useEffect(() => {
    if (!userId) {
      setLoading(false);
      return;
    }

    const plannerDocRef = doc(db, "plans", userId);

    // Subscribe to real-time updates
    const unsubscribe = onSnapshot(
      plannerDocRef,
      (docSnapshot) => {
        if (docSnapshot.exists()) {
          const data = docSnapshot.data() as PlannerData;

          // Load week-specific data
          const weekData = data.weeks?.[currentWeekKey];
          if (weekData) {
            setSchedule(weekData.schedule || getEmptySchedule());
            setNotes(weekData.notes || "");
          } else {
            // No data for this week yet
            setSchedule(getEmptySchedule());
            setNotes("");
          }

          // Events are global across all weeks
          setEvents(data.events || []);
        } else {
          // Initialize with empty data if document doesn't exist
          setSchedule(getEmptySchedule());
          setEvents([]);
          setNotes("");
        }
        setLoading(false);
        setError(null);
      },
      (err) => {
        console.error("Error loading planner data:", err);
        setError("Failed to load planner data");
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, [userId, currentWeekKey]);

  // Helper function to get empty schedule
  const getEmptySchedule = (): Record<string, Session[]> => ({
    Monday: [],
    Tuesday: [],
    Wednesday: [],
    Thursday: [],
    Friday: [],
    Saturday: [],
    Sunday: [],
  });

  // Helper to update week data
  const updateWeekData = async (
    updatedSchedule?: Record<string, Session[]>,
    updatedNotes?: string
  ) => {
    if (!userId) return false;

    try {
      const plannerDocRef = doc(db, "plans", userId);

      // Get existing data first
      const docSnap = await getDoc(plannerDocRef);
      const existingData = docSnap.exists()
        ? (docSnap.data() as PlannerData)
        : { weeks: {}, events: [], lastUpdated: 0 };

      // Get current week data
      const currentWeekData = existingData.weeks?.[currentWeekKey] || {
        schedule: getEmptySchedule(),
        notes: "",
      };

      // Update only what changed
      const newWeekData: WeekData = {
        schedule:
          updatedSchedule !== undefined
            ? updatedSchedule
            : currentWeekData.schedule,
        notes:
          updatedNotes !== undefined ? updatedNotes : currentWeekData.notes,
      };

      // Update the weeks object
      const updatedWeeks = {
        ...existingData.weeks,
        [currentWeekKey]: newWeekData,
      };

      await setDoc(
        plannerDocRef,
        {
          weeks: updatedWeeks,
          events: existingData.events,
          lastUpdated: Date.now(),
        },
        { merge: true }
      );

      return true;
    } catch (err) {
      console.error("Error updating week data:", err);
      setError("Failed to update data");
      return false;
    }
  };

  // Save schedule to Firebase for current week
  const saveSchedule = async (newSchedule: Record<string, Session[]>) => {
    const success = await updateWeekData(newSchedule, undefined);
    if (success) {
      setSchedule(newSchedule);
    }
  };

  // Save events to Firebase (global, not week-specific)
  const saveEvents = async (newEvents: Event[]) => {
    if (!userId) return;

    try {
      const plannerDocRef = doc(db, "plans", userId);
      await setDoc(
        plannerDocRef,
        {
          events: newEvents,
          lastUpdated: Date.now(),
        },
        { merge: true }
      );
      setEvents(newEvents);
    } catch (err) {
      console.error("Error saving events:", err);
      setError("Failed to save events");
    }
  };

  // Save notes to Firebase for current week
  const saveNotes = async (newNotes: string) => {
    const success = await updateWeekData(undefined, newNotes);
    if (success) {
      setNotes(newNotes);
    }
    return success;
  };

  // Copy data from another week
  const copyWeekSchedule = async (sourceWeekOffset: number) => {
    if (!userId) return;

    try {
      const sourceWeekKey = getWeekKey(sourceWeekOffset);
      const plannerDocRef = doc(db, "plans", userId);

      const docSnap = await getDoc(plannerDocRef);
      if (!docSnap.exists()) return;

      const data = docSnap.data() as PlannerData;
      const sourceWeekData = data.weeks?.[sourceWeekKey];

      if (!sourceWeekData) {
        alert("No data found for the source week");
        return;
      }

      // Copy schedule and reset completion status
      const copiedSchedule = Object.entries(sourceWeekData.schedule).reduce(
        (acc, [day, sessions]) => {
          acc[day] = sessions.map((session) => ({
            ...session,
            id: Date.now().toString() + Math.random(),
            completed: false,
          }));
          return acc;
        },
        {} as Record<string, Session[]>
      );

      // Save to current week (don't copy notes)
      await saveSchedule(copiedSchedule);
    } catch (err) {
      console.error("Error copying week schedule:", err);
      setError("Failed to copy week schedule");
    }
  };

  return {
    schedule,
    events,
    notes,
    loading,
    error,
    saveSchedule,
    saveEvents,
    saveNotes,
    setSchedule,
    setEvents,
    setNotes,
    copyWeekSchedule,
    currentWeekKey,
  };
};
