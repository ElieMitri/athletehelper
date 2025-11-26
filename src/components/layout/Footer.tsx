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
