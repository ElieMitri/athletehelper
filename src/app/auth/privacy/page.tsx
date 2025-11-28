"use client";

import Link from "next/link";
import { useState } from "react";

export default function AuthPrivacyPage() {
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
          <h1 className="text-4xl font-bold mb-3 text-white">Privacy Policy</h1>
          <p className="text-slate-400">Last updated: November 27, 2024</p>
        </div>

        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl shadow-2xl p-8">
          <div className="prose prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                Introduction
              </h2>
              <p className="text-slate-300 mb-4">
                Welcome to AthleteHelper. We respect your privacy and are
                committed to protecting your personal data. This privacy policy
                will inform you about how we look after your personal data when
                you visit our platform and tell you about your privacy rights
                and how the law protects you.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                Information We Collect
              </h2>
              <p className="text-slate-300 mb-4">
                We collect and process the following types of information:
              </p>
              <ul className="space-y-2 text-slate-300 ml-6">
                <li className="list-disc">
                  <strong className="text-white">Personal Information:</strong>{" "}
                  Name, email address, phone number, and profile picture
                </li>
                <li className="list-disc">
                  <strong className="text-white">Training Data:</strong> Workout
                  history, exercise logs, programs, and performance metrics
                </li>
                <li className="list-disc">
                  <strong className="text-white">Physical Data:</strong> Height,
                  weight, body measurements, and fitness assessments
                </li>
                <li className="list-disc">
                  <strong className="text-white">Usage Data:</strong> How you
                  interact with our platform, including pages visited and
                  features used
                </li>
                <li className="list-disc">
                  <strong className="text-white">Device Information:</strong> IP
                  address, browser type, device type, and operating system
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                How We Use Your Information
              </h2>
              <p className="text-slate-300 mb-4">
                We use your personal data for the following purposes:
              </p>
              <ul className="space-y-2 text-slate-300 ml-6">
                <li className="list-disc">
                  To provide and maintain our training platform services
                </li>
                <li className="list-disc">
                  To personalize your training experience and recommendations
                </li>
                <li className="list-disc">
                  To track your progress and provide performance analytics
                </li>
                <li className="list-disc">
                  To send you notifications about workouts, programs, and
                  updates
                </li>
                <li className="list-disc">
                  To improve our platform and develop new features
                </li>
                <li className="list-disc">
                  To prevent fraud and ensure platform security
                </li>
                <li className="list-disc">To comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                Data Sharing and Disclosure
              </h2>
              <p className="text-slate-300 mb-4">
                We do not sell your personal data. We may share your information
                with:
              </p>
              <ul className="space-y-2 text-slate-300 ml-6">
                <li className="list-disc">
                  <strong className="text-white">Service Providers:</strong>{" "}
                  Third-party companies that help us operate our platform (e.g.,
                  hosting, analytics, payment processing)
                </li>
                <li className="list-disc">
                  <strong className="text-white">Coaches and Trainers:</strong>{" "}
                  If you choose to work with a coach, they will have access to
                  your training data
                </li>
                <li className="list-disc">
                  <strong className="text-white">Legal Requirements:</strong>{" "}
                  When required by law or to protect our rights
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                Data Security
              </h2>
              <p className="text-slate-300 mb-4">
                We implement appropriate technical and organizational measures
                to protect your personal data against unauthorized access,
                alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="space-y-2 text-slate-300 ml-6">
                <li className="list-disc">
                  Encryption of data in transit and at rest
                </li>
                <li className="list-disc">
                  Regular security assessments and updates
                </li>
                <li className="list-disc">
                  Access controls and authentication requirements
                </li>
                <li className="list-disc">
                  Employee training on data protection
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                Your Privacy Rights
              </h2>
              <p className="text-slate-300 mb-4">
                You have the following rights regarding your personal data:
              </p>
              <ul className="space-y-2 text-slate-300 ml-6">
                <li className="list-disc">
                  <strong className="text-white">Access:</strong> Request access
                  to your personal data
                </li>
                <li className="list-disc">
                  <strong className="text-white">Correction:</strong> Request
                  correction of inaccurate data
                </li>
                <li className="list-disc">
                  <strong className="text-white">Deletion:</strong> Request
                  deletion of your personal data
                </li>
                <li className="list-disc">
                  <strong className="text-white">Portability:</strong> Request
                  transfer of your data to another service
                </li>
                <li className="list-disc">
                  <strong className="text-white">Objection:</strong> Object to
                  processing of your data
                </li>
                <li className="list-disc">
                  <strong className="text-white">Withdraw Consent:</strong>{" "}
                  Withdraw consent at any time
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                Data Retention
              </h2>
              <p className="text-slate-300 mb-4">
                We retain your personal data only for as long as necessary to
                fulfill the purposes outlined in this privacy policy, unless a
                longer retention period is required by law. When you delete your
                account, we will delete or anonymize your personal data within
                30 days.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                Cookies and Tracking
              </h2>
              <p className="text-slate-300 mb-4">
                We use cookies and similar tracking technologies to enhance your
                experience. You can control cookie preferences through your
                browser settings.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                Children's Privacy
              </h2>
              <p className="text-slate-300 mb-4">
                Our platform is not intended for users under 13 years of age. We
                do not knowingly collect personal information from children
                under 13. If you believe we have collected information from a
                child under 13, please contact us immediately.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                Changes to This Policy
              </h2>
              <p className="text-slate-300 mb-4">
                We may update this privacy policy from time to time. We will
                notify you of any changes by posting the new policy on this page
                and updating the "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
              <p className="text-slate-300 mb-4">
                If you have any questions about this privacy policy, please
                contact us:
              </p>
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                <p className="text-slate-300">
                  <strong className="text-white">Phone Number:</strong> (+961)
                  81/107/752
                  <br />
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
