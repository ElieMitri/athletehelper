import Card from '@/components/shared/Card';
import Button from '@/components/shared/Button';

export default function AdminDashboardPage() {
  const stats = [
    { label: 'Total Users', value: '1,247', change: '+12%', color: 'bg-blue-100 text-blue-700' },
    { label: 'Active Programs', value: '89', change: '+5%', color: 'bg-green-100 text-green-700' },
    { label: 'Total Exercises', value: '342', change: '+8%', color: 'bg-purple-100 text-purple-700' },
    { label: 'Revenue (MTD)', value: '$12,450', change: '+18%', color: 'bg-orange-100 text-orange-700' }
  ];

  const recentActivity = [
    { id: 1, type: 'user', action: 'New user registration', user: 'john.doe@example.com', time: '5 min ago' },
    { id: 2, type: 'program', action: 'Program published', user: 'Admin', time: '1 hour ago' },
    { id: 3, type: 'exercise', action: 'Exercise updated', user: 'trainer@example.com', time: '2 hours ago' },
    { id: 4, type: 'user', action: 'Subscription upgraded', user: 'jane.smith@example.com', time: '3 hours ago' }
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
        <p className="text-gray-600">Platform overview and management</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <Card key={stat.label} className="p-6">
            <div className={`inline-block px-3 py-1 rounded text-sm font-medium mb-2 ${stat.color}`}>
              {stat.label}
            </div>
            <div className="flex items-end justify-between">
              <div className="text-3xl font-bold">{stat.value}</div>
              <div className="text-sm text-green-600 font-medium">{stat.change}</div>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">Recent Activity</h2>
            <Button variant="ghost" size="sm">View All</Button>
          </div>
          <div className="space-y-3">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-start gap-3 pb-3 border-b last:border-0">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  {activity.type === 'user' && '👤'}
                  {activity.type === 'program' && '📋'}
                  {activity.type === 'exercise' && '💪'}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium truncate">{activity.action}</p>
                  <p className="text-sm text-gray-600 truncate">{activity.user}</p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-bold mb-4">User Growth</h2>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>This Month</span>
                <span className="font-medium">147 new users</span>
              </div>
              <div className="bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '78%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Active Users</span>
                <span className="font-medium">892</span>
              </div>
              <div className="bg-gray-200 rounded-full h-2">
                <div className="bg-green-600 h-2 rounded-full" style={{ width: '71%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Pro Subscribers</span>
                <span className="font-medium">245</span>
              </div>
              <div className="bg-gray-200 rounded-full h-2">
                <div className="bg-purple-600 h-2 rounded-full" style={{ width: '20%' }}></div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6 text-center hover:border-blue-300 cursor-pointer">
          <div className="text-4xl mb-3">👥</div>
          <h3 className="font-bold mb-2">Manage Users</h3>
          <p className="text-sm text-gray-600">View and manage user accounts</p>
        </Card>
        <Card className="p-6 text-center hover:border-blue-300 cursor-pointer">
          <div className="text-4xl mb-3">📋</div>
          <h3 className="font-bold mb-2">Manage Programs</h3>
          <p className="text-sm text-gray-600">Create and edit training programs</p>
        </Card>
        <Card className="p-6 text-center hover:border-blue-300 cursor-pointer">
          <div className="text-4xl mb-3">📊</div>
          <h3 className="font-bold mb-2">View Analytics</h3>
          <p className="text-sm text-gray-600">Platform metrics and insights</p>
        </Card>
      </div>
    </div>
  );
}
