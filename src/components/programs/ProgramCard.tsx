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
}: ProgramCardProps) {
  return (
    <Link href={`/programs/${id}`}>
      <Card className="p-4 h-full hover:border-blue-500 bg-slate-800 border-slate-700 transition-colors">
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
  );
}
