import Card from '@/components/shared/Card';
import Button from '@/components/shared/Button';

export default function AdminProgramsPage() {
  const programs = [
    {
      id: '1',
      title: 'Strength Building Foundation',
      sport: 'General',
      level: 'Beginner',
      duration: '8 weeks',
      status: 'Published',
      enrollments: 342,
      rating: 4.8
    },
    {
      id: '2',
      title: 'Speed Development',
      sport: 'Running',
      level: 'Intermediate',
      duration: '6 weeks',
      status: 'Published',
      enrollments: 198,
      rating: 4.6
    },
    {
      id: '3',
      title: 'Football Conditioning',
      sport: 'Football',
      level: 'Advanced',
      duration: '12 weeks',
      status: 'Draft',
      enrollments: 0,
      rating: 0
    },
    {
      id: '4',
      title: 'Basketball Agility',
      sport: 'Basketball',
      level: 'Intermediate',
      duration: '8 weeks',
      status: 'Published',
      enrollments: 156,
      rating: 4.7
    },
    {
      id: '5',
      title: 'Boxing Fundamentals',
      sport: 'Boxing',
      level: 'Beginner',
      duration: '10 weeks',
      status: 'Under Review',
      enrollments: 89,
      rating: 4.5
    }
  ];

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Program Management</h1>
          <p className="text-gray-600">Create and manage training programs</p>
        </div>
        <div className="flex gap-3">
          <Button variant="secondary">Import</Button>
          <Button>Create Program</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card className="p-4">
          <div className="text-sm text-gray-600 mb-1">Total Programs</div>
          <div className="text-3xl font-bold">89</div>
        </Card>
        <Card className="p-4">
          <div className="text-sm text-gray-600 mb-1">Published</div>
          <div className="text-3xl font-bold text-green-600">72</div>
        </Card>
        <Card className="p-4">
          <div className="text-sm text-gray-600 mb-1">In Draft</div>
          <div className="text-3xl font-bold text-yellow-600">12</div>
        </Card>
        <Card className="p-4">
          <div className="text-sm text-gray-600 mb-1">Total Enrollments</div>
          <div className="text-3xl font-bold text-blue-600">3,247</div>
        </Card>
      </div>

      <Card className="p-6">
        <div className="flex items-center gap-4 mb-6">
          <input
            type="text"
            placeholder="Search programs..."
            className="flex-1 border border-gray-300 rounded px-4 py-2"
          />
          <select className="border border-gray-300 rounded px-4 py-2">
            <option>All Sports</option>
            <option>Football</option>
            <option>Basketball</option>
            <option>Running</option>
            <option>Boxing</option>
            <option>Tennis</option>
          </select>
          <select className="border border-gray-300 rounded px-4 py-2">
            <option>All Levels</option>
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Advanced</option>
          </select>
          <select className="border border-gray-300 rounded px-4 py-2">
            <option>All Status</option>
            <option>Published</option>
            <option>Draft</option>
            <option>Under Review</option>
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4">Program</th>
                <th className="text-left py-3 px-4">Sport</th>
                <th className="text-left py-3 px-4">Level</th>
                <th className="text-left py-3 px-4">Duration</th>
                <th className="text-left py-3 px-4">Status</th>
                <th className="text-left py-3 px-4">Enrollments</th>
                <th className="text-left py-3 px-4">Rating</th>
                <th className="text-left py-3 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {programs.map((program) => (
                <tr key={program.id} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">{program.title}</td>
                  <td className="py-3 px-4">
                    <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                      {program.sport}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-sm">{program.level}</td>
                  <td className="py-3 px-4 text-sm text-gray-600">{program.duration}</td>
                  <td className="py-3 px-4">
                    <span className={`text-xs px-2 py-1 rounded ${
                      program.status === 'Published'
                        ? 'bg-green-100 text-green-700'
                        : program.status === 'Draft'
                        ? 'bg-gray-100 text-gray-700'
                        : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {program.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-sm">{program.enrollments}</td>
                  <td className="py-3 px-4 text-sm">
                    {program.rating > 0 ? `⭐ ${program.rating}` : '-'}
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm">Edit</Button>
                      <Button variant="ghost" size="sm">View</Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-between mt-6">
          <div className="text-sm text-gray-600">
            Showing 1 to 5 of 89 programs
          </div>
          <div className="flex gap-2">
            <Button variant="secondary" size="sm">Previous</Button>
            <Button variant="secondary" size="sm">Next</Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
