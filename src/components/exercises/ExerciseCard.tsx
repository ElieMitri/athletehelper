import Link from "next/link";
import Card from "../shared/Card";

interface ExerciseCardProps {
  id: string;
  name: string;
  category: string;
  difficulty: string;
  equipment: string;
  muscleGroups: string[];
  locked?: boolean; // <--- NEW
}

export default function ExerciseCard({
  id,
  name,
  category,
  difficulty,
  equipment,
  muscleGroups,
  locked = false,
}: ExerciseCardProps) {
  return (
    <div className="relative">
      {/* CARD CONTENT */}
      <Link
        href={locked ? "/settings/subscription" : `/exercises/${id}`}
        className={locked ? "pointer-events-auto" : ""}
      >
        <Card
          className={`p-4 h-full bg-slate-800 border-slate-700 transition-colors ${
            locked
              ? "blur-sm opacity-40 pointer-events-none"
              : "hover:border-blue-500"
          }`}
        >
          <div className="flex items-start justify-between mb-2">
            <h3 className="font-bold text-lg text-white">{name}</h3>
            <span className="text-xs bg-green-900 text-green-300 px-2 py-1 rounded">
              {category}
            </span>
          </div>

          <div className="space-y-2 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <span className="font-medium text-slate-300">Difficulty:</span>
              <span>{difficulty}</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="font-medium text-slate-300">Equipment:</span>
              <span>{equipment}</span>
            </div>

            <div className="flex flex-wrap gap-1 mt-2">
              {muscleGroups.map((muscle) => (
                <span
                  key={muscle}
                  className="text-xs bg-slate-700 text-slate-300 px-2 py-1 rounded"
                >
                  {muscle}
                </span>
              ))}
            </div>
          </div>
        </Card>
      </Link>

      {/* LOCK OVERLAY */}
      {locked && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 rounded-lg z-10">
          <div className="text-4xl mb-2">🔒</div>
          <p className="text-white font-semibold mb-3">Premium Exercise</p>
          <Link href="/settings/subscription">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-all">
              Upgrade to Premium →
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
