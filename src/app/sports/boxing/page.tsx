import LayoutWrapper from '@/components/layout/LayoutWrapper';
import Card from '@/components/shared/Card';
import ProgramCard from '@/components/programs/ProgramCard';
import Link from 'next/link';

export default function BoxingPage() {
  const programs = [
    {
      id: 'bx1',
      title: 'Boxing Fundamentals',
      sport: 'Boxing',
      level: 'Beginner',
      duration: '10 weeks',
      description: 'Master the basics of boxing technique and conditioning.'
    },
    {
      id: 'bx2',
      title: 'Fighter Conditioning',
      sport: 'Boxing',
      level: 'Advanced',
      duration: '12 weeks',
      description: 'Elite conditioning for competitive boxing.'
    }
  ];

  const categories = [
    { name: 'Technique', count: 8 },
    { name: 'Conditioning', count: 12 },
    { name: 'Power Development', count: 9 },
    { name: 'Footwork', count: 7 },
    { name: 'Sparring Prep', count: 6 }
  ];

  return (
    <LayoutWrapper>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-3">Boxing Training</h1>
          <p className="text-lg text-gray-600">
            Professional boxing training programs for all skill levels
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <Card className="p-6 lg:col-span-2">
            <h2 className="text-2xl font-bold mb-4">About Boxing Training</h2>
            <p className="text-gray-700 mb-4">
              Boxing training develops power, speed, endurance, and mental toughness. Our programs combine
              technical skill development with world-class conditioning to prepare you for the ring.
            </p>
            <p className="text-gray-700">
              From learning proper punching mechanics to building championship-level cardio, these programs
              will transform you into a complete fighter.
            </p>
          </Card>

          <Card className="p-6">
            <h3 className="font-bold mb-4">Key Focus Areas</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-red-600">✓</span>
                <span>Punching power</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600">✓</span>
                <span>Hand speed</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600">✓</span>
                <span>Footwork agility</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600">✓</span>
                <span>Anaerobic capacity</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600">✓</span>
                <span>Mental fortitude</span>
              </li>
            </ul>
          </Card>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Training Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.map((category) => (
              <Link key={category.name} href={`/sports/boxing?category=${category.name}`}>
                <Card className="p-4 text-center hover:border-red-300 cursor-pointer">
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
