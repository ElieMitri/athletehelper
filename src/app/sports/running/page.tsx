import LayoutWrapper from '@/components/layout/LayoutWrapper';
import Card from '@/components/shared/Card';
import ProgramCard from '@/components/programs/ProgramCard';
import Link from 'next/link';

export default function RunningPage() {
  const programs = [
    {
      id: 'r1',
      title: '5K Training Plan',
      sport: 'Running',
      level: 'Beginner',
      duration: '8 weeks',
      description: 'Complete your first 5K race with confidence.'
    },
    {
      id: 'r2',
      title: 'Marathon Prep',
      sport: 'Running',
      level: 'Advanced',
      duration: '16 weeks',
      description: 'Comprehensive marathon training for experienced runners.'
    }
  ];

  const categories = [
    { name: '5K Training', count: 5 },
    { name: '10K Training', count: 6 },
    { name: 'Half Marathon', count: 7 },
    { name: 'Marathon', count: 8 },
    { name: 'Speed Work', count: 10 }
  ];

  return (
    <LayoutWrapper>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-3">Running Training</h1>
          <p className="text-lg text-gray-600">
            Structured running programs for all distances and skill levels
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <Card className="p-6 lg:col-span-2">
            <h2 className="text-2xl font-bold mb-4">About Running Training</h2>
            <p className="text-gray-700 mb-4">
              Whether you're training for your first 5K or preparing for a marathon, our running programs
              provide structured training plans that build endurance, increase speed, and prevent injuries.
            </p>
            <p className="text-gray-700">
              Each program balances easy runs, tempo workouts, interval training, and recovery to help you
              reach your running goals safely and effectively.
            </p>
          </Card>

          <Card className="p-6">
            <h3 className="font-bold mb-4">Key Focus Areas</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>Aerobic base building</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>Lactate threshold</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>VO2 max intervals</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>Running economy</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>Injury prevention</span>
              </li>
            </ul>
          </Card>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Training Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.map((category) => (
              <Link key={category.name} href={`/sports/running?category=${category.name}`}>
                <Card className="p-4 text-center hover:border-green-300 cursor-pointer">
                  <h3 className="font-semibold mb-1">{category.name}</h3>
                  <p className="text-sm text-gray-600">{category.count} programs</p>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Featured Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {programs.map((program) => (
              <ProgramCard key={program.id} {...program} />
            ))}
          </div>
        </div>
      </div>
    </LayoutWrapper>
  );
}
