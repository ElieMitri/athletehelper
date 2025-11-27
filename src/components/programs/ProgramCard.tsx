import Link from "next/link";
import Card from "../shared/Card";

interface ProgramCardProps {
  id: string;
  title: string;
  sport: string;
  level: string;
  duration: string;
  description: string;
}

export default function ProgramCard({
  id,
  title,
  sport,
  level,
  duration,
  description,
  locked = false,
}) {
  return (
    <div className="relative">
      {/* Card Content */}
      <Link
        href={locked ? "/upgrade" : `/programs/${id}`}
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
            <h3 className="font-bold text-lg text-white">{title}</h3>
            <span className="text-xs bg-blue-900 text-blue-300 px-2 py-1 rounded">
              {sport}
            </span>
          </div>
          <p className="text-sm text-slate-400 mb-3 line-clamp-2">
            {description}
          </p>
          <div className="flex items-center gap-4 text-sm text-slate-500">
            <span>Level: {level}</span>
            <span>•</span>
            <span>{duration}</span>
          </div>
        </Card>
      </Link>

      {/* LOCK OVERLAY */}
      {locked && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 rounded-xl z-10">
          <div className="text-4xl mb-2">🔒</div>
          <p className="text-white font-semibold mb-3">Premium Program</p>
          <Link href="/upgrade">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-all">
              Upgrade to Unlock →
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
