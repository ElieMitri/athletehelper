import Card from '@/components/shared/Card';
import Button from '@/components/shared/Button';

export default function AdminUsersPage() {
  const users = [
    {
      id: '1',
      name: 'John Doe',
      email: 'john.doe@example.com',
      role: 'User',
      plan: 'Pro',
      status: 'Active',
      joined: '2024-01-15'
    },
    {
      id: '2',
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      role: 'User',
      plan: 'Free',
      status: 'Active',
      joined: '2024-01-10'
    },
    {
      id: '3',
      name: 'Mike Johnson',
      email: 'mike.johnson@example.com',
      role: 'Trainer',
      plan: 'Team',
      status: 'Active',
      joined: '2023-12-20'
    },
    {
      id: '4',
      name: 'Sarah Williams',
      email: 'sarah.w@example.com',
      role: 'Admin',
      plan: 'Pro',
      status: 'Active',
      joined: '2023-11-05'
    },
    {
      id: '5',
      name: 'Tom Brown',
      email: 'tom.brown@example.com',
      role: 'User',
      plan: 'Pro',
      status: 'Inactive',
      joined: '2024-01-01'
    }
  ];

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">User Management</h1>
          <p className="text-gray-600">Manage user accounts and permissions</p>
        </div>
        <div className="flex gap-3">
          <Button variant="secondary">Export CSV</Button>
          <Button>Add User</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card className="p-4">
          <div className="text-sm text-gray-600 mb-1">Total Users</div>
          <div className="text-3xl font-bold">1,247</div>
        </Card>
        <Card className="p-4">
          <div className="text-sm text-gray-600 mb-1">Active</div>
          <div className="text-3xl font-bold text-green-600">892</div>
        </Card>
        <Card className="p-4">
          <div className="text-sm text-gray-600 mb-1">Pro Members</div>
          <div className="text-3xl font-bold text-blue-600">245</div>
        </Card>
        <Card className="p-4">
          <div className="text-sm text-gray-600 mb-1">New This Month</div>
          <div className="text-3xl font-bold text-purple-600">147</div>
        </Card>
      </div>

      <Card className="p-6">
        <div className="flex items-center gap-4 mb-6">
          <input
            type="text"
            placeholder="Search users..."
            className="flex-1 border border-gray-300 rounded px-4 py-2"
          />
          <select className="border border-gray-300 rounded px-4 py-2">
            <option>All Roles</option>
            <option>Admin</option>
            <option>Trainer</option>
            <option>User</option>
          </select>
          <select className="border border-gray-300 rounded px-4 py-2">
            <option>All Plans</option>
            <option>Free</option>
            <option>Pro</option>
            <option>Team</option>
          </select>
          <select className="border border-gray-300 rounded px-4 py-2">
            <option>All Status</option>
            <option>Active</option>
            <option>Inactive</option>
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4">User</th>
                <th className="text-left py-3 px-4">Role</th>
                <th className="text-left py-3 px-4">Plan</th>
                <th className="text-left py-3 px-4">Status</th>
                <th className="text-left py-3 px-4">Joined</th>
                <th className="text-left py-3 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">
                    <div>
                      <div className="font-medium">{user.name}</div>
                      <div className="text-sm text-gray-600">{user.email}</div>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <span className={`text-xs px-2 py-1 rounded ${
                      user.role === 'Admin'
                        ? 'bg-red-100 text-red-700'
                        : user.role === 'Trainer'
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-gray-100 text-gray-700'
                    }`}>
                      {user.role}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <span className="text-sm">{user.plan}</span>
                  </td>
                  <td className="py-3 px-4">
                    <span className={`text-xs px-2 py-1 rounded ${
                      user.status === 'Active'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-gray-100 text-gray-700'
                    }`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">{user.joined}</td>
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
            Showing 1 to 5 of 1,247 users
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
