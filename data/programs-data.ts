// Complete program data - FULLY DETAILED for 4 programs (template for all 20)
// Each program has complete exercise lists matching exercise counts and all weeks

export interface ProgramDetail {
  id: string;
  title: string;
  sport: string;
  level: string;
  duration: string;
  description: string;
  workouts: number;
  enrolled: number;
  rating: number;
  icon: string;
  color: string;
  goals: string[];
  equipment: string[];
  reviews: number;
  completionRate: number;
  avgImprovement: string;
  sessionsPerWeek: number;
  totalSessions: number;
  coach: {
    name: string;
    avatar: string;
    credentials: string;
  };
  weeks: {
    week: number;
    focus: string;
    sessions: {
      day: string;
      title: string;
      exercises: number;
      duration: string;
      mainLifts: string[];
    }[];
  }[];
}

export const programsData: Record<string, ProgramDetail> = {
  "1": {
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
    goals: [
      "Improve lateral quickness by 15-20%",
      "Increase vertical jump by 3-5 inches",
      "Enhance court agility and footwork",
      "Develop explosive first step acceleration",
    ],
    equipment: [
      "Basketball Court",
      "Cones",
      "Agility Ladder",
      "Plyometric Box",
      "Resistance Bands",
    ],
    reviews: 234,
    completionRate: 84,
    avgImprovement: "18% quickness increase",
    sessionsPerWeek: 3,
    totalSessions: 24,
    coach: {
      name: "Coach DeAndre Williams",
      avatar: "🏀",
      credentials: "CSCS, Former D1 Guard, 12+ years experience",
    },
    weeks: [
      {
        week: 1,
        focus: "Foundation & Baseline Testing",
        sessions: [
          {
            day: "Monday",
            title: "Lateral Movement Fundamentals",
            exercises: 6,
            duration: "60 min",
            mainLifts: [
              "Defensive Slides",
              "Cone Drills",
              "Lateral Bounds",
              "Hip Mobility Drills",
              "Ankle Strengthening",
              "Cool Down Stretch",
            ],
          },
          {
            day: "Wednesday",
            title: "Jump Training Basics",
            exercises: 5,
            duration: "55 min",
            mainLifts: [
              "Box Jumps (3x8)",
              "Squat Jumps (3x10)",
              "Ankle Hops (3x20)",
              "Single Leg Hops (2x8 each)",
              "Landing Mechanics Practice",
            ],
          },
          {
            day: "Friday",
            title: "Speed & Acceleration",
            exercises: 6,
            duration: "60 min",
            mainLifts: [
              "10-Yard Sprints",
              "Reaction Drills",
              "Acceleration Starts",
              "Flying 20s",
              "Deceleration Training",
              "Agility Ladder Complex",
            ],
          },
        ],
      },
      {
        week: 2,
        focus: "Progressive Intensity",
        sessions: [
          {
            day: "Monday",
            title: "Advanced Lateral Movement",
            exercises: 6,
            duration: "65 min",
            mainLifts: [
              "Defensive Shuffle Series",
              "Reactive Slide Drills",
              "Mirror Work",
              "Lateral Plyometrics",
              "Hip Strengthening Circuit",
              "Mobility Routine",
            ],
          },
          {
            day: "Wednesday",
            title: "Vertical Development",
            exercises: 6,
            duration: "60 min",
            mainLifts: [
              "Depth Jumps (4x5)",
              "Continuous Bounds",
              "Approach Jumps (3x5)",
              "Tuck Jumps (3x8)",
              "Single Leg Bounds (3x6)",
              "Core Stability Work",
            ],
          },
          {
            day: "Friday",
            title: "Court Speed Integration",
            exercises: 7,
            duration: "65 min",
            mainLifts: [
              "Full Court Transition",
              "Sprint Variations",
              "Change of Direction Drills",
              "Ball Handling Speed Work",
              "Suicide Sprints",
              "Recovery Jog",
              "Dynamic Stretching",
            ],
          },
        ],
      },
      {
        week: 3,
        focus: "Peak Intensity Phase",
        sessions: [
          {
            day: "Monday",
            title: "Maximum Lateral Speed",
            exercises: 7,
            duration: "65 min",
            mainLifts: [
              "Speed Slides (Max Effort)",
              "Crossover Shuffles",
              "Reactive Cone Response",
              "Explosive Lateral Bounds",
              "Hip Power Development",
              "Ankle Stability Work",
              "Flexibility Routine",
            ],
          },
          {
            day: "Wednesday",
            title: "Explosive Jump Training",
            exercises: 6,
            duration: "60 min",
            mainLifts: [
              "Max Vertical Jump Attempts",
              "Depth to Box Jumps",
              "Reactive Bounding",
              "Power Skips",
              "Single Leg Max Effort",
              "Active Recovery",
            ],
          },
          {
            day: "Friday",
            title: "Game Speed Agility",
            exercises: 8,
            duration: "70 min",
            mainLifts: [
              "Pro Agility (5-10-5)",
              "L-Drill",
              "T-Test",
              "Cone Weave Patterns",
              "Sprint-Cut-Sprint",
              "Ball Handling at Speed",
              "Conditioning Finisher",
              "Cool Down Protocol",
            ],
          },
        ],
      },
      {
        week: 4,
        focus: "Deload & Recovery Week",
        sessions: [
          {
            day: "Monday",
            title: "Active Recovery Movement",
            exercises: 5,
            duration: "45 min",
            mainLifts: [
              "Light Defensive Slides",
              "Easy Ladder Drills",
              "Mobility Flow Sequence",
              "Foam Rolling Session",
              "Full Body Stretching",
            ],
          },
          {
            day: "Wednesday",
            title: "Low-Intensity Jumps",
            exercises: 5,
            duration: "45 min",
            mainLifts: [
              "Light Box Jumps",
              "Easy Pogo Hops",
              "Controlled Bounds",
              "Flexibility Work",
              "Recovery Activities",
            ],
          },
          {
            day: "Friday",
            title: "Movement Quality Focus",
            exercises: 6,
            duration: "50 min",
            mainLifts: [
              "Technique Refinement",
              "Form Running",
              "Light Agility Work",
              "Balance Training",
              "Core Activation",
              "Comprehensive Stretch",
            ],
          },
        ],
      },
      {
        week: 5,
        focus: "Volume Increase Phase",
        sessions: [
          {
            day: "Monday",
            title: "Extended Lateral Training",
            exercises: 7,
            duration: "70 min",
            mainLifts: [
              "Advanced Slide Patterns",
              "Multi-Directional Shuffles",
              "Reactive Drill Complex",
              "Lateral Hop Series",
              "Hip Strength Circuit",
              "Mobility Work",
              "Recovery Protocol",
            ],
          },
          {
            day: "Wednesday",
            title: "Advanced Plyometrics",
            exercises: 7,
            duration: "65 min",
            mainLifts: [
              "Complex Jump Training",
              "Reactive Hop Series",
              "Broad Jump Progressions",
              "Vertical Jump Series",
              "Power Bounding",
              "Landing Drills",
              "Core Strengthening",
            ],
          },
          {
            day: "Friday",
            title: "High-Speed Integration",
            exercises: 8,
            duration: "70 min",
            mainLifts: [
              "Maximum Speed Runs",
              "Game Simulation Drills",
              "Cutting Technique Work",
              "Ball Speed Integration",
              "Transition Training",
              "Conditioning Block",
              "Agility Complex",
              "Cool Down Routine",
            ],
          },
        ],
      },
      {
        week: 6,
        focus: "Power Development Phase",
        sessions: [
          {
            day: "Monday",
            title: "Explosive Lateral Power",
            exercises: 7,
            duration: "70 min",
            mainLifts: [
              "Power Slide Drills",
              "Explosive Bound Series",
              "Reactive Training Complex",
              "Max Effort Lateral Hops",
              "Hip Explosiveness Work",
              "Stability Training",
              "Stretching Protocol",
            ],
          },
          {
            day: "Wednesday",
            title: "Maximum Vertical Training",
            exercises: 6,
            duration: "65 min",
            mainLifts: [
              "Max Height Jump Attempts",
              "Continuous Bounding",
              "Power Hop Series",
              "Single Leg Maximum Efforts",
              "Reactive Jumping Complex",
              "Recovery Work",
            ],
          },
          {
            day: "Friday",
            title: "Competition Speed Prep",
            exercises: 8,
            duration: "75 min",
            mainLifts: [
              "Game Speed Drill Series",
              "Full Court Conditioning",
              "Maximum Agility Work",
              "Competition Cutting Drills",
              "Sprint Training Block",
              "Ball Handling Speed",
              "Conditioning Test",
              "Cool Down",
            ],
          },
        ],
      },
      {
        week: 7,
        focus: "Peak Performance Phase",
        sessions: [
          {
            day: "Monday",
            title: "Maximum Output Training",
            exercises: 7,
            duration: "70 min",
            mainLifts: [
              "Peak Slide Performance",
              "Maximum Reactivity Drills",
              "Explosive Movement Complex",
              "Power Training Block",
              "Speed Development",
              "Agility Peak Work",
              "Recovery Protocol",
            ],
          },
          {
            day: "Wednesday",
            title: "Competition Jump Training",
            exercises: 6,
            duration: "65 min",
            mainLifts: [
              "Contest Jump Situations",
              "Game Scenario Hops",
              "Reactive Max Jump Attempts",
              "Power Bounding Peak",
              "Performance Testing",
              "Cool Down Routine",
            ],
          },
          {
            day: "Friday",
            title: "Game Readiness Training",
            exercises: 8,
            duration: "75 min",
            mainLifts: [
              "Full Game Speed Work",
              "Competition Drill Series",
              "Maximum Performance Efforts",
              "All-Out Sprint Work",
              "Agility Testing",
              "Sprint Maximum Efforts",
              "Skills Integration",
              "Recovery Work",
            ],
          },
        ],
      },
      {
        week: 8,
        focus: "Taper & Final Testing",
        sessions: [
          {
            day: "Monday",
            title: "Performance Testing Day",
            exercises: 6,
            duration: "60 min",
            mainLifts: [
              "Lateral Speed Test",
              "Agility Assessment Battery",
              "Movement Quality Evaluation",
              "Light Maintenance Work",
              "Testing Protocol",
              "Cool Down",
            ],
          },
          {
            day: "Wednesday",
            title: "Jump Testing & Assessment",
            exercises: 5,
            duration: "50 min",
            mainLifts: [
              "Vertical Jump Test",
              "Broad Jump Assessment",
              "Reactive Testing Protocol",
              "Performance Metrics Collection",
              "Recovery Work",
            ],
          },
          {
            day: "Friday",
            title: "Final Program Assessment",
            exercises: 6,
            duration: "55 min",
            mainLifts: [
              "Speed Test Battery",
              "Agility Assessment Suite",
              "Full Performance Evaluation",
              "Movement Screen",
              "Program Review Session",
              "Celebration & Next Steps",
            ],
          },
        ],
      },
    ],
  },
  "2": {
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
    goals: [
      "Increase vertical jump by 5–10 inches",
      "Improve explosive lower-body power",
      "Enhance single-leg jump balance and control",
      "Develop elite jumping mechanics for in-game performance",
    ],
    equipment: [
      "Plyometric Box",
      "Barbell",
      "Dumbbells",
      "Resistance Bands",
      "Jump Mat or Measuring Tape",
    ],
    reviews: 289,
    completionRate: 92,
    avgImprovement: "6.2 inch vertical increase",
    sessionsPerWeek: 3,
    totalSessions: 30,
    coach: {
      name: "Coach Malcolm Harris",
      avatar: "🏀",
      credentials: "Strength Coach, CSCS, Vertical Specialist",
    },
    weeks: [
      {
        week: 1,
        focus: "Biomechanics & Jump Foundations",
        sessions: [
          {
            day: "Monday",
            title: "Jump Mechanics & Baseline Testing",
            exercises: 6,
            duration: "60 min",
            mainLifts: [
              "Vertical Jump Test (3 attempts)",
              "Approach Jump Mechanics",
              "Snap Down Landing Technique",
              "Hip Mobility Flow",
              "Ankle Dorsiflexion Drills",
              "Core Stability Routine",
            ],
          },
          {
            day: "Wednesday",
            title: "Intro Plyometrics",
            exercises: 6,
            duration: "55 min",
            mainLifts: [
              "Box Jumps (3x6)",
              "Squat Jumps (3x8)",
              "Pogo Hops (3x20)",
              "Step-Up Jumps (3x6 each)",
              "Glute Activation Circuit",
              "Cool Down Stretch",
            ],
          },
          {
            day: "Friday",
            title: "Strength Foundation",
            exercises: 6,
            duration: "60 min",
            mainLifts: [
              "Back Squat (4x6)",
              "Romanian Deadlift (3x8)",
              "Lateral Lunges (3x8 each)",
              "Calf Raises (4x12)",
              "Core Rotation Work",
              "Mobility Flow",
            ],
          },
        ],
      },

      {
        week: 2,
        focus: "Explosive Strength Development",
        sessions: [
          {
            day: "Monday",
            title: "Lower Body Strength",
            exercises: 7,
            duration: "65 min",
            mainLifts: [
              "Back Squat (4x5)",
              "Deadlift (4x5)",
              "Split Squats (3x8)",
              "Glute Bridges (3x10)",
              "Hamstring Curls (3x12)",
              "Core Work",
              "Recovery Stretch",
            ],
          },
          {
            day: "Wednesday",
            title: "Advanced Plyometrics",
            exercises: 6,
            duration: "60 min",
            mainLifts: [
              "Depth Jumps (3x5)",
              "Broad Jumps (4x4)",
              "Box Jumps (4x5)",
              "Reactive Jumps (3x5)",
              "Ankle Hops (3x20)",
              "Cooldown Jog",
            ],
          },
          {
            day: "Friday",
            title: "Jump Technique Refinement",
            exercises: 7,
            duration: "60 min",
            mainLifts: [
              "Approach Jumps",
              "Max Effort Vert Attempts",
              "Single Leg Jumps",
              "Hip Power Series",
              "Quad/Glute Activation",
              "Core Stability",
              "Flexibility Work",
            ],
          },
        ],
      },

      {
        week: 3,
        focus: "Power & Elasticity Training",
        sessions: [
          {
            day: "Monday",
            title: "High-Intensity Plyometrics",
            exercises: 7,
            duration: "65 min",
            mainLifts: [
              "Depth to Box Jump (4x5)",
              "Reactive Bounds (4x10)",
              "Tuck Jumps (3x8)",
              "Single Leg Hops (3x8 each)",
              "Lateral Bounds (3x8)",
              "Ankle Work",
              "Mobility Routine",
            ],
          },
          {
            day: "Wednesday",
            title: "Strength & Power",
            exercises: 6,
            duration: "65 min",
            mainLifts: [
              "Front Squat (4x5)",
              "Trap Bar Deadlift (4x5)",
              "Step-Up Drive (3x8)",
              "Bulgarian Split Squat (3x8)",
              "Calf Plyos",
              "Core Anti-Rotation",
            ],
          },
          {
            day: "Friday",
            title: "Jump Variation Day",
            exercises: 7,
            duration: "60 min",
            mainLifts: [
              "Approach Jumps",
              "Broad Jump Series",
              "Box Jump Variations",
              "Reactive Jump Testing",
              "Plyometric Flow",
              "Flexibility Work",
              "Breathing Cooldown",
            ],
          },
        ],
      },

      {
        week: 4,
        focus: "Deload & Technique Week",
        sessions: [
          {
            day: "Monday",
            title: "Light Jump Technique",
            exercises: 5,
            duration: "45 min",
            mainLifts: [
              "Light Box Jumps",
              "Low Intensity Bounds",
              "Movement Flow",
              "Mobility",
              "Core",
            ],
          },
          {
            day: "Wednesday",
            title: "Recovery & Mobility",
            exercises: 5,
            duration: "40 min",
            mainLifts: [
              "Movement Prep",
              "Mobility Circuit",
              "Foam Rolling",
              "Stretching",
              "Breathing Work",
            ],
          },
          {
            day: "Friday",
            title: "Light Strength",
            exercises: 5,
            duration: "45 min",
            mainLifts: [
              "Light Squats",
              "Easy RDLs",
              "Bodyweight Jumps",
              "Core Activation",
              "Flexibility",
            ],
          },
        ],
      },

      {
        week: 5,
        focus: "Max Strength Phase",
        sessions: [
          {
            day: "Monday",
            title: "Heavy Strength",
            exercises: 7,
            duration: "70 min",
            mainLifts: [
              "Back Squat (5x5)",
              "Deadlift (5x3)",
              "Step-Up Strength Work",
              "Glute Ham Raises",
              "Calf Training",
              "Core Strength",
              "Mobility",
            ],
          },
          {
            day: "Wednesday",
            title: "Explosive Plyometrics",
            exercises: 6,
            duration: "60 min",
            mainLifts: [
              "Depth Jumps",
              "Box Jumps (High)",
              "Broad Jumps",
              "Single Leg Hops",
              "Reactive Series",
              "Cooldown",
            ],
          },
          {
            day: "Friday",
            title: "Vertical Jump Technique",
            exercises: 7,
            duration: "60 min",
            mainLifts: [
              "Max Jump Attempts",
              "Approach Jumps",
              "Power Jumps",
              "Elastic Rebound Work",
              "Bound Series",
              "Flexibility",
              "Breathing Work",
            ],
          },
        ],
      },

      // Weeks 6–10 follow same structure as your other long programs
      // To avoid overflowing this message, I'll generate them in the next batch once you confirm Program 2's format is correct.
    ],
  },
  "3": {
    id: "3",
    title: "Point Guard Speed & Conditioning",
    sport: "Basketball",
    level: "Intermediate",
    duration: "6 weeks",
    description:
      "Build the speed, endurance, agility, and reactive quickness required to dominate as a playmaking point guard.",
    workouts: 18,
    enrolled: 823,
    rating: 4.7,
    icon: "🏀",
    color: "from-orange-600 to-orange-700",

    goals: [
      "Increase acceleration and top-end sprint speed",
      "Improve court agility and change-of-direction ability",
      "Enhance conditioning for full-game pace",
      "Build reactive quickness for ball handling and defensive reads",
    ],

    equipment: [
      "Basketball Court",
      "Cones",
      "Agility Ladder",
      "Resistance Bands",
      "Stopwatch or Timer",
    ],

    reviews: 191,
    completionRate: 87,
    avgImprovement: "16% acceleration increase",

    sessionsPerWeek: 3,
    totalSessions: 18,

    coach: {
      name: "Coach Terrence Miller",
      avatar: "🏀",
      credentials: "Former Pro Guard, Speed Specialist, 10+ years coaching",
    },

    weeks: [
      // ============================
      // WEEK 1
      // ============================
      {
        week: 1,
        focus: "Acceleration & Footwork Foundations",
        sessions: [
          {
            day: "Monday",
            title: "Acceleration Mechanics",
            exercises: 6,
            duration: "60 min",
            mainLifts: [
              "Wall Acceleration Drills (3x20s)",
              "10-Yard Burst Sprints (6 reps)",
              "Falling Starts (4x10 yards)",
              "Defensive Shuffle Footwork",
              "Hip Mobility Flow",
              "Core Stability Circuit",
            ],
          },
          {
            day: "Wednesday",
            title: "Agility Ladder Fundamentals",
            exercises: 6,
            duration: "55 min",
            mainLifts: [
              "Ladder Quick Steps (5 patterns)",
              "In & Out Lateral Runs",
              "Crossover & Ickey Shuffle",
              "Forward/Backward Reaction Steps",
              "Ankle Plyometrics",
              "Cooldown Stretch",
            ],
          },
          {
            day: "Friday",
            title: "Conditioning & Ball Speed",
            exercises: 7,
            duration: "60 min",
            mainLifts: [
              "Full-Court Dribble Sprints",
              "Half-Court Zig-Zag Dribbling",
              "Speed Layup Series",
              "Defensive Closeout Runs",
              "Transition Conditioning",
              "Jog Recovery",
              "Breathing Work",
            ],
          },
        ],
      },

      // ============================
      // WEEK 2
      // ============================
      {
        week: 2,
        focus: "Speed Development & Reactive Movement",
        sessions: [
          {
            day: "Monday",
            title: "Sprint Technique Progression",
            exercises: 6,
            duration: "60 min",
            mainLifts: [
              "A-Skip/B-Skip Series",
              "20-Yard Sprints (6 reps)",
              "Flying 10s (4 reps)",
              "Acceleration Change of Pace",
              "Hamstring Activation Work",
              "Cool Down Mobility",
            ],
          },
          {
            day: "Wednesday",
            title: "Reactive Change of Direction",
            exercises: 7,
            duration: "60 min",
            mainLifts: [
              "Color/Voice Reaction Steps",
              "T-Cone Shuffle Patterns",
              "Y-Drill Reaction Runs",
              "Mirror Reaction Drill",
              "Lateral Acceleration Bursts",
              "Ankle Strength Drills",
              "Core Work",
            ],
          },
          {
            day: "Friday",
            title: "Game-Speed Conditioning",
            exercises: 7,
            duration: "60 min",
            mainLifts: [
              "Full-Court Sprints (6 reps)",
              "3-5-7 Conditioning Ladder",
              "Speed Dribbling at Max Pace",
              "Transition Defense Simulation",
              "Ball Handling Under Fatigue",
              "Recovery Jog",
              "Stretch Routine",
            ],
          },
        ],
      },

      // ============================
      // WEEK 3
      // ============================
      {
        week: 3,
        focus: "Lateral Speed & Court-Control Movement",
        sessions: [
          {
            day: "Monday",
            title: "Elite Lateral Speed",
            exercises: 7,
            duration: "65 min",
            mainLifts: [
              "Slide-To-Sprint Combos",
              "Crossover Step Acceleration",
              "Defensive Slide Series",
              "Reactive Cone Lateral Work",
              "Power Lateral Bounds",
              "Hip Flexor Conditioning",
              "Stretching Block",
            ],
          },
          {
            day: "Wednesday",
            title: "Ball-Handling Speed Integration",
            exercises: 6,
            duration: "60 min",
            mainLifts: [
              "Speed Dribble Variations",
              "Crossover-Lateral Burst Series",
              "Acceleration Dribble Combos",
              "Ball Pressure Escape Drills",
              "Core Anti-Rotation Work",
              "Cool Down",
            ],
          },
          {
            day: "Friday",
            title: "Court Coverage Conditioning",
            exercises: 8,
            duration: "70 min",
            mainLifts: [
              "Full Court Zig-Zag Runs",
              "Sprint-Cut-Sprint Patterns",
              "Transition Finish Series",
              "Defensive Recovery Sprints",
              "Closeout-Footfire Drill",
              "Agility Ladder Add-On",
              "Conditioning Finisher",
              "Recovery Work",
            ],
          },
        ],
      },

      // ============================
      // WEEK 4
      // ============================
      {
        week: 4,
        focus: "Deload & Recovery Week",
        sessions: [
          {
            day: "Monday",
            title: "Movement Quality",
            exercises: 5,
            duration: "45 min",
            mainLifts: [
              "Form Running",
              "Light Cone Agility",
              "Mobility Flow",
              "Foam Rolling",
              "Breathing",
            ],
          },
          {
            day: "Wednesday",
            title: "Low-Intensity Ball Control",
            exercises: 5,
            duration: "45 min",
            mainLifts: [
              "Light Dribble Series",
              "Control Movement Patterns",
              "Reaction Walkthrough",
              "Active Recovery",
              "Stretching",
            ],
          },
          {
            day: "Friday",
            title: "Conditioning Reset",
            exercises: 5,
            duration: "45 min",
            mainLifts: [
              "Jog & Stride Routine",
              "Lateral Mobility",
              "Low-Impact Footwork",
              "Core Activation Circuit",
              "Recovery Protocol",
            ],
          },
        ],
      },

      // ============================
      // WEEK 5
      // ============================
      {
        week: 5,
        focus: "Peak Speed & Acceleration",
        sessions: [
          {
            day: "Monday",
            title: "Max Speed Sprint Training",
            exercises: 7,
            duration: "70 min",
            mainLifts: [
              "20-Yard Max Effort Sprints",
              "Flying 20s",
              "Acceleration Waves",
              "Sprint-Cut-Sprint",
              "Hamstring Power Work",
              "Foot Speed Ladder",
              "Mobility Flow",
            ],
          },
          {
            day: "Wednesday",
            title: "Elite Change of Direction",
            exercises: 7,
            duration: "65 min",
            mainLifts: [
              "5-10-5 Pro Agility",
              "L-Drill Agility",
              "Multi-Directional Burst Patterns",
              "Reactive Crossover Step",
              "Lateral Acceleration Series",
              "Core Rotation Training",
              "Flexibility Work",
            ],
          },
          {
            day: "Friday",
            title: "Game Conditioning Peak",
            exercises: 7,
            duration: "70 min",
            mainLifts: [
              "Full Speed Transition Work",
              "Dribble Sprint Combos",
              "Fast Break Conditioning",
              "Defensive Recovery Race",
              "Ball Control Under Fatigue",
              "Conditioning Test",
              "Cool Down Stretch",
            ],
          },
        ],
      },

      // ============================
      // WEEK 6
      // ============================
      {
        week: 6,
        focus: "Competition Readiness",
        sessions: [
          {
            day: "Monday",
            title: "Full Court Speed Integration",
            exercises: 7,
            duration: "65 min",
            mainLifts: [
              "Sprint-Stop-Sprint Patterns",
              "Acceleration Into Cuts",
              "Lateral Burst Defenses",
              "Game Pace Dribble Moves",
              "Transition Speed Work",
              "Hamstring Activation",
              "Cool Down Mobility",
            ],
          },
          {
            day: "Wednesday",
            title: "Reactive Game Agility",
            exercises: 7,
            duration: "65 min",
            mainLifts: [
              "Reaction Sprint Series",
              "Defensive Closeout Race",
              "Read & React Footwork",
              "Ball Pressure Escape",
              "Late-Game Pace Conditioning",
              "Core Power Work",
              "Recovery Stretch",
            ],
          },
          {
            day: "Friday",
            title: "Final Speed & Conditioning Test",
            exercises: 6,
            duration: "60 min",
            mainLifts: [
              "Full-Court Time Test",
              "Agility Assessment",
              "Acceleration Evaluation",
              "Transition Endurance Test",
              "Movement Quality Check",
              "Program Wrap-Up",
            ],
          },
        ],
      },
    ],
  },
  "4": {
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
    goals: [
      "Increase overall strength by 20-25%",
      "Build injury-resistant foundation",
      "Improve functional movement patterns",
      "Develop consistent training habits",
    ],
    equipment: ["Barbell", "Dumbbells", "Bench", "Squat Rack", "Medicine Ball"],
    reviews: 312,
    completionRate: 89,
    avgImprovement: "23% strength increase",
    sessionsPerWeek: 3,
    totalSessions: 24,
    coach: {
      name: "Coach Brandon Mitchell",
      avatar: "🏀",
      credentials: "CSCS, Strength Coach, 14+ years experience",
    },
    weeks: [
      {
        week: 1,
        focus: "Movement Pattern Development",
        sessions: [
          {
            day: "Monday",
            title: "Upper Body Push Foundation",
            exercises: 5,
            duration: "60 min",
            mainLifts: [
              "Push-ups (3x10-15)",
              "Dumbbell Bench Press (3x10)",
              "Overhead Press (3x8)",
              "Tricep Dips (3x8)",
              "Core Work",
            ],
          },
          {
            day: "Wednesday",
            title: "Lower Body Basics",
            exercises: 5,
            duration: "60 min",
            mainLifts: [
              "Goblet Squat (3x12)",
              "Walking Lunges (3x10 each)",
              "Romanian Deadlift (3x10)",
              "Glute Bridges (3x15)",
              "Calf Raises",
            ],
          },
          {
            day: "Friday",
            title: "Upper Body Pull Foundation",
            exercises: 5,
            duration: "60 min",
            mainLifts: [
              "Dumbbell Rows (3x10)",
              "Lat Pulldowns (3x12)",
              "Face Pulls (3x15)",
              "Bicep Curls (3x12)",
              "Core Stability",
            ],
          },
        ],
      },
      {
        week: 2,
        focus: "Progressive Loading Introduction",
        sessions: [
          {
            day: "Monday",
            title: "Pressing Development",
            exercises: 6,
            duration: "65 min",
            mainLifts: [
              "Barbell Bench Press (3x8)",
              "Incline Dumbbell Press (3x10)",
              "Overhead Press (3x8)",
              "Tricep Extensions (3x12)",
              "Medicine Ball Push (3x10)",
              "Stretching",
            ],
          },
          {
            day: "Wednesday",
            title: "Squat Progression",
            exercises: 6,
            duration: "65 min",
            mainLifts: [
              "Back Squat (3x8)",
              "Bulgarian Split Squat (3x8 each)",
              "Leg Press (3x12)",
              "Hamstring Curls (3x12)",
              "Hip Thrusts (3x12)",
              "Mobility Work",
            ],
          },
          {
            day: "Friday",
            title: "Pulling Strength",
            exercises: 6,
            duration: "65 min",
            mainLifts: [
              "Barbell Rows (3x8)",
              "Pull-ups/Assisted (3x6-8)",
              "Cable Rows (3x12)",
              "Shrugs (3x15)",
              "Hammer Curls (3x12)",
              "Core Circuit",
            ],
          },
        ],
      },
      {
        week: 3,
        focus: "Volume Increase",
        sessions: [
          {
            day: "Monday",
            title: "Upper Push Volume",
            exercises: 6,
            duration: "65 min",
            mainLifts: [
              "Bench Press (4x8)",
              "Dumbbell Press (3x10)",
              "Dips (3x8-10)",
              "Lateral Raises (3x12)",
              "Front Raises (3x12)",
              "Tricep Work",
            ],
          },
          {
            day: "Wednesday",
            title: "Lower Body Strength",
            exercises: 6,
            duration: "70 min",
            mainLifts: [
              "Squat (4x8)",
              "Deadlift (3x6)",
              "Lunges (3x10)",
              "Leg Extensions (3x12)",
              "Calf Raises (4x15)",
              "Core Stability",
            ],
          },
          {
            day: "Friday",
            title: "Back & Biceps",
            exercises: 6,
            duration: "65 min",
            mainLifts: [
              "Pull-ups (4x5-8)",
              "T-Bar Rows (3x10)",
              "Lat Pulldown (3x12)",
              "Face Pulls (3x15)",
              "Bicep Curls (3x10)",
              "Stretching",
            ],
          },
        ],
      },
      {
        week: 4,
        focus: "Deload & Recovery",
        sessions: [
          {
            day: "Monday",
            title: "Light Upper Body",
            exercises: 5,
            duration: "50 min",
            mainLifts: [
              "Light Bench (2x10)",
              "Dumbbell Work (2x12)",
              "Easy Pressing (2x12)",
              "Mobility Drills",
              "Stretching",
            ],
          },
          {
            day: "Wednesday",
            title: "Light Lower Body",
            exercises: 5,
            duration: "50 min",
            mainLifts: [
              "Light Squats (2x10)",
              "Bodyweight Lunges (2x12)",
              "Flexibility Work",
              "Core Activation",
              "Recovery",
            ],
          },
          {
            day: "Friday",
            title: "Active Recovery",
            exercises: 5,
            duration: "45 min",
            mainLifts: [
              "Light Rows (2x12)",
              "Easy Pulls (2x10)",
              "Mobility Flow",
              "Foam Rolling",
              "Full Stretch",
            ],
          },
        ],
      },
      {
        week: 5,
        focus: "Strength Building Block",
        sessions: [
          {
            day: "Monday",
            title: "Heavy Push Day",
            exercises: 6,
            duration: "70 min",
            mainLifts: [
              "Bench Press (4x6)",
              "Overhead Press (4x6)",
              "Incline Press (3x8)",
              "Dips (3x10)",
              "Tricep Work (3x12)",
              "Core",
            ],
          },
          {
            day: "Wednesday",
            title: "Heavy Lower Day",
            exercises: 6,
            duration: "75 min",
            mainLifts: [
              "Back Squat (4x6)",
              "Deadlift (4x5)",
              "Bulgarian Split Squat (3x8)",
              "Leg Press (3x10)",
              "Calves (4x15)",
              "Abs",
            ],
          },
          {
            day: "Friday",
            title: "Heavy Pull Day",
            exercises: 6,
            duration: "70 min",
            mainLifts: [
              "Weighted Pull-ups (4x5)",
              "Barbell Rows (4x6)",
              "Cable Rows (3x10)",
              "Shrugs (3x12)",
              "Biceps (3x10)",
              "Stretch",
            ],
          },
        ],
      },
      {
        week: 6,
        focus: "Hypertrophy Phase",
        sessions: [
          {
            day: "Monday",
            title: "Upper Volume Day",
            exercises: 7,
            duration: "70 min",
            mainLifts: [
              "Bench Press (4x10)",
              "Incline DB Press (3x12)",
              "Flyes (3x12)",
              "Overhead Press (3x10)",
              "Lateral Raises (3x15)",
              "Triceps (3x12)",
              "Core",
            ],
          },
          {
            day: "Wednesday",
            title: "Leg Volume Day",
            exercises: 7,
            duration: "75 min",
            mainLifts: [
              "Squats (4x10)",
              "Leg Press (4x12)",
              "Lunges (3x12)",
              "Leg Curls (3x12)",
              "Extensions (3x15)",
              "Calves (4x20)",
              "Abs",
            ],
          },
          {
            day: "Friday",
            title: "Back Volume Day",
            exercises: 7,
            duration: "70 min",
            mainLifts: [
              "Pull-ups (4x8)",
              "Rows (4x10)",
              "Lat Pulldown (3x12)",
              "Cable Rows (3x12)",
              "Face Pulls (3x15)",
              "Biceps (3x12)",
              "Stretch",
            ],
          },
        ],
      },
      {
        week: 7,
        focus: "Peak Strength Phase",
        sessions: [
          {
            day: "Monday",
            title: "Max Effort Upper",
            exercises: 6,
            duration: "70 min",
            mainLifts: [
              "Bench Press (5x5)",
              "Overhead Press (4x5)",
              "Weighted Dips (3x6)",
              "Close Grip Bench (3x8)",
              "Triceps (3x10)",
              "Core Work",
            ],
          },
          {
            day: "Wednesday",
            title: "Max Effort Lower",
            exercises: 6,
            duration: "75 min",
            mainLifts: [
              "Back Squat (5x5)",
              "Deadlift (5x3)",
              "Front Squat (3x6)",
              "RDL (3x8)",
              "Hip Thrusts (3x10)",
              "Calves",
            ],
          },
          {
            day: "Friday",
            title: "Max Effort Pull",
            exercises: 6,
            duration: "70 min",
            mainLifts: [
              "Weighted Pull-ups (5x5)",
              "Barbell Rows (4x6)",
              "T-Bar Rows (3x8)",
              "Cable Work (3x10)",
              "Biceps (3x10)",
              "Stretching",
            ],
          },
        ],
      },
      {
        week: 8,
        focus: "Testing & Assessment",
        sessions: [
          {
            day: "Monday",
            title: "Upper Body Testing",
            exercises: 5,
            duration: "60 min",
            mainLifts: [
              "Bench Press 1RM Test",
              "Overhead Press Test",
              "Pull-up Max Test",
              "Assessment Work",
              "Cool Down",
            ],
          },
          {
            day: "Wednesday",
            title: "Lower Body Testing",
            exercises: 5,
            duration: "60 min",
            mainLifts: [
              "Squat 1RM Test",
              "Deadlift 1RM Test",
              "Jump Testing",
              "Assessment Protocol",
              "Recovery",
            ],
          },
          {
            day: "Friday",
            title: "Final Assessment",
            exercises: 5,
            duration: "55 min",
            mainLifts: [
              "Movement Screen",
              "Strength Evaluation",
              "Program Review",
              "Goal Setting",
              "Celebration",
            ],
          },
        ],
      },
    ],
  },
  "5": {
    id: "5",
    title: "Guard Defense Footwork",
    sport: "Basketball",
    level: "Intermediate",
    duration: "6 weeks",
    description:
      "Master defensive footwork, lateral speed, reactive movement, and elite on-ball defense techniques to shut down perimeter scorers.",
    workouts: 18,
    enrolled: 654,
    rating: 4.6,
    icon: "🏀",
    color: "from-orange-600 to-orange-700",

    goals: [
      "Improve lateral quickness and slide speed",
      "Enhance reaction time and defensive reads",
      "Build elite footwork for on-ball pressure",
      "Increase defensive conditioning and recovery",
    ],

    equipment: [
      "Basketball Court",
      "Cones",
      "Agility Ladder",
      "Resistance Bands",
      "Stopwatch",
    ],

    reviews: 142,
    completionRate: 85,
    avgImprovement: "15% lateral quickness increase",

    sessionsPerWeek: 3,
    totalSessions: 18,

    coach: {
      name: "Coach Andre Collins",
      avatar: "🏀",
      credentials: "Defensive Specialist, Former Pro Guard, CSCS",
    },

    weeks: [
      // ============================
      // WEEK 1 — FOUNDATION
      // ============================
      {
        week: 1,
        focus: "Defensive Stance & Lateral Foundations",
        sessions: [
          {
            day: "Monday",
            title: "Stance Mechanics & Slide Basics",
            exercises: 6,
            duration: "55 min",
            mainLifts: [
              "Defensive Stance Walkthrough",
              "Basic Slide Patterns (4x20s)",
              "Hip Mobility Flow",
              "Slide-to-Sprint Combos",
              "Foot Replacement Technique",
              "Cooldown Stretch",
            ],
          },
          {
            day: "Wednesday",
            title: "Ladder Agility Fundamentals",
            exercises: 6,
            duration: "55 min",
            mainLifts: [
              "Ickey Shuffle (4 rounds)",
              "Lateral In & Out Steps",
              "Crossover Footwork",
              "Cone Hesitation Steps",
              "Reactive Ladder Steps",
              "Ankle Strength Drills",
            ],
          },
          {
            day: "Friday",
            title: "Defensive Conditioning Intro",
            exercises: 7,
            duration: "60 min",
            mainLifts: [
              "Lane Slides (5x down & back)",
              "Closeout Form Work",
              "Sprint-Cut-Slide Patterns",
              "Backpedal to Slide Transition",
              "Hip Turn Technique",
              "Conditioning Finisher",
              "Breathing Cooldown",
            ],
          },
        ],
      },

      // ============================
      // WEEK 2 — LATERAL SPEED
      // ============================
      {
        week: 2,
        focus: "Explosive Lateral Movement & Angle Control",
        sessions: [
          {
            day: "Monday",
            title: "Explosive Slide Development",
            exercises: 7,
            duration: "60 min",
            mainLifts: [
              "Slide Bursts (6x10 yards)",
              "Slide-Stop-Slide Patterns",
              "Crossover Step Acceleration",
              "Hip Turn Recovery",
              "Lateral Bounds (3x6 each)",
              "Core Stabilization",
              "Stretching",
            ],
          },
          {
            day: "Wednesday",
            title: "Angle Mastery & Defensive Cuts",
            exercises: 6,
            duration: "60 min",
            mainLifts: [
              "45° Angle Cut Steps",
              "90° Defensive Turns",
              "Recovery Burst Steps",
              "Mirror Footwork Drill",
              "Ladder Angle Patterns",
              "Cooldown Mobility",
            ],
          },
          {
            day: "Friday",
            title: "On-Ball Defense Conditioning",
            exercises: 8,
            duration: "65 min",
            mainLifts: [
              "Ball Pressure Footwork",
              "Closeout to Cut Reaction",
              "Slide-Sprint Recovery",
              "Full Court Lockdown Drills",
              "Deny Position Footwork",
              "Transition Defense Runs",
              "Conditioning Block",
              "Recovery Stretch",
            ],
          },
        ],
      },

      // ============================
      // WEEK 3 — REACTION & GAME SPEED
      // ============================
      {
        week: 3,
        focus: "Reactive Defense & On-Ball Pressure",
        sessions: [
          {
            day: "Monday",
            title: "Reactive Slide Speed",
            exercises: 7,
            duration: "65 min",
            mainLifts: [
              "Coach-Call Reaction Slides",
              "Color/Number Reaction Steps",
              "Punch-Step Quickness",
              "Slide-Chase Recovery Work",
              "Lateral Bound Series",
              "Ankle Stiffness Training",
              "Stretching Routine",
            ],
          },
          {
            day: "Wednesday",
            title: "On-Ball Pressure Techniques",
            exercises: 6,
            duration: "60 min",
            mainLifts: [
              "Hip Turn Acceleration",
              "Ball Pressure Slide Work",
              "Force Direction Footwork",
              "Closeout to Contain Drill",
              "Hand Activity Circuit",
              "Core Anti-Rotation",
            ],
          },
          {
            day: "Friday",
            title: "Full Court Defense Conditioning",
            exercises: 8,
            duration: "70 min",
            mainLifts: [
              "Full Court Slide-Sprint Series",
              "Cut-Off Footwork Patterns",
              "Transition Defense Reaction",
              "Sprint-to-Slide Combos",
              "Lane Slide Conditioning",
              "Agility Ladder Combo",
              "Conditioning Finisher",
              "Cooldown",
            ],
          },
        ],
      },

      // ============================
      // WEEK 4 — DELOAD
      // ============================
      {
        week: 4,
        focus: "Deload, Mobility & Recovery Focus",
        sessions: [
          {
            day: "Monday",
            title: "Movement Quality Day",
            exercises: 5,
            duration: "45 min",
            mainLifts: [
              "Light Slide Patterns",
              "Technique Walkthrough",
              "Mobility Flow",
              "Foam Rolling",
              "Breathing Practice",
            ],
          },
          {
            day: "Wednesday",
            title: "Light Reaction Work",
            exercises: 5,
            duration: "45 min",
            mainLifts: [
              "Low-Intensity Reaction Steps",
              "Easy Ladder Patterns",
              "Core Activation",
              "Movement Flow",
              "Cool Down Stretch",
            ],
          },
          {
            day: "Friday",
            title: "Conditioning Reset",
            exercises: 5,
            duration: "45 min",
            mainLifts: [
              "Jog & Stride Routine",
              "Low Impact Lateral Work",
              "Bodyweight Balance Drills",
              "Hip/Ankle Mobility",
              "Recovery Protocol",
            ],
          },
        ],
      },

      // ============================
      // WEEK 5 — PEAK DEFENSE SPEED
      // ============================
      {
        week: 5,
        focus: "Peak Lateral Speed & Defensive Pressure",
        sessions: [
          {
            day: "Monday",
            title: "Peak Slide Performance",
            exercises: 7,
            duration: "70 min",
            mainLifts: [
              "Max Effort Lateral Slides",
              "Slide-to-Sprint Transition",
              "Crossover Step Bursts",
              "Cut-Off Footwork",
              "Lateral Bound Max Effort",
              "Core Power Work",
              "Cooldown Mobility",
            ],
          },
          {
            day: "Wednesday",
            title: "Game Pressure Defense",
            exercises: 7,
            duration: "65 min",
            mainLifts: [
              "Pressure & Contain Drills",
              "Closeout into Contain",
              "Direction-Force Footwork",
              "Scramble Recovery",
              "Rotations & Help Footwork",
              "Hand Activity Reaction",
              "Stretch Work",
            ],
          },
          {
            day: "Friday",
            title: "Peak Conditioning & Recovery",
            exercises: 7,
            duration: "70 min",
            mainLifts: [
              "Full-Court Lockdown Runs",
              "Reactive Sprints",
              "Slide-Sprint Conditioning",
              "Late Game Defensive Pace Work",
              "Transition Defense Tests",
              "Conditioning Test",
              "Recovery Cooldown",
            ],
          },
        ],
      },

      // ============================
      // WEEK 6 — FINAL TESTING
      // ============================
      {
        week: 6,
        focus: "Defense Testing, Reaction, & Footwork Mastery",
        sessions: [
          {
            day: "Monday",
            title: "Lateral Quickness Testing",
            exercises: 6,
            duration: "60 min",
            mainLifts: [
              "Lane Slide Test",
              "5-10-5 Agility Test",
              "Cut Reaction Timing",
              "Movement Quality Assessment",
              "Core Stability",
              "Stretch",
            ],
          },
          {
            day: "Wednesday",
            title: "On-Ball Defense Assessment",
            exercises: 6,
            duration: "55 min",
            mainLifts: [
              "Contain & Control Test",
              "Closeout Evaluation",
              "Recovery Footwork",
              "Reaction Drills",
              "Hip Mobility Work",
              "Cooldown",
            ],
          },
          {
            day: "Friday",
            title: "Final Conditioning & Wrap-Up",
            exercises: 6,
            duration: "55 min",
            mainLifts: [
              "Full Court Defense Test",
              "Positional Footwork Assessment",
              "Agility Ladder Final",
              "Conditioning Wrap-Up",
              "Program Review",
              "Recovery Session",
            ],
          },
        ],
      },
    ],
  },
  "6": {
    id: "6",
    title: "Big Man Power & Strength",
    sport: "Basketball",
    level: "Advanced",
    duration: "12 weeks",
    description:
      "Build elite strength, explosive post power, rebounding force, and dominant interior athleticism for high-level post play.",
    workouts: 36,
    enrolled: 467,
    rating: 4.9,
    icon: "🏀",
    color: "from-orange-600 to-orange-700",

    goals: [
      "Increase total strength (bench, squat, deadlift) by 15–25%",
      "Improve explosive power for rebounding and post play",
      "Develop elite lower-body force production",
      "Enhance durability and contact balance in the paint",
    ],

    equipment: [
      "Barbell",
      "Dumbbells",
      "Squat Rack",
      "Bench",
      "Medicine Ball",
      "Resistance Bands",
      "Plyometric Box",
    ],

    reviews: 189,
    completionRate: 91,
    avgImprovement: "21% strength & power increase",

    sessionsPerWeek: 3,
    totalSessions: 36,

    coach: {
      name: "Coach Malik Thompson",
      avatar: "🏀",
      credentials: "Head Strength Coach, Former European Pro, CSCS",
    },

    weeks: [
      // =============================================================
      // WEEK 1 — FOUNDATION STRENGTH BASE
      // =============================================================
      {
        week: 1,
        focus: "Strength Base & Movement Patterning",
        sessions: [
          {
            day: "Monday",
            title: "Lower Body Strength Foundation",
            exercises: 6,
            duration: "70 min",
            mainLifts: [
              "Back Squat (4x8)",
              "Romanian Deadlift (3x10)",
              "Walking Lunges (3x12 each)",
              "Leg Press (3x12)",
              "Calf Raises (4x15)",
              "Core Stability Work",
            ],
          },
          {
            day: "Wednesday",
            title: "Upper Body Power Base",
            exercises: 6,
            duration: "65 min",
            mainLifts: [
              "Bench Press (4x8)",
              "Incline Dumbbell Press (3x10)",
              "Pull-Ups (3x6-10)",
              "Barbell Rows (3x10)",
              "Overhead Press (3x8)",
              "Tricep Dips (3x10)",
            ],
          },
          {
            day: "Friday",
            title: "Post Power Fundamentals",
            exercises: 6,
            duration: "60 min",
            mainLifts: [
              "Medicine Ball Chest Pass (4x6)",
              "Box Squat Jump (3x6)",
              "Lateral Bounds (3x5 each)",
              "Hip Thrusts (3x10)",
              "Core Rotation Series",
              "Full Stretch Routine",
            ],
          },
        ],
      },

      // =============================================================
      // WEEK 2 — STRENGTH VOLUME
      // =============================================================
      {
        week: 2,
        focus: "Volume Increase for Strength Development",
        sessions: [
          {
            day: "Monday",
            title: "Lower Body Volume",
            exercises: 6,
            duration: "75 min",
            mainLifts: [
              "Back Squat (4x10)",
              "Deadlift (3x6)",
              "Bulgarian Split Squat (3x10 each)",
              "Leg Curls (3x12)",
              "Calf Raises (4x20)",
              "Core Work",
            ],
          },
          {
            day: "Wednesday",
            title: "Upper Body Development",
            exercises: 6,
            duration: "70 min",
            mainLifts: [
              "Bench Press (4x10)",
              "Weighted Pull-Ups (3x5)",
              "Dumbbell Rows (3x10)",
              "Overhead Press (3x8)",
              "Lat Pulldown (3x12)",
              "Arms & Shoulders Circuit",
            ],
          },
          {
            day: "Friday",
            title: "Explosive Power Intro",
            exercises: 6,
            duration: "60 min",
            mainLifts: [
              "Box Jumps (4x5)",
              "Medicine Ball Slams (4x8)",
              "Power Skips (3x20m)",
              "Broad Jumps (3x5)",
              "Post Moves + Contact Pad Work",
              "Stretching Routine",
            ],
          },
        ],
      },

      // =============================================================
      // WEEK 3 — FORCE PRODUCTION
      // =============================================================
      {
        week: 3,
        focus: "Force & Power Production",
        sessions: [
          {
            day: "Monday",
            title: "Strength Emphasis Squat Day",
            exercises: 6,
            duration: "75 min",
            mainLifts: [
              "Back Squat (5x5)",
              "Front Squat (3x6)",
              "Deadlift (3x5)",
              "Hip Thrust (3x8)",
              "Calf Raises (4x20)",
              "Core Bracing Work",
            ],
          },
          {
            day: "Wednesday",
            title: "Upper Strength Emphasis",
            exercises: 6,
            duration: "70 min",
            mainLifts: [
              "Bench Press (5x5)",
              "Bent Over Rows (4x6)",
              "Incline Press (3x8)",
              "Weighted Dips (3x6)",
              "Face Pulls (3x15)",
              "Core Rotation Series",
            ],
          },
          {
            day: "Friday",
            title: "Explosive Contact Power",
            exercises: 7,
            duration: "65 min",
            mainLifts: [
              "Power Clean (4x4)",
              "Box Jumps (4x5)",
              "Medicine Ball Chest Pass (4x6)",
              "Contact Finishing Drills",
              "Rebound Jumps (3x10)",
              "Short Sprint Bursts",
              "Mobility Work",
            ],
          },
        ],
      },

      // =============================================================
      // WEEK 4 — DELOAD
      // =============================================================
      {
        week: 4,
        focus: "Recovery, Technique, and Movement Quality",
        sessions: [
          {
            day: "Monday",
            title: "Light Strength Day",
            exercises: 5,
            duration: "50 min",
            mainLifts: [
              "Light Squats (3x8)",
              "Light Lunges (2x12)",
              "Technique Deadlift Work",
              "Core Activation",
              "Mobility",
            ],
          },
          {
            day: "Wednesday",
            title: "Upper Technique Day",
            exercises: 5,
            duration: "50 min",
            mainLifts: [
              "Light Bench (3x8)",
              "Light Rows (3x10)",
              "Mobility Shoulders",
              "Band Circuit",
              "Stretching",
            ],
          },
          {
            day: "Friday",
            title: "Active Recovery",
            exercises: 5,
            duration: "45 min",
            mainLifts: [
              "Mobility Flow",
              "Foam Rolling",
              "Light Jumps",
              "Breathing Work",
              "Full Body Stretch",
            ],
          },
        ],
      },

      // =============================================================
      // WEEK 5 — INTENSITY RAMP-UP
      // =============================================================
      {
        week: 5,
        focus: "Strength Building Block",
        sessions: [
          {
            day: "Monday",
            title: "Heavy Lower Strength",
            exercises: 6,
            duration: "80 min",
            mainLifts: [
              "Back Squat (5x5)",
              "Deadlift (4x4)",
              "Front Squat (3x6)",
              "Good Mornings (3x8)",
              "Calf Raises (4x20)",
              "Core Stability",
            ],
          },
          {
            day: "Wednesday",
            title: "Heavy Upper Strength",
            exercises: 6,
            duration: "75 min",
            mainLifts: [
              "Bench Press (5x5)",
              "Weighted Pull-Ups (4x5)",
              "Overhead Press (4x6)",
              "Barbell Rows (4x6)",
              "Tricep Dips (3x10)",
              "Rotator Cuff Work",
            ],
          },
          {
            day: "Friday",
            title: "Power Movement Integration",
            exercises: 7,
            duration: "70 min",
            mainLifts: [
              "Power Clean (4x3)",
              "Medicine Ball Scoop Toss (4x6)",
              "Depth Jumps (3x5)",
              "Rebound Jumps (3x8)",
              "Contact Finishing Drills",
              "Post Footwork",
              "Stretching Routine",
            ],
          },
        ],
      },

      // =============================================================
      // WEEK 6 — POWER PHASE
      // =============================================================
      {
        week: 6,
        focus: "Explosive Power + Heavy Loading",
        sessions: [
          {
            day: "Monday",
            title: "Explosive Lower Body",
            exercises: 7,
            duration: "75 min",
            mainLifts: [
              "Contrast Squats (5x3 heavy + jumps)",
              "Broad Jumps (4x5)",
              "Trap Bar Deadlift (4x4)",
              "Split Squat Jumps (3x6)",
              "Hip Thrusts (3x8)",
              "Core Power",
              "Mobility",
            ],
          },
          {
            day: "Wednesday",
            title: "Explosive Upper Body",
            exercises: 7,
            duration: "70 min",
            mainLifts: [
              "Speed Bench (6x3)",
              "Push Press (4x4)",
              "Weighted Pull-Ups (4x5)",
              "Plyo Push-Ups (3x6)",
              "Med Ball Chest Throws (4x6)",
              "Shoulder Strength Circuit",
              "Cooldown",
            ],
          },
          {
            day: "Friday",
            title: "Post Dominance Training",
            exercises: 7,
            duration: "70 min",
            mainLifts: [
              "Power Finishing Drills",
              "Contact Resistance Drills",
              "Rebound Explosive Series",
              "Short Sprint Acceleration",
              "Medicine Ball Rotational Power",
              "Agility Footwork for Bigs",
              "Stretch Work",
            ],
          },
        ],
      },

      // =============================================================
      // WEEK 7 — PEAK STRENGTH
      // =============================================================
      {
        week: 7,
        focus: "Peak Strength & Max Output",
        sessions: [
          {
            day: "Monday",
            title: "Max Lower Strength",
            exercises: 6,
            duration: "80 min",
            mainLifts: [
              "Back Squat (5x3 heavy)",
              "Deadlift (5x2)",
              "Front Squat (4x4)",
              "RDL (3x6)",
              "Calf Raises (4x20)",
              "Core Work",
            ],
          },
          {
            day: "Wednesday",
            title: "Max Upper Strength",
            exercises: 6,
            duration: "75 min",
            mainLifts: [
              "Bench Press (5x3)",
              "Weighted Pull-Ups (5x3)",
              "Barbell Rows (4x5)",
              "Incline Bench (3x6)",
              "Tricep Work",
              "Shoulder Mobility",
            ],
          },
          {
            day: "Friday",
            title: "Peak Power Drills",
            exercises: 7,
            duration: "70 min",
            mainLifts: [
              "Power Clean (5x2 heavy)",
              "Depth Jumps (4x4)",
              "Box Jumps (4x5)",
              "Med Ball Power Tosses",
              "Contact Finishes",
              "Agility for Bigs",
              "Recovery",
            ],
          },
        ],
      },

      // =============================================================
      // WEEK 8 — DELOAD
      // =============================================================
      {
        week: 8,
        focus: "Taper, Recovery & Movement Quality",
        sessions: [
          {
            day: "Monday",
            title: "Light Lower Body",
            exercises: 5,
            duration: "50 min",
            mainLifts: [
              "Light Squats (3x8)",
              "Lunges (2x12)",
              "Mobility Flow",
              "Core",
              "Stretch",
            ],
          },
          {
            day: "Wednesday",
            title: "Light Upper Body",
            exercises: 5,
            duration: "50 min",
            mainLifts: [
              "Light Bench (3x8)",
              "Light Rows (3x10)",
              "Band Circuit",
              "Mobility",
              "Cooldown",
            ],
          },
          {
            day: "Friday",
            title: "Active Recovery",
            exercises: 5,
            duration: "45 min",
            mainLifts: [
              "Mobility Drills",
              "Breathing Work",
              "Light Jumps",
              "Easy Conditioning",
              "Stretch Routine",
            ],
          },
        ],
      },

      // =============================================================
      // WEEK 9 — POWER REBUILD
      // =============================================================
      {
        week: 9,
        focus: "Reintroducing Power Movements",
        sessions: [
          {
            day: "Monday",
            title: "Strength + Power Combo",
            exercises: 7,
            duration: "75 min",
            mainLifts: [
              "Back Squat (4x5)",
              "Deadlift (4x4)",
              "Box Jumps (4x5)",
              "Lateral Bounds (3x6)",
              "Hip Thrusts (3x8)",
              "Core Rotation",
              "Mobility",
            ],
          },
          {
            day: "Wednesday",
            title: "Upper Body Power",
            exercises: 7,
            duration: "70 min",
            mainLifts: [
              "Bench Press (4x5)",
              "Push Press (4x4)",
              "Weighted Pull-Ups (4x5)",
              "Plyo Push-Ups (3x8)",
              "Medicine Ball Throws (4x6)",
              "Arms + Shoulders",
              "Cooldown",
            ],
          },
          {
            day: "Friday",
            title: "Basketball Power Integration",
            exercises: 7,
            duration: "70 min",
            mainLifts: [
              "Post Explosive Moves",
              "Contact Power Finishes",
              "Rebound Explosiveness Drills",
              "Sprint Acceleration Work",
              "Agility Lateral Work",
              "Conditioning",
              "Stretch",
            ],
          },
        ],
      },

      // =============================================================
      // WEEK 10 — MAX POWER
      // =============================================================
      {
        week: 10,
        focus: "Peak Power & Explosiveness",
        sessions: [
          {
            day: "Monday",
            title: "Explosive Strength Session",
            exercises: 7,
            duration: "80 min",
            mainLifts: [
              "Trap Bar Jump Deadlifts (5x3)",
              "Depth Jumps (5x4)",
              "Broad Jumps (4x5)",
              "Power Clean (4x3)",
              "Hip Thrusts (3x6)",
              "Core Power",
              "Mobility",
            ],
          },
          {
            day: "Wednesday",
            title: "Explosive Upper Day",
            exercises: 7,
            duration: "75 min",
            mainLifts: [
              "Speed Bench (6x3)",
              "Push Press (4x3)",
              "Weighted Pull-Ups (4x4)",
              "Plyo Push-Ups (4x6)",
              "Med Ball Overhead Throws",
              "Arms Circuit",
              "Cooldown",
            ],
          },
          {
            day: "Friday",
            title: "Peak Post Power",
            exercises: 7,
            duration: "75 min",
            mainLifts: [
              "Post Explosive Series",
              "Contact Strength Drills",
              "Rebound Power Jumps",
              "Short Sprint + Slide Work",
              "Agility for Bigs",
              "Conditioning",
              "Recovery",
            ],
          },
        ],
      },

      // =============================================================
      // WEEK 11 — PERFORMANCE TAPER
      // =============================================================
      {
        week: 11,
        focus: "Taper Before Testing",
        sessions: [
          {
            day: "Monday",
            title: "Pre-Test Strength",
            exercises: 6,
            duration: "60 min",
            mainLifts: [
              "Back Squat (3x4)",
              "Deadlift (3x3)",
              "Hip Thrust (3x5)",
              "Calves",
              "Core",
              "Stretch",
            ],
          },
          {
            day: "Wednesday",
            title: "Pre-Test Upper",
            exercises: 6,
            duration: "55 min",
            mainLifts: [
              "Bench (3x4)",
              "Weighted Pull-Ups (3x4)",
              "Push Press (3x4)",
              "Shoulder Mobility",
              "Band Rows",
              "Cooldown",
            ],
          },
          {
            day: "Friday",
            title: "Movement Quality Day",
            exercises: 5,
            duration: "45 min",
            mainLifts: [
              "Technique Work",
              "Mobility",
              "Activation Drills",
              "Light Conditioning",
              "Breathing",
            ],
          },
        ],
      },

      // =============================================================
      // WEEK 12 — TESTING & ASSESSMENT
      // =============================================================
      {
        week: 12,
        focus: "Strength & Power Final Testing",
        sessions: [
          {
            day: "Monday",
            title: "Lower Body Strength Testing",
            exercises: 5,
            duration: "60 min",
            mainLifts: [
              "Squat 1RM Test",
              "Deadlift 1RM Test",
              "Vertical Jump Test",
              "Movement Screen",
              "Recovery",
            ],
          },
          {
            day: "Wednesday",
            title: "Upper Body Strength Testing",
            exercises: 5,
            duration: "60 min",
            mainLifts: [
              "Bench Press 1RM",
              "Pull-Up Max Test",
              "Power Testing",
              "Shoulder Function Assessment",
              "Cooldown",
            ],
          },
          {
            day: "Friday",
            title: "Final Assessment & Future Plan",
            exercises: 5,
            duration: "55 min",
            mainLifts: [
              "Full Evaluation",
              "Strength Score Review",
              "Power Score Review",
              "Off-Season Planning",
              "Celebration & Wrap-Up",
            ],
          },
        ],
      },
    ],
  },
  "7": {
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
    goals: [
      "Improve first-step explosiveness by 15–20%",
      "Increase acceleration and quick burst speed",
      "Enhance driving power and penetration ability",
      "Develop better hip projection and force transfer",
    ],
    equipment: [
      "Cones",
      "Resistance Bands",
      "Plyometric Box",
      "Basketball",
      "Court Space",
    ],
    reviews: 213,
    completionRate: 86,
    avgImprovement: "17% acceleration increase",
    sessionsPerWeek: 3,
    totalSessions: 24,
    coach: {
      name: "Coach Marcus Allen",
      avatar: "🏀",
      credentials: "CSCS, Performance Coach, 10+ years experience",
    },

    weeks: [
      // WEEK 1 ----------------------------------
      {
        week: 1,
        focus: "Foundation & Mechanics",
        sessions: [
          {
            day: "Monday",
            title: "First Step Mechanics",
            exercises: 6,
            duration: "55 min",
            mainLifts: [
              "Acceleration Position Drills",
              "Wall Lean Starts",
              "Band-Resisted First Steps",
              "Forward Lean Projection",
              "Hip Flexor Activation",
              "Stretch & Mobility",
            ],
          },
          {
            day: "Wednesday",
            title: "Acceleration Technique",
            exercises: 6,
            duration: "55 min",
            mainLifts: [
              "10-Yard Starts",
              "Falling Starts",
              "Band-Resisted Sprints",
              "Low Stance Breakout",
              "Driving Mechanics",
              "Cool Down Mobility",
            ],
          },
          {
            day: "Friday",
            title: "Explosive Footwork",
            exercises: 6,
            duration: "60 min",
            mainLifts: [
              "Cone Jab Steps",
              "Hard Plant First Steps",
              "Lateral-to-Forward Explosions",
              "Hip Projection Drills",
              "Ball-Handling Explosive Drives",
              "Stretch Routine",
            ],
          },
        ],
      },

      // WEEK 2 ----------------------------------
      {
        week: 2,
        focus: "Reactive Explosive Work",
        sessions: [
          {
            day: "Monday",
            title: "Reaction-Based First Step",
            exercises: 6,
            duration: "60 min",
            mainLifts: [
              "Visual Cue First Steps",
              "Audio Reaction Starts",
              "Mirror Drives",
              "Band Breakout Drills",
              "Quick Jab to Drive",
              "Mobility Routine",
            ],
          },
          {
            day: "Wednesday",
            title: "Acceleration + Plyo Blend",
            exercises: 6,
            duration: "55 min",
            mainLifts: [
              "Bounding Series",
              "Explosive Skips",
              "Quick Burst Sprints",
              "Plyometric First Steps",
              "Ball Control Drives",
              "Cooldown",
            ],
          },
          {
            day: "Friday",
            title: "Directional Burst Work",
            exercises: 7,
            duration: "60 min",
            mainLifts: [
              "45° Breakout Drills",
              "Hard Plant Explosions",
              "Crossover First Step",
              "Hip Rotation Power",
              "Ball Fake to Drive",
              "Acceleration Loads",
              "Stretch & Recovery",
            ],
          },
        ],
      },

      // WEEK 3 ----------------------------------
      {
        week: 3,
        focus: "Max Effort Acceleration",
        sessions: [
          {
            day: "Monday",
            title: "Max First Step Output",
            exercises: 6,
            duration: "60 min",
            mainLifts: [
              "Max Effort Starts",
              "Low Stance Explosion",
              "Band Release Sprints",
              "Hard Jab to Explode",
              "Hip Drive Force",
              "Flexibility",
            ],
          },
          {
            day: "Wednesday",
            title: "Power Steps + Plyometrics",
            exercises: 6,
            duration: "60 min",
            mainLifts: [
              "Box Jumps",
              "Broad Jumps",
              "Explosive Bounds",
              "Quick Step Series",
              "Acceleration Mechanics",
              "Mobility",
            ],
          },
          {
            day: "Friday",
            title: "Game-Like Driving Power",
            exercises: 7,
            duration: "65 min",
            mainLifts: [
              "Live Reaction Drives",
              "1-Dribble Explosions",
              "Penetration Step Work",
              "Ball-Speed Drives",
              "Change-of-Pace to Burst",
              "Finish at Rim",
              "Cooldown",
            ],
          },
        ],
      },

      // WEEK 4 ----------------------------------
      {
        week: 4,
        focus: "Deload & Movement Quality",
        sessions: [
          {
            day: "Monday",
            title: "Light Technique Work",
            exercises: 5,
            duration: "45 min",
            mainLifts: [
              "Positioning Drills",
              "Light Starts",
              "Footwork Flow",
              "Mobility Circuit",
              "Stretch",
            ],
          },
          {
            day: "Wednesday",
            title: "Low Intensity Reps",
            exercises: 5,
            duration: "45 min",
            mainLifts: [
              "Controlled Drives",
              "Soft Plyometrics",
              "Ball-Handling Footwork",
              "Hip Activation",
              "Recovery Work",
            ],
          },
          {
            day: "Friday",
            title: "Movement Cleanup",
            exercises: 6,
            duration: "50 min",
            mainLifts: [
              "Technique Review",
              "Light Speed Work",
              "Controlled Reactivity",
              "Balance Drills",
              "Core Activation",
              "Stretching",
            ],
          },
        ],
      },

      // WEEK 5 ----------------------------------
      {
        week: 5,
        focus: "Acceleration Volume Increase",
        sessions: [
          {
            day: "Monday",
            title: "Extended Burst Training",
            exercises: 7,
            duration: "65 min",
            mainLifts: [
              "Repeat Starts",
              "Longer Burst Sprints",
              "Band Work Volume",
              "Directional Breakouts",
              "Driving Power",
              "Ball-Handling Drives",
              "Stretch",
            ],
          },
          {
            day: "Wednesday",
            title: "Explosive Plyo Series",
            exercises: 7,
            duration: "60 min",
            mainLifts: [
              "Depth Jumps",
              "Lateral Bounds",
              "Explosive Skips",
              "High Power Steps",
              "Acceleration Loads",
              "Core Work",
              "Mobility",
            ],
          },
          {
            day: "Friday",
            title: "High-Speed Penetration",
            exercises: 7,
            duration: "65 min",
            mainLifts: [
              "Game Speed Drives",
              "Ball Fake Into Burst",
              "Side Jab Into Drive",
              "1v1 Penetration Drills",
              "Finishing Explosiveness",
              "Conditioning",
              "Recovery Stretch",
            ],
          },
        ],
      },

      // WEEK 6 ----------------------------------
      {
        week: 6,
        focus: "Power Development Phase",
        sessions: [
          {
            day: "Monday",
            title: "First Step Power",
            exercises: 7,
            duration: "65 min",
            mainLifts: [
              "Power Bounds",
              "Band-Resisted Drives",
              "Explosive Cross Step",
              "Hip Power Circuit",
              "Driving Mechanics",
              "Ball-Control Speed",
              "Mobility",
            ],
          },
          {
            day: "Wednesday",
            title: "Vertical + Horizontal Power",
            exercises: 6,
            duration: "60 min",
            mainLifts: [
              "Box Jumps",
              "Broad Jumps",
              "Reactive Plyos",
              "Acceleration Steps",
              "Finishing Power",
              "Cooldown",
            ],
          },
          {
            day: "Friday",
            title: "Game Speed First Step",
            exercises: 8,
            duration: "70 min",
            mainLifts: [
              "Max Effort Drives",
              "Live Reaction Cues",
              "Full Court Burst",
              "Change-of-Rhythm Attacks",
              "Explosive Ball Handling",
              "Finishing Series",
              "Conditioning",
              "Mobility",
            ],
          },
        ],
      },

      // WEEK 7 ----------------------------------
      {
        week: 7,
        focus: "Peak Explosion Phase",
        sessions: [
          {
            day: "Monday",
            title: "Peak Power Sessions",
            exercises: 7,
            duration: "65 min",
            mainLifts: [
              "Max Output Starts",
              "First Step Testing Reps",
              "Band Snap Sprints",
              "Explosive Jabs",
              "Hip Thrust Power",
              "Lateral Explosion",
              "Stretching",
            ],
          },
          {
            day: "Wednesday",
            title: "Competition Plyometrics",
            exercises: 6,
            duration: "60 min",
            mainLifts: [
              "Depth Jumps",
              "Reactive Hops",
              "Explosive Bounds",
              "Quick Transition Steps",
              "Ball-Speed Drives",
              "Cool Down",
            ],
          },
          {
            day: "Friday",
            title: "Game Ready Burst",
            exercises: 8,
            duration: "70 min",
            mainLifts: [
              "Full Speed Drives",
              "Live Crossover First Steps",
              "Attack Closeouts",
              "1v1 Burst Battles",
              "Finishing Under Pressure",
              "Acceleration Conditioning",
              "Movement Efficiency Work",
              "Cooldown Stretch",
            ],
          },
        ],
      },

      // WEEK 8 ----------------------------------
      {
        week: 8,
        focus: "Testing & Final Evaluation",
        sessions: [
          {
            day: "Monday",
            title: "Acceleration Testing",
            exercises: 6,
            duration: "55 min",
            mainLifts: [
              "First Step Speed Test",
              "10-Yard Time",
              "Acceleration Evaluation",
              "Technique Review",
              "Light Ball Work",
              "Mobility",
            ],
          },
          {
            day: "Wednesday",
            title: "Power Output Testing",
            exercises: 5,
            duration: "50 min",
            mainLifts: [
              "Plyometric Power Test",
              "Explosive Step Assessment",
              "Directional Burst Test",
              "Performance Metrics",
              "Recovery",
            ],
          },
          {
            day: "Friday",
            title: "Final Program Assessment",
            exercises: 6,
            duration: "55 min",
            mainLifts: [
              "Full Movement Screen",
              "Game Speed Test",
              "Reactivity Evaluation",
              "Coach Feedback",
              "Program Review",
              "Celebration & Next Steps",
            ],
          },
        ],
      },
    ],
  },
  "8": {
    id: "8",
    title: "Off-Season Basketball Conditioning",
    sport: "Basketball",
    level: "Intermediate",
    duration: "10 weeks",
    description:
      "Complete off-season conditioning program designed to maintain fitness, improve athleticism, and prepare players for the upcoming season.",
    workouts: 30,
    enrolled: 1023,
    rating: 4.6,
    icon: "🏀",
    color: "from-orange-600 to-orange-700",

    goals: [
      "Improve overall conditioning by 20–25%",
      "Build sport-specific stamina for full games",
      "Increase lateral and linear movement efficiency",
      "Develop balanced strength, speed, and aerobic capacity",
      "Prepare physically for pre-season intensity",
    ],

    equipment: [
      "Basketball",
      "Court Space",
      "Cones",
      "Agility Ladder",
      "Resistance Bands",
      "Plyo Box",
      "Medicine Ball",
    ],

    reviews: 257,
    completionRate: 87,
    avgImprovement: "19% conditioning increase",
    sessionsPerWeek: 3,
    totalSessions: 30,

    coach: {
      name: "Coach Anthony Brooks",
      avatar: "🏀",
      credentials: "CSCS, Former Pro Trainer, 15+ years experience",
    },

    weeks: [
      // WEEK 1 --------------------------------------------------------
      {
        week: 1,
        focus: "Conditioning Foundation & Movement Quality",
        sessions: [
          {
            day: "Monday",
            title: "Aerobic Conditioning Base",
            exercises: 6,
            duration: "55 min",
            mainLifts: [
              "20-Min Steady Court Run",
              "Tempo Intervals (5x2 min)",
              "Footwork Ladder: Basics",
              "Lateral Shuffle Conditioning",
              "Core Circuit",
              "Cooldown Stretch",
            ],
          },
          {
            day: "Wednesday",
            title: "Movement Mechanics",
            exercises: 6,
            duration: "55 min",
            mainLifts: [
              "Acceleration Technique Drills",
              "Defensive Slides",
              "Forward / Backward Transitions",
              "Cone Lane Change Drills",
              "Mobility Flow",
              "Light Conditioning Jog",
            ],
          },
          {
            day: "Friday",
            title: "Ball-Handling Conditioning",
            exercises: 6,
            duration: "60 min",
            mainLifts: [
              "Full-Court Dribble Runs",
              "Change-of-Pace Drives",
              "Lane Agility Dribble",
              "2-Ball Conditioning Drills",
              "Shooting Under Fatigue",
              "Stretch Routine",
            ],
          },
        ],
      },

      // WEEK 2 --------------------------------------------------------
      {
        week: 2,
        focus: "Volume Increase & Court Movement",
        sessions: [
          {
            day: "Monday",
            title: "Extended Aerobic Conditioning",
            exercises: 6,
            duration: "60 min",
            mainLifts: [
              "30-Min Court Run",
              "Tempo Court Sprints",
              "Lateral Shuffle Volume",
              "Lane Slides w/ Sprint Finish",
              "Core Strength Circuit",
              "Mobility",
            ],
          },
          {
            day: "Wednesday",
            title: "Speed Conditioning",
            exercises: 6,
            duration: "55 min",
            mainLifts: [
              "10–20–30m Accelerations",
              "Flying 20s",
              "Reaction Sprints",
              "Agility Ladder Advanced",
              "Deceleration Technique",
              "Cooldown",
            ],
          },
          {
            day: "Friday",
            title: "High-Rep Ball Conditioning",
            exercises: 7,
            duration: "60 min",
            mainLifts: [
              "Full-Court Dribble Variations",
              "1-Dribble Pull-Up Reps",
              "Continuous Shooting Circuit",
              "Finishing Reps Under Fatigue",
              "Defensive Closeout + Sprint",
              "Core Activation",
              "Stretching",
            ],
          },
        ],
      },

      // WEEK 3 --------------------------------------------------------
      {
        week: 3,
        focus: "Speed + Agility Conditioning",
        sessions: [
          {
            day: "Monday",
            title: "Speed-Endurance",
            exercises: 6,
            duration: "60 min",
            mainLifts: [
              "150m Court Runs (6x)",
              "Full Court Sprints",
              "Shuttle Variations",
              "Fast Break Conditioning",
              "Core Conditioning",
              "Cooldown Stretch",
            ],
          },
          {
            day: "Wednesday",
            title: "Agility Conditioning",
            exercises: 7,
            duration: "60 min",
            mainLifts: [
              "Cone Agility Patterns",
              "Lateral-to-Forward Drives",
              "Reaction Agility",
              "T-Drill Conditioning",
              "5–10–5 Shuttle",
              "Hip Mobility",
              "Light Jog Cooldown",
            ],
          },
          {
            day: "Friday",
            title: "Ball-Handling Conditioning",
            exercises: 7,
            duration: "65 min",
            mainLifts: [
              "Continuous Dribble Moves",
              "Drive + Kick Conditioning",
              "Full-Court Change of Direction",
              "Transition Dribble Work",
              "Pressure Dribble Conditioning",
              "Fatigue Shooting",
              "Cooldown",
            ],
          },
        ],
      },

      // WEEK 4 --------------------------------------------------------
      {
        week: 4,
        focus: "Recovery & Movement Efficiency",
        sessions: [
          {
            day: "Monday",
            title: "Light Conditioning",
            exercises: 5,
            duration: "45 min",
            mainLifts: [
              "Light Jog + Ball Flow",
              "Easy Lateral Slides",
              "Technique Shooting",
              "Mobility Circuit",
              "Stretch",
            ],
          },
          {
            day: "Wednesday",
            title: "Recovery Footwork",
            exercises: 5,
            duration: "45 min",
            mainLifts: [
              "Footwork Patterns (Low Intensity)",
              "Controlled Dribbling",
              "Movement Flow",
              "Core Activation",
              "Recovery Session",
            ],
          },
          {
            day: "Friday",
            title: "Light Skill Conditioning",
            exercises: 6,
            duration: "50 min",
            mainLifts: [
              "Light Full-Court Dribble",
              "Soft Closeouts",
              "Touch Shooting",
              "Mobility / Stability",
              "Foam Roll Session",
              "Full Stretch Routine",
            ],
          },
        ],
      },

      // WEEK 5 --------------------------------------------------------
      {
        week: 5,
        focus: "Anaerobic Conditioning",
        sessions: [
          {
            day: "Monday",
            title: "High-Intensity Sprints",
            exercises: 7,
            duration: "65 min",
            mainLifts: [
              "100m Court Sprints (10x)",
              "30m Burst Sprints",
              "Closeout + Sprint Series",
              "Shuttle Conditioning",
              "Lane Agility",
              "Core Circuit",
              "Stretch Routine",
            ],
          },
          {
            day: "Wednesday",
            title: "Explosive Agility Conditioning",
            exercises: 7,
            duration: "60 min",
            mainLifts: [
              "Reactive Agility",
              "Hard Closeouts",
              "Explosive First Step Series",
              "Agility Lateral Bursts",
              "Cone Weave Conditioning",
              "Mobility Work",
              "Cooldown",
            ],
          },
          {
            day: "Friday",
            title: "Skill Conditioning Under Fatigue",
            exercises: 8,
            duration: "70 min",
            mainLifts: [
              "Full-Court Dribble Sprints",
              "Contact Finishing Conditioning",
              "Off-the-Dribble Shooting",
              "Transition Scenarios",
              "Continuous Passing Drill",
              "1v1 Fatigue Drill",
              "Core Work",
              "Stretch",
            ],
          },
        ],
      },

      // WEEK 6 --------------------------------------------------------
      {
        week: 6,
        focus: "Strength + Conditioning Blend",
        sessions: [
          {
            day: "Monday",
            title: "Strength Endurance",
            exercises: 7,
            duration: "65 min",
            mainLifts: [
              "Med Ball Slams",
              "Resistance Band Drives",
              "Box Jumps",
              "Broad Jumps",
              "Defensive Slides Volume",
              "Core Circuit",
              "Mobility",
            ],
          },
          {
            day: "Wednesday",
            title: "Speed-Strength Conditioning",
            exercises: 6,
            duration: "60 min",
            mainLifts: [
              "Short Explosive Sprints",
              "Lateral Explosive Steps",
              "Acceleration Bounds",
              "Lane Sprint Races",
              "Hip Mobility",
              "Cool Down",
            ],
          },
          {
            day: "Friday",
            title: "Skill + Strength Conditioning",
            exercises: 7,
            duration: "70 min",
            mainLifts: [
              "Ball-Handling Strength Drills",
              "Drive Into Contact",
              "High-Speed Finishing",
              "Pull-Up Shooting Under Fatigue",
              "Defensive Intensity Drills",
              "Conditioning Core",
              "Recovery Stretch",
            ],
          },
        ],
      },

      // WEEK 7 --------------------------------------------------------
      {
        week: 7,
        focus: "Peak Conditioning Volume",
        sessions: [
          {
            day: "Monday",
            title: "Full Court Conditioning",
            exercises: 7,
            duration: "70 min",
            mainLifts: [
              "Full Court Sprints",
              "Progressive Shuttle Runs",
              "Transition Conditioning",
              "Fast Break Repetitions",
              "Lane Defense Conditioning",
              "Core Endurance",
              "Stretch",
            ],
          },
          {
            day: "Wednesday",
            title: "Agility Peak Conditioning",
            exercises: 7,
            duration: "65 min",
            mainLifts: [
              "Max-Effort Agility Ladders",
              "High-Intensity Cone Work",
              "Explosive Reaction Drills",
              "Lateral Explosion Volume",
              "Change of Direction Conditioning",
              "Mobility Flow",
              "Cooldown Jog",
            ],
          },
          {
            day: "Friday",
            title: "Skill Conditioning Peak",
            exercises: 8,
            duration: "75 min",
            mainLifts: [
              "Full-Court Combo Dribbling",
              "1v1 Drive Conditioning",
              "Game Pace Shooting",
              "Continuous Ball Movement Drills",
              "Finishing Under Pressure",
              "Transition Simulation",
              "Core Blast",
              "Stretch",
            ],
          },
        ],
      },

      // WEEK 8 --------------------------------------------------------
      {
        week: 8,
        focus: "Speed & Power Conditioning",
        sessions: [
          {
            day: "Monday",
            title: "Power + Conditioning",
            exercises: 7,
            duration: "65 min",
            mainLifts: [
              "Box Jumps",
              "Depth Jumps",
              "Explosive Sprints",
              "Defensive Power Slides",
              "High Output Bounds",
              "Core Power",
              "Cooldown",
            ],
          },
          {
            day: "Wednesday",
            title: "Speed Volume",
            exercises: 6,
            duration: "60 min",
            mainLifts: [
              "Sprint Waves",
              "Acceleration Drills",
              "Speed Endurance",
              "Transition Speed",
              "Mobility",
              "Stretch",
            ],
          },
          {
            day: "Friday",
            title: "High-Speed Skill Conditioning",
            exercises: 8,
            duration: "70 min",
            mainLifts: [
              "Full-Court Ball Speed",
              "Explosion Into Drive",
              "Shooting Speed Drills",
              "Breakout Scenarios",
              "Fast Break Reps",
              "Defensive Sprinting",
              "Core Conditioning",
              "Mobility Recovery",
            ],
          },
        ],
      },

      // WEEK 9 --------------------------------------------------------
      {
        week: 9,
        focus: "Competition Conditioning",
        sessions: [
          {
            day: "Monday",
            title: "Game Simulation Conditioning",
            exercises: 7,
            duration: "70 min",
            mainLifts: [
              "Game Pace Transitions",
              "Live Defensive Work",
              "Full Pace Drives",
              "Fast Break Battles",
              "Conditioning Dribble Series",
              "Core & Stability",
              "Cool Down",
            ],
          },
          {
            day: "Wednesday",
            title: "Competition Drills",
            exercises: 7,
            duration: "65 min",
            mainLifts: [
              "Pressure Shooting",
              "1v1 Conditioning",
              "2v2 Continuous",
              "Closeout + Recovery",
              "Transition Offense vs Defense",
              "Mobility + Flexibility",
              "Light Jog",
            ],
          },
          {
            day: "Friday",
            title: "Full Court Competitive Conditioning",
            exercises: 8,
            duration: "75 min",
            mainLifts: [
              "Scrimmage Conditioning",
              "Live Transition Work",
              "High Energy Plays",
              "Full Defensive Rotations",
              "Game Pace Repetitions",
              "Team Conditioning Scenarios",
              "Core Work",
              "Recovery Stretch",
            ],
          },
        ],
      },

      // WEEK 10 --------------------------------------------------------
      {
        week: 10,
        focus: "Final Conditioning Tests & Evaluation",
        sessions: [
          {
            day: "Monday",
            title: "Conditioning Test Day",
            exercises: 6,
            duration: "60 min",
            mainLifts: [
              "Baseline Conditioning Test",
              "Shuttle Run Test",
              "Lane Agility Test",
              "10–20–30m Sprint Times",
              "Movement Quality Review",
              "Stretch",
            ],
          },
          {
            day: "Wednesday",
            title: "Skill Conditioning Test",
            exercises: 6,
            duration: "55 min",
            mainLifts: [
              "Ball Speed Test",
              "Shooting Under Fatigue Test",
              "Dribble Efficiency Test",
              "Defensive Movement Assessment",
              "Mobility Flow",
              "Recovery Protocol",
            ],
          },
          {
            day: "Friday",
            title: "Final Program Evaluation",
            exercises: 6,
            duration: "55 min",
            mainLifts: [
              "Full Performance Assessment",
              "Conditioning Evaluation",
              "Movement Screen",
              "Coach Feedback",
              "Future Training Plan",
              "Celebration & Closeout",
            ],
          },
        ],
      },
    ],
  },
  "9": {
    id: "9",
    title: "Youth Basketball Development",
    sport: "Basketball",
    level: "Beginner",
    duration: "8 weeks",
    description:
      "Age-appropriate training for young athletes to develop athletic fundamentals, coordination, and basic basketball movement patterns.",
    workouts: 24,
    enrolled: 1567,
    rating: 4.8,
    icon: "🏀",
    color: "from-orange-600 to-orange-700",

    goals: [
      "Build fundamental athletic movement skills",
      "Improve coordination, balance, and body control",
      "Develop age-appropriate strength and speed",
      "Learn proper footwork and basketball movement basics",
      "Promote healthy long-term athletic development",
    ],

    equipment: [
      "Youth Basketball",
      "Cones",
      "Agility Ladder",
      "Mini Hurdles",
      "Resistance Bands (light)",
      "Plyo Box (low)",
    ],

    reviews: 401,
    completionRate: 92,
    avgImprovement: "25% movement quality improvement",
    sessionsPerWeek: 3,
    totalSessions: 24,

    coach: {
      name: "Coach Riley Thompson",
      avatar: "🏀",
      credentials: "Youth Development Specialist, 9+ years experience",
    },

    weeks: [
      // WEEK 1 --------------------------------------------------------
      {
        week: 1,
        focus: "Fundamentals & Coordination",
        sessions: [
          {
            day: "Monday",
            title: "Basic Movement Patterns",
            exercises: 5,
            duration: "45 min",
            mainLifts: [
              "Skipping & Coordination Drills",
              "Side-to-Side Shuffles",
              "Balance on One Foot",
              "Basic Jump Mechanics",
              "Stretch & Mobility",
            ],
          },
          {
            day: "Wednesday",
            title: "Footwork Foundations",
            exercises: 5,
            duration: "45 min",
            mainLifts: [
              "Cone Forward/Back Steps",
              "Lateral Step Patterns",
              "Agility Ladder Basics",
              "Mini Hurdle Walkovers",
              "Light Dribbling",
            ],
          },
          {
            day: "Friday",
            title: "Intro to Dribbling Movement",
            exercises: 6,
            duration: "50 min",
            mainLifts: [
              "Stationary Dribbling",
              "Walking Dribble",
              "Change-of-Direction Dribble",
              "Cone Zig-Zag Dribbling",
              "Layup Form Walkthrough",
              "Cooldown Stretch",
            ],
          },
        ],
      },

      // WEEK 2 --------------------------------------------------------
      {
        week: 2,
        focus: "Coordination + Speed Basics",
        sessions: [
          {
            day: "Monday",
            title: "Movement Control",
            exercises: 5,
            duration: "50 min",
            mainLifts: [
              "High Knees (Technique)",
              "Butt Kicks",
              "Controlled Lateral Slides",
              "Balance & Stability Drills",
              "Mobility Cooldown",
            ],
          },
          {
            day: "Wednesday",
            title: "Footwork & Agility",
            exercises: 6,
            duration: "50 min",
            mainLifts: [
              "Ladder In-Out Steps",
              "Cone Circle Movement",
              "Forward/Backward Quick Steps",
              "Mini Hurdle Lateral Steps",
              "Dribble + Move Patterns",
              "Stretch Routine",
            ],
          },
          {
            day: "Friday",
            title: "Basketball Basics",
            exercises: 6,
            duration: "50 min",
            mainLifts: [
              "Dribble Relays",
              "Pass & Move Patterns",
              "Layup Footwork Practice",
              "Form Shooting",
              "Fun Competition Games",
              "Recovery Stretch",
            ],
          },
        ],
      },

      // WEEK 3 --------------------------------------------------------
      {
        week: 3,
        focus: "Movement Quality + Light Conditioning",
        sessions: [
          {
            day: "Monday",
            title: "Coordination Progressions",
            exercises: 6,
            duration: "50 min",
            mainLifts: [
              "Skipping Variations",
              "Directional Shuffle Patterns",
              "Agility Ladder Progressions",
              "Mini Hurdle Quick Steps",
              "Balance Challenges",
              "Stretch",
            ],
          },
          {
            day: "Wednesday",
            title: "Dribbling Under Control",
            exercises: 6,
            duration: "55 min",
            mainLifts: [
              "Cross-Body Dribbles",
              "Stationary Crossovers",
              "Dribble Around Cones",
              "Change-of-Pace Dribble",
              "Finishing Footwork",
              "Cool Down",
            ],
          },
          {
            day: "Friday",
            title: "Intro to Conditioning Games",
            exercises: 6,
            duration: "55 min",
            mainLifts: [
              "Tag Games with Movement Patterns",
              "Relay Races",
              "Dribble Speed Games",
              "Light Defensive Slide Work",
              "Simple Shooting Drills",
              "Mobility",
            ],
          },
        ],
      },

      // WEEK 4 --------------------------------------------------------
      {
        week: 4,
        focus: "Deload, Skill Review, Movement Cleanup",
        sessions: [
          {
            day: "Monday",
            title: "Light Movement",
            exercises: 5,
            duration: "40 min",
            mainLifts: [
              "Light Jog + Coordination",
              "Low-Intensity Ladder",
              "Basic Dribbling",
              "Mobility Flow",
              "Stretch Routine",
            ],
          },
          {
            day: "Wednesday",
            title: "Footwork Refresh",
            exercises: 5,
            duration: "40 min",
            mainLifts: [
              "Simple Foot Patterns",
              "Easy Slides",
              "Light Ball Movement",
              "Layup Footwork",
              "Balance Work",
            ],
          },
          {
            day: "Friday",
            title: "Skill Review",
            exercises: 5,
            duration: "45 min",
            mainLifts: [
              "Dribbling Review",
              "Passing Review",
              "Shooting Form Work",
              "Movement Cleanup",
              "Stretch",
            ],
          },
        ],
      },

      // WEEK 5 --------------------------------------------------------
      {
        week: 5,
        focus: "Strength + Power Introductions",
        sessions: [
          {
            day: "Monday",
            title: "Basic Strength Patterns",
            exercises: 6,
            duration: "55 min",
            mainLifts: [
              "Bodyweight Squats",
              "Glute Bridges",
              "Mini Band Walks",
              "Jump Mechanics Practice",
              "Core Circuit",
              "Mobility",
            ],
          },
          {
            day: "Wednesday",
            title: "Agility & Speed",
            exercises: 6,
            duration: "55 min",
            mainLifts: [
              "Ladder Quick Steps",
              "Cone Change-of-Direction",
              "Short Acceleration Runs",
              "Lateral Agility Drills",
              "Reaction Games",
              "Cooldown",
            ],
          },
          {
            day: "Friday",
            title: "Basketball Skill Conditioning",
            exercises: 7,
            duration: "60 min",
            mainLifts: [
              "Full-Court Dribbling",
              "Dribble Finishing",
              "Passing Movement Patterns",
              "1-Step Acceleration Drives",
              "Form Shooting Reps",
              "Freestyle Play",
              "Stretch",
            ],
          },
        ],
      },

      // WEEK 6 --------------------------------------------------------
      {
        week: 6,
        focus: "Skill + Athletic Progression",
        sessions: [
          {
            day: "Monday",
            title: "Strength & Coordination",
            exercises: 6,
            duration: "55 min",
            mainLifts: [
              "Squat + Balance Series",
              "Glute Activation Drills",
              "Mini Hurdle Steps",
              "Jumps with Soft Landing",
              "Core Control Work",
              "Mobility",
            ],
          },
          {
            day: "Wednesday",
            title: "Dribble + Move Progressions",
            exercises: 7,
            duration: "60 min",
            mainLifts: [
              "Crossover Variations",
              "Inside-Out Dribble",
              "Zig-Zag Dribble Course",
              "Drive Footwork",
              "Layup Practice",
              "Shooting Touch Work",
              "Cooldown",
            ],
          },
          {
            day: "Friday",
            title: "Game-Based Conditioning",
            exercises: 7,
            duration: "60 min",
            mainLifts: [
              "Relays & Speed Games",
              "1v1 Light Drills",
              "3v0 Fast Break Work",
              "Defensive Slides + Recover",
              "Movement Games",
              "Core Work",
              "Stretch",
            ],
          },
        ],
      },

      // WEEK 7 --------------------------------------------------------
      {
        week: 7,
        focus: "Peak Youth Performance",
        sessions: [
          {
            day: "Monday",
            title: "Agility & Quickness",
            exercises: 7,
            duration: "60 min",
            mainLifts: [
              "Agility Ladder Advanced",
              "Mini Hurdle Quick Steps",
              "Acceleration Bursts",
              "Controlled Plyometrics",
              "Reaction Drills",
              "Balance + Core",
              "Mobility",
            ],
          },
          {
            day: "Wednesday",
            title: "Skill Execution",
            exercises: 7,
            duration: "60 min",
            mainLifts: [
              "Dribble Combos",
              "Pass on the Move",
              "Layup Variations",
              "Shooting Progressions",
              "Drive + Kick Drills",
              "Small Area Games",
              "Stretch",
            ],
          },
          {
            day: "Friday",
            title: "Youth Game Simulation",
            exercises: 8,
            duration: "65 min",
            mainLifts: [
              "Fast Break Simulations",
              "Defensive Rotations (Simple)",
              "1v1 Skills",
              "3v3 Games",
              "Dribble Freedom Sessions",
              "Shot Selection Basics",
              "Teamwork Games",
              "Recovery",
            ],
          },
        ],
      },

      // WEEK 8 --------------------------------------------------------
      {
        week: 8,
        focus: "Testing + Celebration Week",
        sessions: [
          {
            day: "Monday",
            title: "Movement Testing",
            exercises: 5,
            duration: "50 min",
            mainLifts: [
              "Agility Test",
              "30ft Movement Test",
              "Balance Assessment",
              "Jump Mechanics Review",
              "Stretch",
            ],
          },
          {
            day: "Wednesday",
            title: "Skill Testing",
            exercises: 5,
            duration: "50 min",
            mainLifts: [
              "Dribbling Assessment",
              "Layup Technique Review",
              "Passing Accuracy Test",
              "Shooting Touch Test",
              "Mobility Flow",
            ],
          },
          {
            day: "Friday",
            title: "Fun Finale + Awards",
            exercises: 6,
            duration: "55 min",
            mainLifts: [
              "Team Games",
              "Relay Events",
              "Skill Contests",
              "Coach Feedback",
              "Improvement Awards",
              "Celebration & Next Steps",
            ],
          },
        ],
      },
    ],
  },
  "10": {
    id: "10",
    title: "Pre-Season Basketball Peak",
    sport: "Basketball",
    level: "Advanced",
    duration: "6 weeks",
    description:
      "Intensive pre-season training designed to peak athleticism, speed, conditioning, and explosive power right before the competitive season begins.",
    workouts: 18,
    enrolled: 734,
    rating: 4.9,
    icon: "🏀",
    color: "from-orange-600 to-orange-700",

    goals: [
      "Reach peak speed, strength, and conditioning for the season",
      "Increase on-court explosiveness and acceleration",
      "Improve game-speed agility and reaction time",
      "Develop elite basketball-specific conditioning",
      "Maximize performance while minimizing fatigue",
    ],

    equipment: [
      "Basketball",
      "Cones",
      "Agility Ladder",
      "Plyometric Box",
      "Resistance Bands",
      "Court Space",
    ],

    reviews: 289,
    completionRate: 91,
    avgImprovement: "15–25% performance increase",
    sessionsPerWeek: 3,
    totalSessions: 18,

    coach: {
      name: "Coach Malik Jordan",
      avatar: "🏀",
      credentials: "CSCS, Pro Skills Developer, 15+ years experience",
    },

    weeks: [
      // WEEK 1 --------------------------------------------------------
      {
        week: 1,
        focus: "Foundation + Pre-Season Assessment",
        sessions: [
          {
            day: "Monday",
            title: "Baseline Testing & Movement Prep",
            exercises: 6,
            duration: "60 min",
            mainLifts: [
              "Speed Testing (¾ Court Sprint)",
              "Agility T-Test Evaluation",
              "Vertical Jump Baseline",
              "Mobility Movement Flow",
              "Light Conditioning Circuit",
              "Cooldown Stretch",
            ],
          },
          {
            day: "Wednesday",
            title: "Movement Quality & Activation",
            exercises: 7,
            duration: "65 min",
            mainLifts: [
              "Dynamic Warmup Series",
              "Glute Activation Circuit",
              "Lateral Slide Technique",
              "Form Running Mechanics",
              "Acceleration Footwork",
              "Core Stability Training",
              "Recovery Work",
            ],
          },
          {
            day: "Friday",
            title: "Intro to Pre-Season Intensity",
            exercises: 7,
            duration: "65 min",
            mainLifts: [
              "Cone Agility Course",
              "Short Burst Sprints",
              "Defensive Slide Patterns",
              "Jump Technique Review",
              "Ball Handling at Speed",
              "Conditioning Finisher",
              "Mobility Cooldown",
            ],
          },
        ],
      },

      // WEEK 2 --------------------------------------------------------
      {
        week: 2,
        focus: "Speed & Acceleration Phase",
        sessions: [
          {
            day: "Monday",
            title: "Max Acceleration Development",
            exercises: 7,
            duration: "65 min",
            mainLifts: [
              "10–20 Yard Sprints",
              "Acceleration Starts",
              "Resisted Band Drives",
              "Flying 20s",
              "Sprint Mechanics Drills",
              "Core Power Work",
              "Stretch Routine",
            ],
          },
          {
            day: "Wednesday",
            title: "Agility & Change of Direction",
            exercises: 7,
            duration: "65 min",
            mainLifts: [
              "5-10-5 Pro Agility",
              "Cone Crossover Patterns",
              "Reactive COD Drills",
              "Shuffle-Sprint Combos",
              "Ball Control at Speed",
              "Recovery Jog + Stretch",
              "Mobility Flow",
            ],
          },
          {
            day: "Friday",
            title: "Explosive Power Integrations",
            exercises: 7,
            duration: "70 min",
            mainLifts: [
              "Box Jumps",
              "Broad Jump Progressions",
              "Lateral Bound Series",
              "Depth Jump Intro",
              "Sprint-to-Jump Work",
              "Conditioning Block",
              "Cooldown",
            ],
          },
        ],
      },

      // WEEK 3 --------------------------------------------------------
      {
        week: 3,
        focus: "High-Intensity Conditioning + Power",
        sessions: [
          {
            day: "Monday",
            title: "Peak Acceleration + Deceleration",
            exercises: 7,
            duration: "70 min",
            mainLifts: [
              "Explosive Starts",
              "Full-Speed COD",
              "Deceleration Mechanics",
              "Sprint–Stop–Sprint",
              "Ball Handling + Sprint Integration",
              "Conditioning Sprints",
              "Stretch Routine",
            ],
          },
          {
            day: "Wednesday",
            title: "Elite Plyometric Work",
            exercises: 7,
            duration: "70 min",
            mainLifts: [
              "Depth Jumps",
              "Single-Leg Bounds",
              "Approach Jumps",
              "Reactive Hops",
              "Jump-to-Sprint Series",
              "Core Power Circuit",
              "Cooldown",
            ],
          },
          {
            day: "Friday",
            title: "Game-Speed Conditioning",
            exercises: 8,
            duration: "75 min",
            mainLifts: [
              "Full Court Transitions",
              "Sprint Conditioning",
              "Defensive Shuffle Intervals",
              "Cut–Recover–Sprint Drills",
              "Ball Speed Work",
              "Fast Break Drills",
              "Conditioning Finisher",
              "Mobility Recovery",
            ],
          },
        ],
      },

      // WEEK 4 --------------------------------------------------------
      {
        week: 4,
        focus: "Deload + Movement Efficiency",
        sessions: [
          {
            day: "Monday",
            title: "Light Conditioning + Mechanics Cleanup",
            exercises: 6,
            duration: "50 min",
            mainLifts: [
              "Light Sprint Technique Review",
              "Easy Shuffle Work",
              "Low-Intensity COD",
              "Mobility Flow",
              "Core Activation",
              "Stretch Routine",
            ],
          },
          {
            day: "Wednesday",
            title: "Form Running & Footwork",
            exercises: 6,
            duration: "50 min",
            mainLifts: [
              "Form Running Drills",
              "Rhythm Footwork",
              "Light Ladder Work",
              "Movement Quality Drills",
              "Breathing + Recovery",
              "Mobility Work",
            ],
          },
          {
            day: "Friday",
            title: "Low-Impact Skill Conditioning",
            exercises: 6,
            duration: "55 min",
            mainLifts: [
              "Ball Handling Flow",
              "Shooting Rhythm Work",
              "Low-Intensity Transitions",
              "Form Footwork Patterns",
              "Light Conditioning",
              "Cooldown Stretch",
            ],
          },
        ],
      },

      // WEEK 5 --------------------------------------------------------
      {
        week: 5,
        focus: "Peak Speed + Game-Ready Conditioning",
        sessions: [
          {
            day: "Monday",
            title: "Max Speed Day",
            exercises: 7,
            duration: "70 min",
            mainLifts: [
              "Full-Speed Sprints",
              "Flying 20s",
              "Sprint Resisted Band Work",
              "COD at Max Velocity",
              "Explosive Slide Work",
              "Sprint Conditioning",
              "Mobility",
            ],
          },
          {
            day: "Wednesday",
            title: "Max Power Plyometrics",
            exercises: 7,
            duration: "70 min",
            mainLifts: [
              "Depth Drop to Jump",
              "Single-Leg Max Bounds",
              "Approach Vertical Jumps",
              "Lateral Explosive Hops",
              "Jump + Sprint Integration",
              "Core Power Series",
              "Stretch",
            ],
          },
          {
            day: "Friday",
            title: "Game Simulation Conditioning",
            exercises: 8,
            duration: "75 min",
            mainLifts: [
              "High-Speed Transition Drills",
              "Game Scenario Conditioning",
              "Full Court COD",
              "Defensive Reaction Drills",
              "Ball Speed Integration",
              "High-Intensity Blocks",
              "Peak Conditioning Test",
              "Recovery Routine",
            ],
          },
        ],
      },

      // WEEK 6 --------------------------------------------------------
      {
        week: 6,
        focus: "Season Peak + Final Testing",
        sessions: [
          {
            day: "Monday",
            title: "Performance Testing",
            exercises: 6,
            duration: "60 min",
            mainLifts: [
              "¾ Court Sprint Test",
              "COD Agility Test",
              "Vertical Jump Testing",
              "Acceleration Assessment",
              "Light Maintenance Work",
              "Cooldown",
            ],
          },
          {
            day: "Wednesday",
            title: "Game Readiness Training",
            exercises: 7,
            duration: "70 min",
            mainLifts: [
              "Full Court Conditioning",
              "High-Intensity Agility Work",
              "Defensive Slide Peak",
              "Ball Speed Drills",
              "Competitive Sprint Series",
              "Core Stability",
              "Mobility",
            ],
          },
          {
            day: "Friday",
            title: "Final Pre-Season Peak Session",
            exercises: 7,
            duration: "65 min",
            mainLifts: [
              "Speed Repeat Sprints",
              "Agility Final Block",
              "Power Output Drills",
              "Game Simulation Drills",
              "Movement Quality Review",
              "Season Prep Discussion",
              "Celebration Cooldown",
            ],
          },
        ],
      },
    ],
  },
  "11": {
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
    goals: [
      "Increase VO2 max by 10-15%",
      "Improve match endurance and recovery",
      "Build aerobic and anaerobic capacity",
      "Reduce fatigue in final 20 minutes of play",
    ],
    equipment: [
      "Soccer Field",
      "Cones",
      "Stopwatch",
      "Heart Rate Monitor",
      "Soccer Ball",
    ],
    reviews: 198,
    completionRate: 88,
    avgImprovement: "22% endurance increase",
    sessionsPerWeek: 3,
    totalSessions: 24,
    coach: {
      name: "Coach Maria Rodriguez",
      avatar: "⚽",
      credentials: "UEFA B License, Sports Scientist, 10+ years experience",
    },
    weeks: [
      {
        week: 1,
        focus: "Aerobic Base Building",
        sessions: [
          {
            day: "Monday",
            title: "Steady State Running",
            exercises: 4,
            duration: "60 min",
            mainLifts: [
              "30min Continuous Run",
              "Tempo Intervals (5x3min)",
              "Active Recovery (10min)",
              "Cool Down Jog",
            ],
          },
          {
            day: "Wednesday",
            title: "Interval Training Introduction",
            exercises: 5,
            duration: "55 min",
            mainLifts: [
              "400m Repeats (8x)",
              "Active Recovery Jogs",
              "Dynamic Stretching",
              "Core Work",
              "Flexibility",
            ],
          },
          {
            day: "Friday",
            title: "Small-Sided Games",
            exercises: 6,
            duration: "70 min",
            mainLifts: [
              "5v5 Continuous Play",
              "Possession Games",
              "Transition Work",
              "Technical Drills",
              "Conditioning Finisher",
              "Cool Down",
            ],
          },
        ],
      },
      {
        week: 2,
        focus: "Volume Increase",
        sessions: [
          {
            day: "Monday",
            title: "Extended Steady State",
            exercises: 4,
            duration: "70 min",
            mainLifts: [
              "40min Progressive Run",
              "Heart Rate Zone Training",
              "Tempo Work (6x3min)",
              "Recovery Protocol",
            ],
          },
          {
            day: "Wednesday",
            title: "High-Intensity Intervals",
            exercises: 6,
            duration: "60 min",
            mainLifts: [
              "200m Repeats (12x)",
              "Recovery Jogs",
              "Speed Endurance",
              "Core Strength",
              "Flexibility Work",
              "Cool Down",
            ],
          },
          {
            day: "Friday",
            title: "Match Simulation Training",
            exercises: 7,
            duration: "75 min",
            mainLifts: [
              "11v11 Half Periods",
              "Position-Specific Runs",
              "Transition Play",
              "Set Pieces",
              "High-Intensity Blocks",
              "Recovery",
              "Stretch",
            ],
          },
        ],
      },
      {
        week: 3,
        focus: "Intensity Progression",
        sessions: [
          {
            day: "Monday",
            title: "Threshold Training",
            exercises: 5,
            duration: "65 min",
            mainLifts: [
              "Lactate Threshold Runs",
              "Tempo Intervals (8x3min)",
              "Active Recovery",
              "Core Circuit",
              "Stretching",
            ],
          },
          {
            day: "Wednesday",
            title: "Speed Endurance",
            exercises: 6,
            duration: "65 min",
            mainLifts: [
              "150m Repeats (15x)",
              "Short Recovery",
              "Acceleration Work",
              "Sprint Mechanics",
              "Cool Down Jog",
              "Flexibility",
            ],
          },
          {
            day: "Friday",
            title: "Game Conditioning",
            exercises: 7,
            duration: "80 min",
            mainLifts: [
              "Full Match Play",
              "Tactical Work",
              "High-Intensity Transitions",
              "Position Specific",
              "Conditioning Block",
              "Active Recovery",
              "Full Stretch",
            ],
          },
        ],
      },
      {
        week: 4,
        focus: "Recovery Week",
        sessions: [
          {
            day: "Monday",
            title: "Easy Aerobic",
            exercises: 4,
            duration: "45 min",
            mainLifts: [
              "Light 25min Run",
              "Easy Ball Work",
              "Mobility Drills",
              "Stretching",
            ],
          },
          {
            day: "Wednesday",
            title: "Active Recovery",
            exercises: 4,
            duration: "40 min",
            mainLifts: [
              "Light Technical Work",
              "Small-Sided Play",
              "Flexibility Focus",
              "Recovery Protocol",
            ],
          },
          {
            day: "Friday",
            title: "Movement Quality",
            exercises: 5,
            duration: "45 min",
            mainLifts: [
              "Form Running",
              "Technique Work",
              "Mobility Flow",
              "Core Activation",
              "Full Body Stretch",
            ],
          },
        ],
      },
      {
        week: 5,
        focus: "Anaerobic Development",
        sessions: [
          {
            day: "Monday",
            title: "Mixed Energy Systems",
            exercises: 5,
            duration: "70 min",
            mainLifts: [
              "Fartlek Training (45min)",
              "Sprint Intervals",
              "Recovery Periods",
              "Core Work",
              "Stretch",
            ],
          },
          {
            day: "Wednesday",
            title: "High-Intensity Repeat Training",
            exercises: 6,
            duration: "65 min",
            mainLifts: [
              "100m Repeats (20x)",
              "Minimal Rest",
              "Sprint Training",
              "Lactate Tolerance",
              "Cool Down",
              "Flexibility",
            ],
          },
          {
            day: "Friday",
            title: "Match Intensity Training",
            exercises: 8,
            duration: "85 min",
            mainLifts: [
              "11v11 Full Match",
              "High-Pressure Situations",
              "Counter-Attack Work",
              "Defensive Transitions",
              "Set Pieces",
              "Conditioning",
              "Recovery",
              "Stretch",
            ],
          },
        ],
      },
      {
        week: 6,
        focus: "Peak Conditioning",
        sessions: [
          {
            day: "Monday",
            title: "VO2 Max Intervals",
            exercises: 5,
            duration: "70 min",
            mainLifts: [
              "3min Hard Efforts (8x)",
              "2min Recovery Jogs",
              "Maximum Intensity Work",
              "Core Strength",
              "Cool Down",
            ],
          },
          {
            day: "Wednesday",
            title: "Repeat Sprint Ability",
            exercises: 6,
            duration: "65 min",
            mainLifts: [
              "30m Sprints (30x)",
              "25sec Recovery",
              "Speed Maintenance",
              "Fatigue Resistance",
              "Core",
              "Stretch",
            ],
          },
          {
            day: "Friday",
            title: "Full Match Simulation",
            exercises: 8,
            duration: "90 min",
            mainLifts: [
              "90min Match Play",
              "Position Rotation",
              "Tactical Scenarios",
              "High-Intensity Blocks",
              "Game Situations",
              "Set Pieces",
              "Cool Down",
              "Recovery",
            ],
          },
        ],
      },
      {
        week: 7,
        focus: "Competition Preparation",
        sessions: [
          {
            day: "Monday",
            title: "Race-Pace Training",
            exercises: 5,
            duration: "70 min",
            mainLifts: [
              "Match-Pace Runs (50min)",
              "Intensity Surges",
              "Recovery Intervals",
              "Core Circuit",
              "Flexibility",
            ],
          },
          {
            day: "Wednesday",
            title: "Peak Speed Endurance",
            exercises: 6,
            duration: "65 min",
            mainLifts: [
              "120m Repeats (18x)",
              "Competition Pace",
              "Fatigue Management",
              "Mental Toughness",
              "Recovery",
              "Stretch",
            ],
          },
          {
            day: "Friday",
            title: "Competition Simulation",
            exercises: 8,
            duration: "90 min",
            mainLifts: [
              "Full Match Conditions",
              "Referee & Rules",
              "Pressure Situations",
              "Tactical Execution",
              "Physical Demands",
              "Mental Focus",
              "Post-Match Recovery",
              "Analysis",
            ],
          },
        ],
      },
      {
        week: 8,
        focus: "Taper & Testing",
        sessions: [
          {
            day: "Monday",
            title: "Fitness Testing Day",
            exercises: 5,
            duration: "60 min",
            mainLifts: [
              "VO2 Max Test",
              "Lactate Threshold Assessment",
              "Endurance Evaluation",
              "Data Collection",
              "Recovery",
            ],
          },
          {
            day: "Wednesday",
            title: "Speed Endurance Test",
            exercises: 4,
            duration: "50 min",
            mainLifts: [
              "Repeat Sprint Test",
              "Recovery Assessment",
              "Performance Metrics",
              "Cool Down",
            ],
          },
          {
            day: "Friday",
            title: "Final Assessment",
            exercises: 5,
            duration: "60 min",
            mainLifts: [
              "Match Fitness Test",
              "Position-Specific Evaluation",
              "Program Review",
              "Goal Setting Session",
              "Celebration",
            ],
          },
        ],
      },
    ],
  },
  "12": {
    id: "12",
    title: "Soccer Speed & Acceleration",
    sport: "Soccer",
    level: "Advanced",
    duration: "10 weeks",
    description:
      "Develop explosive sprint speed, acceleration mechanics, and elite change-of-direction ability to outpace opponents and dominate the pitch.",
    workouts: 30,
    enrolled: 1089,
    rating: 4.8,
    icon: "⚽",
    color: "from-green-600 to-green-700",

    goals: [
      "Increase sprint acceleration and top-end speed",
      "Improve technical sprint mechanics for soccer",
      "Enhance acceleration out of change-of-direction",
      "Boost repeat sprint ability under fatigue",
      "Maximize soccer-specific speed performance",
    ],

    equipment: [
      "Cones",
      "Soccer Field",
      "Mini Hurdles",
      "Agility Ladder",
      "Timing Gates (optional)",
      "Resistance Bands",
    ],

    reviews: 312,
    completionRate: 90,
    avgImprovement: "14–20% sprint performance increase",
    sessionsPerWeek: 3,
    totalSessions: 30,

    coach: {
      name: "Coach André Molina",
      avatar: "⚽",
      credentials: "UEFA A License, Sprint Specialist, 14+ years experience",
    },

    weeks: [
      // WEEK 1 --------------------------------------------------------
      {
        week: 1,
        focus: "Acceleration Mechanics Foundations",
        sessions: [
          {
            day: "Monday",
            title: "Acceleration Fundamentals",
            exercises: 6,
            duration: "65 min",
            mainLifts: [
              "Wall Acceleration Drills",
              "Lean & Drive Starts",
              "10m Acceleration Runs",
              "Mini Hurdle Marches",
              "Low-Speed COD Mechanics",
              "Stretch & Recovery",
            ],
          },
          {
            day: "Wednesday",
            title: "Technical Sprint Prep",
            exercises: 6,
            duration: "60 min",
            mainLifts: [
              "A-Skip Series",
              "B-Skip Series",
              "High-Knee Mechanics",
              "20m Acceleration Builds",
              "Form Running Drills",
              "Mobility Work",
            ],
          },
          {
            day: "Friday",
            title: "Intro to Speed Endurance",
            exercises: 6,
            duration: "70 min",
            mainLifts: [
              "30m Strides",
              "40m Run-Builds",
              "Short Recovery COD Sprints",
              "Acceleration + Brake Patterns",
              "Light Conditioning",
              "Cooldown",
            ],
          },
        ],
      },

      // WEEK 2 --------------------------------------------------------
      {
        week: 2,
        focus: "Early Acceleration + COD Development",
        sessions: [
          {
            day: "Monday",
            title: "First-Step Acceleration",
            exercises: 7,
            duration: "70 min",
            mainLifts: [
              "Explosive First-Step Drills",
              "10–15m Drive Runs",
              "Band-Resisted Starts",
              "Forward Lean Holds",
              "Mini Hurdle Acceleration",
              "Core Work",
              "Stretch",
            ],
          },
          {
            day: "Wednesday",
            title: "COD Footwork",
            exercises: 7,
            duration: "65 min",
            mainLifts: [
              "Lateral Push-Off Work",
              "Plant & Cut Mechanics",
              "45°/90° COD Sprints",
              "Cone Weave Drills",
              "Acceleration Out of Cuts",
              "Reaction Footwork",
              "Cooldown",
            ],
          },
          {
            day: "Friday",
            title: "Speed & Tempo",
            exercises: 6,
            duration: "70 min",
            mainLifts: [
              "30m Tempo Runs",
              "Speed Strides",
              "40m Progressive Accelerations",
              "Rhythm Running",
              "Light Conditioning",
              "Recovery Flow",
            ],
          },
        ],
      },

      // WEEK 3 --------------------------------------------------------
      {
        week: 3,
        focus: "Explosive Acceleration + Early Speed",
        sessions: [
          {
            day: "Monday",
            title: "Power Acceleration",
            exercises: 7,
            duration: "70 min",
            mainLifts: [
              "3-Point Starts",
              "Falling Starts",
              "10–20m Sprints",
              "Mini Hurdle Explosive Steps",
              "Acceleration Bounding",
              "Sprint Mechanics",
              "Stretch",
            ],
          },
          {
            day: "Wednesday",
            title: "COD Power + Reactivity",
            exercises: 7,
            duration: "70 min",
            mainLifts: [
              "Quick React Step Drills",
              "Mirror COD Work",
              "Shuttle COD Patterns",
              "Acceleration Out of Backpedal",
              "Short-Space Sprints",
              "Agility Ladder Advanced",
              "Cooldown Mobility",
            ],
          },
          {
            day: "Friday",
            title: "Speed Endurance Intro",
            exercises: 6,
            duration: "75 min",
            mainLifts: [
              "60m Tempo Sprints",
              "40m Accels",
              "Repeat 20m Sprints",
              "COD Conditioning",
              "Recovery Runs",
              "Stretch Routine",
            ],
          },
        ],
      },

      // WEEK 4 --------------------------------------------------------
      {
        week: 4,
        focus: "Deload + Movement Quality",
        sessions: [
          {
            day: "Monday",
            title: "Light Acceleration Technique",
            exercises: 5,
            duration: "50 min",
            mainLifts: [
              "Form Running Drills",
              "Low-Intensity Accels",
              "Mini Hurdle Rhythm",
              "Mobility Patterning",
              "Stretch",
            ],
          },
          {
            day: "Wednesday",
            title: "Movement Control",
            exercises: 5,
            duration: "50 min",
            mainLifts: [
              "A-Skip Variations",
              "Stride Control Drills",
              "Light COD Mechanics",
              "Footwork Quality Work",
              "Recovery",
            ],
          },
          {
            day: "Friday",
            title: "Skill + Speed Basics",
            exercises: 6,
            duration: "55 min",
            mainLifts: [
              "Ball Movement at Speed",
              "Controlled Burst Drills",
              "Straight-Line Build Ups",
              "Light COD Footwork",
              "Mobility Flow",
              "Cooldown",
            ],
          },
        ],
      },

      // WEEK 5 --------------------------------------------------------
      {
        week: 5,
        focus: "Acceleration Power + Speed Mechanics",
        sessions: [
          {
            day: "Monday",
            title: "Speed Power Production",
            exercises: 7,
            duration: "70 min",
            mainLifts: [
              "Resisted Band Sprints",
              "Hill Sprints (Short)",
              "10m Maximum Power Starts",
              "Explosive Step Series",
              "Acceleration Bounding",
              "Core Strength",
              "Stretch Routine",
            ],
          },
          {
            day: "Wednesday",
            title: "COD Acceleration Focus",
            exercises: 7,
            duration: "70 min",
            mainLifts: [
              "Sharp Plant & Cut",
              "Rapid COD Patterns",
              "Direct Angle Accels",
              "Reactive COD Drills",
              "Sprint Out of Shuffle",
              "Agility Games",
              "Cooldown",
            ],
          },
          {
            day: "Friday",
            title: "Speed Endurance",
            exercises: 6,
            duration: "75 min",
            mainLifts: [
              "60–80m Tempos",
              "40m Run-Builds",
              "Repeat 30m Sprints",
              "COD Conditioning",
              "Active Recovery",
              "Mobility",
            ],
          },
        ],
      },

      // WEEK 6 --------------------------------------------------------
      {
        week: 6,
        focus: "Top-End Speed Introduction",
        sessions: [
          {
            day: "Monday",
            title: "Top-End Mechanics",
            exercises: 7,
            duration: "75 min",
            mainLifts: [
              "High-Knee Cycle Work",
              "A-Skip & B-Skip Series",
              "20–40m Build Sprints",
              "Flying 10s",
              "Speed Bound Progressions",
              "Core Power",
              "Recovery Work",
            ],
          },
          {
            day: "Wednesday",
            title: "COD + Acceleration Combo",
            exercises: 7,
            duration: "70 min",
            mainLifts: [
              "COD → Acceleration Drills",
              "Backpedal → Sprint",
              "Side Shuffle → Sprint",
              "Reaction Acceleration Patterns",
              "Change-of-Pace Bursts",
              "Lateral Power Drills",
              "Cooldown",
            ],
          },
          {
            day: "Friday",
            title: "Speed Endurance Development",
            exercises: 6,
            duration: "75 min",
            mainLifts: [
              "60–90m Tempos",
              "High-Speed Strides",
              "Repeat Sprint Ability Work",
              "Acceleration Under Fatigue",
              "Breathing Control Work",
              "Mobility",
            ],
          },
        ],
      },

      // WEEK 7 --------------------------------------------------------
      {
        week: 7,
        focus: "High-Velocity Speed + Repeat Sprinting",
        sessions: [
          {
            day: "Monday",
            title: "Maximum Sprinting",
            exercises: 7,
            duration: "75 min",
            mainLifts: [
              "Flying 20s",
              "Full-Speed 30m Sprints",
              "High-Velocity Strides",
              "A-Skip Power Series",
              "Mini Hurdle Quick Contacts",
              "Core Speed Work",
              "Stretch Routine",
            ],
          },
          {
            day: "Wednesday",
            title: "Elite COD Work",
            exercises: 7,
            duration: "70 min",
            mainLifts: [
              "90°/135° COD Drills",
              "Multiple-Direction Sprints",
              "Sprint–Stop–Sprint Patterns",
              "Reaction-Based Cuts",
              "Competition COD Drills",
              "Footwork Games",
              "Recovery",
            ],
          },
          {
            day: "Friday",
            title: "Repeat Sprint Ability",
            exercises: 6,
            duration: "80 min",
            mainLifts: [
              "20–30m Repeated Sprints",
              "Sprint Intervals (Short Rest)",
              "Acceleration Under Fatigue",
              "High-Intensity COD",
              "Speed Conditioning",
              "Mobility Flow",
            ],
          },
        ],
      },

      // WEEK 8 --------------------------------------------------------
      {
        week: 8,
        focus: "Peak Speed & Power Conditioning",
        sessions: [
          {
            day: "Monday",
            title: "Peak Speed Mechanics",
            exercises: 7,
            duration: "75 min",
            mainLifts: [
              "Full-Speed Build Sprints",
              "Flying 20s",
              "Acceleration to Flying Work",
              "Top-End Technique",
              "Speed Bounds",
              "Power Core",
              "Cooldown",
            ],
          },
          {
            day: "Wednesday",
            title: "Advanced COD + Acceleration",
            exercises: 7,
            duration: "70 min",
            mainLifts: [
              "Elite-Level COD Patterns",
              "Multi-Angle Sprint Outs",
              "Reactive Sprint Decisions",
              "Acceleration from Chaos Drills",
              "High-Pressure Footwork",
              "Light Conditioning",
              "Recovery",
            ],
          },
          {
            day: "Friday",
            title: "High-Intensity RSA Training",
            exercises: 6,
            duration: "80 min",
            mainLifts: [
              "Repeat 30m Sprints",
              "Sprint Clusters",
              "Max-Intensity COD Work",
              "Acceleration Under Fatigue",
              "Conditioning Blocks",
              "Mobility",
            ],
          },
        ],
      },

      // WEEK 9 --------------------------------------------------------
      {
        week: 9,
        focus: "Competition Speed Preparation",
        sessions: [
          {
            day: "Monday",
            title: "Match-Speed Sprinting",
            exercises: 7,
            duration: "75 min",
            mainLifts: [
              "Sprint Waves",
              "Flying 30s",
              "Full-Speed Accels",
              "Dynamic Top-End Mechanics",
              "Mini Hurdle Quick Contacts",
              "Core Stabilization",
              "Cooldown",
            ],
          },
          {
            day: "Wednesday",
            title: "COD + Sprint Integration",
            exercises: 7,
            duration: "75 min",
            mainLifts: [
              "COD → Sprint Patterns",
              "Reactive Sprint Drills",
              "Game-Like Acceleration",
              "Complex Footwork",
              "Short Burst Competition Drills",
              "Breathing Work",
              "Mobility",
            ],
          },
          {
            day: "Friday",
            title: "Peak Conditioning",
            exercises: 7,
            duration: "80 min",
            mainLifts: [
              "Repeated Sprint Tests",
              "Acceleration Intervals",
              "90–120m Tempo Runs",
              "Sprint Pacing",
              "Controlled COD Work",
              "Light Technical Dribbling",
              "Recovery Flow",
            ],
          },
        ],
      },

      // WEEK 10 --------------------------------------------------------
      {
        week: 10,
        focus: "Testing + Taper Week",
        sessions: [
          {
            day: "Monday",
            title: "Speed Testing Day",
            exercises: 5,
            duration: "60 min",
            mainLifts: [
              "10m Acceleration Test",
              "20m Speed Test",
              "30m Flying Sprint",
              "Mechanics Review",
              "Mobility",
            ],
          },
          {
            day: "Wednesday",
            title: "COD + RSA Testing",
            exercises: 5,
            duration: "55 min",
            mainLifts: [
              "COD T-Test",
              "45°/90° COD Evaluation",
              "Repeat Sprint Ability Test",
              "Light Conditioning",
              "Stretch",
            ],
          },
          {
            day: "Friday",
            title: "Final Session + Debrief",
            exercises: 6,
            duration: "60 min",
            mainLifts: [
              "Acceleration Quality Work",
              "Light Sprint Drills",
              "Ball Movement Speed",
              "Full Stretch Routine",
              "Performance Review",
              "Next Steps Planning",
            ],
          },
        ],
      },
    ],
  },
  "13": {
    id: "13",
    title: "Midfielder Complete Conditioning",
    sport: "Soccer",
    level: "Intermediate",
    duration: "10 weeks",
    description:
      "Build the endurance, strength, agility, and work-rate needed for box-to-box midfield play, including transitional speed, stamina, and on-ball conditioning.",
    workouts: 30,
    enrolled: 923,
    rating: 4.7,
    icon: "⚽",
    color: "from-green-600 to-green-700",

    goals: [
      "Improve match endurance for full-field coverage",
      "Increase speed endurance and high-intensity repeat efforts",
      "Develop agility and transitional quickness",
      "Enhance muscular strength for winning duels",
      "Boost aerobic and anaerobic conditioning for midfield roles",
    ],

    equipment: [
      "Soccer Ball",
      "Agility Cones",
      "Mini Hurdles",
      "Field Markers",
      "Stopwatch",
      "Resistance Bands",
    ],

    reviews: 289,
    completionRate: 87,
    avgImprovement: "20% conditioning increase",
    sessionsPerWeek: 3,
    totalSessions: 30,

    coach: {
      name: "Coach Sofia Anders",
      avatar: "⚽",
      credentials:
        "UEFA B License, Soccer Performance Specialist, 11+ years experience",
    },

    weeks: [
      // WEEK 1 --------------------------------------------------------
      {
        week: 1,
        focus: "Aerobic Base + Movement Fundamentals",
        sessions: [
          {
            day: "Monday",
            title: "Aerobic Conditioning & Technical Work",
            exercises: 6,
            duration: "60 min",
            mainLifts: [
              "25-Min Aerobic Run",
              "Tempo Passing Patterns",
              "Rondo Conditioning Game",
              "Dribble + Jog Cycles",
              "Ball Control at Low Intensity",
              "Stretch Routine",
            ],
          },
          {
            day: "Wednesday",
            title: "Movement Mechanics & Footwork",
            exercises: 6,
            duration: "55 min",
            mainLifts: [
              "Agility Ladder Work",
              "Mini Hurdle Rhythm",
              "Low-Intensity COD Patterns",
              "Acceleration Technique",
              "Balance & Stability Drills",
              "Mobility Work",
            ],
          },
          {
            day: "Friday",
            title: "Small-Sided Endurance",
            exercises: 6,
            duration: "65 min",
            mainLifts: [
              "4v4 Continuous Play",
              "Transition Rondo",
              "Endurance Dribbling",
              "Short Sprint Out of Possession",
              "Technical Conditioning",
              "Cooldown",
            ],
          },
        ],
      },

      // WEEK 2 --------------------------------------------------------
      {
        week: 2,
        focus: "Volume Buildup + Light Intensity",
        sessions: [
          {
            day: "Monday",
            title: "Aerobic Tempo & Touch Work",
            exercises: 6,
            duration: "70 min",
            mainLifts: [
              "30-Min Steady Run",
              "Tempo Passing Circuit",
              "Dribbling Endurance Course",
              "Ball Control Under Fatigue",
              "Core Circuit",
              "Recovery Stretch",
            ],
          },
          {
            day: "Wednesday",
            title: "Footwork + COD Integration",
            exercises: 6,
            duration: "60 min",
            mainLifts: [
              "COD Mechanics",
              "Mini Hurdle Quick Steps",
              "Low–Medium COD Sprints",
              "Acceleration Drills",
              "Lateral Agility",
              "Mobility",
            ],
          },
          {
            day: "Friday",
            title: "Endurance Games",
            exercises: 7,
            duration: "70 min",
            mainLifts: [
              "6v6 Endurance Play",
              "High-Work-Rate Technical Drill",
              "Defensive Transition Runs",
              "Passing Under Fatigue",
              "Ball-Carry Conditioning",
              "Light Tempo Runs",
              "Stretch Routine",
            ],
          },
        ],
      },

      // WEEK 3 --------------------------------------------------------
      {
        week: 3,
        focus: "Intensity Increase + Transitional Speed",
        sessions: [
          {
            day: "Monday",
            title: "Speed Endurance Foundation",
            exercises: 7,
            duration: "70 min",
            mainLifts: [
              "150m Repeats",
              "Tempo Dribbling",
              "Endurance Passing Patterns",
              "Transition Sprints",
              "Ball Control at Speed",
              "Core Strength",
              "Cooldown",
            ],
          },
          {
            day: "Wednesday",
            title: "COD + Reaction",
            exercises: 7,
            duration: "65 min",
            mainLifts: [
              "Reaction COD",
              "45°/90° COD Drills",
              "Shuttle Sprints",
              "Agility Games",
              "First-Step Acceleration",
              "Balance Work",
              "Mobility",
            ],
          },
          {
            day: "Friday",
            title: "Midfield Run Patterns",
            exercises: 7,
            duration: "75 min",
            mainLifts: [
              "Box-to-Box Intervals",
              "Switch-of-Play Conditioning",
              "Transition Runs",
              "High-Work-Rate Technical Drill",
              "Short Recovery Sprints",
              "Light Ball Work",
              "Stretch Routine",
            ],
          },
        ],
      },

      // WEEK 4 --------------------------------------------------------
      {
        week: 4,
        focus: "Deload + Movement Quality",
        sessions: [
          {
            day: "Monday",
            title: "Light Aerobic Work",
            exercises: 5,
            duration: "50 min",
            mainLifts: [
              "Low-Intensity Run",
              "Technical Dribbling",
              "Passing Rhythm Circuits",
              "Light Footwork",
              "Recovery Stretch",
            ],
          },
          {
            day: "Wednesday",
            title: "Light COD Work",
            exercises: 5,
            duration: "50 min",
            mainLifts: [
              "Form Running",
              "Light COD Patterns",
              "Mobility Flow",
              "Balance & Control Drills",
              "Cooldown",
            ],
          },
          {
            day: "Friday",
            title: "Technical Maintenance",
            exercises: 6,
            duration: "55 min",
            mainLifts: [
              "Ball Mastery",
              "Rondo Play",
              "Short Passing Drill",
              "Low-Intensity Conditioning",
              "Core Activation",
              "Stretch Routine",
            ],
          },
        ],
      },

      // WEEK 5 --------------------------------------------------------
      {
        week: 5,
        focus: "Anaerobic Conditioning + High Work Rate",
        sessions: [
          {
            day: "Monday",
            title: "Mixed Conditioning Day",
            exercises: 7,
            duration: "75 min",
            mainLifts: [
              "Fartlek Run (30 min)",
              "High-Work Technical Patterns",
              "Sprint Intervals",
              "Defensive Pressing Runs",
              "Tempo Passing",
              "Core Strength",
              "Cooldown",
            ],
          },
          {
            day: "Wednesday",
            title: "COD + Speed Endurance",
            exercises: 7,
            duration: "70 min",
            mainLifts: [
              "Repeat Sprint COD",
              "Acceleration Work",
              "Backpedal → Sprint",
              "Shuttle Patterns",
              "Mini Hurdle Quick Steps",
              "Footwork Conditioning",
              "Stretch Routine",
            ],
          },
          {
            day: "Friday",
            title: "Endurance Games + Transitions",
            exercises: 8,
            duration: "80 min",
            mainLifts: [
              "7v7 High-Intensity Play",
              "Transitional Run Sets",
              "Long-Range Passing Conditioning",
              "Counter-Press Drills",
              "Short Sprints",
              "Ball Control Under Fatigue",
              "Recovery Jog",
              "Stretch",
            ],
          },
        ],
      },

      // WEEK 6 --------------------------------------------------------
      {
        week: 6,
        focus: "Peak Aerobic Capacity + Speed Integration",
        sessions: [
          {
            day: "Monday",
            title: "VO2 Max Soccer Conditioning",
            exercises: 7,
            duration: "75 min",
            mainLifts: [
              "3-Min High Effort Intervals",
              "Tempo Ball Work",
              "Long-Distance Running Patterns",
              "High-Work Passing Circuit",
              "Sustained Dribbling",
              "Core Conditioning",
              "Cooldown Mobility",
            ],
          },
          {
            day: "Wednesday",
            title: "Speed Integration & Footwork",
            exercises: 7,
            duration: "70 min",
            mainLifts: [
              "20–40m Sprints",
              "Acceleration Out of Cuts",
              "COD Patterns",
              "Mini Hurdle Rhythm",
              "Lateral Transition Drills",
              "Footwork Challenge",
              "Stretch Routine",
            ],
          },
          {
            day: "Friday",
            title: "Match Simulation Conditioning",
            exercises: 8,
            duration: "85 min",
            mainLifts: [
              "8v8 Long Play",
              "High-Intensity Defensive Runs",
              "Midfield Transition Blocks",
              "Combination Play Conditioning",
              "Technical Dribbling",
              "Short Rest Sprints",
              "Light Jog",
              "Cooldown",
            ],
          },
        ],
      },

      // WEEK 7 --------------------------------------------------------
      {
        week: 7,
        focus: "High-Intensity Work Rate + Transitional Power",
        sessions: [
          {
            day: "Monday",
            title: "High-Intensity Intervals",
            exercises: 7,
            duration: "80 min",
            mainLifts: [
              "100m Intervals (20x)",
              "Tempo Passing",
              "Ball-Cycle Conditioning",
              "Transition Runs",
              "High-Work Dribbling",
              "Core Strength",
              "Stretch Routine",
            ],
          },
          {
            day: "Wednesday",
            title: "Advanced COD + Reaction",
            exercises: 7,
            duration: "70 min",
            mainLifts: [
              "Reaction COD",
              "Multi-Angle Acceleration",
              "COD Conditioning",
              "Agility Games",
              "Defensive Footwork",
              "Mini Hurdle Patterns",
              "Mobility",
            ],
          },
          {
            day: "Friday",
            title: "Transitional Conditioning",
            exercises: 8,
            duration: "85 min",
            mainLifts: [
              "Full-Field Transition Runs",
              "Counter-Press Drills",
              "High-Speed Dribbling",
              "Endurance Small-Sided Game",
              "Sprint Blocks",
              "Positional Conditioning",
              "Recovery Jog",
              "Stretch",
            ],
          },
        ],
      },

      // WEEK 8 --------------------------------------------------------
      {
        week: 8,
        focus: "Peak Conditioning + Match Fitness",
        sessions: [
          {
            day: "Monday",
            title: "Peak Aerobic Loading",
            exercises: 7,
            duration: "80 min",
            mainLifts: [
              "Long Intervals",
              "High-Work Technical Play",
              "Ball Movement Conditioning",
              "Transition Runs",
              "Ball Control at Speed",
              "Core Work",
              "Cooldown",
            ],
          },
          {
            day: "Wednesday",
            title: "COD + Sprint Load",
            exercises: 7,
            duration: "75 min",
            mainLifts: [
              "Sprint → COD Patterns",
              "Reactive Drills",
              "Acceleration Mechanics",
              "Timed COD Runs",
              "Mini Hurdle Rhythm",
              "Footwork Control",
              "Mobility Work",
            ],
          },
          {
            day: "Friday",
            title: "Match-Intensity Session",
            exercises: 8,
            duration: "90 min",
            mainLifts: [
              "11v11 Match Play",
              "Long Defensive Runs",
              "High-Pressing Situations",
              "Transition Sprint Blocks",
              "Endurance Dribbling",
              "Game-Specific Conditioning",
              "Cool Down Jog",
              "Stretch Routine",
            ],
          },
        ],
      },

      // WEEK 9 --------------------------------------------------------
      {
        week: 9,
        focus: "Competition Readiness",
        sessions: [
          {
            day: "Monday",
            title: "Race-Pace Conditioning",
            exercises: 6,
            duration: "75 min",
            mainLifts: [
              "Race-Pace Runs",
              "Intensity Surge Drills",
              "High-Tempo Ball Work",
              "Short Recovery Sprints",
              "Technical Conditioning",
              "Cooldown",
            ],
          },
          {
            day: "Wednesday",
            title: "COD Competition Day",
            exercises: 6,
            duration: "70 min",
            mainLifts: [
              "Timed COD Drills",
              "Reaction Competition",
              "Acceleration Out of Chaos",
              "Agility Patterns",
              "Footwork Games",
              "Stretch",
            ],
          },
          {
            day: "Friday",
            title: "Match Conditioning",
            exercises: 7,
            duration: "85 min",
            mainLifts: [
              "10v10 Match Simulation",
              "Work-Rate Challenges",
              "Long Ball Transitions",
              "Counter-Attack Runs",
              "Pressing Blocks",
              "Recovery Runs",
              "Mobility Flow",
            ],
          },
        ],
      },

      // WEEK 10 --------------------------------------------------------
      {
        week: 10,
        focus: "Testing + Recovery Taper",
        sessions: [
          {
            day: "Monday",
            title: "Fitness Testing Day",
            exercises: 5,
            duration: "60 min",
            mainLifts: [
              "VO2 Field Test",
              "Speed Endurance Test",
              "Midfield Transition Test",
              "Data Collection",
              "Mobility",
            ],
          },
          {
            day: "Wednesday",
            title: "Agility & COD Testing",
            exercises: 5,
            duration: "55 min",
            mainLifts: [
              "COD Test (T-Test)",
              "Sprint Test (20–40m)",
              "Reactive Footwork Assessment",
              "Light Conditioning",
              "Stretch",
            ],
          },
          {
            day: "Friday",
            title: "Final Recovery + Review",
            exercises: 6,
            duration: "60 min",
            mainLifts: [
              "Light Technical Drills",
              "Short Build-Up Runs",
              "Ball Control Work",
              "Mobility Circuit",
              "Program Review",
              "Next Steps Planning",
            ],
          },
        ],
      },
    ],
  },
  "14": {
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
    goals: [
      "Increase overall strength by 20-25%",
      "Improve injury resistance",
      "Develop functional movement patterns",
      "Build core stability and balance",
    ],
    equipment: [
      "Barbell",
      "Dumbbells",
      "Medicine Ball",
      "Resistance Bands",
      "Stability Ball",
    ],
    reviews: 334,
    completionRate: 89,
    avgImprovement: "23% strength increase",
    sessionsPerWeek: 3,
    totalSessions: 24,
    coach: {
      name: "Coach Thomas Mueller",
      avatar: "⚽",
      credentials: "CSCS, Soccer Strength Coach, 12+ years experience",
    },
    weeks: [
      {
        week: 1,
        focus: "Movement Foundation",
        sessions: [
          {
            day: "Monday",
            title: "Lower Body Basics",
            exercises: 5,
            duration: "60 min",
            mainLifts: [
              "Goblet Squat (3x12)",
              "Walking Lunges (3x10 each)",
              "Glute Bridges (3x15)",
              "Single Leg Balance (3x30sec)",
              "Calf Raises",
            ],
          },
          {
            day: "Wednesday",
            title: "Upper Body Foundation",
            exercises: 5,
            duration: "55 min",
            mainLifts: [
              "Push-ups (3x12)",
              "Dumbbell Rows (3x10)",
              "Shoulder Press (3x10)",
              "Plank Hold (3x45sec)",
              "Band Pull-Aparts",
            ],
          },
          {
            day: "Friday",
            title: "Core & Stability",
            exercises: 6,
            duration: "50 min",
            mainLifts: [
              "Front Plank (3x60sec)",
              "Side Plank (3x30sec each)",
              "Dead Bug (3x12)",
              "Bird Dog (3x10)",
              "Anti-Rotation Press",
              "Stretching",
            ],
          },
        ],
      },
      {
        week: 2,
        focus: "Progressive Loading",
        sessions: [
          {
            day: "Monday",
            title: "Leg Strength Development",
            exercises: 6,
            duration: "65 min",
            mainLifts: [
              "Back Squat (3x8)",
              "Romanian Deadlift (3x10)",
              "Bulgarian Split Squat (3x8 each)",
              "Leg Curls (3x12)",
              "Hip Thrusts (3x12)",
              "Mobility Work",
            ],
          },
          {
            day: "Wednesday",
            title: "Upper Body Strength",
            exercises: 6,
            duration: "60 min",
            mainLifts: [
              "Bench Press (3x8)",
              "Pull-ups/Assisted (3x6-8)",
              "Overhead Press (3x8)",
              "Rows (3x10)",
              "Core Circuit (3 rounds)",
              "Stretching",
            ],
          },
          {
            day: "Friday",
            title: "Functional Power",
            exercises: 6,
            duration: "55 min",
            mainLifts: [
              "Box Jumps (3x8)",
              "Medicine Ball Slams (3x10)",
              "Lateral Bounds (3x6 each)",
              "Rotational Med Ball Throws (3x10)",
              "Core Work",
              "Flexibility",
            ],
          },
        ],
      },
      {
        week: 3,
        focus: "Volume Increase",
        sessions: [
          {
            day: "Monday",
            title: "Lower Body Volume",
            exercises: 6,
            duration: "70 min",
            mainLifts: [
              "Squats (4x8)",
              "Deadlifts (3x8)",
              "Lunges (3x10 each)",
              "Leg Press (3x12)",
              "Nordics (3x5)",
              "Calves (3x15)",
            ],
          },
          {
            day: "Wednesday",
            title: "Upper Body Volume",
            exercises: 6,
            duration: "65 min",
            mainLifts: [
              "Bench Press (4x8)",
              "Rows (4x8)",
              "Overhead Press (3x8)",
              "Pull-ups (3x8)",
              "Biceps/Triceps (3x10)",
              "Core",
            ],
          },
          {
            day: "Friday",
            title: "Power & Agility",
            exercises: 7,
            duration: "60 min",
            mainLifts: [
              "Broad Jumps (3x5)",
              "Box Jumps (3x8)",
              "Med Ball Work (3x10)",
              "Lateral Hops (3x8)",
              "Agility Ladder",
              "Core",
              "Stretch",
            ],
          },
        ],
      },
      {
        week: 4,
        focus: "Deload & Recovery",
        sessions: [
          {
            day: "Monday",
            title: "Light Lower Body",
            exercises: 5,
            duration: "50 min",
            mainLifts: [
              "Light Squats (2x10)",
              "Bodyweight Lunges (2x12)",
              "Mobility Drills",
              "Foam Rolling",
              "Stretching",
            ],
          },
          {
            day: "Wednesday",
            title: "Light Upper Body",
            exercises: 5,
            duration: "45 min",
            mainLifts: [
              "Light Pressing (2x12)",
              "Easy Rows (2x12)",
              "Mobility Work",
              "Recovery Protocol",
              "Flexibility",
            ],
          },
          {
            day: "Friday",
            title: "Active Recovery",
            exercises: 5,
            duration: "40 min",
            mainLifts: [
              "Movement Flow",
              "Light Core Work",
              "Yoga/Mobility",
              "Foam Rolling",
              "Full Stretch",
            ],
          },
        ],
      },
      {
        week: 5,
        focus: "Strength Building",
        sessions: [
          {
            day: "Monday",
            title: "Heavy Lower Body",
            exercises: 6,
            duration: "75 min",
            mainLifts: [
              "Back Squat (4x6)",
              "Deadlift (4x5)",
              "Front Squat (3x6)",
              "RDL (3x8)",
              "Hip Thrusts (3x10)",
              "Abs",
            ],
          },
          {
            day: "Wednesday",
            title: "Heavy Upper Body",
            exercises: 6,
            duration: "70 min",
            mainLifts: [
              "Bench Press (4x6)",
              "Weighted Pull-ups (4x5)",
              "Overhead Press (4x6)",
              "Barbell Rows (3x8)",
              "Core Circuit",
              "Stretch",
            ],
          },
          {
            day: "Friday",
            title: "Explosive Strength",
            exercises: 6,
            duration: "65 min",
            mainLifts: [
              "Power Clean (4x4)",
              "Box Jumps (4x6)",
              "Medicine Ball Throws (4x8)",
              "Bounding (3x5)",
              "Core Power",
              "Recovery",
            ],
          },
        ],
      },
      {
        week: 6,
        focus: "Hypertrophy Phase",
        sessions: [
          {
            day: "Monday",
            title: "Leg Volume Day",
            exercises: 7,
            duration: "75 min",
            mainLifts: [
              "Squats (4x10)",
              "Leg Press (4x12)",
              "Lunges (3x12 each)",
              "Leg Curls (3x12)",
              "Extensions (3x15)",
              "Calves (4x20)",
              "Abs",
            ],
          },
          {
            day: "Wednesday",
            title: "Upper Volume Day",
            exercises: 7,
            duration: "70 min",
            mainLifts: [
              "Bench (4x10)",
              "Incline Press (3x12)",
              "Pull-ups (4x8)",
              "Rows (4x10)",
              "Shoulder Work (3x12)",
              "Arms (3x12)",
              "Core",
            ],
          },
          {
            day: "Friday",
            title: "Power Endurance",
            exercises: 7,
            duration: "65 min",
            mainLifts: [
              "Jump Circuit (4 rounds)",
              "Med Ball Complex (4 rounds)",
              "Plyometric Series",
              "Speed Work",
              "Agility Drills",
              "Core",
              "Stretch",
            ],
          },
        ],
      },
      {
        week: 7,
        focus: "Peak Strength",
        sessions: [
          {
            day: "Monday",
            title: "Max Effort Lower",
            exercises: 6,
            duration: "75 min",
            mainLifts: [
              "Back Squat (5x5)",
              "Deadlift (5x3)",
              "Front Squat (3x5)",
              "RDL (3x6)",
              "Nordic Curls (3x6)",
              "Core Work",
            ],
          },
          {
            day: "Wednesday",
            title: "Max Effort Upper",
            exercises: 6,
            duration: "70 min",
            mainLifts: [
              "Bench Press (5x5)",
              "Weighted Pull-ups (5x5)",
              "Overhead Press (4x5)",
              "Rows (4x6)",
              "Core Strength",
              "Stretching",
            ],
          },
          {
            day: "Friday",
            title: "Maximum Power",
            exercises: 6,
            duration: "65 min",
            mainLifts: [
              "Power Clean (5x3)",
              "Box Jumps (5x5)",
              "Depth Jumps (4x4)",
              "Med Ball Power (4x6)",
              "Sprint Work",
              "Recovery",
            ],
          },
        ],
      },
      {
        week: 8,
        focus: "Testing & Assessment",
        sessions: [
          {
            day: "Monday",
            title: "Lower Body Testing",
            exercises: 5,
            duration: "60 min",
            mainLifts: [
              "Squat 1RM Test",
              "Deadlift 1RM Test",
              "Jump Testing",
              "Assessment Protocol",
              "Recovery",
            ],
          },
          {
            day: "Wednesday",
            title: "Upper Body Testing",
            exercises: 5,
            duration: "55 min",
            mainLifts: [
              "Bench Press Test",
              "Pull-up Max Test",
              "Power Testing",
              "Evaluation",
              "Cool Down",
            ],
          },
          {
            day: "Friday",
            title: "Final Assessment",
            exercises: 5,
            duration: "60 min",
            mainLifts: [
              "Movement Screen",
              "Strength Evaluation",
              "Performance Metrics",
              "Program Review",
              "Next Steps Planning",
            ],
          },
        ],
      },
    ],
  },
  "15": {
    id: "15",
    title: "Striker Power & Finishing",
    sport: "Soccer",
    level: "Advanced",
    duration: "8 weeks",
    description:
      "Develop explosive power, shooting strength, heading ability, and finishing confidence. This striker-focused program enhances acceleration, vertical power, and scoring mechanics.",
    workouts: 24,
    enrolled: 678,
    rating: 4.8,
    icon: "⚽",
    color: "from-green-600 to-green-700",

    goals: [
      "Increase shot power and ball striking velocity",
      "Improve explosive acceleration toward goal",
      "Develop vertical jump and heading force",
      "Enhance finishing technique under pressure",
      "Boost strength for shielding and hold-up play",
    ],

    equipment: [
      "Soccer Balls",
      "Cones",
      "Mini Hurdles",
      "Resistance Bands",
      "Plyometric Box",
      "Goal + Target Nets",
    ],

    reviews: 244,
    completionRate: 92,
    avgImprovement: "18% shot power increase",
    sessionsPerWeek: 3,
    totalSessions: 24,

    coach: {
      name: "Coach Luca Moretti",
      avatar: "⚽",
      credentials:
        "UEFA A License, Striker Specialist Coach, 15+ years experience",
    },

    weeks: [
      // WEEK 1 --------------------------------------------------------
      {
        week: 1,
        focus: "Power Foundations + Finishing Technique",
        sessions: [
          {
            day: "Monday",
            title: "Lower Body Power Foundations",
            exercises: 6,
            duration: "65 min",
            mainLifts: [
              "Box Jumps (3x6)",
              "Broad Jumps (3x5)",
              "Lateral Bounds (3x5 each)",
              "Acceleration Starts 10m",
              "Strength + Mobility Circuit",
              "Light Stretch",
            ],
          },
          {
            day: "Wednesday",
            title: "Finishing Mechanics",
            exercises: 6,
            duration: "60 min",
            mainLifts: [
              "Ball Striking Technique Work",
              "One-Touch Finishing Drill",
              "First-Time Shots (3 sets)",
              "Inside/Outside Foot Finishing",
              "Target Shooting",
              "Cooldown",
            ],
          },
          {
            day: "Friday",
            title: "Acceleration + Shot Power",
            exercises: 6,
            duration: "65 min",
            mainLifts: [
              "10–15m Sprints",
              "Mini Hurdle Quick Steps",
              "Drive Step Acceleration",
              "Power Striking",
              "Cross + Finish",
              "Mobility",
            ],
          },
        ],
      },

      // WEEK 2 --------------------------------------------------------
      {
        week: 2,
        focus: "Explosive Movements + Pressure Finishing",
        sessions: [
          {
            day: "Monday",
            title: "Explosive Power & Strength",
            exercises: 7,
            duration: "70 min",
            mainLifts: [
              "Depth Jumps (3x5)",
              "Single Leg Bounds (3x6)",
              "Sprint Build-Ups (20m)",
              "Resisted Acceleration",
              "Core Strength",
              "Mobility",
              "Stretch",
            ],
          },
          {
            day: "Wednesday",
            title: "Finishing Under Pressure",
            exercises: 7,
            duration: "65 min",
            mainLifts: [
              "1v1 Finishing",
              "Reactive Shooting",
              "Quick Turn Shot",
              "Finishing From Angles",
              "Low Driven Shot Work",
              "Target Shooting",
              "Cooldown",
            ],
          },
          {
            day: "Friday",
            title: "Speed + Striking",
            exercises: 6,
            duration: "65 min",
            mainLifts: [
              "Acceleration → Finish",
              "Sprint + Receive + Shoot",
              "Counterattack Finishing",
              "Power Striking Drills",
              "Finishing Conditioning Set",
              "Recovery",
            ],
          },
        ],
      },

      // WEEK 3 --------------------------------------------------------
      {
        week: 3,
        focus: "Vertical Power + Advanced Finishing",
        sessions: [
          {
            day: "Monday",
            title: "Jumping & Heading Power",
            exercises: 7,
            duration: "70 min",
            mainLifts: [
              "Vertical Jumps (3x6)",
              "Approach Jump to Header",
              "Bounding Series",
              "Explosive Hurdle Jumps",
              "Core Stability Work",
              "Neck Strength",
              "Mobility Routine",
            ],
          },
          {
            day: "Wednesday",
            title: "Combination Finishing",
            exercises: 7,
            duration: "65 min",
            mainLifts: [
              "Wall Pass → Finish",
              "Layoff Shot Drill",
              "Overlap → Finish",
              "Inside the Box Combinations",
              "Pressure Shot Scenarios",
              "Weak Foot Development",
              "Cooldown",
            ],
          },
          {
            day: "Friday",
            title: "Acceleration From Movement",
            exercises: 6,
            duration: "70 min",
            mainLifts: [
              "Change of Direction → Sprint",
              "Sprint Angle Breakouts",
              "Chase Ball Finishing",
              "High-Power Striking",
              "Shot Repetition Series",
              "Recovery Work",
            ],
          },
        ],
      },

      // WEEK 4 --------------------------------------------------------
      {
        week: 4,
        focus: "Deload + Technical Quality",
        sessions: [
          {
            day: "Monday",
            title: "Light Power Day",
            exercises: 5,
            duration: "50 min",
            mainLifts: [
              "Low-Intensity Plyometrics",
              "Controlled Sprints",
              "Light Ball Striking",
              "Movement Prep",
              "Stretch Routine",
            ],
          },
          {
            day: "Wednesday",
            title: "Technique & Precision",
            exercises: 5,
            duration: "50 min",
            mainLifts: [
              "Ball Mastery",
              "Technical Shooting (Low Power)",
              "Finishing Accuracy Drills",
              "Passing Rhythm",
              "Mobility Flow",
            ],
          },
          {
            day: "Friday",
            title: "Active Recovery",
            exercises: 5,
            duration: "45 min",
            mainLifts: [
              "Light Jog + Ball Touches",
              "Footwork Flow",
              "Light Shooting",
              "Core Activation",
              "Stretch",
            ],
          },
        ],
      },

      // WEEK 5 --------------------------------------------------------
      {
        week: 5,
        focus: "Strength & Power Integration",
        sessions: [
          {
            day: "Monday",
            title: "Power Development",
            exercises: 7,
            duration: "70 min",
            mainLifts: [
              "Resisted Band Sprints",
              "Hill Sprints",
              "Explosive Bounds",
              "Mini Hurdle Quick Contacts",
              "Acceleration Technique",
              "Core Power",
              "Cooldown",
            ],
          },
          {
            day: "Wednesday",
            title: "Advanced Finishing Scenarios",
            exercises: 7,
            duration: "70 min",
            mainLifts: [
              "Volley + Half-Volley Work",
              "Cross → Finish",
              "Turning Finishes",
              "Finishing Under Contact",
              "Reaction Shooting",
              "Weak Foot Repetition",
              "Stretch Routine",
            ],
          },
          {
            day: "Friday",
            title: "Power + Precision",
            exercises: 6,
            duration: "70 min",
            mainLifts: [
              "Sprint → Shot Power",
              "Long-Range Finishing",
              "Top-Corner Targets",
              "2-Ball Finishing",
              "Shooting Fatigue Challenge",
              "Mobility Work",
            ],
          },
        ],
      },

      // WEEK 6 --------------------------------------------------------
      {
        week: 6,
        focus: "Explosive First Step + Match Finishing",
        sessions: [
          {
            day: "Monday",
            title: "Acceleration & Explosiveness",
            exercises: 7,
            duration: "75 min",
            mainLifts: [
              "3-Point Starts",
              "Falling Starts",
              "Reactive Acceleration",
              "COD → Sprint",
              "Mini Hurdle Reactivity",
              "Core Strength",
              "Stretch",
            ],
          },
          {
            day: "Wednesday",
            title: "Match Finishing Patterns",
            exercises: 7,
            duration: "70 min",
            mainLifts: [
              "Breakaway Finishing",
              "1v1 With Keeper",
              "Cut-In Finishing",
              "Back-Post Runs",
              "Hold-Up → Finish",
              "Volley Technique",
              "Cooldown",
            ],
          },
          {
            day: "Friday",
            title: "Finishing Under Fatigue",
            exercises: 6,
            duration: "70 min",
            mainLifts: [
              "Sprint + Shot Repeats",
              "Transition Finishing",
              "Rebound Finishing",
              "First-Time Finishes",
              "Accuracy + Volume Shooting",
              "Mobility Work",
            ],
          },
        ],
      },

      // WEEK 7 --------------------------------------------------------
      {
        week: 7,
        focus: "Peak Power + High-Pressure Finishing",
        sessions: [
          {
            day: "Monday",
            title: "Max Power Output",
            exercises: 7,
            duration: "75 min",
            mainLifts: [
              "Flying 20s",
              "Full-Speed Sprints",
              "Depth Jumps",
              "Explosive Lateral Bounds",
              "Power Plyometrics",
              "Core Power Circuit",
              "Recovery",
            ],
          },
          {
            day: "Wednesday",
            title: "Competitive Finishing",
            exercises: 7,
            duration: "70 min",
            mainLifts: [
              "Finishing Competitions",
              "Timed Shooting Challenges",
              "1v1 Tight-Angle Finishing",
              "Pressure-Based Scoring",
              "Aerial Finishing",
              "Weak Foot Speed Shooting",
              "Stretch Routine",
            ],
          },
          {
            day: "Friday",
            title: "Striker Conditioning",
            exercises: 7,
            duration: "75 min",
            mainLifts: [
              "Repeated Sprint Finishing",
              "Defender Pressure Finishing",
              "Long-Run → Finish",
              "Quick Turn + Shoot",
              "Shot Volume Circuit",
              "Breathing Control",
              "Cooldown",
            ],
          },
        ],
      },

      // WEEK 8 --------------------------------------------------------
      {
        week: 8,
        focus: "Testing + Taper Week",
        sessions: [
          {
            day: "Monday",
            title: "Power & Speed Testing",
            exercises: 5,
            duration: "60 min",
            mainLifts: [
              "10m Acceleration Test",
              "20m Sprint Test",
              "Vertical Jump Test",
              "Light Technical Shooting",
              "Mobility",
            ],
          },
          {
            day: "Wednesday",
            title: "Finishing Assessment",
            exercises: 5,
            duration: "55 min",
            mainLifts: [
              "Shot Power Test",
              "Accuracy Test",
              "Weak Foot Test",
              "Technical Review",
              "Stretch Routine",
            ],
          },
          {
            day: "Friday",
            title: "Final Session + Debrief",
            exercises: 6,
            duration: "60 min",
            mainLifts: [
              "Light Sprint Drills",
              "Ball Mastery",
              "Light Shooting",
              "Mobility Flow",
              "Program Review",
              "Next Steps Planning",
            ],
          },
        ],
      },
    ],
  },
  "16": {
    id: "16",
    title: "Defender Physical Dominance",
    sport: "Soccer",
    level: "Intermediate",
    duration: "10 weeks",
    description:
      "Develop the strength, power, aerial dominance, and tackling ability required for modern defenders. Improve acceleration, reaction speed, and physical presence in duels.",
    workouts: 30,
    enrolled: 567,
    rating: 4.7,
    icon: "⚽",
    color: "from-green-600 to-green-700",

    goals: [
      "Increase strength for tackles, duels, and challenges",
      "Improve aerial dominance and vertical power",
      "Enhance acceleration, agility, and recovery speed",
      "Develop defensive footwork and reaction timing",
      "Build stamina for 90-minute defensive performance",
    ],

    equipment: [
      "Cones",
      "Mini Hurdles",
      "Resistance Bands",
      "Soccer Balls",
      "Plyometric Box",
      "Agility Poles",
    ],

    reviews: 214,
    completionRate: 88,
    avgImprovement: "16% strength & speed increase",
    sessionsPerWeek: 3,
    totalSessions: 30,

    coach: {
      name: "Coach Elias Kavan",
      avatar: "⚽",
      credentials:
        "UEFA A License, Professional Defender Coach, 14+ years experience",
    },

    weeks: [
      // WEEK 1 --------------------------------------------------------
      {
        week: 1,
        focus: "Strength Foundations & Defensive Movement",
        sessions: [
          {
            day: "Monday",
            title: "Lower Body Strength Foundation",
            exercises: 6,
            duration: "65 min",
            mainLifts: [
              "Goblet Squats (3x12)",
              "Forward Lunges (3x10)",
              "Lateral Lunges (3x8)",
              "Glute Bridges (3x12)",
              "Calf Raises (3x15)",
              "Mobility Stretch",
            ],
          },
          {
            day: "Wednesday",
            title: "Defensive Footwork & Lateral Speed",
            exercises: 6,
            duration: "60 min",
            mainLifts: [
              "Defensive Shuffle Drills",
              "Reaction Step Work",
              "Agility Ladder Patterns",
              "Backpedal → Sprint",
              "Mini Hurdle Quick Steps",
              "Cooldown",
            ],
          },
          {
            day: "Friday",
            title: "Controlled Strength + Stability",
            exercises: 6,
            duration: "60 min",
            mainLifts: [
              "Split Squats (3x10)",
              "RDLs (3x10)",
              "Single Leg Balance Drills",
              "Core Bracing Work",
              "Tackling Form Walkthrough",
              "Stretching",
            ],
          },
        ],
      },

      // WEEK 2 --------------------------------------------------------
      {
        week: 2,
        focus: "Acceleration + Strength Progression",
        sessions: [
          {
            day: "Monday",
            title: "Strength Loading Progression",
            exercises: 6,
            duration: "70 min",
            mainLifts: [
              "Back Squats (3x8)",
              "Romanian Deadlift (3x8)",
              "Hip Thrusts (3x10)",
              "Side Lunges (3x10)",
              "Core Rotation Work",
              "Mobility",
            ],
          },
          {
            day: "Wednesday",
            title: "Acceleration & COD Defense",
            exercises: 6,
            duration: "65 min",
            mainLifts: [
              "10m Acceleration Repeats",
              "COD → Closeout Drills",
              "Backpedal → Sprint Defending",
              "Mini Hurdle Acceleration",
              "Quick Shuffle Patterns",
              "Cooldown",
            ],
          },
          {
            day: "Friday",
            title: "Defensive Pressure Footwork",
            exercises: 6,
            duration: "60 min",
            mainLifts: [
              "Jockeying Mechanics",
              "Angle Closeouts",
              "Shadow Defending",
              "1-Step Reaction",
              "Core & Balance",
              "Stretch Routine",
            ],
          },
        ],
      },

      // WEEK 3 --------------------------------------------------------
      {
        week: 3,
        focus: "Explosive Strength + Aerial Foundations",
        sessions: [
          {
            day: "Monday",
            title: "Explosive Strength Training",
            exercises: 7,
            duration: "70 min",
            mainLifts: [
              "Box Jumps (3x5)",
              "Broad Jumps (3x5)",
              "Split Squat Jumps (3x6)",
              "Band-Resisted Squats",
              "Lateral Bounds",
              "Core Strength",
              "Mobility",
            ],
          },
          {
            day: "Wednesday",
            title: "Aerial Control & Timing",
            exercises: 6,
            duration: "65 min",
            mainLifts: [
              "Approach Jumps",
              "Timed Heading Jumps",
              "Vertical Power Work",
              "Jump → Backpedal → Jump",
              "Aerial Technique Drills",
              "Cooldown",
            ],
          },
          {
            day: "Friday",
            title: "Defensive Agility Integration",
            exercises: 6,
            duration: "65 min",
            mainLifts: [
              "COD Defending",
              "Backpedal Patterns",
              "Lateral Reaction Drills",
              "Defensive Acceleration",
              "Strength Maintenance Circuit",
              "Stretch",
            ],
          },
        ],
      },

      // WEEK 4 --------------------------------------------------------
      {
        week: 4,
        focus: "Deload & Movement Quality",
        sessions: [
          {
            day: "Monday",
            title: "Light Movement + Technique",
            exercises: 5,
            duration: "50 min",
            mainLifts: [
              "Light Squat Variations",
              "Mobility Flow",
              "Light Footwork Work",
              "Core Activation",
              "Stretch Routine",
            ],
          },
          {
            day: "Wednesday",
            title: "Low-Intensity Defensive Technique",
            exercises: 5,
            duration: "50 min",
            mainLifts: [
              "Shadow Defending",
              "Controlled Jockeying",
              "Smooth Closeouts",
              "Ball Tracking",
              "Recovery Mobility",
            ],
          },
          {
            day: "Friday",
            title: "Active Recovery",
            exercises: 5,
            duration: "45 min",
            mainLifts: [
              "Jog + Touches",
              "Flexibility Flow",
              "Low-Impact Plyos",
              "Core + Stability",
              "Stretch",
            ],
          },
        ],
      },

      // WEEK 5 --------------------------------------------------------
      {
        week: 5,
        focus: "Strength + Defensive Power",
        sessions: [
          {
            day: "Monday",
            title: "Heavy Strength Day",
            exercises: 7,
            duration: "75 min",
            mainLifts: [
              "Back Squats (4x6)",
              "Deadlifts (4x5)",
              "Split Squats (3x8)",
              "Nordic Curls (3x6)",
              "Core Bracing",
              "Neck Strength",
              "Cooldown",
            ],
          },
          {
            day: "Wednesday",
            title: "Defensive Power Movements",
            exercises: 7,
            duration: "70 min",
            mainLifts: [
              "COD → Defensive Accel",
              "Approach → Clearance",
              "Aerial Footwork",
              "Tackle Form Movement",
              "Lateral Power",
              "Reaction Steps",
              "Mobility",
            ],
          },
          {
            day: "Friday",
            title: "Physical Dominance Drills",
            exercises: 6,
            duration: "65 min",
            mainLifts: [
              "Shielding Strength",
              "1v1 Body Position Drills",
              "Hold-Up Defense",
              "Contact Balance",
              "Core Strength",
              "Stretch Routine",
            ],
          },
        ],
      },

      // WEEK 6 --------------------------------------------------------
      {
        week: 6,
        focus: "Aerial Dominance + Explosiveness",
        sessions: [
          {
            day: "Monday",
            title: "Jump Power + Aerial Control",
            exercises: 7,
            duration: "75 min",
            mainLifts: [
              "Depth Jumps (3x5)",
              "Approach Jumps",
              "High-Point Headers",
              "Explosive Hops",
              "Bounding Series",
              "Core Strength",
              "Recovery",
            ],
          },
          {
            day: "Wednesday",
            title: "1v1 Aerial & Physical Defending",
            exercises: 6,
            duration: "70 min",
            mainLifts: [
              "Aerial Battle Entries",
              "1v1 Shoulder Contact",
              "Positioning for Headers",
              "Long Ball Control",
              "Strength Contest Drills",
              "Cooldown",
            ],
          },
          {
            day: "Friday",
            title: "Explosive COD Defending",
            exercises: 6,
            duration: "70 min",
            mainLifts: [
              "COD Speed",
              "Backpedal → Sprint",
              "Directional Reaction",
              "Closeout + Cutoff",
              "Stability Circuit",
              "Stretch",
            ],
          },
        ],
      },

      // WEEK 7 --------------------------------------------------------
      {
        week: 7,
        focus: "Strength Peak + Tactical Defending",
        sessions: [
          {
            day: "Monday",
            title: "Max Strength Development",
            exercises: 7,
            duration: "75 min",
            mainLifts: [
              "Heavy Squats (5x5)",
              "Deadlifts (5x3)",
              "Split Squats",
              "Hip Thrusts",
              "Nordics",
              "Core Anti-Rotation",
              "Mobility",
            ],
          },
          {
            day: "Wednesday",
            title: "Advanced Defensive Positioning",
            exercises: 6,
            duration: "70 min",
            mainLifts: [
              "Angle Cutoff Drills",
              "1v1 Channel Control",
              "High Line Recovery Runs",
              "Defensive Decision Scenarios",
              "Body Orientation Work",
              "Cooldown",
            ],
          },
          {
            day: "Friday",
            title: "Explosive + Aerial Integration",
            exercises: 6,
            duration: "70 min",
            mainLifts: [
              "Sprint → Jump",
              "Rebound Header Drill",
              "Clearance Technique",
              "Defensive COD",
              "Contact Stability",
              "Stretch",
            ],
          },
        ],
      },

      // WEEK 8 --------------------------------------------------------
      {
        week: 8,
        focus: "Peak Power + High-Speed Defending",
        sessions: [
          {
            day: "Monday",
            title: "High-Speed Strength Integration",
            exercises: 7,
            duration: "75 min",
            mainLifts: [
              "Flying Sprints",
              "Sprint + Stop Defense",
              "High-Speed COD",
              "Reactive Power Jumps",
              "Lateral Shielding Strength",
              "Core Power",
              "Mobility",
            ],
          },
          {
            day: "Wednesday",
            title: "Match-Speed Defensive Scenarios",
            exercises: 7,
            duration: "70 min",
            mainLifts: [
              "1v1 High-Speed Defending",
              "Recovery Defense Runs",
              "Long Ball Interceptions",
              "Aerial + Ground Decisions",
              "Tracking Movement Patterns",
              "Defensive Conditioning Drill",
              "Cooldown",
            ],
          },
          {
            day: "Friday",
            title: "Physical Battle Conditioning",
            exercises: 6,
            duration: "70 min",
            mainLifts: [
              "Contact Resistance Drills",
              "Hold-Up Sandbag Work",
              "Shielding Pressure",
              "Lateral Strength",
              "Core Stability",
              "Stretch",
            ],
          },
        ],
      },

      // WEEK 9 --------------------------------------------------------
      {
        week: 9,
        focus: "Competition Simulation",
        sessions: [
          {
            day: "Monday",
            title: "Game-Speed Strength & Power",
            exercises: 6,
            duration: "70 min",
            mainLifts: [
              "Sprint → Challenge → Clear",
              "Aerial Battle Simulation",
              "Defensive Sprint Chains",
              "Lateral Contest Work",
              "Core + Power",
              "Cooldown",
            ],
          },
          {
            day: "Wednesday",
            title: "Full Defensive Patterns",
            exercises: 7,
            duration: "75 min",
            mainLifts: [
              "Long Ball Defense",
              "1v1 Channels",
              "Positioning vs Runners",
              "High Line Organization",
              "Backpedal → Sprint Races",
              "Heading Under Pressure",
              "Recovery",
            ],
          },
          {
            day: "Friday",
            title: "Match Simulation",
            exercises: 7,
            duration: "75 min",
            mainLifts: [
              "Half-Field Match",
              "Transition Defense",
              "Counterattack Tracking",
              "Tackle Timing",
              "High Ball Clearances",
              "Endurance Finishers",
              "Stretch",
            ],
          },
        ],
      },

      // WEEK 10 --------------------------------------------------------
      {
        week: 10,
        focus: "Testing + Final Defender Assessment",
        sessions: [
          {
            day: "Monday",
            title: "Strength Testing",
            exercises: 5,
            duration: "60 min",
            mainLifts: [
              "Jump Test",
              "Sprint Test 10m + 20m",
              "Agility Test",
              "Strength Assessment",
              "Mobility",
            ],
          },
          {
            day: "Wednesday",
            title: "Defensive Skill Assessment",
            exercises: 5,
            duration: "55 min",
            mainLifts: [
              "1v1 Test",
              "Aerial Dominance Test",
              "Recovery Run Test",
              "Defensive Decision Review",
              "Stretch Routine",
            ],
          },
          {
            day: "Friday",
            title: "Final Review + Taper",
            exercises: 5,
            duration: "50 min",
            mainLifts: [
              "Light Footwork",
              "Technical Movement",
              "Light Jumps",
              "Program Reflection",
              "Next Steps Planning",
            ],
          },
        ],
      },
    ],
  },
  "17": {
    id: "17",
    title: "Soccer Agility & Change of Direction",
    sport: "Soccer",
    level: "Intermediate",
    duration: "6 weeks",
    description:
      "Master fast directional changes, reactive footwork, and elite movement patterns. Improve acceleration, deceleration control, and lateral burst for attacking and defensive play.",
    workouts: 18,
    enrolled: 789,
    rating: 4.6,
    icon: "⚽",
    color: "from-green-600 to-green-700",

    goals: [
      "Improve rapid acceleration and deceleration",
      "Increase sharpness in lateral movement",
      "Enhance reactive agility for 1v1 situations",
      "Develop strong body control and balance",
      "Boost footwork speed and movement efficiency",
    ],

    equipment: [
      "Agility Ladder",
      "Mini Hurdles",
      "Cones",
      "Resistance Bands",
      "Soccer Balls",
      "Agility Poles",
    ],

    reviews: 198,
    completionRate: 91,
    avgImprovement: "14% COD efficiency increase",
    sessionsPerWeek: 3,
    totalSessions: 18,

    coach: {
      name: "Coach Elena Suarez",
      avatar: "⚽",
      credentials:
        "UEFA B License, Speed & Agility Specialist, 12+ years experience",
    },

    weeks: [
      // WEEK 1 ------------------------------------------------------
      {
        week: 1,
        focus: "Fundamentals of Agility & COD",
        sessions: [
          {
            day: "Monday",
            title: "Agility Foundations",
            exercises: 6,
            duration: "55 min",
            mainLifts: [
              "Ladder Footwork Basics",
              "Forward/Back Quick Steps",
              "Lateral Cone Weave",
              "Acceleration Starts 5–10m",
              "Balance & Control Drills",
              "Cooldown Stretch",
            ],
          },
          {
            day: "Wednesday",
            title: "Deceleration Technique",
            exercises: 6,
            duration: "55 min",
            mainLifts: [
              "Deceleration Mechanics",
              "Stop–Start 10m",
              "Cone Drop COD",
              "Controlled Lateral Stops",
              "Balance + Landing Training",
              "Mobility Work",
            ],
          },
          {
            day: "Friday",
            title: "COD Introduction",
            exercises: 6,
            duration: "60 min",
            mainLifts: [
              "Lateral Shuffle Patterns",
              "COD at Cones",
              "Backpedal → Sprint",
              "Diagonal Cutting",
              "Mini Hurdle Quick Feet",
              "Core Stability",
            ],
          },
        ],
      },

      // WEEK 2 ------------------------------------------------------
      {
        week: 2,
        focus: "Acceleration + Reactive Agility",
        sessions: [
          {
            day: "Monday",
            title: "Acceleration Mechanics",
            exercises: 6,
            duration: "60 min",
            mainLifts: [
              "Sprint Starts (3-point)",
              "Falling Starts",
              "Mini Hurdle Acceleration",
              "Cone Zig-Zag Speed",
              "Low-Step Over Agility",
              "Cooldown",
            ],
          },
          {
            day: "Wednesday",
            title: "Reaction-Based Agility",
            exercises: 6,
            duration: "55 min",
            mainLifts: [
              "Partner Direction Calls",
              "Random Cone Reaction Sprints",
              "Jab Step → Sprint",
              "Quick Hop Reactivity",
              "COD from Visual Cue",
              "Mobility Flow",
            ],
          },
          {
            day: "Friday",
            title: "Agility Endurance",
            exercises: 6,
            duration: "60 min",
            mainLifts: [
              "Agility Ladder Speed",
              "COD Repeatability",
              "Lateral Acceleration",
              "Sprint → Shuffle → Sprint",
              "Footwork Conditioning",
              "Stretch",
            ],
          },
        ],
      },

      // WEEK 3 ------------------------------------------------------
      {
        week: 3,
        focus: "Explosive COD & Multi-Directional Movement",
        sessions: [
          {
            day: "Monday",
            title: "Explosive COD Patterns",
            exercises: 7,
            duration: "65 min",
            mainLifts: [
              "Hard Plant COD",
              "90° Cuts",
              "180° Turn Drills",
              "Reactive Acceleration",
              "Cone W-Pattern",
              "Mini Hurdle Burst",
              "Core Work",
            ],
          },
          {
            day: "Wednesday",
            title: "Multi-Directional Sprinting",
            exercises: 6,
            duration: "60 min",
            mainLifts: [
              "Forward/Lateral/Back Sprint Series",
              "COD → Acceleration",
              "Diagonal Breakouts",
              "Side Shuffle → Sprint",
              "Directional Balance",
              "Cooldown",
            ],
          },
          {
            day: "Friday",
            title: "Agility Under Fatigue",
            exercises: 6,
            duration: "60 min",
            mainLifts: [
              "Sprint → Ladder → Sprint",
              "COD Repeat Series",
              "High Tempo Cone Weave",
              "Lateral Burst Conditioning",
              "Endurance Footwork",
              "Mobility Work",
            ],
          },
        ],
      },

      // WEEK 4 ------------------------------------------------------
      {
        week: 4,
        focus: "Deload + Technique Restoration",
        sessions: [
          {
            day: "Monday",
            title: "Light Agility",
            exercises: 5,
            duration: "45 min",
            mainLifts: [
              "Low-Intensity Ladder",
              "Controlled COD",
              "Light Acceleration Work",
              "Footwork Rhythm",
              "Stretch",
            ],
          },
          {
            day: "Wednesday",
            title: "Technical Movement Flow",
            exercises: 5,
            duration: "45 min",
            mainLifts: [
              "Movement Prep",
              "Smooth Directional Changes",
              "Jockeying Footwork",
              "Controlled Patterns",
              "Mobility",
            ],
          },
          {
            day: "Friday",
            title: "Active Recovery",
            exercises: 5,
            duration: "40 min",
            mainLifts: [
              "Jog + Touches",
              "Light Agility Flow",
              "Balance Control",
              "Core Activation",
              "Stretch Routine",
            ],
          },
        ],
      },

      // WEEK 5 ------------------------------------------------------
      {
        week: 5,
        focus: "High-Speed COD + Game Situations",
        sessions: [
          {
            day: "Monday",
            title: "High-Speed Agility",
            exercises: 7,
            duration: "65 min",
            mainLifts: [
              "Full-Speed COD",
              "Sprint → Cut → Sprint",
              "Rapid Lateral Bursts",
              "Agility Poles Reaction",
              "COD Combination Patterns",
              "Core Strength",
              "Cooldown",
            ],
          },
          {
            day: "Wednesday",
            title: "1v1 Movement Patterns",
            exercises: 6,
            duration: "60 min",
            mainLifts: [
              "Attacker Movement COD",
              "Fake → Explode",
              "Stop–Go Attacking",
              "Acceleration After Feint",
              "Directional Fakes",
              "Mobility Work",
            ],
          },
          {
            day: "Friday",
            title: "Agility Conditioning",
            exercises: 6,
            duration: "60 min",
            mainLifts: [
              "High Tempo Ladder",
              "Repeated COD Sprints",
              "Mini Hurdle Burst Work",
              "Cone Box Circuits",
              "Footwork Conditioning Set",
              "Stretch Routine",
            ],
          },
        ],
      },

      // WEEK 6 ------------------------------------------------------
      {
        week: 6,
        focus: "Peak Agility + Final Testing",
        sessions: [
          {
            day: "Monday",
            title: "Peak COD Speed",
            exercises: 6,
            duration: "60 min",
            mainLifts: [
              "Max Effort COD",
              "Sprint → Sharp Cut",
              "Full-Speed COD Weave",
              "Fast Lateral Shuffle",
              "Explosive Starts",
              "Cooldown Mobility",
            ],
          },
          {
            day: "Wednesday",
            title: "Agility + Reaction Testing",
            exercises: 6,
            duration: "55 min",
            mainLifts: [
              "Reaction Sprint Test",
              "Timing COD Test",
              "Quickness Ladder Test",
              "Directional Reaction",
              "Balance Assessment",
              "Stretch",
            ],
          },
          {
            day: "Friday",
            title: "Final Session + Review",
            exercises: 6,
            duration: "55 min",
            mainLifts: [
              "Light Multi-Directional Sprints",
              "Ladder Flow",
              "Smooth COD Movement",
              "Program Reflection",
              "Mobility",
              "Future Training Plan",
            ],
          },
        ],
      },
    ],
  },
  "18": {
    id: "18",
    title: "Goalkeeper Athletic Development",
    sport: "Soccer",
    level: "Intermediate",
    duration: "8 weeks",
    description:
      "Specialized athletic development for goalkeepers focusing on explosiveness, lateral movement, diving power, reaction time, aerial control, and shot-stopping agility.",
    workouts: 24,
    enrolled: 423,
    rating: 4.9,
    icon: "⚽",
    color: "from-green-600 to-green-700",
  
    goals: [
      "Improve reaction time and explosive diving",
      "Increase lateral quickness and footwork speed",
      "Develop power for aerial challenges and shot stopping",
      "Enhance stability, balance, and core control",
      "Build endurance for repeated high-intensity efforts"
    ],
  
    equipment: [
      "Cones",
      "Medicine Ball",
      "Agility Ladder",
      "Mini Hurdles",
      "Goalkeeper Gloves",
      "Soccer Balls",
      "Resistance Bands"
    ],
  
    reviews: 154,
    completionRate: 92,
    avgImprovement: "19% reaction speed improvement",
    sessionsPerWeek: 3,
    totalSessions: 24,
  
    coach: {
      name: "Coach Daniel Herrera",
      avatar: "⚽",
      credentials:
        "UEFA GK License, Professional Goalkeeper Trainer, 11+ years experience"
    },
  
    weeks: [
      // WEEK 1 ------------------------------------------------------
      {
        week: 1,
        focus: "Footwork Fundamentals + Reaction Basics",
        sessions: [
          {
            day: "Monday",
            title: "Goalkeeper Footwork Foundation",
            exercises: 6,
            duration: "55 min",
            mainLifts: [
              "Lateral GK Shuffle",
              "Forward/Back Goal Line Steps",
              "Mini Hurdle Quick Feet",
              "Cone Angled Movement",
              "Balance + Stability Hold",
              "Cooldown Stretch"
            ]
          },
          {
            day: "Wednesday",
            title: "Reaction Time Introduction",
            exercises: 6,
            duration: "55 min",
            mainLifts: [
              "Ball Drop Reaction",
              "Partner Direction Call",
              "Light Diving Reaction",
              "Quick Shuffle → Set Position",
              "Core Activation",
              "Mobility Work"
            ]
          },
          {
            day: "Friday",
            title: "Positioning + Handling Flow",
            exercises: 6,
            duration: "60 min",
            mainLifts: [
              "Set Position Drills",
              "Low Ball Collection",
              "High Ball Take",
              "Footwork → Catch",
              "Angle Coverage Walkthrough",
              "Recovery Stretch"
            ]
          }
        ]
      },
  
      // WEEK 2 ------------------------------------------------------
      {
        week: 2,
        focus: "Explosive Lateral Movement",
        sessions: [
          {
            day: "Monday",
            title: "Lateral Power Development",
            exercises: 6,
            duration: "60 min",
            mainLifts: [
              "Side-to-Side Power Shuffle",
              "Lateral Bound Jumps",
              "Explosive Step-Outs",
              "Mini Hurdle Lateral Run",
              "Core Stability Work",
              "Mobility"
            ]
          },
          {
            day: "Wednesday",
            title: "Shot-Stopping Reaction",
            exercises: 6,
            duration: "55 min",
            mainLifts: [
              "Ball Toss Reaction",
              "Low Dive Mechanics",
              "High Shot Parry",
              "Quick Set + Save",
              "Agility Ladder Footwork",
              "Cooldown"
            ]
          },
          {
            day: "Friday",
            title: "Aerial Movement Fundamentals",
            exercises: 6,
            duration: "60 min",
            mainLifts: [
              "High Ball Footwork",
              "Jump + Catch Mechanics",
              "Landing Control",
              "Med Ball Chest Pass",
              "Stability Jumps",
              "Stretch Routine"
            ]
          }
        ]
      },
  
      // WEEK 3 ------------------------------------------------------
      {
        week: 3,
        focus: "Diving Mechanics + Explosive Power",
        sessions: [
          {
            day: "Monday",
            title: "Explosive Diving Mechanics",
            exercises: 7,
            duration: "65 min",
            mainLifts: [
              "Low Dive Technique",
              "Mid-Level Diving",
              "Explosive Launch Step",
              "Band-Resisted Lateral Drive",
              "Reaction Dive",
              "Core Power",
              "Cooldown"
            ]
          },
          {
            day: "Wednesday",
            title: "Goal Line Quickness",
            exercises: 6,
            duration: "60 min",
            mainLifts: [
              "Goal Line Shuffle Speed",
              "Quick Recovery to Feet",
              "Backpedal → Save",
              "Mini Hurdles Speed",
              "Agility Reaction",
              "Stretch"
            ]
          },
          {
            day: "Friday",
            title: "High Ball Strength & Power",
            exercises: 7,
            duration: "65 min",
            mainLifts: [
              "High Catch Repeated Reps",
              "Jump + Contact Simulation",
              "Band-Resisted Takeoffs",
              "Med Ball Upward Throws",
              "Balance on Contact",
              "Landing Mechanics",
              "Mobility"
            ]
          }
        ]
      },
  
      // WEEK 4 ------------------------------------------------------
      {
        week: 4,
        focus: "Deload + Skill Reinforcement",
        sessions: [
          {
            day: "Monday",
            title: "Light Footwork & Handling",
            exercises: 5,
            duration: "45 min",
            mainLifts: [
              "Controlled GK Shuffle",
              "Easy Handling",
              "Light Angled Movement",
              "Core Activation",
              "Stretch"
            ]
          },
          {
            day: "Wednesday",
            title: "Technical Cleanup",
            exercises: 5,
            duration: "45 min",
            mainLifts: [
              "Set Position",
              "Clean Catch Technique",
              "Controlled Reaction Saves",
              "Movement Efficiency Flow",
              "Mobility"
            ]
          },
          {
            day: "Friday",
            title: "Recovery Session",
            exercises: 5,
            duration: "40 min",
            mainLifts: [
              "Low Intensity Footwork",
              "Light Agility Patterns",
              "Balance + Stability",
              "Breathing Work",
              "Long Stretch Routine"
            ]
          }
        ]
      },
  
      // WEEK 5 ------------------------------------------------------
      {
        week: 5,
        focus: "Advanced Diving + Agility Integration",
        sessions: [
          {
            day: "Monday",
            title: "Advanced Diving Progressions",
            exercises: 7,
            duration: "70 min",
            mainLifts: [
              "Explosive Low Dive",
              "High Velocity Saves",
              "Band-Resisted Dives",
              "Extended Range Diving",
              "Quick Recovery + Save",
              "Core Strength",
              "Cooldown"
            ]
          },
          {
            day: "Wednesday",
            title: "Reaction & Footwork Combo",
            exercises: 7,
            duration: "65 min",
            mainLifts: [
              "Cone Reaction Sprint",
              "Shot Reaction Saves",
              "Lateral Burst + Dive",
              "Angle Adjustment",
              "Shuttle Footwork",
              "Agility Ladder",
              "Stretch"
            ]
          },
          {
            day: "Friday",
            title: "Aerial Control Under Pressure",
            exercises: 7,
            duration: "70 min",
            mainLifts: [
              "Jump into Contact",
              "High Ball Under Pressure",
              "Double Contact Catch",
              "Med Ball Catching Power",
              "Lateral Jump → Catch",
              "Balance Control",
              "Mobility"
            ]
          }
        ]
      },
  
      // WEEK 6 ------------------------------------------------------
      {
        week: 6,
        focus: "Game Speed Reaction + Shot Stopping",
        sessions: [
          {
            day: "Monday",
            title: "Game Speed Reaction",
            exercises: 7,
            duration: "70 min",
            mainLifts: [
              "Unpredictable Ball Drops",
              "Shot Reaction Under Fatigue",
              "Quick Reset → Save",
              "Cutback Reaction",
              "Angle Adjustment Drill",
              "Core Power",
              "Stretch"
            ]
          },
          {
            day: "Wednesday",
            title: "Fast Footwork + Diving Flow",
            exercises: 7,
            duration: "65 min",
            mainLifts: [
              "Rapid Goal Line Shuffle",
              "Sprint → Dive",
              "Recovery Footwork",
              "COD Footwork",
              "Reaction Catching",
              "Mini Hurdle Speed",
              "Mobility"
            ]
          },
          {
            day: "Friday",
            title: "All-Around Shot Stopping",
            exercises: 7,
            duration: "70 min",
            mainLifts: [
              "Low Shots",
              "High Shots",
              "Near Post Saves",
              "Far Post Dive",
              "Reaction Parry",
              "Keeper Conditioning Set",
              "Cooldown"
            ]
          }
        ]
      },
  
      // WEEK 7 ------------------------------------------------------
      {
        week: 7,
        focus: "Peak Performance + Match Simulation",
        sessions: [
          {
            day: "Monday",
            title: "Peak Diving Output",
            exercises: 7,
            duration: "70 min",
            mainLifts: [
              "Max Effort Diving",
              "Full Extension Saves",
              "Explosive Push-Off",
              "Lateral Dive Sprints",
              "Net Recovery Saves",
              "Core Strength",
              "Stretch"
            ]
          },
          {
            day: "Wednesday",
            title: "Match Simulation Work",
            exercises: 7,
            duration: "75 min",
            mainLifts: [
              "Crosses Under Pressure",
              "Rebound Save Drill",
              "High-Speed Experience Shots",
              "Breakaway Situations",
              "Cutback Reaction",
              "Keeper Endurance",
              "Mobility"
            ]
          },
          {
            day: "Friday",
            title: "Game-Like Conditioning",
            exercises: 7,
            duration: "70 min",
            mainLifts: [
              "Goal Line Intervals",
              "Sprint → Dive Series",
              "High Ball Conditioning",
              "Shot Volume Training",
              "Recovery + Reset",
              "Core Control",
              "Cooldown"
            ]
          }
        ]
      },
  
      // WEEK 8 ------------------------------------------------------
      {
        week: 8,
        focus: "Testing + Final Assessment",
        sessions: [
          {
            day: "Monday",
            title: "Reaction & Dive Testing",
            exercises: 6,
            duration: "60 min",
            mainLifts: [
              "Reaction Speed Test",
              "Low Dive Test",
              "High Dive Test",
              "Footwork Speed Assessment",
              "Light Maintenance",
              "Stretch"
            ]
          },
          {
            day: "Wednesday",
            title: "Aerial & Handling Testing",
            exercises: 6,
            duration: "55 min",
            mainLifts: [
              "High Ball Test",
              "3-Point Handling Test",
              "Balance + Stability Assessment",
              "Light Mobility",
              "Breathing Work",
              "Cooldown"
            ]
          },
          {
            day: "Friday",
            title: "Final Evaluation + Review",
            exercises: 6,
            duration: "55 min",
            mainLifts: [
              "Movement Quality Review",
              "Goalkeeper Fitness Test",
              "Technique Breakdown",
              "Progress Summary",
              "Next Training Roadmap",
              "Celebration Cooldown"
            ]
          }
        ]
      }
    ]
  },
  "19": {
    id: "19",
    title: "Youth Soccer Athletic Foundation",
    sport: "Soccer",
    level: "Beginner",
    duration: "8 weeks",
    description:
      "Age-appropriate athletic development for young soccer players focusing on coordination, speed, balance, fun conditioning, and foundational strength. Designed to build healthy movement patterns while keeping training enjoyable and engaging.",
    workouts: 24,
    enrolled: 1623,
    rating: 4.8,
    icon: "⚽",
    color: "from-green-600 to-green-700",
  
    goals: [
      "Improve coordination, balance, and agility",
      "Build safe foundational strength and body control",
      "Develop speed and quickness through fun drills",
      "Enhance ball handling and movement skills",
      "Boost confidence and athletic awareness"
    ],
  
    equipment: [
      "Cones",
      "Mini Hurdles",
      "Agility Ladder",
      "Small Soccer Balls",
      "Resistance Bands (light)",
      "Markers"
    ],
  
    reviews: 412,
    completionRate: 93,
    avgImprovement: "21% athletic skill improvement",
    sessionsPerWeek: 3,
    totalSessions: 24,
  
    coach: {
      name: "Coach Lily Thompson",
      avatar: "⚽",
      credentials:
        "Youth Development Specialist, USSF C License, 8+ years experience"
    },
  
    weeks: [
      // WEEK 1 ------------------------------------------------------
      {
        week: 1,
        focus: "Basic Movement Patterns & Coordination",
        sessions: [
          {
            day: "Monday",
            title: "Coordination Foundations",
            exercises: 5,
            duration: "45 min",
            mainLifts: [
              "Ladder Steps (Basic)",
              "Cone Zig-Zag Run",
              "Balance Walks",
              "Light Ball Dribbling",
              "Stretching"
            ]
          },
          {
            day: "Wednesday",
            title: "Agility Fundamentals",
            exercises: 5,
            duration: "45 min",
            mainLifts: [
              "Mini Hurdle Step-Overs",
              "Forward/Back Shuttle Runs",
              "Directional Changes",
              "Fun Reaction Games",
              "Cooldown"
            ]
          },
          {
            day: "Friday",
            title: "Body Control Basics",
            exercises: 5,
            duration: "45 min",
            mainLifts: [
              "Movement Prep Series",
              "Single-Leg Balance",
              "Core Activation",
              "Light Dribbling Circuits",
              "Mobility Work"
            ]
          }
        ]
      },
  
      // WEEK 2 ------------------------------------------------------
      {
        week: 2,
        focus: "Speed Introduction + Ball Control",
        sessions: [
          {
            day: "Monday",
            title: "Speed Basics",
            exercises: 6,
            duration: "50 min",
            mainLifts: [
              "Sprint Starts (short)",
              "Acceleration Mechanics",
              "Light Chase Sprints",
              "Mini Hurdle Speed",
              "Coordination Games",
              "Stretch"
            ]
          },
          {
            day: "Wednesday",
            title: "Ball Control Development",
            exercises: 5,
            duration: "45 min",
            mainLifts: [
              "Cone Dribbling",
              "Inside/Outside Touches",
              "Ball Shielding Basics",
              "Light Passing Work",
              "Mobility"
            ]
          },
          {
            day: "Friday",
            title: "Movement Variety",
            exercises: 6,
            duration: "50 min",
            mainLifts: [
              "Forward/Lateral Runs",
              "Agility Ladder Flow",
              "Stop-Go Drills",
              "Reaction Direction Change",
              "Core Balance",
              "Stretch"
            ]
          }
        ]
      },
  
      // WEEK 3 ------------------------------------------------------
      {
        week: 3,
        focus: "Acceleration + Agility Progressions",
        sessions: [
          {
            day: "Monday",
            title: "Acceleration Training",
            exercises: 6,
            duration: "50 min",
            mainLifts: [
              "Short Acceleration Runs",
              "Mini Hurdle Burst Drills",
              "Reaction Starts",
              "Light Dribbling at Speed",
              "Core Strength Beginner",
              "Cooldown"
            ]
          },
          {
            day: "Wednesday",
            title: "Agility + Footwork",
            exercises: 6,
            duration: "50 min",
            mainLifts: [
              "Ladder Quick Feet",
              "Cone Lanes",
              "Directional Change Drills",
              "Ball Control Under Movement",
              "Balance Games",
              "Stretch"
            ]
          },
          {
            day: "Friday",
            title: "Light Conditioning",
            exercises: 6,
            duration: "50 min",
            mainLifts: [
              "Relay Runs",
              "Short Agility Circuits",
              "Stop–Start Footwork",
              "Controlled Jumps",
              "Core Mini Circuit",
              "Mobility Flow"
            ]
          }
        ]
      },
  
      // WEEK 4 ------------------------------------------------------
      {
        week: 4,
        focus: "Deload + Skill Reinforcement (Fun Week)",
        sessions: [
          {
            day: "Monday",
            title: "Movement Games",
            exercises: 5,
            duration: "40 min",
            mainLifts: [
              "Tag Agility Game",
              "Light Ladder Work",
              "Slow Dribbling Course",
              "Balance Play",
              "Stretch"
            ]
          },
          {
            day: "Wednesday",
            title: "Skill Cleanup",
            exercises: 5,
            duration: "40 min",
            mainLifts: [
              "Controlled Touches",
              "Passing Accuracy",
              "Simple Agility Patterns",
              "Core Stability",
              "Mobility Work"
            ]
          },
          {
            day: "Friday",
            title: "Recovery + Fun Conditioning",
            exercises: 5,
            duration: "40 min",
            mainLifts: [
              "Light Condition Games",
              "Movement Flow",
              "Coordination Challenges",
              "Breathing Work",
              "Stretch Routine"
            ]
          }
        ]
      },
  
      // WEEK 5 ------------------------------------------------------
      {
        week: 5,
        focus: "Strength Foundations + Advanced Agility",
        sessions: [
          {
            day: "Monday",
            title: "Strength Basics",
            exercises: 6,
            duration: "50 min",
            mainLifts: [
              "Bodyweight Squats",
              "Glute Bridge Basics",
              "Lunges (light)",
              "Core Stability Training",
              "Balance Circuit",
              "Cooldown"
            ]
          },
          {
            day: "Wednesday",
            title: "Agility Advancement",
            exercises: 6,
            duration: "55 min",
            mainLifts: [
              "Ladder Speed Patterns",
              "Cone Reaction COD",
              "Quick Feet Circuits",
              "Ball Dribbling at Moderate Speed",
              "Coordination Flow",
              "Stretch"
            ]
          },
          {
            day: "Friday",
            title: "Endurance for Youth Players",
            exercises: 6,
            duration: "55 min",
            mainLifts: [
              "Light Jog + Sprints",
              "Agility Loop Course",
              "Short Shuttle Repeats",
              "Ball Touch Intervals",
              "Core & Balance",
              "Mobility"
            ]
          }
        ]
      },
  
      // WEEK 6 ------------------------------------------------------
      {
        week: 6,
        focus: "Speed, Touch, Confidence",
        sessions: [
          {
            day: "Monday",
            title: "Speed + Ball Handling",
            exercises: 6,
            duration: "55 min",
            mainLifts: [
              "Short Sprint Bursts",
              "Acceleration + Dribble",
              "Mini Hurdle Speed",
              "Direction Change with Ball",
              "Directional Touches",
              "Cooldown"
            ]
          },
          {
            day: "Wednesday",
            title: "Confidence & Creativity",
            exercises: 6,
            duration: "50 min",
            mainLifts: [
              "Creative Dribbling",
              "Fake + Move Drills",
              "Fun Footwork Patterns",
              "Balance + Coordination Flow",
              "Core Basics",
              "Stretch"
            ]
          },
          {
            day: "Friday",
            title: "Agility Conditioning",
            exercises: 6,
            duration: "55 min",
            mainLifts: [
              "Relay Speed Games",
              "Agility Lane Repeats",
              "Stop–Start Speed",
              "Light Jumps",
              "Footwork Conditioning",
              "Mobility"
            ]
          }
        ]
      },
  
      // WEEK 7 ------------------------------------------------------
      {
        week: 7,
        focus: "Athletic Control + On-Field Movement",
        sessions: [
          {
            day: "Monday",
            title: "Movement Mastery",
            exercises: 6,
            duration: "55 min",
            mainLifts: [
              "Sprint → Cut",
              "Controlled Ladder Patterns",
              "Directional Ball Movement",
              "Lateral Speed Training",
              "Core Coordination",
              "Cooldown"
            ]
          },
          {
            day: "Wednesday",
            title: "Functional Skills",
            exercises: 6,
            duration: "50 min",
            mainLifts: [
              "Simple 1v1 Movement",
              "Passing on the Move",
              "Agility with Ball Control",
              "Short Reaction Runs",
              "Balance Work",
              "Stretch Routine"
            ]
          },
          {
            day: "Friday",
            title: "Game Movement Simulation",
            exercises: 7,
            duration: "55 min",
            mainLifts: [
              "Jog → Sprint → Jog Patterns",
              "Directional Changes",
              "Dribble Through Cones",
              "Agility Box Circuit",
              "Light Conditioning",
              "Core Flow",
              "Mobility"
            ]
          }
        ]
      },
  
      // WEEK 8 ------------------------------------------------------
      {
        week: 8,
        focus: "Final Skills + Fun Testing",
        sessions: [
          {
            day: "Monday",
            title: "Speed & Agility Review",
            exercises: 6,
            duration: "50 min",
            mainLifts: [
              "Speed Test (Short)",
              "Agility Ladder Test",
              "Cone COD Test",
              "Movement Control Review",
              "Light Skills Work",
              "Cooldown"
            ]
          },
          {
            day: "Wednesday",
            title: "Ball Skill Assessment",
            exercises: 6,
            duration: "50 min",
            mainLifts: [
              "Cone Dribble Test",
              "Touch Control Test",
              "Passing Accuracy Check",
              "Coordination Review",
              "Mobility Work",
              "Stretch"
            ]
          },
          {
            day: "Friday",
            title: "Celebration Day + Next Steps",
            exercises: 6,
            duration: "45 min",
            mainLifts: [
              "Fun Agility Games",
              "Light Conditioning",
              "Confidence Drills",
              "Progress Reflection",
              "Future Plan",
              "Celebration Cooldown"
            ]
          }
        ]
      }
    ]
  },
  "20": {
    id: "20",
    title: "Pre-Season Soccer Preparation",
    sport: "Soccer",
    level: "Advanced",
    duration: "6 weeks",
    description:
      "Intensive pre-season training block designed to peak your fitness, strength, speed, and match readiness right before the season begins. High-intensity sessions for competitive players gearing up for full match demands.",
  
    workouts: 18,
    enrolled: 892,
    rating: 4.9,
    icon: "⚽",
    color: "from-green-600 to-green-700",
  
    goals: [
      "Reach peak conditioning before the season",
      "Improve high-intensity running capacity",
      "Increase top-end speed and acceleration",
      "Develop strength and power for match demands",
      "Sharpen technical skills under conditioning load"
    ],
  
    equipment: [
      "Soccer Field",
      "Cones",
      "Mini Hurdles",
      "Agility Ladder",
      "Resistance Bands",
      "Stopwatch",
      "Soccer Ball"
    ],
  
    reviews: 312,
    completionRate: 94,
    avgImprovement: "27% match-readiness improvement",
    sessionsPerWeek: 3,
    totalSessions: 18,
  
    coach: {
      name: "Coach Rafael Mendes",
      avatar: "⚽",
      credentials: "UEFA A License, Elite Performance Coach, 15+ years experience"
    },
  
    weeks: [
      // WEEK 1 ------------------------------------------------------
      {
        week: 1,
        focus: "Base Conditioning + Technical Sharpness",
        sessions: [
          {
            day: "Monday",
            title: "Aerobic Conditioning + Ball Work",
            exercises: 6,
            duration: "60 min",
            mainLifts: [
              "30min Steady Run",
              "Tempo Runs (5x3min)",
              "Dribbling Endurance",
              "1-2 Passing Patterns",
              "Core Stability",
              "Cooldown"
            ]
          },
          {
            day: "Wednesday",
            title: "Acceleration + Touch Work",
            exercises: 6,
            duration: "55 min",
            mainLifts: [
              "Short Acceleration Sprints",
              "Mini Hurdle Quick Steps",
              "Ball Control in Motion",
              "Directional Dribbling",
              "Reaction Passing",
              "Stretch"
            ]
          },
          {
            day: "Friday",
            title: "Technical Conditioning",
            exercises: 7,
            duration: "65 min",
            mainLifts: [
              "Small-Sided Intervals",
              "High-Touch Dribbling Lanes",
              "Ball Recovery Circuits",
              "Short Shuttle Runs",
              "Core Strength",
              "Mobility",
              "Cooldown"
            ]
          }
        ]
      },
  
      // WEEK 2 ------------------------------------------------------
      {
        week: 2,
        focus: "Speed + Strength Integration",
        sessions: [
          {
            day: "Monday",
            title: "Top Speed Development",
            exercises: 6,
            duration: "60 min",
            mainLifts: [
              "30m Top-Speed Sprints",
              "Sprint Mechanics",
              "Overspeed Drills",
              "COD Without Ball",
              "Acceleration Ladder",
              "Mobility"
            ]
          },
          {
            day: "Wednesday",
            title: "Strength & Power",
            exercises: 6,
            duration: "60 min",
            mainLifts: [
              "Band-Resisted Acceleration",
              "Explosive Bounds",
              "Short Hill Sprints",
              "Med Ball Power Throws",
              "Core Power",
              "Stretch Routine"
            ]
          },
          {
            day: "Friday",
            title: "High-Intensity Small Sided Games",
            exercises: 7,
            duration: "70 min",
            mainLifts: [
              "3v3 Rotation",
              "Transition Sprints",
              "High Pressing Drills",
              "Ball Recovery Challenges",
              "Technical Speed",
              "Conditioning",
              "Cooldown"
            ]
          }
        ]
      },
  
      // WEEK 3 ------------------------------------------------------
      {
        week: 3,
        focus: "Anaerobic Conditioning + Game Movement",
        sessions: [
          {
            day: "Monday",
            title: "Repeat Sprint Ability",
            exercises: 6,
            duration: "60 min",
            mainLifts: [
              "30m Repeat Sprints (15x)",
              "Short Recoveries",
              "Agility Transitions",
              "Directional Change Drills",
              "Core Strength",
              "Cooldown"
            ]
          },
          {
            day: "Wednesday",
            title: "Match-Style Conditioning",
            exercises: 7,
            duration: "70 min",
            mainLifts: [
              "Position-Specific Runs",
              "Tempo Runs + Touch Work",
              "COD with Ball",
              "Pressing Pattern Training",
              "Sprint-Jog Intervals",
              "Mobility",
              "Stretch"
            ]
          },
          {
            day: "Friday",
            title: "Game Simulation",
            exercises: 7,
            duration: "75 min",
            mainLifts: [
              "Small-Sided Match",
              "High-Tempo Transitions",
              "Counter-Attack Drills",
              "Defensive Recovery Runs",
              "Finishing Under Fatigue",
              "Cooldown",
              "Mobility"
            ]
          }
        ]
      },
  
      // WEEK 4 ------------------------------------------------------
      {
        week: 4,
        focus: "Speed-Strength + Tactical Conditioning",
        sessions: [
          {
            day: "Monday",
            title: "Strength-Speed Development",
            exercises: 6,
            duration: "60 min",
            mainLifts: [
              "Explosive Sprint Starts",
              "Resistance Sprint Drills",
              "Bounding + Power",
              "Agility Lanes",
              "Core Power",
              "Stretch"
            ]
          },
          {
            day: "Wednesday",
            title: "Tactical Fitness",
            exercises: 7,
            duration: "70 min",
            mainLifts: [
              "11v11 Tactical Runs",
              "Team Pressing Patterns",
              "Endurance with Ball",
              "Directional Play Drills",
              "High-Intensity Blocks",
              "Mobility Work",
              "Cooldown"
            ]
          },
          {
            day: "Friday",
            title: "Speed Endurance",
            exercises: 6,
            duration: "65 min",
            mainLifts: [
              "120m Speed Endurance (10x)",
              "Jog Recoveries",
              "Acceleration Touch Work",
              "Finishing Sprint Drills",
              "Core Strength",
              "Stretch Routine"
            ]
          }
        ]
      },
  
      // WEEK 5 ------------------------------------------------------
      {
        week: 5,
        focus: "Peak Intensity + Match Fitness",
        sessions: [
          {
            day: "Monday",
            title: "Competition Speed",
            exercises: 6,
            duration: "65 min",
            mainLifts: [
              "Full-Speed Sprints",
              "Agility at Max Intent",
              "Ball Work Under Fatigue",
              "Transition Speed",
              "Reaction Drills",
              "Cooldown"
            ]
          },
          {
            day: "Wednesday",
            title: "Match Conditioning",
            exercises: 7,
            duration: "75 min",
            mainLifts: [
              "Full Half Match (45 min)",
              "Positional Movement Drills",
              "High-Tempo Passing",
              "Pressing and Recovery",
              "Counterattack Execution",
              "Mobility",
              "Stretch"
            ]
          },
          {
            day: "Friday",
            title: "Competition Simulation",
            exercises: 7,
            duration: "75 min",
            mainLifts: [
              "Full-Tempo Scrimmage",
              "High-Intensity Blocks",
              "Tactical Reactivity",
              "Finishing Repeats",
              "Game Scenarios",
              "Cooldown",
              "Recovery Focus"
            ]
          }
        ]
      },
  
      // WEEK 6 ------------------------------------------------------
      {
        week: 6,
        focus: "Taper + Final Performance Testing",
        sessions: [
          {
            day: "Monday",
            title: "Speed Testing",
            exercises: 5,
            duration: "55 min",
            mainLifts: [
              "10m Speed Test",
              "20m Acceleration Test",
              "30m Sprint Test",
              "Light Agility Work",
              "Stretch"
            ]
          },
          {
            day: "Wednesday",
            title: "Endurance & Agility Testing",
            exercises: 5,
            duration: "55 min",
            mainLifts: [
              "Yo-Yo Intermittent Test (Light Version)",
              "Agility T-Test",
              "Ball Control Assessment",
              "Core Stability",
              "Cooldown"
            ]
          },
          {
            day: "Friday",
            title: "Team Readiness + Recovery",
            exercises: 5,
            duration: "50 min",
            mainLifts: [
              "Light Positional Runs",
              "Ball Circulation",
              "Mobility Flow",
              "Breathing + Recovery",
              "Season Preparation Briefing"
            ]
          }
        ]
      }
    ]
  },
      
};

// Helper functions
export const getProgramById = (id: string): ProgramDetail | null => {
  return programsData[id] || null;
};

export const getAllPrograms = (): ProgramDetail[] => {
  return Object.values(programsData);
};

// NOTE: Programs 2, 3, 5-10, 12, 13, 15-20 would follow this exact same structure
// Each with complete exercise lists matching their exercise counts
// And appropriate number of weeks based on their duration
// This file shows the complete template - you can duplicate and modify for remaining programs
