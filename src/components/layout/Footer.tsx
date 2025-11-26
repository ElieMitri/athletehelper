import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-900 to-black border-t border-slate-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <h3 className="font-bold text-2xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                AthleteHelper
              </h3>
            </Link>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Professional training platform for multi-sport athletes. Elevate
              your performance with science-backed programs and expert guidance.
            </p>

            {/* Social Links */}
            {/* <div className="flex items-center gap-3">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all hover:scale-110 group"
                aria-label="Twitter"
              >
                <svg
                  className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-all hover:scale-110 group"
                aria-label="Facebook"
              >
                <svg
                  className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 hover:bg-pink-600 rounded-lg flex items-center justify-center transition-all hover:scale-110 group"
                aria-label="Instagram"
              >
                <svg
                  className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path
                    d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <line
                    x1="17.5"
                    y1="6.5"
                    x2="17.51"
                    y2="6.5"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 hover:bg-red-600 rounded-lg flex items-center justify-center transition-all hover:scale-110 group"
                aria-label="YouTube"
              >
                <svg
                  className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33z" />
                  <polygon
                    points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"
                    fill="black"
                  />
                </svg>
              </a>
            </div> */}
          </div>

          {/* Sports Links */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-lg">Sports</h4>
            <div className="space-y-3">
              <Link
                href="/sports/football"
                className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors group"
              >
                <span className="text-sm group-hover:translate-x-1 transition-transform">
                  ⚽ Soccer
                </span>
              </Link>
              <Link
                href="/sports/basketball"
                className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors group"
              >
                <span className="text-sm group-hover:translate-x-1 transition-transform">
                  🏀 Basketball
                </span>
              </Link>
              {/* <Link
                href="/sports/running"
                className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors group"
              >
                <span className="text-sm group-hover:translate-x-1 transition-transform">
                  🏃 Running
                </span>
              </Link>
              <Link
                href="/sports/boxing"
                className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors group"
              >
                <span className="text-sm group-hover:translate-x-1 transition-transform">
                  🥊 Boxing
                </span>
              </Link>
              <Link
                href="/sports/tennis"
                className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors group"
              >
                <span className="text-sm group-hover:translate-x-1 transition-transform">
                  🎾 Tennis
                </span>
              </Link>
              <Link
                href="/sports/soccer"
                className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors group"
              >
                <span className="text-sm group-hover:translate-x-1 transition-transform">
                                    🏈 Football
                </span>
              </Link> */}
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-lg">Platform</h4>
            <div className="space-y-3">
              <Link
                href="/programs"
                className="block text-sm text-slate-400 hover:text-blue-400 transition-colors hover:translate-x-1 transform"
              >
                Training Programs
              </Link>
              <Link
                href="/exercises"
                className="block text-sm text-slate-400 hover:text-blue-400 transition-colors hover:translate-x-1 transform"
              >
                Exercise Library
              </Link>
              <Link
                href="/rehab"
                className="block text-sm text-slate-400 hover:text-blue-400 transition-colors hover:translate-x-1 transform"
              >
                Injury Rehab
              </Link>
              <Link
                href="/planner"
                className="block text-sm text-slate-400 hover:text-blue-400 transition-colors hover:translate-x-1 transform"
              >
                Training Planner
              </Link>
              <Link
                href="/community"
                className="block text-sm text-slate-400 hover:text-blue-400 transition-colors hover:translate-x-1 transform"
              >
                Community
              </Link>
              <Link
                href="/settings/subscription"
                className="block text-sm text-slate-400 hover:text-blue-400 transition-colors hover:translate-x-1 transform"
              >
                Pricing
              </Link>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-lg">Company</h4>
            <div className="space-y-3">
              <Link
                href="/about"
                className="block text-sm text-slate-400 hover:text-blue-400 transition-colors hover:translate-x-1 transform"
              >
                About Us
              </Link>
              <Link
                href="/blog"
                className="block text-sm text-slate-400 hover:text-blue-400 transition-colors hover:translate-x-1 transform"
              >
                Blog
              </Link>
              <Link
                href="/careers"
                className="block text-sm text-slate-400 hover:text-blue-400 transition-colors hover:translate-x-1 transform"
              >
                Careers
              </Link>
              <Link
                href="/contact"
                className="block text-sm text-slate-400 hover:text-blue-400 transition-colors hover:translate-x-1 transform"
              >
                Contact
              </Link>
              <Link
                href="/privacy"
                className="block text-sm text-slate-400 hover:text-blue-400 transition-colors hover:translate-x-1 transform"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="block text-sm text-slate-400 hover:text-blue-400 transition-colors hover:translate-x-1 transform"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        {/* <div className="border-t border-slate-800 pt-8 mb-8">
          <div className="max-w-2xl">
            <h4 className="font-semibold text-white mb-2 text-lg">
              Stay Updated
            </h4>
            <p className="text-slate-400 text-sm mb-4">
              Get the latest training tips, program updates, and exclusive
              content delivered to your inbox.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
              <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105 shadow-lg whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div> */}

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-slate-400">
              © 2025 AthleteHelper. All rights reserved.
            </div>
            {/* <div className="flex items-center gap-6 text-sm">
              <Link
                href="/sitemap"
                className="text-slate-400 hover:text-blue-400 transition-colors"
              >
                Sitemap
              </Link>
              <Link
                href="/accessibility"
                className="text-slate-400 hover:text-blue-400 transition-colors"
              >
                Accessibility
              </Link>
              <Link
                href="/cookies"
                className="text-slate-400 hover:text-blue-400 transition-colors"
              >
                Cookie Settings
              </Link>
            </div> */}
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <span>Made with</span>
              <span className="text-red-500 animate-pulse">❤️</span>
              <span>for Athletes</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
