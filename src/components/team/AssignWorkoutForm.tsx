'use client';

import { useState } from 'react';
import Button from '../shared/Button';

export default function AssignWorkoutForm() {
  const [selectedMember, setSelectedMember] = useState('');
  const [selectedProgram, setSelectedProgram] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Assign workout:', { selectedMember, selectedProgram });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">Team Member</label>
        <select
          value={selectedMember}
          onChange={(e) => setSelectedMember(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2"
          required
        >
          <option value="">Select a member</option>
          <option value="1">John Doe</option>
          <option value="2">Jane Smith</option>
          <option value="3">Mike Johnson</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Program</label>
        <select
          value={selectedProgram}
          onChange={(e) => setSelectedProgram(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2"
          required
        >
          <option value="">Select a program</option>
          <option value="1">Strength Building</option>
          <option value="2">Speed Development</option>
          <option value="3">Endurance Training</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Start Date</label>
        <input
          type="date"
          className="w-full border border-gray-300 rounded px-3 py-2"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Notes</label>
        <textarea
          className="w-full border border-gray-300 rounded px-3 py-2"
          rows={3}
          placeholder="Add any notes or instructions..."
        ></textarea>
      </div>
      <Button type="submit" className="w-full">
        Assign Workout
      </Button>
    </form>
  );
}
