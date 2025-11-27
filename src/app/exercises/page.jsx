"use client";

import LayoutWrapper from "@/components/layout/LayoutWrapper";
import ExerciseCard from "@/components/exercises/ExerciseCard";
import { useState } from "react";

export default function ExercisesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedDifficulty, setSelectedDifficulty] = useState("All");
  const [displayCount, setDisplayCount] = useState(6);

  const exercises = [
    // STRENGTH EXERCISES (50 essential ones)
    {
      id: "1",
      name: "Barbell Back Squat",
      category: "Strength",
      difficulty: "Intermediate",
      equipment: "Barbell",
      muscleGroups: ["Quads", "Glutes", "Core"],
      icon: "🏋️",
    },
    {
      id: "2",
      name: "Deadlift",
      category: "Strength",
      difficulty: "Advanced",
      equipment: "Barbell",
      muscleGroups: ["Back", "Hamstrings", "Glutes"],
      icon: "💪",
    },
    {
      id: "3",
      name: "Bench Press",
      category: "Strength",
      difficulty: "Intermediate",
      equipment: "Barbell",
      muscleGroups: ["Chest", "Triceps", "Shoulders"],
      icon: "🏋️",
    },
    {
      id: "4",
      name: "Pull-ups",
      category: "Strength",
      difficulty: "Intermediate",
      equipment: "Pull-up Bar",
      muscleGroups: ["Back", "Biceps", "Core"],
      icon: "🎯",
    },
    {
      id: "5",
      name: "Overhead Press",
      category: "Strength",
      difficulty: "Intermediate",
      equipment: "Barbell",
      muscleGroups: ["Shoulders", "Triceps", "Core"],
      icon: "🏋️",
    },
    {
      id: "6",
      name: "Romanian Deadlift",
      category: "Strength",
      difficulty: "Intermediate",
      equipment: "Barbell",
      muscleGroups: ["Hamstrings", "Glutes", "Lower Back"],
      icon: "💪",
    },
    {
      id: "7",
      name: "Front Squat",
      category: "Strength",
      difficulty: "Advanced",
      equipment: "Barbell",
      muscleGroups: ["Quads", "Core", "Upper Back"],
      icon: "🏋️",
    },
    {
      id: "8",
      name: "Barbell Row",
      category: "Strength",
      difficulty: "Intermediate",
      equipment: "Barbell",
      muscleGroups: ["Back", "Biceps", "Core"],
      icon: "💪",
    },
    {
      id: "9",
      name: "Dips",
      category: "Strength",
      difficulty: "Intermediate",
      equipment: "Dip Bars",
      muscleGroups: ["Triceps", "Chest", "Shoulders"],
      icon: "🎯",
    },
    {
      id: "10",
      name: "Chin-ups",
      category: "Strength",
      difficulty: "Intermediate",
      equipment: "Pull-up Bar",
      muscleGroups: ["Back", "Biceps"],
      icon: "🎯",
    },
    {
      id: "11",
      name: "Incline Bench Press",
      category: "Strength",
      difficulty: "Intermediate",
      equipment: "Barbell",
      muscleGroups: ["Upper Chest", "Shoulders", "Triceps"],
      icon: "🏋️",
    },
    {
      id: "12",
      name: "Dumbbell Lunges",
      category: "Strength",
      difficulty: "Beginner",
      equipment: "Dumbbells",
      muscleGroups: ["Quads", "Glutes", "Hamstrings"],
      icon: "🦵",
    },
    {
      id: "13",
      name: "Goblet Squat",
      category: "Strength",
      difficulty: "Beginner",
      equipment: "Dumbbell",
      muscleGroups: ["Quads", "Glutes", "Core"],
      icon: "🏋️",
    },
    {
      id: "14",
      name: "Hip Thrusts",
      category: "Strength",
      difficulty: "Intermediate",
      equipment: "Barbell",
      muscleGroups: ["Glutes", "Hamstrings"],
      icon: "🍑",
    },
    {
      id: "15",
      name: "Bulgarian Split Squat",
      category: "Strength",
      difficulty: "Intermediate",
      equipment: "Dumbbells",
      muscleGroups: ["Quads", "Glutes"],
      icon: "🦵",
    },
    {
      id: "16",
      name: "Lat Pulldown",
      category: "Strength",
      difficulty: "Beginner",
      equipment: "Cable Machine",
      muscleGroups: ["Back", "Biceps"],
      icon: "💪",
    },
    {
      id: "17",
      name: "Leg Press",
      category: "Strength",
      difficulty: "Beginner",
      equipment: "Leg Press Machine",
      muscleGroups: ["Quads", "Glutes", "Hamstrings"],
      icon: "🦵",
    },
    {
      id: "18",
      name: "Cable Flyes",
      category: "Strength",
      difficulty: "Intermediate",
      equipment: "Cable Machine",
      muscleGroups: ["Chest"],
      icon: "💪",
    },
    {
      id: "19",
      name: "Face Pulls",
      category: "Strength",
      difficulty: "Beginner",
      equipment: "Cable Machine",
      muscleGroups: ["Rear Delts", "Upper Back"],
      icon: "💪",
    },
    {
      id: "20",
      name: "Farmer's Walk",
      category: "Strength",
      difficulty: "Beginner",
      equipment: "Dumbbells",
      muscleGroups: ["Forearms", "Traps", "Core"],
      icon: "🚶",
    },
    {
      id: "21",
      name: "Plank",
      category: "Strength",
      difficulty: "Beginner",
      equipment: "None",
      muscleGroups: ["Core", "Shoulders"],
      icon: "⏱️",
    },
    {
      id: "22",
      name: "Hanging Leg Raises",
      category: "Strength",
      difficulty: "Intermediate",
      equipment: "Pull-up Bar",
      muscleGroups: ["Core", "Hip Flexors"],
      icon: "🎯",
    },
    {
      id: "23",
      name: "Push-ups",
      category: "Strength",
      difficulty: "Beginner",
      equipment: "None",
      muscleGroups: ["Chest", "Triceps", "Core"],
      icon: "💪",
    },
    {
      id: "24",
      name: "Diamond Push-ups",
      category: "Strength",
      difficulty: "Intermediate",
      equipment: "None",
      muscleGroups: ["Triceps", "Chest"],
      icon: "💪",
    },
    {
      id: "25",
      name: "Arnold Press",
      category: "Strength",
      difficulty: "Intermediate",
      equipment: "Dumbbells",
      muscleGroups: ["Shoulders", "Triceps"],
      icon: "🏋️",
    },
    {
      id: "26",
      name: "Dumbbell Bench Press",
      category: "Strength",
      difficulty: "Intermediate",
      equipment: "Dumbbells",
      muscleGroups: ["Chest", "Triceps", "Shoulders"],
      icon: "💪",
    },
    {
      id: "27",
      name: "Single Leg Deadlift",
      category: "Strength",
      difficulty: "Intermediate",
      equipment: "Dumbbell",
      muscleGroups: ["Hamstrings", "Glutes", "Core"],
      icon: "💪",
    },
    {
      id: "28",
      name: "Lateral Raises",
      category: "Strength",
      difficulty: "Beginner",
      equipment: "Dumbbells",
      muscleGroups: ["Shoulders"],
      icon: "💪",
    },
    {
      id: "29",
      name: "Hammer Curls",
      category: "Strength",
      difficulty: "Beginner",
      equipment: "Dumbbells",
      muscleGroups: ["Biceps", "Forearms"],
      icon: "💪",
    },
    {
      id: "30",
      name: "Tricep Pushdown",
      category: "Strength",
      difficulty: "Beginner",
      equipment: "Cable Machine",
      muscleGroups: ["Triceps"],
      icon: "💪",
    },
    {
      id: "31",
      name: "Leg Curls",
      category: "Strength",
      difficulty: "Beginner",
      equipment: "Leg Curl Machine",
      muscleGroups: ["Hamstrings"],
      icon: "🦵",
    },
    {
      id: "32",
      name: "Leg Extensions",
      category: "Strength",
      difficulty: "Beginner",
      equipment: "Leg Extension Machine",
      muscleGroups: ["Quads"],
      icon: "🦵",
    },
    {
      id: "33",
      name: "Calf Raises",
      category: "Strength",
      difficulty: "Beginner",
      equipment: "None",
      muscleGroups: ["Calves"],
      icon: "🦵",
    },
    {
      id: "34",
      name: "Cable Rows",
      category: "Strength",
      difficulty: "Beginner",
      equipment: "Cable Machine",
      muscleGroups: ["Back", "Biceps"],
      icon: "💪",
    },
    {
      id: "35",
      name: "Reverse Flyes",
      category: "Strength",
      difficulty: "Beginner",
      equipment: "Dumbbells",
      muscleGroups: ["Rear Delts", "Upper Back"],
      icon: "💪",
    },
    {
      id: "36",
      name: "Sumo Deadlift",
      category: "Strength",
      difficulty: "Intermediate",
      equipment: "Barbell",
      muscleGroups: ["Glutes", "Hamstrings", "Quads"],
      icon: "💪",
    },
    {
      id: "37",
      name: "Russian Twists",
      category: "Strength",
      difficulty: "Beginner",
      equipment: "Medicine Ball",
      muscleGroups: ["Core", "Obliques"],
      icon: "🔄",
    },
    {
      id: "38",
      name: "Bicycle Crunches",
      category: "Strength",
      difficulty: "Beginner",
      equipment: "None",
      muscleGroups: ["Core", "Obliques"],
      icon: "🚴",
    },
    {
      id: "39",
      name: "Glute Bridge",
      category: "Strength",
      difficulty: "Beginner",
      equipment: "None",
      muscleGroups: ["Glutes", "Hamstrings"],
      icon: "🍑",
    },
    {
      id: "40",
      name: "Good Mornings",
      category: "Strength",
      difficulty: "Intermediate",
      equipment: "Barbell",
      muscleGroups: ["Hamstrings", "Lower Back", "Glutes"],
      icon: "💪",
    },
    {
      id: "41",
      name: "Pistol Squats",
      category: "Strength",
      difficulty: "Advanced",
      equipment: "None",
      muscleGroups: ["Quads", "Glutes", "Core"],
      icon: "🦵",
    },
    {
      id: "42",
      name: "Handstand Push-ups",
      category: "Strength",
      difficulty: "Advanced",
      equipment: "None",
      muscleGroups: ["Shoulders", "Triceps", "Core"],
      icon: "🤸",
    },
    {
      id: "43",
      name: "Muscle-ups",
      category: "Strength",
      difficulty: "Advanced",
      equipment: "Pull-up Bar",
      muscleGroups: ["Back", "Chest", "Triceps"],
      icon: "🎯",
    },
    {
      id: "44",
      name: "Ab Wheel Rollout",
      category: "Strength",
      difficulty: "Advanced",
      equipment: "Ab Wheel",
      muscleGroups: ["Core"],
      icon: "⭕",
    },
    {
      id: "45",
      name: "Nordic Curls",
      category: "Strength",
      difficulty: "Advanced",
      equipment: "None",
      muscleGroups: ["Hamstrings"],
      icon: "🦵",
    },
    {
      id: "46",
      name: "Zercher Squat",
      category: "Strength",
      difficulty: "Advanced",
      equipment: "Barbell",
      muscleGroups: ["Quads", "Core", "Upper Back"],
      icon: "🏋️",
    },
    {
      id: "47",
      name: "Barbell Curl",
      category: "Strength",
      difficulty: "Beginner",
      equipment: "Barbell",
      muscleGroups: ["Biceps"],
      icon: "💪",
    },
    {
      id: "48",
      name: "Skull Crushers",
      category: "Strength",
      difficulty: "Intermediate",
      equipment: "Barbell",
      muscleGroups: ["Triceps"],
      icon: "💪",
    },
    {
      id: "49",
      name: "Dumbbell Shrugs",
      category: "Strength",
      difficulty: "Beginner",
      equipment: "Dumbbells",
      muscleGroups: ["Traps"],
      icon: "💪",
    },
    {
      id: "50",
      name: "Cable Woodchoppers",
      category: "Strength",
      difficulty: "Intermediate",
      equipment: "Cable Machine",
      muscleGroups: ["Core", "Obliques"],
      icon: "💪",
    },

    // CARDIO EXERCISES (40)
    {
      id: "51",
      name: "Running",
      category: "Cardio",
      difficulty: "Beginner",
      equipment: "None",
      muscleGroups: ["Legs", "Cardio"],
      icon: "🏃",
    },
    {
      id: "52",
      name: "Sprint Intervals",
      category: "Cardio",
      difficulty: "Intermediate",
      equipment: "None",
      muscleGroups: ["Full Body", "Cardio"],
      icon: "⚡",
    },
    {
      id: "53",
      name: "Jump Rope",
      category: "Cardio",
      difficulty: "Beginner",
      equipment: "Jump Rope",
      muscleGroups: ["Calves", "Cardio"],
      icon: "🪢",
    },
    {
      id: "54",
      name: "Burpees",
      category: "Cardio",
      difficulty: "Intermediate",
      equipment: "None",
      muscleGroups: ["Full Body", "Cardio"],
      icon: "🔥",
    },
    {
      id: "55",
      name: "Mountain Climbers",
      category: "Cardio",
      difficulty: "Beginner",
      equipment: "None",
      muscleGroups: ["Core", "Shoulders", "Cardio"],
      icon: "⛰️",
    },
    {
      id: "56",
      name: "High Knees",
      category: "Cardio",
      difficulty: "Beginner",
      equipment: "None",
      muscleGroups: ["Legs", "Cardio"],
      icon: "🦵",
    },
    {
      id: "57",
      name: "Butt Kicks",
      category: "Cardio",
      difficulty: "Beginner",
      equipment: "None",
      muscleGroups: ["Hamstrings", "Cardio"],
      icon: "🦵",
    },
    {
      id: "58",
      name: "Jumping Jacks",
      category: "Cardio",
      difficulty: "Beginner",
      equipment: "None",
      muscleGroups: ["Full Body", "Cardio"],
      icon: "🤸",
    },
    {
      id: "59",
      name: "Rowing Machine",
      category: "Cardio",
      difficulty: "Beginner",
      equipment: "Rowing Machine",
      muscleGroups: ["Back", "Legs", "Cardio"],
      icon: "🚣",
    },
    {
      id: "60",
      name: "Assault Bike",
      category: "Cardio",
      difficulty: "Intermediate",
      equipment: "Assault Bike",
      muscleGroups: ["Full Body", "Cardio"],
      icon: "🚴",
    },
    {
      id: "61",
      name: "Stair Climber",
      category: "Cardio",
      difficulty: "Beginner",
      equipment: "Stair Climber",
      muscleGroups: ["Legs", "Cardio"],
      icon: "🪜",
    },
    {
      id: "62",
      name: "Elliptical",
      category: "Cardio",
      difficulty: "Beginner",
      equipment: "Elliptical",
      muscleGroups: ["Legs", "Cardio"],
      icon: "🏃",
    },
    {
      id: "63",
      name: "Swimming",
      category: "Cardio",
      difficulty: "Intermediate",
      equipment: "Pool",
      muscleGroups: ["Full Body", "Cardio"],
      icon: "🏊",
    },
    {
      id: "64",
      name: "Cycling",
      category: "Cardio",
      difficulty: "Beginner",
      equipment: "Bike",
      muscleGroups: ["Legs", "Cardio"],
      icon: "🚴",
    },
    {
      id: "65",
      name: "Battle Ropes",
      category: "Cardio",
      difficulty: "Intermediate",
      equipment: "Battle Ropes",
      muscleGroups: ["Shoulders", "Arms", "Core"],
      icon: "🪢",
    },
    {
      id: "66",
      name: "Boxing Heavy Bag",
      category: "Cardio",
      difficulty: "Intermediate",
      equipment: "Heavy Bag",
      muscleGroups: ["Shoulders", "Arms", "Cardio"],
      icon: "🥊",
    },
    {
      id: "67",
      name: "Shadow Boxing",
      category: "Cardio",
      difficulty: "Beginner",
      equipment: "None",
      muscleGroups: ["Shoulders", "Arms", "Cardio"],
      icon: "🥊",
    },
    {
      id: "68",
      name: "Bear Crawls",
      category: "Cardio",
      difficulty: "Intermediate",
      equipment: "None",
      muscleGroups: ["Full Body", "Core"],
      icon: "🐻",
    },
    {
      id: "69",
      name: "Jumping Rope Double Unders",
      category: "Cardio",
      difficulty: "Advanced",
      equipment: "Jump Rope",
      muscleGroups: ["Calves", "Cardio"],
      icon: "🪢",
    },
    {
      id: "70",
      name: "Treadmill Sprints",
      category: "Cardio",
      difficulty: "Intermediate",
      equipment: "Treadmill",
      muscleGroups: ["Legs", "Cardio"],
      icon: "🏃",
    },
    {
      id: "71",
      name: "Ski Erg",
      category: "Cardio",
      difficulty: "Intermediate",
      equipment: "Ski Erg Machine",
      muscleGroups: ["Full Body", "Cardio"],
      icon: "⛷️",
    },
    {
      id: "72",
      name: "Kickboxing",
      category: "Cardio",
      difficulty: "Intermediate",
      equipment: "None",
      muscleGroups: ["Full Body", "Cardio"],
      icon: "🥋",
    },
    {
      id: "73",
      name: "Shuttle Runs",
      category: "Cardio",
      difficulty: "Intermediate",
      equipment: "None",
      muscleGroups: ["Legs", "Cardio"],
      icon: "🏃",
    },
    {
      id: "74",
      name: "Stair Sprints",
      category: "Cardio",
      difficulty: "Advanced",
      equipment: "Stairs",
      muscleGroups: ["Legs", "Cardio"],
      icon: "🪜",
    },
    {
      id: "75",
      name: "Hill Sprints",
      category: "Cardio",
      difficulty: "Advanced",
      equipment: "Hill",
      muscleGroups: ["Legs", "Cardio"],
      icon: "⛰️",
    },
    {
      id: "76",
      name: "Jog in Place",
      category: "Cardio",
      difficulty: "Beginner",
      equipment: "None",
      muscleGroups: ["Legs", "Cardio"],
      icon: "🏃",
    },
    {
      id: "77",
      name: "Versa Climber",
      category: "Cardio",
      difficulty: "Advanced",
      equipment: "Versa Climber",
      muscleGroups: ["Full Body", "Cardio"],
      icon: "🧗",
    },
    {
      id: "78",
      name: "Spin Class",
      category: "Cardio",
      difficulty: "Intermediate",
      equipment: "Spin Bike",
      muscleGroups: ["Legs", "Cardio"],
      icon: "🚴",
    },
    {
      id: "79",
      name: "Dance Cardio",
      category: "Cardio",
      difficulty: "Beginner",
      equipment: "None",
      muscleGroups: ["Full Body", "Cardio"],
      icon: "💃",
    },
    {
      id: "80",
      name: "Step Aerobics",
      category: "Cardio",
      difficulty: "Beginner",
      equipment: "Step Platform",
      muscleGroups: ["Legs", "Cardio"],
      icon: "📊",
    },
    {
      id: "81",
      name: "Water Aerobics",
      category: "Cardio",
      difficulty: "Beginner",
      equipment: "Pool",
      muscleGroups: ["Full Body", "Cardio"],
      icon: "🏊",
    },
    {
      id: "82",
      name: "Fartlek Training",
      category: "Cardio",
      difficulty: "Intermediate",
      equipment: "None",
      muscleGroups: ["Legs", "Cardio"],
      icon: "🏃",
    },
    {
      id: "83",
      name: "Tempo Runs",
      category: "Cardio",
      difficulty: "Intermediate",
      equipment: "None",
      muscleGroups: ["Legs", "Cardio"],
      icon: "🏃",
    },
    {
      id: "84",
      name: "Ladder Drills",
      category: "Cardio",
      difficulty: "Intermediate",
      equipment: "Agility Ladder",
      muscleGroups: ["Legs", "Cardio"],
      icon: "🪜",
    },
    {
      id: "85",
      name: "Cone Drills",
      category: "Cardio",
      difficulty: "Intermediate",
      equipment: "Cones",
      muscleGroups: ["Legs", "Cardio"],
      icon: "🚦",
    },
    {
      id: "86",
      name: "Suicide Runs",
      category: "Cardio",
      difficulty: "Advanced",
      equipment: "None",
      muscleGroups: ["Legs", "Cardio"],
      icon: "🏃",
    },
    {
      id: "87",
      name: "Trail Running",
      category: "Cardio",
      difficulty: "Intermediate",
      equipment: "None",
      muscleGroups: ["Legs", "Cardio"],
      icon: "🏃",
    },
    {
      id: "88",
      name: "Cross Country Skiing",
      category: "Cardio",
      difficulty: "Intermediate",
      equipment: "Skis",
      muscleGroups: ["Full Body", "Cardio"],
      icon: "⛷️",
    },
    {
      id: "89",
      name: "Paddling",
      category: "Cardio",
      difficulty: "Intermediate",
      equipment: "Kayak",
      muscleGroups: ["Upper Body", "Cardio"],
      icon: "🛶",
    },
    {
      id: "90",
      name: "Circuit Training",
      category: "Cardio",
      difficulty: "Intermediate",
      equipment: "Various",
      muscleGroups: ["Full Body", "Cardio"],
      icon: "🔄",
    },

    // PLYOMETRIC EXERCISES (30)
    {
      id: "91",
      name: "Box Jumps",
      category: "Plyometric",
      difficulty: "Intermediate",
      equipment: "Plyometric Box",
      muscleGroups: ["Legs", "Power"],
      icon: "📦",
    },
    {
      id: "92",
      name: "Depth Jumps",
      category: "Plyometric",
      difficulty: "Advanced",
      equipment: "Plyometric Box",
      muscleGroups: ["Legs", "Power"],
      icon: "📦",
    },
    {
      id: "93",
      name: "Broad Jumps",
      category: "Plyometric",
      difficulty: "Intermediate",
      equipment: "None",
      muscleGroups: ["Legs", "Power"],
      icon: "🦘",
    },
    {
      id: "94",
      name: "Tuck Jumps",
      category: "Plyometric",
      difficulty: "Intermediate",
      equipment: "None",
      muscleGroups: ["Legs", "Core"],
      icon: "🦘",
    },
    {
      id: "95",
      name: "Lateral Bounds",
      category: "Plyometric",
      difficulty: "Intermediate",
      equipment: "None",
      muscleGroups: ["Legs", "Power"],
      icon: "↔️",
    },
    {
      id: "96",
      name: "Single Leg Hops",
      category: "Plyometric",
      difficulty: "Intermediate",
      equipment: "None",
      muscleGroups: ["Legs", "Balance"],
      icon: "🦵",
    },
    {
      id: "97",
      name: "Clapping Push-ups",
      category: "Plyometric",
      difficulty: "Advanced",
      equipment: "None",
      muscleGroups: ["Chest", "Power"],
      icon: "💪",
    },
    {
      id: "98",
      name: "Plyo Push-ups",
      category: "Plyometric",
      difficulty: "Advanced",
      equipment: "None",
      muscleGroups: ["Chest", "Triceps"],
      icon: "💪",
    },
    {
      id: "99",
      name: "Jump Squats",
      category: "Plyometric",
      difficulty: "Intermediate",
      equipment: "None",
      muscleGroups: ["Quads", "Glutes"],
      icon: "🦵",
    },
    {
      id: "100",
      name: "Split Jump Squats",
      category: "Plyometric",
      difficulty: "Advanced",
      equipment: "None",
      muscleGroups: ["Quads", "Glutes"],
      icon: "🦵",
    },
    {
      id: "101",
      name: "Burpee Box Jumps",
      category: "Plyometric",
      difficulty: "Advanced",
      equipment: "Plyometric Box",
      muscleGroups: ["Full Body", "Power"],
      icon: "📦",
    },
    {
      id: "102",
      name: "Bounding",
      category: "Plyometric",
      difficulty: "Intermediate",
      equipment: "None",
      muscleGroups: ["Legs", "Power"],
      icon: "🦘",
    },
    {
      id: "103",
      name: "Skater Hops",
      category: "Plyometric",
      difficulty: "Intermediate",
      equipment: "None",
      muscleGroups: ["Legs", "Balance"],
      icon: "⛸️",
    },
    {
      id: "104",
      name: "Hurdle Hops",
      category: "Plyometric",
      difficulty: "Advanced",
      equipment: "Hurdles",
      muscleGroups: ["Legs", "Power"],
      icon: "🚧",
    },
    {
      id: "105",
      name: "Lateral Box Jumps",
      category: "Plyometric",
      difficulty: "Advanced",
      equipment: "Plyometric Box",
      muscleGroups: ["Legs", "Power"],
      icon: "📦",
    },
    {
      id: "106",
      name: "Single Leg Box Jumps",
      category: "Plyometric",
      difficulty: "Advanced",
      equipment: "Plyometric Box",
      muscleGroups: ["Legs", "Balance"],
      icon: "📦",
    },
    {
      id: "107",
      name: "Frog Jumps",
      category: "Plyometric",
      difficulty: "Intermediate",
      equipment: "None",
      muscleGroups: ["Legs", "Power"],
      icon: "🐸",
    },
    {
      id: "108",
      name: "Scissor Jumps",
      category: "Plyometric",
      difficulty: "Intermediate",
      equipment: "None",
      muscleGroups: ["Legs", "Cardio"],
      icon: "✂️",
    },
    {
      id: "109",
      name: "Pop Squats",
      category: "Plyometric",
      difficulty: "Intermediate",
      equipment: "None",
      muscleGroups: ["Legs", "Cardio"],
      icon: "🦵",
    },
    {
      id: "110",
      name: "Plyo Lunges",
      category: "Plyometric",
      difficulty: "Advanced",
      equipment: "None",
      muscleGroups: ["Legs", "Power"],
      icon: "🦵",
    },
    {
      id: "111",
      name: "Medicine Ball Slams",
      category: "Plyometric",
      difficulty: "Beginner",
      equipment: "Medicine Ball",
      muscleGroups: ["Core", "Shoulders"],
      icon: "🏐",
    },
    {
      id: "112",
      name: "Medicine Ball Chest Pass",
      category: "Plyometric",
      difficulty: "Beginner",
      equipment: "Medicine Ball",
      muscleGroups: ["Chest", "Arms"],
      icon: "🏐",
    },
    {
      id: "113",
      name: "Overhead Medicine Ball Throws",
      category: "Plyometric",
      difficulty: "Intermediate",
      equipment: "Medicine Ball",
      muscleGroups: ["Core", "Shoulders"],
      icon: "🏐",
    },
    {
      id: "114",
      name: "Rotational Medicine Ball Throws",
      category: "Plyometric",
      difficulty: "Intermediate",
      equipment: "Medicine Ball",
      muscleGroups: ["Core", "Obliques"],
      icon: "🏐",
    },
    {
      id: "115",
      name: "Vertical Jumps",
      category: "Plyometric",
      difficulty: "Beginner",
      equipment: "None",
      muscleGroups: ["Legs", "Power"],
      icon: "🦘",
    },
    {
      id: "116",
      name: "180 Jump Squats",
      category: "Plyometric",
      difficulty: "Advanced",
      equipment: "None",
      muscleGroups: ["Legs", "Power"],
      icon: "🔄",
    },
    {
      id: "117",
      name: "Double Leg Bounds",
      category: "Plyometric",
      difficulty: "Intermediate",
      equipment: "None",
      muscleGroups: ["Legs", "Power"],
      icon: "🦘",
    },
    {
      id: "118",
      name: "Pogos",
      category: "Plyometric",
      difficulty: "Beginner",
      equipment: "None",
      muscleGroups: ["Calves", "Ankles"],
      icon: "🦵",
    },
    {
      id: "119",
      name: "Ankle Hops",
      category: "Plyometric",
      difficulty: "Beginner",
      equipment: "None",
      muscleGroups: ["Calves"],
      icon: "🦵",
    },
    {
      id: "120",
      name: "Depth Push-ups",
      category: "Plyometric",
      difficulty: "Advanced",
      equipment: "Boxes",
      muscleGroups: ["Chest", "Power"],
      icon: "💪",
    },

    // POWER EXERCISES (30)
    {
      id: "121",
      name: "Clean and Press",
      category: "Power",
      difficulty: "Advanced",
      equipment: "Barbell",
      muscleGroups: ["Full Body", "Shoulders", "Legs"],
      icon: "🏋️",
    },
    {
      id: "122",
      name: "Snatch",
      category: "Power",
      difficulty: "Advanced",
      equipment: "Barbell",
      muscleGroups: ["Full Body", "Power"],
      icon: "🏋️",
    },
    {
      id: "123",
      name: "Power Clean",
      category: "Power",
      difficulty: "Advanced",
      equipment: "Barbell",
      muscleGroups: ["Full Body", "Power"],
      icon: "🏋️",
    },
    {
      id: "124",
      name: "Hang Clean",
      category: "Power",
      difficulty: "Advanced",
      equipment: "Barbell",
      muscleGroups: ["Full Body", "Power"],
      icon: "🏋️",
    },
    {
      id: "125",
      name: "Thruster",
      category: "Power",
      difficulty: "Intermediate",
      equipment: "Barbell",
      muscleGroups: ["Legs", "Shoulders", "Core"],
      icon: "🏋️",
    },
    {
      id: "126",
      name: "Wall Balls",
      category: "Power",
      difficulty: "Intermediate",
      equipment: "Medicine Ball",
      muscleGroups: ["Legs", "Shoulders", "Core"],
      icon: "🏐",
    },
    {
      id: "127",
      name: "Kettlebell Swings",
      category: "Power",
      difficulty: "Intermediate",
      equipment: "Kettlebell",
      muscleGroups: ["Glutes", "Hamstrings", "Core"],
      icon: "⚙️",
    },
    {
      id: "128",
      name: "Kettlebell Snatch",
      category: "Power",
      difficulty: "Advanced",
      equipment: "Kettlebell",
      muscleGroups: ["Full Body", "Power"],
      icon: "⚙️",
    },
    {
      id: "129",
      name: "Kettlebell Clean",
      category: "Power",
      difficulty: "Intermediate",
      equipment: "Kettlebell",
      muscleGroups: ["Full Body", "Power"],
      icon: "⚙️",
    },
    {
      id: "130",
      name: "Turkish Get-up",
      category: "Power",
      difficulty: "Advanced",
      equipment: "Kettlebell",
      muscleGroups: ["Full Body", "Core", "Shoulders"],
      icon: "⚙️",
    },
    {
      id: "131",
      name: "Sled Push",
      category: "Power",
      difficulty: "Intermediate",
      equipment: "Sled",
      muscleGroups: ["Legs", "Core", "Power"],
      icon: "🛷",
    },
    {
      id: "132",
      name: "Sled Pull",
      category: "Power",
      difficulty: "Intermediate",
      equipment: "Sled",
      muscleGroups: ["Back", "Legs", "Core"],
      icon: "🛷",
    },
    {
      id: "133",
      name: "Tire Flips",
      category: "Power",
      difficulty: "Advanced",
      equipment: "Tire",
      muscleGroups: ["Full Body", "Power"],
      icon: "🛞",
    },
    {
      id: "134",
      name: "Sandbag Carries",
      category: "Power",
      difficulty: "Intermediate",
      equipment: "Sandbag",
      muscleGroups: ["Full Body", "Core"],
      icon: "💼",
    },
    {
      id: "135",
      name: "Sandbag Clean",
      category: "Power",
      difficulty: "Intermediate",
      equipment: "Sandbag",
      muscleGroups: ["Full Body", "Power"],
      icon: "💼",
    },
    {
      id: "136",
      name: "Atlas Stone Lifts",
      category: "Power",
      difficulty: "Advanced",
      equipment: "Atlas Stone",
      muscleGroups: ["Full Body", "Power"],
      icon: "🪨",
    },
    {
      id: "137",
      name: "Log Press",
      category: "Power",
      difficulty: "Advanced",
      equipment: "Log",
      muscleGroups: ["Shoulders", "Core", "Legs"],
      icon: "🪵",
    },
    {
      id: "138",
      name: "Yoke Walk",
      category: "Power",
      difficulty: "Advanced",
      equipment: "Yoke",
      muscleGroups: ["Traps", "Core", "Legs"],
      icon: "🏋️",
    },
    {
      id: "139",
      name: "Prowler Sprint",
      category: "Power",
      difficulty: "Advanced",
      equipment: "Prowler",
      muscleGroups: ["Legs", "Cardio", "Power"],
      icon: "🏃",
    },
    {
      id: "140",
      name: "Dumbbell Snatch",
      category: "Power",
      difficulty: "Intermediate",
      equipment: "Dumbbell",
      muscleGroups: ["Full Body", "Power"],
      icon: "💪",
    },
    {
      id: "141",
      name: "Dumbbell Clean",
      category: "Power",
      difficulty: "Intermediate",
      equipment: "Dumbbell",
      muscleGroups: ["Full Body", "Power"],
      icon: "💪",
    },
    {
      id: "142",
      name: "Push Press",
      category: "Power",
      difficulty: "Intermediate",
      equipment: "Barbell",
      muscleGroups: ["Shoulders", "Legs"],
      icon: "🏋️",
    },
    {
      id: "143",
      name: "Push Jerk",
      category: "Power",
      difficulty: "Advanced",
      equipment: "Barbell",
      muscleGroups: ["Shoulders", "Legs"],
      icon: "🏋️",
    },
    {
      id: "144",
      name: "Split Jerk",
      category: "Power",
      difficulty: "Advanced",
      equipment: "Barbell",
      muscleGroups: ["Shoulders", "Legs"],
      icon: "🏋️",
    },
    {
      id: "145",
      name: "Rope Climb",
      category: "Power",
      difficulty: "Advanced",
      equipment: "Rope",
      muscleGroups: ["Back", "Arms", "Core"],
      icon: "🪢",
    },
    {
      id: "146",
      name: "Explosive Step-ups",
      category: "Power",
      difficulty: "Intermediate",
      equipment: "Box",
      muscleGroups: ["Legs", "Power"],
      icon: "📦",
    },
    {
      id: "147",
      name: "Power Skips",
      category: "Power",
      difficulty: "Intermediate",
      equipment: "None",
      muscleGroups: ["Legs", "Power"],
      icon: "🦘",
    },
    {
      id: "148",
      name: "Band Resisted Sprints",
      category: "Power",
      difficulty: "Advanced",
      equipment: "Resistance Band",
      muscleGroups: ["Legs", "Power"],
      icon: "🏃",
    },
    {
      id: "149",
      name: "Parachute Sprints",
      category: "Power",
      difficulty: "Advanced",
      equipment: "Parachute",
      muscleGroups: ["Legs", "Power"],
      icon: "🪂",
    },
    {
      id: "150",
      name: "Deadlift High Pull",
      category: "Power",
      difficulty: "Intermediate",
      equipment: "Barbell",
      muscleGroups: ["Back", "Traps", "Power"],
      icon: "💪",
    },

    // MOBILITY EXERCISES (20)
    {
      id: "151",
      name: "Yoga Flow",
      category: "Mobility",
      difficulty: "Beginner",
      equipment: "Yoga Mat",
      muscleGroups: ["Full Body", "Flexibility"],
      icon: "🧘",
    },
    {
      id: "152",
      name: "Foam Rolling",
      category: "Mobility",
      difficulty: "Beginner",
      equipment: "Foam Roller",
      muscleGroups: ["Full Body", "Recovery"],
      icon: "🎯",
    },
    {
      id: "153",
      name: "Dynamic Stretching",
      category: "Mobility",
      difficulty: "Beginner",
      equipment: "None",
      muscleGroups: ["Full Body", "Flexibility"],
      icon: "🤸",
    },
    {
      id: "154",
      name: "Static Stretching",
      category: "Mobility",
      difficulty: "Beginner",
      equipment: "None",
      muscleGroups: ["Full Body", "Flexibility"],
      icon: "🧘",
    },
    {
      id: "155",
      name: "Crab Walk",
      category: "Mobility",
      difficulty: "Beginner",
      equipment: "None",
      muscleGroups: ["Shoulders", "Core", "Glutes"],
      icon: "🦀",
    },
    {
      id: "156",
      name: "Inchworms",
      category: "Mobility",
      difficulty: "Beginner",
      equipment: "None",
      muscleGroups: ["Core", "Hamstrings", "Shoulders"],
      icon: "🐛",
    },
    {
      id: "157",
      name: "Cat-Cow Stretch",
      category: "Mobility",
      difficulty: "Beginner",
      equipment: "None",
      muscleGroups: ["Spine", "Core"],
      icon: "🐱",
    },
    {
      id: "158",
      name: "Hip Circles",
      category: "Mobility",
      difficulty: "Beginner",
      equipment: "None",
      muscleGroups: ["Hips", "Core"],
      icon: "🔄",
    },
    {
      id: "159",
      name: "Leg Swings",
      category: "Mobility",
      difficulty: "Beginner",
      equipment: "None",
      muscleGroups: ["Hips", "Legs"],
      icon: "🦵",
    },
    {
      id: "160",
      name: "Arm Circles",
      category: "Mobility",
      difficulty: "Beginner",
      equipment: "None",
      muscleGroups: ["Shoulders"],
      icon: "🔄",
    },
    {
      id: "161",
      name: "Thoracic Rotations",
      category: "Mobility",
      difficulty: "Beginner",
      equipment: "None",
      muscleGroups: ["Upper Back", "Core"],
      icon: "🔄",
    },
    {
      id: "162",
      name: "World's Greatest Stretch",
      category: "Mobility",
      difficulty: "Intermediate",
      equipment: "None",
      muscleGroups: ["Full Body", "Flexibility"],
      icon: "🌍",
    },
    {
      id: "163",
      name: "Pigeon Pose",
      category: "Mobility",
      difficulty: "Intermediate",
      equipment: "None",
      muscleGroups: ["Hips", "Glutes"],
      icon: "🕊️",
    },
    {
      id: "164",
      name: "Downward Dog",
      category: "Mobility",
      difficulty: "Beginner",
      equipment: "None",
      muscleGroups: ["Hamstrings", "Shoulders", "Back"],
      icon: "🐕",
    },
    {
      id: "165",
      name: "Child's Pose",
      category: "Mobility",
      difficulty: "Beginner",
      equipment: "None",
      muscleGroups: ["Back", "Hips"],
      icon: "🧘",
    },
    {
      id: "166",
      name: "Scorpion Stretch",
      category: "Mobility",
      difficulty: "Intermediate",
      equipment: "None",
      muscleGroups: ["Spine", "Hips"],
      icon: "🦂",
    },
    {
      id: "167",
      name: "90/90 Hip Stretch",
      category: "Mobility",
      difficulty: "Beginner",
      equipment: "None",
      muscleGroups: ["Hips"],
      icon: "🦵",
    },
    {
      id: "168",
      name: "Shoulder Dislocations",
      category: "Mobility",
      difficulty: "Beginner",
      equipment: "Band or Dowel",
      muscleGroups: ["Shoulders"],
      icon: "🔄",
    },
    {
      id: "169",
      name: "Ankle Mobility Drills",
      category: "Mobility",
      difficulty: "Beginner",
      equipment: "None",
      muscleGroups: ["Ankles"],
      icon: "🦵",
    },
    {
      id: "170",
      name: "Wrist Mobility Exercises",
      category: "Mobility",
      difficulty: "Beginner",
      equipment: "None",
      muscleGroups: ["Wrists", "Forearms"],
      icon: "🤲",
    },
  ];

  const categories = [
    { name: "All", icon: "📚", count: exercises.length },
    {
      name: "Strength",
      icon: "💪",
      count: exercises.filter((e) => e.category === "Strength").length,
    },
    {
      name: "Cardio",
      icon: "❤️",
      count: exercises.filter((e) => e.category === "Cardio").length,
    },
    {
      name: "Plyometric",
      icon: "⚡",
      count: exercises.filter((e) => e.category === "Plyometric").length,
    },
    {
      name: "Power",
      icon: "🔋",
      count: exercises.filter((e) => e.category === "Power").length,
    },
    {
      name: "Mobility",
      icon: "🧘",
      count: exercises.filter((e) => e.category === "Mobility").length,
    },
  ];

  const difficulties = [
    { name: "All", color: "from-slate-600 to-slate-700" },
    { name: "Beginner", color: "from-emerald-600 to-emerald-700" },
    { name: "Intermediate", color: "from-orange-600 to-orange-700" },
    { name: "Advanced", color: "from-red-600 to-red-700" },
  ];

  const stats = [
    {
      label: "Total Exercises",
      value: exercises.length.toString(),
      icon: "📚",
      color: "from-blue-600 to-blue-700",
    },
    {
      label: "Categories",
      value: categories.filter((c) => c.name !== "All").length.toString(),
      icon: "📊",
      color: "from-purple-600 to-purple-700",
    },
    {
      label: "Equipment Types",
      value: [...new Set(exercises.map((e) => e.equipment))].length.toString(),
      icon: "🏋️",
      color: "from-emerald-600 to-emerald-700",
    },
  ];

  // Filter exercises based on search and selections
  const filteredExercises = exercises.filter((exercise) => {
    const matchesSearch =
      exercise.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      exercise.muscleGroups.some((group) =>
        group.toLowerCase().includes(searchQuery.toLowerCase())
      );
    const matchesCategory =
      selectedCategory === "All" || exercise.category === selectedCategory;
    const matchesDifficulty =
      selectedDifficulty === "All" ||
      exercise.difficulty === selectedDifficulty;

    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  // Get visible exercises based on displayCount
  const visibleExercises = filteredExercises.slice(0, displayCount);
  const hasMore = displayCount < filteredExercises.length;

  // Reset display count when filters change
  const handleFilterChange = () => {
    setDisplayCount(6);
  };

  const handleShowMore = () => {
    setDisplayCount((prev) => prev + 6);
  };

  return (
    <LayoutWrapper>
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between flex-wrap gap-4 mb-4">
            <div>
              <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                Exercise Library
              </h1>
              <p className="text-slate-400 text-lg">
                Explore our comprehensive collection of {exercises.length}{" "}
                exercises
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
                placeholder="Search exercises, muscle groups, equipment..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setDisplayCount(6);
                }}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg pl-12 pr-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setDisplayCount(6);
                  }}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-white transition-colors"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Category Pills */}
            <div>
              <p className="text-sm text-slate-400 mb-3 font-medium">
                Categories
              </p>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.name}
                    onClick={() => {
                      setSelectedCategory(category.name);
                      setDisplayCount(6);
                    }}
                    className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-2 ${
                      selectedCategory === category.name
                        ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-600/30 scale-105"
                        : "bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700"
                    }`}
                  >
                    <span>{category.icon}</span>
                    <span>{category.name}</span>
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full ${
                        selectedCategory === category.name
                          ? "bg-white/20"
                          : "bg-slate-700"
                      }`}
                    >
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Difficulty Filter */}
            <div>
              <p className="text-sm text-slate-400 mb-3 font-medium">
                Difficulty Level
              </p>
              <div className="flex flex-wrap gap-2">
                {difficulties.map((difficulty) => (
                  <button
                    key={difficulty.name}
                    onClick={() => {
                      setSelectedDifficulty(difficulty.name);
                      setDisplayCount(6);
                    }}
                    className={`px-4 py-2 rounded-lg font-medium transition-all ${
                      selectedDifficulty === difficulty.name
                        ? `bg-gradient-to-r ${difficulty.color} text-white shadow-lg scale-105`
                        : "bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700"
                    }`}
                  >
                    {difficulty.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Active Filters Summary */}
          {(searchQuery ||
            selectedCategory !== "All" ||
            selectedDifficulty !== "All") && (
            <div className="mt-4 pt-4 border-t border-slate-700 flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-2 text-sm flex-wrap">
                <span className="text-slate-400">
                  Showing {filteredExercises.length} of {exercises.length}{" "}
                  exercises
                </span>
                {searchQuery && (
                  <span className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full">
                    "{searchQuery}"
                  </span>
                )}
                {selectedCategory !== "All" && (
                  <span className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full">
                    {selectedCategory}
                  </span>
                )}
                {selectedDifficulty !== "All" && (
                  <span className="bg-orange-600/20 text-orange-300 px-3 py-1 rounded-full">
                    {selectedDifficulty}
                  </span>
                )}
              </div>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                  setSelectedDifficulty("All");
                  setDisplayCount(6);
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
            {filteredExercises.length === 0
              ? "No exercises found"
              : filteredExercises.length === exercises.length
              ? "All Exercises"
              : `${filteredExercises.length} Exercise${
                  filteredExercises.length !== 1 ? "s" : ""
                } Found`}
          </h2>
          {filteredExercises.length > 0 && (
            <p className="text-slate-400 text-sm mt-1">
              Showing {visibleExercises.length} of {filteredExercises.length}
            </p>
          )}
        </div>

        {/* Exercise Grid */}
        {filteredExercises.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {visibleExercises.map((exercise) => {
                const fullIndex = filteredExercises.findIndex(
                  (e) => e.id === exercise.id
                );

                return (
                  <ExerciseCard
                    key={exercise.id}
                    {...exercise}
                    locked={fullIndex >= 12} // <--- BLUR AFTER FIRST 12
                  />
                );
              })}
            </div>

            {/* Show More Button */}
            {hasMore && (
              <div className="mt-8 text-center">
                <button
                  onClick={handleShowMore}
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-lg font-semibold transition-all hover:scale-105 shadow-lg"
                >
                  Show More (
                  {Math.min(6, filteredExercises.length - displayCount)} more)
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-xl p-12 text-center">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-2">
              No exercises found
            </h3>
            <p className="text-slate-400 mb-6">
              Try adjusting your filters or search terms
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
                setSelectedDifficulty("All");
                setDisplayCount(6);
              }}
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105"
            >
              Clear All Filters
            </button>
          </div>
        )}

        {/* Quick Links */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-600/10 to-slate-800 border border-blue-600/30 rounded-xl p-6 hover:border-blue-600/50 transition-all">
            <div className="text-4xl mb-3">💪</div>
            <h3 className="text-xl font-bold text-white mb-2">
              {exercises.length} Exercises
            </h3>
            <p className="text-slate-400 text-sm">
              Comprehensive library covering all major muscle groups and
              movement patterns
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-600/10 to-slate-800 border border-purple-600/30 rounded-xl p-6 hover:border-purple-600/50 transition-all">
            <div className="text-4xl mb-3">🎥</div>
            <h3 className="text-xl font-bold text-white mb-2">
              Video Demonstrations
            </h3>
            <p className="text-slate-400 text-sm">
              High-quality video guides showing proper form and technique
            </p>
          </div>

          <div className="bg-gradient-to-br from-emerald-600/10 to-slate-800 border border-emerald-600/30 rounded-xl p-6 hover:border-emerald-600/50 transition-all">
            <div className="text-4xl mb-3">🎯</div>
            <h3 className="text-xl font-bold text-white mb-2">
              Difficulty Levels
            </h3>
            <p className="text-slate-400 text-sm">
              Exercises categorized from beginner to advanced for all fitness
              levels
            </p>
          </div>
        </div>
      </div>
    </LayoutWrapper>
  );
}
