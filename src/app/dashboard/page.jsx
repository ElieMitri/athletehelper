import LayoutWrapper from "@/components/layout/LayoutWrapper";
import Card from "@/components/shared/Card";
import Link from "next/link";
import ProtectedRoute from "../../components/ProtectedRoute";

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <LayoutWrapper>
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Hero Section */}
          <div className="mb-12 text-center">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
              Welcome to AthleteHelper
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Your comprehensive training platform for achieving peak athletic
              performance
            </p>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <Link href="/exercises">
              <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-4 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] flex flex-col items-center justify-center gap-2">
                <span className="text-3xl">💪</span>
                <span>Exercises</span>
              </button>
            </Link>
            <Link href="/programs">
              <button className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-6 py-4 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] flex flex-col items-center justify-center gap-2">
                <span className="text-3xl">📋</span>
                <span>Programs</span>
              </button>
            </Link>
            <Link href="/planner">
              <button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-6 py-4 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] flex flex-col items-center justify-center gap-2">
                <span className="text-3xl">📅</span>
                <span>Planner</span>
              </button>
            </Link>
            <Link href="/rehab">
              <button className="w-full bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white px-6 py-4 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] flex flex-col items-center justify-center gap-2">
                <span className="text-3xl">🏥</span>
                <span>Rehab</span>
              </button>
            </Link>
          </div>

          {/* Features Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Platform Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-6 bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 hover:border-blue-500 transition-all hover:scale-[1.02]">
                <div className="text-5xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Personalized Programs
                </h3>
                <p className="text-slate-400">
                  Access tailored training programs designed for your specific
                  sport and goals
                </p>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 hover:border-blue-500 transition-all hover:scale-[1.02]">
                <div className="text-5xl mb-4">📊</div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Track Progress
                </h3>
                <p className="text-slate-400">
                  Monitor your improvements with detailed analytics and
                  performance metrics
                </p>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 hover:border-blue-500 transition-all hover:scale-[1.02]">
                <div className="text-5xl mb-4">👥</div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Expert Guidance
                </h3>
                <p className="text-slate-400">
                  Get professional coaching and support from certified trainers
                </p>
              </Card>
            </div>
          </div>

          {/* Explore Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Explore Our Platform
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/exercises">
                <Card className="p-8 bg-gradient-to-br from-blue-600/10 to-slate-800 border-blue-600/30 hover:border-blue-600/50 transition-all cursor-pointer group hover:scale-[1.02]">
                  <div className="flex items-start gap-4">
                    <div className="text-5xl group-hover:scale-110 transition-transform">
                      💪
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        Exercise Library
                      </h3>
                      <p className="text-slate-300 mb-4">
                        Browse over 500 exercises with detailed instructions,
                        videos, and form guides
                      </p>
                      <span className="text-blue-400 font-medium group-hover:translate-x-2 transition-transform inline-block">
                        Explore Exercises →
                      </span>
                    </div>
                  </div>
                </Card>
              </Link>

              <Link href="/programs">
                <Card className="p-8 bg-gradient-to-br from-purple-600/10 to-slate-800 border-purple-600/30 hover:border-purple-600/50 transition-all cursor-pointer group hover:scale-[1.02]">
                  <div className="flex items-start gap-4">
                    <div className="text-5xl group-hover:scale-110 transition-transform">
                      📋
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        Training Programs
                      </h3>
                      <p className="text-slate-300 mb-4">
                        Structured programs for every sport and fitness level,
                        from beginner to advanced
                      </p>
                      <span className="text-purple-400 font-medium group-hover:translate-x-2 transition-transform inline-block">
                        View Programs →
                      </span>
                    </div>
                  </div>
                </Card>
              </Link>

              <Link href="/planner">
                <Card className="p-8 bg-gradient-to-br from-emerald-600/10 to-slate-800 border-emerald-600/30 hover:border-emerald-600/50 transition-all cursor-pointer group hover:scale-[1.02]">
                  <div className="flex items-start gap-4">
                    <div className="text-5xl group-hover:scale-110 transition-transform">
                      📅
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        Training Planner
                      </h3>
                      <p className="text-slate-300 mb-4">
                        Organize your workouts with our intelligent scheduling
                        and planning tools
                      </p>
                      <span className="text-emerald-400 font-medium group-hover:translate-x-2 transition-transform inline-block">
                        Plan Workouts →
                      </span>
                    </div>
                  </div>
                </Card>
              </Link>

              <Link href="/rehab">
                <Card className="p-8 bg-gradient-to-br from-orange-600/10 to-slate-800 border-orange-600/30 hover:border-orange-600/50 transition-all cursor-pointer group hover:scale-[1.02]">
                  <div className="flex items-start gap-4">
                    <div className="text-5xl group-hover:scale-110 transition-transform">
                      🏥
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        Injury Rehabilitation
                      </h3>
                      <p className="text-slate-300 mb-4">
                        Science-based recovery protocols to get you back to peak
                        performance safely
                      </p>
                      <span className="text-orange-400 font-medium group-hover:translate-x-2 transition-transform inline-block">
                        View Rehab Programs →
                      </span>
                    </div>
                  </div>
                </Card>
              </Link>
            </div>
          </div>

          {/* Sports Categories */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Train for Your Sport
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
              {[
                // { name: "Football", icon: "🏈", href: "/sports/football" },
                { name: "Soccer", icon: "⚽", href: "/sports/soccer" },
                { name: "Basketball", icon: "🏀", href: "/sports/basketball" },
                // { name: "Baseball", icon: "⚾", href: "/sports/baseball" },
                // { name: "Tennis", icon: "🎾", href: "/sports/tennis" },
                // { name: "Running", icon: "🏃", href: "/sports/running" },
              ].map((sport) => (
                <div key={sport.name} 
                // href={sport.href}
                >
                  <Card className="p-6 text-center bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 hover:border-blue-500 cursor-pointer transition-all hover:scale-[1.05] group">
                    <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">
                      {sport.icon}
                    </div>
                    <p className="text-white font-semibold">{sport.name}</p>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <Card className="p-12 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 border-blue-600/30 text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Start Training?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Join thousands of athletes who are already achieving their goals
              with AthleteHelper
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <Link href="/programs">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105 shadow-lg shadow-blue-600/30">
                  Browse Programs
                </button>
              </Link>
              <Link href="/exercises">
                <button className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105 border border-slate-700">
                  Explore Exercises
                </button>
              </Link>
            </div>
          </Card>

          {/* Quick Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Link href="/exercises">
              <Card className="p-6 text-center hover:border-blue-500 cursor-pointer transition-all hover:scale-[1.02] bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 group">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                  💪
                </div>
                <h3 className="font-bold mb-2 text-white text-lg">
                  Exercise Library
                </h3>
                <p className="text-sm text-slate-400">500+ exercises</p>
              </Card>
            </Link>
            <Link href="/programs">
              <Card className="p-6 text-center hover:border-blue-500 cursor-pointer transition-all hover:scale-[1.02] bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 group">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                  📋
                </div>
                <h3 className="font-bold mb-2 text-white text-lg">Programs</h3>
                <p className="text-sm text-slate-400">All sports & levels</p>
              </Card>
            </Link>
            <Link href="/community">
              <Card className="p-6 text-center hover:border-blue-500 cursor-pointer transition-all hover:scale-[1.02] bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 group">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                  👥
                </div>
                <h3 className="font-bold mb-2 text-white text-lg">Community</h3>
                <p className="text-sm text-slate-400">Connect with athletes</p>
              </Card>
            </Link>
            <Link href="/settings/subscription">
              <Card className="p-6 text-center hover:border-blue-500 cursor-pointer transition-all hover:scale-[1.02] bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 group">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                  ⭐
                </div>
                <h3 className="font-bold mb-2 text-white text-lg">Premium</h3>
                <p className="text-sm text-slate-400">Unlock all features</p>
              </Card>
            </Link>
          </div>
        </div>
      </LayoutWrapper>
    </ProtectedRoute>
  );
}
