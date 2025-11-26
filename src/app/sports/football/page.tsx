import LayoutWrapper from '@/components/layout/LayoutWrapper';
import Card from '@/components/shared/Card';
import ProgramCard from '@/components/programs/ProgramCard';
import Link from 'next/link';

export default function FootballPage() {
  const programs = [
    {
      id: 'f1',
      title: 'Football Speed & Agility',
      sport: 'Football',
      level: 'Intermediate',
      duration: '10 weeks',
      description: 'Improve your speed, agility, and change of direction for football.'
    },
    {
      id: 'f2',
      title: 'Position-Specific Training',
      sport: 'Football',
      level: 'Advanced',
      duration: '12 weeks',
      description: 'Tailored training for your specific position on the field.'
    }
  ];

  const categories = [
    { name: 'Speed Training', count: 8 },
    { name: 'Strength & Power', count: 12 },
    { name: 'Agility Drills', count: 15 },
    { name: 'Conditioning', count: 10 },
    { name: 'Position-Specific', count: 6 }
  ];

  return (
    <LayoutWrapper>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-3">Football Training</h1>
          <p className="text-lg text-gray-600">
            Elite training programs designed for football athletes at all levels
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <Card className="p-6 lg:col-span-2">
            <h2 className="text-2xl font-bold mb-4">About Football Training</h2>
            <p className="text-gray-700 mb-4">
              Football demands a unique combination of speed, strength, agility, and endurance. Our
              comprehensive training programs are designed to develop all aspects of athletic performance
              required for success on the field.
            </p>
            <p className="text-gray-700">
              Whether you're a lineman focusing on raw power, a running back developing explosive speed,
              or a quarterback enhancing agility and arm strength, we have position-specific programs
              tailored to your needs.
            </p>
          </Card>

          <Card className="p-6">
            <h3 className="font-bold mb-4">Key Focus Areas</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-blue-600">✓</span>
                <span>40-yard dash speed</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600">✓</span>
                <span>Explosive power</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600">✓</span>
                <span>Lateral agility</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600">✓</span>
                <span>Contact strength</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600">✓</span>
                <span>Game conditioning</span>
              </li>
            </ul>
          </Card>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Training Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.map((category) => (
              <Link key={category.name} href={`/sports/football?category=${category.name}`}>
                <Card className="p-4 text-center hover:border-blue-300 cursor-pointer">
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
