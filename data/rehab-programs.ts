// Comprehensive rehabilitation programs data

export interface RehabProgram {
  id: string;
  title: string;
  bodyPart: string;
  severity: "mild" | "moderate" | "severe";
  duration: string;
  description: string;
  phases: number;
  exercises: number;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  icon: string;
  color: string;
}

export const rehabPrograms: RehabProgram[] = [
  // SEVERE INJURIES (5 programs)
  {
    id: "1",
    title: "ACL Recovery Protocol",
    bodyPart: "Knee",
    severity: "severe",
    duration: "12-16 weeks",
    description:
      "Comprehensive rehabilitation program for ACL reconstruction recovery with progressive strengthening.",
    phases: 4,
    exercises: 32,
    difficulty: "Advanced",
    icon: "🦵",
    color: "from-red-600 to-red-700",
  },
  {
    id: "2",
    title: "Complete Meniscus Tear",
    bodyPart: "Knee",
    severity: "severe",
    duration: "10-14 weeks",
    description:
      "Post-surgical rehabilitation for meniscus repair with focus on joint stability and mobility.",
    phases: 4,
    exercises: 28,
    difficulty: "Advanced",
    icon: "🦵",
    color: "from-red-600 to-red-700",
  },
  {
    id: "3",
    title: "Severe Achilles Rupture",
    bodyPart: "Ankle",
    severity: "severe",
    duration: "14-20 weeks",
    description:
      "Full Achilles tendon rupture recovery with gradual loading and strengthening protocol.",
    phases: 5,
    exercises: 35,
    difficulty: "Advanced",
    icon: "🦶",
    color: "from-red-600 to-red-700",
  },
  {
    id: "4",
    title: "Shoulder Labral Repair",
    bodyPart: "Shoulder",
    severity: "severe",
    duration: "12-16 weeks",
    description:
      "Post-operative rehabilitation for labral tear surgery with emphasis on stability.",
    phases: 4,
    exercises: 30,
    difficulty: "Advanced",
    icon: "💪",
    color: "from-red-600 to-red-700",
  },
  {
    id: "5",
    title: "Spinal Fusion Recovery",
    bodyPart: "Back",
    severity: "severe",
    duration: "16-24 weeks",
    description:
      "Comprehensive post-surgical program for spinal fusion with core stabilization focus.",
    phases: 5,
    exercises: 26,
    difficulty: "Advanced",
    icon: "🧘",
    color: "from-red-600 to-red-700",
  },

  // MODERATE INJURIES (10 programs)
  {
    id: "6",
    title: "Shoulder Rotator Cuff",
    bodyPart: "Shoulder",
    severity: "moderate",
    duration: "8-10 weeks",
    description:
      "Strengthening and mobility exercises for rotator cuff tears and strains.",
    phases: 3,
    exercises: 24,
    difficulty: "Intermediate",
    icon: "💪",
    color: "from-orange-600 to-orange-700",
  },
  {
    id: "7",
    title: "Ankle Sprain Recovery",
    bodyPart: "Ankle",
    severity: "moderate",
    duration: "6-8 weeks",
    description:
      "Progressive rehabilitation to restore ankle stability, strength, and proprioception.",
    phases: 3,
    exercises: 20,
    difficulty: "Intermediate",
    icon: "🦶",
    color: "from-orange-600 to-orange-700",
  },
  {
    id: "8",
    title: "Hamstring Strain Protocol",
    bodyPart: "Hamstring",
    severity: "moderate",
    duration: "4-8 weeks",
    description:
      "Gradual return to activity program for grade 2 hamstring injuries with eccentric focus.",
    phases: 3,
    exercises: 22,
    difficulty: "Intermediate",
    icon: "🦵",
    color: "from-orange-600 to-orange-700",
  },
  {
    id: "9",
    title: "Hip Flexor Rehabilitation",
    bodyPart: "Hip",
    severity: "moderate",
    duration: "6-8 weeks",
    description:
      "Restore hip mobility and strength after flexor strain with dynamic exercises.",
    phases: 3,
    exercises: 20,
    difficulty: "Intermediate",
    icon: "🦴",
    color: "from-orange-600 to-orange-700",
  },
  {
    id: "10",
    title: "Quadriceps Strain Recovery",
    bodyPart: "Quadriceps",
    severity: "moderate",
    duration: "5-7 weeks",
    description:
      "Progressive loading program for quad muscle tears with strength rebuilding.",
    phases: 3,
    exercises: 21,
    difficulty: "Intermediate",
    icon: "🦵",
    color: "from-orange-600 to-orange-700",
  },
  {
    id: "11",
    title: "Patellar Tendinopathy",
    bodyPart: "Knee",
    severity: "moderate",
    duration: "8-12 weeks",
    description:
      "Eccentric strengthening protocol for jumper's knee with gradual return to sport.",
    phases: 3,
    exercises: 23,
    difficulty: "Intermediate",
    icon: "🦵",
    color: "from-orange-600 to-orange-700",
  },
  {
    id: "12",
    title: "Groin Strain Protocol",
    bodyPart: "Hip",
    severity: "moderate",
    duration: "6-9 weeks",
    description:
      "Adductor muscle rehabilitation with progressive strengthening and agility work.",
    phases: 3,
    exercises: 22,
    difficulty: "Intermediate",
    icon: "🦴",
    color: "from-orange-600 to-orange-700",
  },
  {
    id: "13",
    title: "Calf Strain Recovery",
    bodyPart: "Calf",
    severity: "moderate",
    duration: "5-8 weeks",
    description:
      "Gastrocnemius and soleus rehabilitation with eccentric loading progression.",
    phases: 3,
    exercises: 19,
    difficulty: "Intermediate",
    icon: "🦵",
    color: "from-orange-600 to-orange-700",
  },
  {
    id: "14",
    title: "Neck Strain Recovery",
    bodyPart: "Neck",
    severity: "moderate",
    duration: "4-6 weeks",
    description:
      "Cervical spine rehabilitation with mobility and strengthening exercises.",
    phases: 3,
    exercises: 18,
    difficulty: "Intermediate",
    icon: "🧘",
    color: "from-orange-600 to-orange-700",
  },
  {
    id: "15",
    title: "Shin Splints Protocol",
    bodyPart: "Shin",
    severity: "moderate",
    duration: "6-10 weeks",
    description:
      "Medial tibial stress syndrome recovery with progressive return to running.",
    phases: 3,
    exercises: 20,
    difficulty: "Intermediate",
    icon: "🦵",
    color: "from-orange-600 to-orange-700",
  },

  // MILD INJURIES (5 programs)
  {
    id: "16",
    title: "Lower Back Pain Relief",
    bodyPart: "Back",
    severity: "mild",
    duration: "4-6 weeks",
    description:
      "Gentle exercises and stretches to alleviate lower back discomfort and improve mobility.",
    phases: 2,
    exercises: 18,
    difficulty: "Beginner",
    icon: "🧘",
    color: "from-emerald-600 to-emerald-700",
  },
  {
    id: "17",
    title: "Tennis Elbow Treatment",
    bodyPart: "Elbow",
    severity: "mild",
    duration: "6-8 weeks",
    description:
      "Lateral epicondylitis exercises to reduce inflammation and strengthen forearm muscles.",
    phases: 2,
    exercises: 16,
    difficulty: "Beginner",
    icon: "💪",
    color: "from-emerald-600 to-emerald-700",
  },
  {
    id: "18",
    title: "Wrist Sprain Recovery",
    bodyPart: "Wrist",
    severity: "mild",
    duration: "3-5 weeks",
    description:
      "Gentle mobilization and strengthening for minor wrist injuries and sprains.",
    phases: 2,
    exercises: 14,
    difficulty: "Beginner",
    icon: "✋",
    color: "from-emerald-600 to-emerald-700",
  },
  {
    id: "19",
    title: "Plantar Fasciitis Relief",
    bodyPart: "Foot",
    severity: "mild",
    duration: "4-8 weeks",
    description:
      "Stretching and strengthening protocol for heel pain and plantar fascia inflammation.",
    phases: 2,
    exercises: 15,
    difficulty: "Beginner",
    icon: "🦶",
    color: "from-emerald-600 to-emerald-700",
  },
  {
    id: "20",
    title: "Golfer's Elbow Recovery",
    bodyPart: "Elbow",
    severity: "mild",
    duration: "5-7 weeks",
    description:
      "Medial epicondylitis treatment with progressive wrist and forearm strengthening.",
    phases: 2,
    exercises: 16,
    difficulty: "Beginner",
    icon: "💪",
    color: "from-emerald-600 to-emerald-700",
  },

  // ADDITIONAL MODERATE INJURIES (5 programs)
  {
    id: "21",
    title: "IT Band Syndrome",
    bodyPart: "Knee",
    severity: "moderate",
    duration: "6-10 weeks",
    description:
      "Iliotibial band friction syndrome treatment with stretching and strengthening focus.",
    phases: 3,
    exercises: 21,
    difficulty: "Intermediate",
    icon: "🦵",
    color: "from-orange-600 to-orange-700",
  },
  {
    id: "22",
    title: "Bicep Tendinitis Recovery",
    bodyPart: "Shoulder",
    severity: "moderate",
    duration: "6-8 weeks",
    description:
      "Long head bicep tendon inflammation rehabilitation with progressive loading.",
    phases: 3,
    exercises: 20,
    difficulty: "Intermediate",
    icon: "💪",
    color: "from-orange-600 to-orange-700",
  },
  {
    id: "23",
    title: "Runner's Knee Protocol",
    bodyPart: "Knee",
    severity: "moderate",
    duration: "6-10 weeks",
    description:
      "Patellofemoral pain syndrome treatment with biomechanical correction focus.",
    phases: 3,
    exercises: 22,
    difficulty: "Intermediate",
    icon: "🦵",
    color: "from-orange-600 to-orange-700",
  },
  {
    id: "24",
    title: "Piriformis Syndrome",
    bodyPart: "Hip",
    severity: "moderate",
    duration: "6-9 weeks",
    description:
      "Deep gluteal syndrome rehabilitation with sciatic nerve decompression exercises.",
    phases: 3,
    exercises: 19,
    difficulty: "Intermediate",
    icon: "🦴",
    color: "from-orange-600 to-orange-700",
  },
  {
    id: "25",
    title: "Thoracic Outlet Syndrome",
    bodyPart: "Shoulder",
    severity: "moderate",
    duration: "8-12 weeks",
    description:
      "Neurovascular compression relief with postural correction and nerve gliding.",
    phases: 3,
    exercises: 23,
    difficulty: "Intermediate",
    icon: "💪",
    color: "from-orange-600 to-orange-700",
  },

  // ADDITIONAL MILD INJURIES (3 programs)
  {
    id: "26",
    title: "Carpal Tunnel Relief",
    bodyPart: "Wrist",
    severity: "mild",
    duration: "4-8 weeks",
    description:
      "Median nerve compression management with stretching and nerve gliding exercises.",
    phases: 2,
    exercises: 15,
    difficulty: "Beginner",
    icon: "✋",
    color: "from-emerald-600 to-emerald-700",
  },
  {
    id: "27",
    title: "De Quervain's Tenosynovitis",
    bodyPart: "Wrist",
    severity: "mild",
    duration: "4-6 weeks",
    description:
      "Thumb tendon inflammation relief with gentle mobilization and strengthening.",
    phases: 2,
    exercises: 14,
    difficulty: "Beginner",
    icon: "✋",
    color: "from-emerald-600 to-emerald-700",
  },
  {
    id: "28",
    title: "Upper Back Strain",
    bodyPart: "Back",
    severity: "mild",
    duration: "3-5 weeks",
    description:
      "Thoracic spine muscle strain recovery with postural correction exercises.",
    phases: 2,
    exercises: 17,
    difficulty: "Beginner",
    icon: "🧘",
    color: "from-emerald-600 to-emerald-700",
  },

  // ADDITIONAL SEVERE INJURIES (2 programs)
  {
    id: "29",
    title: "Tommy John Surgery Recovery",
    bodyPart: "Elbow",
    severity: "severe",
    duration: "12-18 weeks",
    description:
      "UCL reconstruction rehabilitation with progressive throwing program for athletes.",
    phases: 5,
    exercises: 33,
    difficulty: "Advanced",
    icon: "💪",
    color: "from-red-600 to-red-700",
  },
  {
    id: "30",
    title: "Hip Labral Tear Surgery",
    bodyPart: "Hip",
    severity: "severe",
    duration: "14-20 weeks",
    description:
      "Post-arthroscopic hip surgery protocol with gradual return to dynamic activities.",
    phases: 5,
    exercises: 31,
    difficulty: "Advanced",
    icon: "🦴",
    color: "from-red-600 to-red-700",
  },
];

// Helper function to get program by ID
export const getRehabProgramById = (id: string): RehabProgram | null => {
  return rehabPrograms.find((program) => program.id === id) || null;
};

// Helper function to get programs by body part
export const getRehabProgramsByBodyPart = (
  bodyPart: string
): RehabProgram[] => {
  return rehabPrograms.filter((program) => program.bodyPart === bodyPart);
};

// Helper function to get programs by severity
export const getRehabProgramsBySeverity = (
  severity: "mild" | "moderate" | "severe"
): RehabProgram[] => {
  return rehabPrograms.filter((program) => program.severity === severity);
};

// Helper function to get all body parts
export const getAllBodyParts = (): string[] => {
  const bodyParts = new Set(rehabPrograms.map((program) => program.bodyPart));
  return Array.from(bodyParts).sort();
};
