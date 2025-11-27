import Link from "next/link";
import Card from "../shared/Card";

interface InjuryCardProps {
  id: string;
  title: string;
  bodyPart: string;
  severity: string;
  duration: string;
  description: string;
  locked?: boolean; // <-- NEW
}

export default function InjuryCard({
  id,
  title,
  bodyPart,
  severity,
  duration,
  description,
  locked = false,
}: InjuryCardProps) {
  const severityColors = {
    mild: "bg-green-100 text-green-700",
    moderate: "bg-yellow-100 text-yellow-700",
    severe: "bg-red-100 text-red-700",
  };

  return (
    <div className="relative">
      {/* Base card */}
      <Link
        href={locked ? "/upgrade" : `/rehab/${id}`}
        className={locked ? "pointer-events-auto" : ""}
      >
        <Card
          className={`p-4 h-full bg-slate-800 border-slate-700 transition-colors rounded-xl ${
            locked
              ? "blur-sm opacity-40 pointer-events-none"
              : "hover:border-blue-500"
          }`}
        >
          <div className="flex items-start justify-between mb-2">
            <h3 className="font-bold text-lg text-white">{title}</h3>
            <span
              className={`text-xs px-2 py-1 rounded ${
                severityColors[severity as keyof typeof severityColors]
              }`}
            >
              {severity}
            </span>
          </div>

          <p className="text-sm text-slate-400 mb-3 line-clamp-2">
            {description}
          </p>

          <div className="flex items-center gap-4 text-sm text-slate-500">
            <span>Area: {bodyPart}</span>
            <span>•</span>
            <span>{duration}</span>
          </div>
        </Card>
      </Link>

      {/* LOCK OVERLAY */}
      {locked && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 rounded-xl z-10">
          <div className="text-4xl mb-2">🔒</div>
          <p className="text-white font-semibold mb-3">Premium Rehab Plan</p>

          <Link href="/upgrade">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-all">
              Upgrade to Premium →
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
