import Link from "next/link";
import Card from "../shared/Card";

interface InjuryCardProps {
  id: string;
  title: string;
  bodyPart: string;
  severity: string;
  duration: string;
  description: string;
}

export default function InjuryCard({
  id,
  title,
  bodyPart,
  severity,
  duration,
  description,
}: InjuryCardProps) {
  const severityColors = {
    mild: "bg-green-100 text-green-700",
    moderate: "bg-yellow-100 text-yellow-700",
    severe: "bg-red-100 text-red-700",
  };

  return (
    <Link href={`/rehab/${id}`}>
      <Card className="p-4 h-full hover:border-blue-500 bg-slate-800 border-slate-700 transition-colors">
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
  );
}
