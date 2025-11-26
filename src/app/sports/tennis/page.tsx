import LayoutWrapper from '@/components/layout/LayoutWrapper';
import Card from '@/components/shared/Card';
import ProgramCard from '@/components/programs/ProgramCard';
import Link from 'next/link';

export default function TennisPage() {
  const programs = [
    {
      id: 't1',
      title: 'Tennis Power Training',
      sport: 'Tennis',
      level: 'Intermediate',
      duration: '8 weeks',
      description: 'Increase serve power and groundstroke velocity.'
    },
    {
      id: 't2',
      title: 'Court Movement Mastery',
      sport: 'Tennis',
      level: 'Advanced',
      duration: '10 weeks',
      description: 'Elite footwork and court coverage training.'
    }
  ];

  const categories = [
    { name: 'Serve Power', count: 7 },
    { name: 'Footwork', count: 9 },
    { name: 'Endurance', count: 8 },
    { name: 'Injury Prevention', count: 10 },
    { name: 'Match Fitness', count: 6 }
  ];

  return (
    <LayoutWrapper>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-3">Tennis Training</h1>
          <p className="text-lg text-gray-600">
            Sport-specific training to dominate the court
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <Card className="p-6 lg:col-span-2">
            <h2 className="text-2xl font-bold mb-4">About Tennis Training</h2>
            <p className="text-gray-700 mb-4">
              Tennis demands explosive power, quick directional changes, and sustained energy through long
              matches. Our training programs develop the specific athletic qualities needed for competitive tennis.
            </p>
            <p className="text-gray-700">
              Focus on increasing serve velocity, improving court coverage, building match endurance, and
              preventing common tennis injuries like tennis elbow and shoulder issues.
            </p>
          </Card>

          <Card className="p-6">
            <h3 className="font-bold mb-4">Key Focus Areas</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-yellow-600">✓</span>
                <span>Serve velocity</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-600">✓</span>
                <span>Lateral movement</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-600">✓</span>
                <span>Rotational power</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-600">✓</span>
                <span>Match stamina</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-600">✓</span>
                <span>Shoulder health</span>
              </li>
            </ul>
          </Card>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Training Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.map((category) => (
              <Link key={category.name} href={`/sports/tennis?category=${category.name}`}>
                <Card className="p-4 text-center hover:border-yellow-300 cursor-pointer">
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
