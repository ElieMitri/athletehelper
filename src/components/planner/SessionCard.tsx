import Card from "../shared/Card";

interface SessionCardProps {
  id: string;
  title: string;
  time: string;
  duration: string;
  type: string;
  completed?: boolean;
}

export default function SessionCard({
  id,
  title,
  time,
  duration,
  type,
  completed = false,
}: SessionCardProps) {
  return (
    <Card
      className={`p-3 ${
        completed ? "opacity-60 bg-slate-800" : "bg-slate-800"
      } border-slate-700 hover:border-slate-600 transition-colors cursor-pointer`}
    >
      <div className="flex items-start justify-between mb-2">
        <div className="flex-1">
          <h4 className="font-semibold text-sm text-white">{title}</h4>
          <p className="text-xs text-slate-400">{time}</p>
        </div>
        <span className="text-xs bg-blue-900 text-blue-300 px-2 py-1 rounded">
          {type}
        </span>
      </div>
      <div className="flex items-center justify-between text-xs text-slate-400">
        <span>{duration}</span>
        {completed && (
          <span className="text-green-400 font-medium">✓ Completed</span>
        )}
      </div>
    </Card>
  );
}
