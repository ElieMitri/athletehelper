interface SessionCardProps {
  id: string;
  title: string;
  time: string;
  duration: string;
  type: string;
  completed: boolean;
  intensity: string;
  onToggle: () => void;
  onDelete: () => void;
}

export default function SessionCard({
  title,
  time,
  duration,
  type,
  completed,
  intensity,
  onToggle,
  onDelete,
}: SessionCardProps) {
  // Color mapping for different workout types
  const typeColors: Record<string, string> = {
    Strength: "bg-blue-600",
    Cardio: "bg-red-600",
    Speed: "bg-yellow-600",
    Recovery: "bg-green-600",
    Sport: "bg-purple-600",
    Power: "bg-orange-600",
    Mobility: "bg-pink-600",
  };

  const intensityColors: Record<string, string> = {
    Low: "text-green-400",
    Medium: "text-yellow-400",
    High: "text-red-400",
  };

  const bgColor = typeColors[type] || "bg-gray-600";
  const intensityColor = intensityColors[intensity] || "text-gray-400";

  return (
    <div
      className={`relative p-3 rounded-lg border transition-all ${
        completed
          ? "bg-slate-800/50 border-emerald-600/50"
          : "bg-slate-800 border-slate-700 hover:border-slate-600"
      }`}
    >
      {/* Delete Button - Visible on hover */}
      <button
        onClick={onDelete}
        className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-red-500 hover:bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold z-10"
        title="Delete session"
      >
        ✕
      </button>

      {/* Content */}
      <div className="flex items-start gap-3">
        {/* Checkbox */}
        <button
          onClick={onToggle}
          className={`mt-1 w-5 h-5 rounded border-2 flex items-center justify-center transition-all flex-shrink-0 ${
            completed
              ? "bg-emerald-600 border-emerald-600"
              : "border-slate-600 hover:border-slate-500"
          }`}
        >
          {completed && (
            <svg
              className="w-3 h-3 text-white"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M5 13l4 4L19 7"></path>
            </svg>
          )}
        </button>

        {/* Session Details */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 mb-1">
            <h4
              className={`font-semibold text-sm ${
                completed ? "text-slate-400 line-through" : "text-white"
              }`}
            >
              {title}
            </h4>
            <span
              className={`${bgColor} text-white text-xs px-2 py-0.5 rounded-full flex-shrink-0`}
            >
              {type}
            </span>
          </div>

          <div className="flex items-center gap-3 text-xs text-slate-400">
            <span className="flex items-center gap-1">
              <span>🕐</span>
              <span>{time}</span>
            </span>
            <span className="flex items-center gap-1">
              <span>⏱️</span>
              <span>{duration}</span>
            </span>
            <span
              className={`flex items-center gap-1 ${intensityColor} font-medium`}
            >
              <span>💪</span>
              <span>{intensity}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
