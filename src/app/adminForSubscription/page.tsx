"use client";

import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { collection, getDocs, doc, updateDoc } from "firebase/firestore";

export default function AdminPage() {
  const [allUsers, setAllUsers] = useState<any[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  // ------------------------------------
  // LOAD ALL USERS ON FIRST LOAD
  // ------------------------------------
  const loadUsers = async () => {
    setLoading(true);

    const snap = await getDocs(collection(db, "users"));

    const data: any[] = [];
    snap.forEach((doc) => data.push({ id: doc.id, ...doc.data() }));

    // Sort alphabetically
    data.sort((a, b) => a.name.localeCompare(b.name));

    setAllUsers(data);
    setFilteredUsers(data); // show all initially
    setLoading(false);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  // ------------------------------------
  // SEARCH FILTERING (client-side)
  // ------------------------------------
  const handleSearch = (query: string) => {
    setSearchQuery(query);

    if (!query.trim()) {
      // show all users if input empty
      setFilteredUsers(allUsers);
      return;
    }

    const q = query.toLowerCase();

    const results = allUsers.filter(
      (user) =>
        user.name?.toLowerCase().includes(q) ||
        user.email?.toLowerCase().includes(q) ||
        user.id.toLowerCase().includes(q)
    );

    setFilteredUsers(results);
  };

  // ------------------------------------
  // UPDATE SUBSCRIPTION
  // ------------------------------------
  const updateSubscription = async (uid: string, value: string) => {
    try {
      setUpdatingId(uid);

      await updateDoc(doc(db, "users", uid), {
        subscription: value,
      });

      // update UI
      setAllUsers((prev) =>
        prev.map((u) => (u.id === uid ? { ...u, subscription: value } : u))
      );
      setFilteredUsers((prev) =>
        prev.map((u) => (u.id === uid ? { ...u, subscription: value } : u))
      );
    } catch (err) {
      console.error(err);
    } finally {
      setUpdatingId(null);
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-10 px-6">
      <h1 className="text-3xl font-bold text-white mb-6">Admin Panel</h1>

      {/* Search */}
      <div className="flex gap-3 mb-6">
        <input
          type="text"
          placeholder="Search by name, email, or UID..."
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
          className="flex-1 bg-slate-800 border border-slate-700 text-white px-4 py-2 rounded"
        />
      </div>

      {/* Loading */}
      {loading && <p className="text-slate-300">Loading users...</p>}

      {/* List */}
      {!loading && filteredUsers.length === 0 && (
        <p className="text-slate-400">No users found.</p>
      )}

      <div className="space-y-4">
        {filteredUsers.map((user) => (
          <div
            key={user.id}
            className="bg-slate-800 border border-slate-700 p-4 rounded-lg shadow"
          >
            <p className="text-white font-semibold text-lg">{user.name}</p>

            {user.email && (
              <p className="text-slate-400 text-sm">Email: {user.email}</p>
            )}

            <p className="text-slate-400 text-sm">UID: {user.id}</p>

            <p className="text-slate-400 text-sm mb-3">
              Subscription:{" "}
              <span
                className={
                  user.subscription === "paid"
                    ? "text-green-400"
                    : "text-red-400"
                }
              >
                {user.subscription || "free"}
              </span>
            </p>

            <div className="flex gap-3">
              <button
                disabled={updatingId === user.id}
                onClick={() => updateSubscription(user.id, "paid")}
                className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded text-white disabled:opacity-50"
              >
                Set Paid
              </button>

              <button
                disabled={updatingId === user.id}
                onClick={() => updateSubscription(user.id, "free")}
                className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-white disabled:opacity-50"
              >
                Set Free
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
