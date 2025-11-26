import LayoutWrapper from '@/components/layout/LayoutWrapper';
import Card from '@/components/shared/Card';
import ProgramCard from '@/components/programs/ProgramCard';
import Link from 'next/link';

export default function BasketballPage() {
  const programs = [
    {
      id: 'b1',
      title: 'Vertical Jump Training',
      sport: 'Basketball',
      level: 'Intermediate',
      duration: '8 weeks',
      description: 'Increase your vertical leap and dunking ability.'
    },
    {
      id: 'b2',
      title: 'Court Agility Mastery',
      sport: 'Basketball',
      level: 'Advanced',
      duration: '10 weeks',
      description: 'Dominate the court with elite agility and quickness.'
    }
  ];

  const categories = [
    { name: 'Vertical Jump', count: 6 },
    { name: 'Speed & Agility', count: 10 },
    { name: 'Shooting Strength', count: 8 },
    { name: 'Endurance', count: 9 },
    { name: 'Core Stability', count: 7 }
  ];

  return (
    <LayoutWrapper>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-3">Basketball Training</h1>
          <p className="text-lg text-gray-600">
            Elevate your game with specialized basketball training programs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <Card className="p-6 lg:col-span-2">
            <h2 className="text-2xl font-bold mb-4">About Basketball Training</h2>
            <p className="text-gray-700 mb-4">
              Basketball requires explosive jumping ability, rapid direction changes, and sustained energy
              throughout four quarters. Our training programs focus on developing the athletic qualities
              that separate good players from great ones.
            </p>
            <p className="text-gray-700">
              From increasing your vertical jump to improving lateral quickness and building basketball-specific
              endurance, these programs will help you perform at your peak on the court.
            </p>
          </Card>

          <Card className="p-6">
            <h3 className="font-bold mb-4">Key Focus Areas</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-orange-600">✓</span>
                <span>Vertical jump height</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600">✓</span>
                <span>Lateral quickness</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600">✓</span>
                <span>Court stamina</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600">✓</span>
                <span>Core stability</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600">✓</span>
                <span>First step explosion</span>
              </li>
            </ul>
          </Card>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Training Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.map((category) => (
              <Link key={category.name} href={`/sports/basketball?category=${category.name}`}>
                <Card className="p-4 text-center hover:border-orange-300 cursor-pointer">
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
