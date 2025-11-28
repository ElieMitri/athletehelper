"use client";

import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { collection, getDocs, doc, updateDoc } from "firebase/firestore";
import { useAuth } from "@/context/AuthContext";

export default function AdminPage() {
  const { user, loading: authLoading } = useAuth();
  const [allUsers, setAllUsers] = useState<any[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  // CHECK IF USER IS ADMIN
  const isAdmin = user?.email === "eliegmitri7@gmail.com";

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
    if (!authLoading && isAdmin) {
      loadUsers();
    }
  }, [authLoading, isAdmin]);

  // ------------------------------------
  // CHECK AND EXPIRE SUBSCRIPTIONS
  // ------------------------------------
  useEffect(() => {
    if (!isAdmin) return;

    const checkExpiredSubscriptions = async () => {
      const now = new Date();

      for (const user of allUsers) {
        if (user.subscription === "paid" && user.subscriptionExpiresAt) {
          const expiryDate = new Date(user.subscriptionExpiresAt);

          // If subscription has expired
          if (now > expiryDate) {
            try {
              await updateDoc(doc(db, "users", user.id), {
                subscription: "free",
                subscriptionExpiresAt: null,
                nextBillingDate: null,
              });

              // Update UI
              setAllUsers((prev) =>
                prev.map((u) =>
                  u.id === user.id
                    ? {
                        ...u,
                        subscription: "free",
                        subscriptionExpiresAt: null,
                        nextBillingDate: null,
                      }
                    : u
                )
              );
              setFilteredUsers((prev) =>
                prev.map((u) =>
                  u.id === user.id
                    ? {
                        ...u,
                        subscription: "free",
                        subscriptionExpiresAt: null,
                        nextBillingDate: null,
                      }
                    : u
                )
              );

              console.log(
                `User ${user.id} subscription expired and downgraded to free`
              );
            } catch (err) {
              console.error(
                `Error expiring subscription for user ${user.id}:`,
                err
              );
            }
          }
        }
      }
    };

    // Check on mount and every minute
    checkExpiredSubscriptions();
    const interval = setInterval(checkExpiredSubscriptions, 60000); // Check every minute

    return () => clearInterval(interval);
  }, [allUsers, isAdmin]);

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

      const updateData: any = {
        subscription: value,
      };

      if (value === "paid") {
        // Set expiry to 1 month from now
        const expiryDate = new Date();
        expiryDate.setMonth(expiryDate.getMonth() + 1);

        updateData.subscriptionExpiresAt = expiryDate.toISOString();
        updateData.nextBillingDate = expiryDate.toISOString();
      } else {
        // If setting to free, clear expiry and billing date
        updateData.subscriptionExpiresAt = null;
        updateData.nextBillingDate = null;
      }

      await updateDoc(doc(db, "users", uid), updateData);

      // update UI
      setAllUsers((prev) =>
        prev.map((u) => (u.id === uid ? { ...u, ...updateData } : u))
      );
      setFilteredUsers((prev) =>
        prev.map((u) => (u.id === uid ? { ...u, ...updateData } : u))
      );
    } catch (err) {
      console.error(err);
    } finally {
      setUpdatingId(null);
    }
  };

  // ------------------------------------
  // FORMAT DATE FOR DISPLAY
  // ------------------------------------
  const formatDate = (dateString: string) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // ------------------------------------
  // GET TIME REMAINING
  // ------------------------------------
  const getTimeRemaining = (dateString: string) => {
    if (!dateString) return null;

    const now = new Date();
    const expiry = new Date(dateString);
    const diff = expiry.getTime() - now.getTime();

    if (diff <= 0) return "Expired";

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    if (days > 0) {
      return `${days} day${days !== 1 ? "s" : ""} remaining`;
    } else {
      return `${hours} hour${hours !== 1 ? "s" : ""} remaining`;
    }
  };

  // ------------------------------------
  // ACCESS DENIED SCREEN
  // ------------------------------------
  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-slate-400">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user || !isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950 px-4">
        <div className="max-w-md w-full text-center">
          <div className="text-7xl mb-6">🚫</div>
          <h1 className="text-4xl font-bold text-white mb-4">Access Denied</h1>
          <p className="text-slate-400 text-lg mb-8">
            You don't have permission to access the admin panel.
          </p>
          <a
            href="/dashboard"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all"
          >
            Back to Dashboard
          </a>
        </div>
      </div>
    );
  }

  // ------------------------------------
  // ADMIN PANEL (ONLY FOR eliegmitri7@gmail.com)
  // ------------------------------------
  return (
    <div className="max-w-4xl mx-auto py-10 px-6">
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

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-slate-800 border border-slate-700 p-4 rounded-lg">
          <p className="text-slate-400 text-sm">Total Users</p>
          <p className="text-white text-2xl font-bold">{allUsers.length}</p>
        </div>
        <div className="bg-slate-800 border border-slate-700 p-4 rounded-lg">
          <p className="text-slate-400 text-sm">Paid Users</p>
          <p className="text-green-400 text-2xl font-bold">
            {allUsers.filter((u) => u.subscription === "paid").length}
          </p>
        </div>
        <div className="bg-slate-800 border border-slate-700 p-4 rounded-lg">
          <p className="text-slate-400 text-sm">Free Users</p>
          <p className="text-slate-400 text-2xl font-bold">
            {allUsers.filter((u) => u.subscription !== "paid").length}
          </p>
        </div>
      </div>

      {/* Loading */}
      {loading && <p className="text-slate-300">Loading users...</p>}

      {/* List */}
      {!loading && filteredUsers.length === 0 && (
        <p className="text-slate-400">No users found.</p>
      )}

      <div className="space-y-4">
        {filteredUsers.map((user) => {
          const timeRemaining = user.subscriptionExpiresAt
            ? getTimeRemaining(user.subscriptionExpiresAt)
            : null;
          const isExpiringSoon =
            user.subscriptionExpiresAt &&
            new Date(user.subscriptionExpiresAt).getTime() - Date.now() <
              7 * 24 * 60 * 60 * 1000; // Less than 7 days

          return (
            <div
              key={user.id}
              className="bg-slate-800 border border-slate-700 p-4 rounded-lg shadow"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <p className="text-white font-semibold text-lg">
                    {user.name}
                  </p>

                  {user.email && (
                    <p className="text-slate-400 text-sm">
                      Email: {user.email}
                    </p>
                  )}

                  <p className="text-slate-400 text-sm">UID: {user.id}</p>
                </div>

                {/* Subscription Badge */}
                <div
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    user.subscription === "paid"
                      ? "bg-green-600/20 text-green-400 border border-green-600/30"
                      : "bg-slate-700/50 text-slate-400 border border-slate-600"
                  }`}
                >
                  {user.subscription === "paid" ? "PRO" : "FREE"}
                </div>
              </div>

              {/* Subscription Details */}
              <div className="mb-3 space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-slate-400 text-sm">Status:</p>
                  <span
                    className={
                      user.subscription === "paid"
                        ? "text-green-400 font-medium"
                        : "text-slate-400"
                    }
                  >
                    {user.subscription === "paid" ? "Active" : "Free Tier"}
                  </span>
                </div>

                {user.subscription === "paid" && user.nextBillingDate && (
                  <>
                    <div className="flex items-center justify-between">
                      <p className="text-slate-400 text-sm">Next Billing:</p>
                      <span className="text-blue-400 text-sm">
                        {formatDate(user.nextBillingDate)}
                      </span>
                    </div>

                    {timeRemaining && (
                      <div className="flex items-center justify-between">
                        <p className="text-slate-400 text-sm">Time Left:</p>
                        <span
                          className={`text-sm font-medium ${
                            isExpiringSoon
                              ? "text-orange-400"
                              : "text-emerald-400"
                          }`}
                        >
                          {timeRemaining}
                        </span>
                      </div>
                    )}
                  </>
                )}
              </div>

              {/* Expiring Soon Warning */}
              {isExpiringSoon && user.subscription === "paid" && (
                <div className="mb-3 p-3 bg-orange-600/10 border border-orange-600/30 rounded-lg">
                  <p className="text-orange-400 text-sm flex items-center gap-2">
                    <span>⚠️</span>
                    <span>Subscription expiring soon!</span>
                  </p>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button
                  disabled={
                    updatingId === user.id || user.subscription === "paid"
                  }
                  onClick={() => updateSubscription(user.id, "paid")}
                  className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {user.subscription === "paid"
                    ? "✓ Active"
                    : "Activate Pro (1 Month)"}
                </button>

                <button
                  disabled={
                    updatingId === user.id || user.subscription === "free"
                  }
                  onClick={() => updateSubscription(user.id, "free")}
                  className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {user.subscription === "free"
                    ? "Already Free"
                    : "Downgrade to Free"}
                </button>

                {updatingId === user.id && (
                  <span className="flex items-center text-slate-400 text-sm">
                    <svg
                      className="animate-spin h-5 w-5 mr-2"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Updating...
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
