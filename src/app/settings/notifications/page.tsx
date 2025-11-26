'use client';

import { useState } from 'react';
import LayoutWrapper from '@/components/layout/LayoutWrapper';
import Card from '@/components/shared/Card';
import Button from '@/components/shared/Button';
import Link from 'next/link';

export default function NotificationSettingsPage() {
  const [settings, setSettings] = useState({
    emailWorkoutReminders: true,
    emailProgramUpdates: true,
    emailTeamActivity: false,
    emailMarketing: false,
    pushWorkoutReminders: true,
    pushProgramUpdates: true,
    pushTeamActivity: true,
    pushMarketing: false,
    smsWorkoutReminders: false,
    smsTeamActivity: false
  });

  const handleToggle = (key: keyof typeof settings) => {
    setSettings({ ...settings, [key]: !settings[key] });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Updated notifications:', settings);
  };

  return (
    <LayoutWrapper>
      <div className="max-w-5xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-2 text-white">Settings</h1>
        <p className="text-slate-400 mb-8">Manage your account settings and preferences</p>

        <div className="flex gap-4 mb-8 border-b border-slate-700">
          <Link
            href="/settings/profile"
            className="px-4 py-2 text-slate-400 hover:text-white"
          >
            Profile
          </Link>
          {/* <Link
            href="/settings/notifications"
            className="px-4 py-2 font-medium border-b-2 border-blue-500 text-blue-400"
          >
            Notifications
          </Link> */}
          <Link
            href="/settings/subscription"
            className="px-4 py-2 text-slate-400 hover:text-white"
          >
            Subscription
          </Link>
        </div>

        <form onSubmit={handleSubmit}>
          <Card className="p-6 mb-6 bg-slate-800 border-slate-700">
            <h2 className="text-xl font-bold mb-4 text-white">Email Notifications</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-white">Workout Reminders</h3>
                  <p className="text-sm text-slate-400">Get notified about upcoming workouts</p>
                </div>
                <label className="relative inline-block w-12 h-6 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.emailWorkoutReminders}
                    onChange={() => handleToggle('emailWorkoutReminders')}
                    className="sr-only peer"
                  />
                  <div className="w-12 h-6 bg-slate-700 rounded-full peer-checked:bg-blue-600 transition-colors"></div>
                  <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-6"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-white">Program Updates</h3>
                  <p className="text-sm text-slate-400">Updates about your training programs</p>
                </div>
                <label className="relative inline-block w-12 h-6 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.emailProgramUpdates}
                    onChange={() => handleToggle('emailProgramUpdates')}
                    className="sr-only peer"
                  />
                  <div className="w-12 h-6 bg-slate-700 rounded-full peer-checked:bg-blue-600 transition-colors"></div>
                  <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-6"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-white">Team Activity</h3>
                  <p className="text-sm text-slate-400">Notifications about your team members</p>
                </div>
                <label className="relative inline-block w-12 h-6 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.emailTeamActivity}
                    onChange={() => handleToggle('emailTeamActivity')}
                    className="sr-only peer"
                  />
                  <div className="w-12 h-6 bg-slate-700 rounded-full peer-checked:bg-blue-600 transition-colors"></div>
                  <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-6"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-white">Marketing Emails</h3>
                  <p className="text-sm text-slate-400">News, tips, and special offers</p>
                </div>
                <label className="relative inline-block w-12 h-6 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.emailMarketing}
                    onChange={() => handleToggle('emailMarketing')}
                    className="sr-only peer"
                  />
                  <div className="w-12 h-6 bg-slate-700 rounded-full peer-checked:bg-blue-600 transition-colors"></div>
                  <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-6"></div>
                </label>
              </div>
            </div>
          </Card>

          <Card className="p-6 mb-6 bg-slate-800 border-slate-700">
            <h2 className="text-xl font-bold mb-4 text-white">Push Notifications</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-white">Workout Reminders</h3>
                  <p className="text-sm text-slate-400">Push notifications for upcoming workouts</p>
                </div>
                <label className="relative inline-block w-12 h-6 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.pushWorkoutReminders}
                    onChange={() => handleToggle('pushWorkoutReminders')}
                    className="sr-only peer"
                  />
                  <div className="w-12 h-6 bg-slate-700 rounded-full peer-checked:bg-blue-600 transition-colors"></div>
                  <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-6"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-white">Program Updates</h3>
                  <p className="text-sm text-slate-400">Important program changes and milestones</p>
                </div>
                <label className="relative inline-block w-12 h-6 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.pushProgramUpdates}
                    onChange={() => handleToggle('pushProgramUpdates')}
                    className="sr-only peer"
                  />
                  <div className="w-12 h-6 bg-slate-700 rounded-full peer-checked:bg-blue-600 transition-colors"></div>
                  <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-6"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-white">Team Activity</h3>
                  <p className="text-sm text-slate-400">Your team members' achievements and updates</p>
                </div>
                <label className="relative inline-block w-12 h-6 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.pushTeamActivity}
                    onChange={() => handleToggle('pushTeamActivity')}
                    className="sr-only peer"
                  />
                  <div className="w-12 h-6 bg-slate-700 rounded-full peer-checked:bg-blue-600 transition-colors"></div>
                  <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-6"></div>
                </label>
              </div>
            </div>
          </Card>

          <Card className="p-6 mb-6 bg-slate-800 border-slate-700">
            <h2 className="text-xl font-bold mb-4 text-white">SMS Notifications</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-white">Workout Reminders</h3>
                  <p className="text-sm text-slate-400">Text reminders for scheduled workouts</p>
                </div>
                <label className="relative inline-block w-12 h-6 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.smsWorkoutReminders}
                    onChange={() => handleToggle('smsWorkoutReminders')}
                    className="sr-only peer"
                  />
                  <div className="w-12 h-6 bg-slate-700 rounded-full peer-checked:bg-blue-600 transition-colors"></div>
                  <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-6"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-white">Team Activity</h3>
                  <p className="text-sm text-slate-400">Urgent team notifications via text</p>
                </div>
                <label className="relative inline-block w-12 h-6 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.smsTeamActivity}
                    onChange={() => handleToggle('smsTeamActivity')}
                    className="sr-only peer"
                  />
                  <div className="w-12 h-6 bg-slate-700 rounded-full peer-checked:bg-blue-600 transition-colors"></div>
                  <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-6"></div>
                </label>
              </div>
            </div>
          </Card>

          <div className="flex gap-3">
            <Button type="submit">Save Preferences</Button>
            <Button type="button" variant="secondary">Reset to Default</Button>
          </div>
        </form>
      </div>
    </LayoutWrapper>
  );
}
