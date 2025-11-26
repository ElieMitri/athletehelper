'use client';

import { useState } from 'react';
import LayoutWrapper from '@/components/layout/LayoutWrapper';
import Card from '@/components/shared/Card';
import Button from '@/components/shared/Button';
import Modal from '@/components/shared/Modal';
import AssignWorkoutForm from '@/components/team/AssignWorkoutForm';

export default function TeamPage() {
  const [showAssignModal, setShowAssignModal] = useState(false);

  const teamMembers = [
    {
      id: '1',
      name: 'John Doe',
      position: 'Forward',
      status: 'Active',
      currentProgram: 'Strength Building',
      completionRate: 85,
      lastActivity: '2 hours ago'
    },
    {
      id: '2',
      name: 'Jane Smith',
      position: 'Midfielder',
      status: 'Active',
      currentProgram: 'Speed Development',
      completionRate: 92,
      lastActivity: '1 day ago'
    },
    {
      id: '3',
      name: 'Mike Johnson',
      position: 'Defender',
      status: 'Injured',
      currentProgram: 'Knee Rehab',
      completionRate: 78,
      lastActivity: '3 hours ago'
    },
    {
      id: '4',
      name: 'Sarah Williams',
      position: 'Goalkeeper',
      status: 'Active',
      currentProgram: 'Agility Training',
      completionRate: 88,
      lastActivity: '5 hours ago'
    }
  ];

  const teamStats = [
    { label: 'Team Members', value: '12', color: 'bg-blue-100 text-blue-700' },
    { label: 'Active Athletes', value: '10', color: 'bg-green-100 text-green-700' },
    { label: 'Avg Completion', value: '86%', color: 'bg-purple-100 text-purple-700' },
    { label: 'This Week', value: '47', color: 'bg-orange-100 text-orange-700' }
  ];

  return (
    <LayoutWrapper>
      {/* <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Team Management</h1>
            <p className="text-gray-600">Monitor and manage your team's training</p>
          </div>
          <div className="flex gap-3">
            <Button variant="secondary">Export Report</Button>
            <Button onClick={() => setShowAssignModal(true)}>Assign Workout</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {teamStats.map((stat) => (
            <Card key={stat.label} className="p-6">
              <div className={`inline-block px-3 py-1 rounded text-sm font-medium mb-2 ${stat.color}`}>
                {stat.label}
              </div>
              <div className="text-3xl font-bold">{stat.value}</div>
            </Card>
          ))}
        </div>

        <Card className="p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">Team Members</h2>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Search members..."
                className="border border-gray-300 rounded px-3 py-1 text-sm"
              />
              <select className="border border-gray-300 rounded px-3 py-1 text-sm">
                <option>All Status</option>
                <option>Active</option>
                <option>Injured</option>
                <option>Inactive</option>
              </select>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">Athlete</th>
                  <th className="text-left py-3 px-4">Position</th>
                  <th className="text-left py-3 px-4">Status</th>
                  <th className="text-left py-3 px-4">Current Program</th>
                  <th className="text-left py-3 px-4">Completion</th>
                  <th className="text-left py-3 px-4">Last Activity</th>
                  <th className="text-left py-3 px-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {teamMembers.map((member) => (
                  <tr key={member.id} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium">{member.name}</td>
                    <td className="py-3 px-4 text-gray-600">{member.position}</td>
                    <td className="py-3 px-4">
                      <span className={`text-xs px-2 py-1 rounded ${
                        member.status === 'Active'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-red-100 text-red-700'
                      }`}>
                        {member.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-gray-600">{member.currentProgram}</td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-blue-600 h-2 rounded-full"
                            style={{ width: `${member.completionRate}%` }}
                          ></div>
                        </div>
                        <span className="text-sm">{member.completionRate}%</span>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-gray-600 text-sm">{member.lastActivity}</td>
                    <td className="py-3 px-4">
                      <Button variant="ghost" size="sm">View</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="p-6">
            <h2 className="text-xl font-bold mb-4">Team Performance</h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Strength Training</span>
                  <span className="font-medium">89%</span>
                </div>
                <div className="bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '89%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Cardio Sessions</span>
                  <span className="font-medium">76%</span>
                </div>
                <div className="bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: '76%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Recovery Work</span>
                  <span className="font-medium">92%</span>
                </div>
                <div className="bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full" style={{ width: '92%' }}></div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-bold mb-4">Recent Updates</h2>
            <div className="space-y-3">
              <div className="pb-3 border-b">
                <p className="text-sm font-medium">John Doe completed Strength Training</p>
                <p className="text-xs text-gray-500">2 hours ago</p>
              </div>
              <div className="pb-3 border-b">
                <p className="text-sm font-medium">New program assigned to Jane Smith</p>
                <p className="text-xs text-gray-500">5 hours ago</p>
              </div>
              <div className="pb-3 border-b">
                <p className="text-sm font-medium">Mike Johnson started rehab protocol</p>
                <p className="text-xs text-gray-500">1 day ago</p>
              </div>
              <div>
                <p className="text-sm font-medium">Sarah Williams achieved new personal best</p>
                <p className="text-xs text-gray-500">2 days ago</p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <Modal
        isOpen={showAssignModal}
        onClose={() => setShowAssignModal(false)}
        title="Assign Workout"
      >
        <AssignWorkoutForm />
      </Modal> */}
      <h1>Coming Soon!</h1>
    </LayoutWrapper>
  );
}
