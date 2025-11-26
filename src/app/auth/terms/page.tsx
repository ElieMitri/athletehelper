"use client";

import Link from "next/link";

export default function AuthTermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <Link
            href="/auth/signup"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
          >
            <span>←</span>
            <span>Back to Sign Up</span>
          </Link>
        </div>

        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-3 text-white">
            Terms of Service
          </h1>
          <p className="text-slate-400">Last updated: November 27, 2024</p>
        </div>

        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl shadow-2xl p-8">
          <div className="prose prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                Agreement to Terms
              </h2>
              <p className="text-slate-300 mb-4">
                By accessing or using AthleteHelper ("Platform"), you agree to
                be bound by these Terms of Service ("Terms"). If you do not
                agree to these Terms, you may not access or use the Platform.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                Description of Service
              </h2>
              <p className="text-slate-300 mb-4">
                AthleteHelper provides an online training platform that offers:
              </p>
              <ul className="space-y-2 text-slate-300 ml-6">
                <li className="list-disc">
                  Training programs and exercise libraries
                </li>
                <li className="list-disc">
                  Workout planning and tracking tools
                </li>
                <li className="list-disc">
                  Performance analytics and progress tracking
                </li>
                <li className="list-disc">Injury rehabilitation protocols</li>
                <li className="list-disc">
                  Community features and coaching services
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                User Accounts
              </h2>
              <p className="text-slate-300 mb-4">
                To use certain features, you must create an account. You agree
                to:
              </p>
              <ul className="space-y-2 text-slate-300 ml-6">
                <li className="list-disc">
                  Provide accurate and complete information
                </li>
                <li className="list-disc">
                  Maintain the security of your account credentials
                </li>
                <li className="list-disc">
                  Notify us immediately of any unauthorized access
                </li>
                <li className="list-disc">
                  Be responsible for all activities under your account
                </li>
                <li className="list-disc">
                  Not share your account with others
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                User Conduct
              </h2>
              <p className="text-slate-300 mb-4">You agree not to:</p>
              <ul className="space-y-2 text-slate-300 ml-6">
                <li className="list-disc">
                  Use the Platform for any illegal purpose
                </li>
                <li className="list-disc">Violate any laws or regulations</li>
                <li className="list-disc">
                  Infringe on intellectual property rights
                </li>
                <li className="list-disc">Upload malicious code or viruses</li>
                <li className="list-disc">
                  Harass, abuse, or harm other users
                </li>
                <li className="list-disc">
                  Attempt to gain unauthorized access to the Platform
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                Medical Disclaimer
              </h2>
              <div className="bg-yellow-950/30 border border-yellow-800 rounded-lg p-4 mb-4">
                <p className="text-slate-200">
                  <strong className="text-yellow-400">Important:</strong> The
                  information and programs provided on AthleteHelper are for
                  educational and informational purposes only.
                </p>
              </div>
              <ul className="space-y-2 text-slate-300 ml-6">
                <li className="list-disc">
                  Content is not intended as medical advice or to replace
                  consultation with healthcare professionals
                </li>
                <li className="list-disc">
                  Always consult a physician before beginning any exercise
                  program
                </li>
                <li className="list-disc">
                  Follow rehabilitation protocols only under professional
                  supervision
                </li>
                <li className="list-disc">
                  We are not liable for injuries resulting from use of our
                  programs
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                Subscription and Payments
              </h2>
              <p className="text-slate-300 mb-4">
                <strong className="text-white">Subscription Plans:</strong> We
                offer various subscription tiers with different features and
                pricing.
              </p>
              <ul className="space-y-2 text-slate-300 ml-6">
                <li className="list-disc">
                  Subscriptions renew automatically unless cancelled
                </li>
                <li className="list-disc">
                  You will be charged on your billing date each period
                </li>
                <li className="list-disc">
                  Prices may change with 30 days' notice
                </li>
                <li className="list-disc">
                  No refunds for partial subscription periods
                </li>
                <li className="list-disc">
                  You may cancel at any time; access continues until period end
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                Intellectual Property
              </h2>
              <p className="text-slate-300 mb-4">
                All content on the Platform is the property of AthleteHelper or
                its licensors and is protected by copyright, trademark, and
                other intellectual property laws.
              </p>
              <p className="text-slate-300 mb-4">You may not:</p>
              <ul className="space-y-2 text-slate-300 ml-6">
                <li className="list-disc">
                  Copy, modify, or distribute Platform content
                </li>
                <li className="list-disc">
                  Use content for commercial purposes without permission
                </li>
                <li className="list-disc">
                  Remove copyright or proprietary notices
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                Termination
              </h2>
              <p className="text-slate-300 mb-4">
                We reserve the right to suspend or terminate your account at any
                time for:
              </p>
              <ul className="space-y-2 text-slate-300 ml-6">
                <li className="list-disc">Violation of these Terms</li>
                <li className="list-disc">Fraudulent or illegal activity</li>
                <li className="list-disc">
                  Harassment or abuse of other users
                </li>
                <li className="list-disc">Non-payment of subscription fees</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                Disclaimers
              </h2>
              <p className="text-slate-300 mb-4">
                THE PLATFORM IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND.
                WE DO NOT WARRANT THAT THE PLATFORM WILL BE UNINTERRUPTED,
                ERROR-FREE, OR SECURE.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                Governing Law
              </h2>
              <p className="text-slate-300 mb-4">
                These Terms are governed by the laws of the State of California,
                USA. Any disputes shall be resolved through binding arbitration
                in San Francisco, California.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                Changes to Terms
              </h2>
              <p className="text-slate-300 mb-4">
                We may modify these Terms at any time. We will notify you of
                material changes via email or Platform notification. Continued
                use after changes constitutes acceptance of the modified Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
              <p className="text-slate-300 mb-4">
                If you have questions about these Terms, please contact us:
              </p>
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                <p className="text-slate-300">
                  <strong className="text-white">Email:</strong>{" "}
                  legal@athletehelper.com
                  <br />
                  <strong className="text-white">Address:</strong>{" "}
                  AthleteHelper, Inc.
                  <br />
                  123 Training Street, Suite 100
                  <br />
                  San Francisco, CA 94105
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
