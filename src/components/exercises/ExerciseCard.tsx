import Link from 'next/link';
import Card from '../shared/Card';

interface ExerciseCardProps {
  id: string;
  name: string;
  category: string;
  difficulty: string;
  equipment: string;
  muscleGroups: string[];
}

export default function ExerciseCard({
  id,
  name,
  category,
  difficulty,
  equipment,
  muscleGroups
}: ExerciseCardProps) {
  return (
    <Link href={`/exercises/${id}`}>
      <Card className="p-4 h-full hover:border-blue-500 bg-slate-800 border-slate-700 transition-colors">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-bold text-lg text-white">{name}</h3>
          <span className="text-xs bg-green-900 text-green-300 px-2 py-1 rounded">{category}</span>
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
            {muscleGroups.map(muscle => (
              <span key={muscle} className="text-xs bg-slate-700 text-slate-300 px-2 py-1 rounded">
                {muscle}
              </span>
            ))}
          </div>
        </div>
      </Card>
    </Link>
  );
}
