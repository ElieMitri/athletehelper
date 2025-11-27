"use client";

import LayoutWrapper from "@/components/layout/LayoutWrapper";
import Card from "@/components/shared/Card";
import Button from "@/components/shared/Button";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";

export default function SubscriptionSettingsPage() {
  const { user, loading } = useAuth();
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    "monthly"
  );
  const [isLoading, setIsLoading] = useState(true);

  // Get user's current subscription tier from auth context
  const userTier = (user?.subscription as string) || "free";
  const isPaidUser = userTier !== "free";

  useEffect(() => {
    if (user) {
      setIsLoading(false);
    }
  }, [user]);

  // Dynamic current plan based on user's actual subscription
  const getCurrentPlan = () => {
    const tierLower = userTier.toLowerCase();

    // Get next billing date from user data
    const nextBillingDate = user?.nextBillingDate
      ? new Date(user.nextBillingDate).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      : "February 15, 2025"; // Fallback date

    // Handle "paid" subscription (treat as Pro)
    if (tierLower === "paid" || tierLower === "pro") {
      return {
        name: "Pro",
        price: billingCycle === "monthly" ? "$29" : "$290",
        nextBilling: nextBillingDate,
        features: [
          "Unlimited programs",
          "Full exercise library",
          "Advanced analytics",
          "Priority support",
          "Custom workouts",
          "Injury prevention",
        ],
      };
    }

    if (tierLower === "team") {
      return {
        name: "Team",
        price: billingCycle === "monthly" ? "$99" : "$990",
        nextBilling: nextBillingDate,
        features: [
          "Everything in Pro",
          "Up to 50 athletes",
          "Team management",
          "Advanced analytics",
          "API access",
          "Dedicated support",
          "Custom integrations",
          "White-label option",
        ],
      };
    }

    // Default to Free plan
    return {
      name: "Free",
      price: "$0",
      nextBilling: null,
      features: [
        "4 programs maximum",
        "Basic exercise library",
        "3 rehab programs",
        "Standard support",
      ],
    };
  };

  const currentPlan = getCurrentPlan();

  const plans = [
    {
      name: "Free",
      icon: "🏃",
      monthlyPrice: "$0",
      yearlyPrice: "$0",
      features: [
        "4 active programs",
        "Basic exercise library",
        "3 rehab programs",
        "Standard support",
      ],
      popular: false,
      current: userTier.toLowerCase() === "free",
      color: "from-slate-600 to-slate-700",
      tier: "free",
    },
    {
      name: "Pro",
      icon: "⚡",
      monthlyPrice: "$29",
      yearlyPrice: "$290",
      features: [
        "Unlimited programs",
        "Full exercise library",
        "Advanced analytics",
        "Priority support",
        "Custom workouts",
        "Injury prevention",
      ],
      popular: true,
      current:
        userTier.toLowerCase() === "pro" || userTier.toLowerCase() === "paid",
      color: "from-blue-600 to-purple-600",
      tier: "pro",
    },
  ];

  const benefits = [
    {
      icon: "💪",
      title: "Unlimited Programs",
      description:
        "Access to all training programs and create unlimited custom plans",
    },
    {
      icon: "📊",
      title: "Advanced Analytics",
      description:
        "Track your progress with detailed insights and performance metrics",
    },
    {
      icon: "🎯",
      title: "Personal Coaching",
      description: "1-on-1 coaching sessions with certified trainers",
    },
    {
      icon: "🏥",
      title: "Injury Prevention",
      description:
        "Comprehensive rehab programs and injury prevention protocols",
    },
    {
      icon: "🍎",
      title: "Nutrition Plans",
      description: "Personalized meal plans and nutrition tracking",
    },
    {
      icon: "🔔",
      title: "Smart Reminders",
      description: "Intelligent workout reminders and progress notifications",
    },
  ];

  const faqs = [
    {
      question: "Can I cancel anytime?",
      answer:
        "Yes, you can cancel your subscription at any time. Your access will continue until the end of your billing period.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and Apple Pay.",
    },
    {
      question: "Can I switch plans?",
      answer:
        "Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect immediately.",
    },
    {
      question: "What happens if I downgrade?",
      answer:
        "If you downgrade from a paid plan, you'll retain access to premium features until the end of your current billing period. After that, your account will transition to the lower tier.",
    },
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      role: "Professional Athlete",
      comment:
        "The Pro plan transformed my training. The analytics alone are worth it!",
      rating: 5,
    },
    {
      name: "Mike R.",
      role: "Fitness Coach",
      comment:
        "Team plan is perfect for managing all my clients. Highly recommended.",
      rating: 5,
    },
  ];

  const getPrice = (plan: (typeof plans)[0]) => {
    if (plan.name === "Free") return plan.monthlyPrice;
    return billingCycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice;
  };

  const getSavings = (monthlyPrice: string, yearlyPrice: string) => {
    const monthly = parseFloat(monthlyPrice.replace("$", ""));
    const yearly = parseFloat(yearlyPrice.replace("$", ""));
    const savings = Math.round(
      ((monthly * 12 - yearly) / (monthly * 12)) * 100
    );
    return savings;
  };

  const handlePlanAction = (planTier: string) => {
    if (planTier === userTier) {
      alert("This is your current plan");
      return;
    }

    if (planTier === "free") {
      const confirmed = confirm(
        "Are you sure you want to downgrade to the Free plan? You'll lose access to premium features at the end of your billing period."
      );
      if (confirmed) {
        console.log("Downgrading to free plan...");
        // TODO: Call API to downgrade
      }
    } else {
      // Upgrading to paid plan
      console.log(`Upgrading to ${planTier} plan...`);
      // TODO: Redirect to Stripe checkout
      alert(`Redirecting to checkout for ${planTier} plan...`);
    }
  };

  const handleManageBilling = () => {
    console.log("Opening billing portal...");
    // TODO: Redirect to Stripe customer portal
    alert("Opening billing management portal...");
  };

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-[#0a0a0a]">
        <div className="animate-spin h-12 w-12 border-4 border-blue-600 border-t-transparent rounded-full"></div>
      </div>
    );
  }

  return (
    <LayoutWrapper>
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link href="/settings/profile">
            <button className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-4 group">
              <span className="group-hover:-translate-x-1 transition-transform">
                ←
              </span>
              <span>Back to Settings</span>
            </button>
          </Link>
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            Subscription & Billing
          </h1>
          <p className="text-slate-400 text-lg">
            {isPaidUser
              ? "Manage your subscription and billing details"
              : "Choose the perfect plan for your training goals"}
          </p>
        </div>

        {/* Current Plan Card */}
        <Card className="p-8 mb-8 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 border-slate-700 relative overflow-hidden">
          <div
            className={`absolute top-0 right-0 w-96 h-96 ${
              isPaidUser
                ? "bg-gradient-to-br from-blue-600/10 to-purple-600/10"
                : "bg-gradient-to-br from-slate-600/10 to-slate-700/10"
            } blur-3xl rounded-full`}
          ></div>

          <div className="relative">
            <div className="flex items-start justify-between flex-wrap gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-3xl font-bold text-white">
                    {currentPlan.name} Plan
                  </h3>
                  <span
                    className={`px-4 py-1.5 ${
                      isPaidUser
                        ? "bg-gradient-to-r from-blue-600 to-purple-600"
                        : "bg-gradient-to-r from-emerald-600 to-emerald-700"
                    } text-white rounded-full font-semibold text-sm shadow-lg`}
                  >
                    ✓ Active
                  </span>
                </div>
                <p className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
                  {currentPlan.price}
                  <span className="text-lg text-slate-400">
                    {isPaidUser
                      ? ` / ${billingCycle === "monthly" ? "month" : "year"}`
                      : " / forever"}
                  </span>
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {currentPlan.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div
                        className={`w-6 h-6 rounded-lg ${
                          isPaidUser
                            ? "bg-gradient-to-br from-blue-600 to-purple-600"
                            : "bg-gradient-to-br from-emerald-600 to-emerald-700"
                        } flex items-center justify-center flex-shrink-0 shadow-lg`}
                      >
                        <span className="text-white text-xs font-bold">✓</span>
                      </div>
                      <span className="text-slate-200">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              {isPaidUser && currentPlan.nextBilling && (
                <div className="text-right bg-slate-800/50 rounded-xl p-5 border border-slate-700">
                  <p className="text-sm text-slate-400 mb-2">
                    Next billing date
                  </p>
                  <p className="text-xl font-bold text-white">
                    {currentPlan.nextBilling}
                  </p>
                  {/* <button
                    onClick={handleManageBilling}
                    className="mt-4 text-sm text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Manage Billing →
                  </button> */}
                </div>
              )}
            </div>
          </div>
        </Card>

        {/* Billing Cycle Toggle - Only show for free users */}
        {!isPaidUser && (
          <div className="flex items-center justify-center gap-4 mb-8">
            <span
              className={`text-lg font-medium transition-colors ${
                billingCycle === "monthly" ? "text-white" : "text-slate-500"
              }`}
            >
              Monthly
            </span>
            <button
              onClick={() =>
                setBillingCycle(
                  billingCycle === "monthly" ? "yearly" : "monthly"
                )
              }
              className={`relative inline-flex h-8 w-16 items-center rounded-full transition-colors ${
                billingCycle === "yearly"
                  ? "bg-gradient-to-r from-blue-600 to-purple-600"
                  : "bg-slate-700"
              }`}
            >
              <span
                className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform shadow-lg ${
                  billingCycle === "yearly" ? "translate-x-9" : "translate-x-1"
                }`}
              />
            </button>
            <span
              className={`text-lg font-medium transition-colors ${
                billingCycle === "yearly" ? "text-white" : "text-slate-500"
              }`}
            >
              Yearly
            </span>
            <span className="px-3 py-1 bg-emerald-600/20 text-emerald-300 rounded-full text-sm font-semibold">
              Save up to 17%
            </span>
          </div>
        )}

        {/* Plans Grid - Only show for free users */}
        {!isPaidUser && (
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-white text-center">
              Choose Your Plan
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {plans.map((plan) => (
                <Card
                  key={plan.name}
                  className={`p-6 transition-all relative overflow-hidden ${
                    plan.current
                      ? "border-2 border-blue-500 shadow-xl shadow-blue-500/20 scale-105"
                      : plan.popular
                      ? "border-2 border-purple-500 shadow-xl shadow-purple-500/20"
                      : "border-slate-700 hover:border-slate-600 hover:scale-105"
                  } bg-gradient-to-br from-slate-800 to-slate-900`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 text-xs font-bold rounded-bl-lg">
                      MOST POPULAR
                    </div>
                  )}
                  {plan.current && (
                    <div className="mb-4">
                      <span className="px-3 py-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-semibold text-xs shadow-lg">
                        Current Plan
                      </span>
                    </div>
                  )}

                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${plan.color} flex items-center justify-center text-3xl mb-4 shadow-lg`}
                  >
                    {plan.icon}
                  </div>

                  <h3 className="text-2xl font-bold mb-2 text-white">
                    {plan.name}
                  </h3>

                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">
                      {getPrice(plan).split("/")[0]}
                    </span>
                    {plan.name !== "Free" && (
                      <span className="text-slate-400">
                        /{billingCycle === "monthly" ? "month" : "year"}
                      </span>
                    )}
                    {billingCycle === "yearly" && plan.name !== "Free" && (
                      <div className="mt-2">
                        <span className="text-sm text-emerald-400 font-semibold">
                          Save {getSavings(plan.monthlyPrice, plan.yearlyPrice)}
                          %
                        </span>
                      </div>
                    )}
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div
                          className={`w-5 h-5 rounded-lg bg-gradient-to-br ${plan.color} opacity-20 flex items-center justify-center flex-shrink-0 mt-0.5`}
                        >
                          <span className="text-xs">✓</span>
                        </div>
                        <span className="text-sm text-slate-300">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {plan.current ? (
                    <div className="text-center py-3 bg-slate-700 rounded-lg border border-slate-600">
                      <span className="text-blue-400 font-semibold">
                        Your Current Plan
                      </span>
                    </div>
                  ) : (
                    <Button
                      onClick={() => handlePlanAction(plan.tier)}
                      className={`w-full bg-gradient-to-r ${plan.color} hover:opacity-90 text-white font-semibold shadow-lg hover:scale-105 transition-all`}
                    >
                      {plan.tier === "free"
                        ? "Downgrade to Free"
                        : `Upgrade to ${plan.name}`}
                    </Button>
                  )}
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Billing Management Section - Only show for paid users */}
        {/* {isPaidUser && (
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-white text-center">
              Manage Your Subscription
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
      
              <Card className="p-6 bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-2xl">
                    💳
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      Payment Method
                    </h3>
                    <p className="text-sm text-slate-400">
                      Manage your billing information
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-4 bg-slate-900/50 rounded-lg border border-slate-700">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">💳</span>
                      <div>
                        <p className="text-white font-medium">
                          •••• •••• •••• 4242
                        </p>
                        <p className="text-xs text-slate-400">
                          Expires 12/2025
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={handleManageBilling}
                      className="text-sm text-blue-400 hover:text-blue-300 transition-colors font-medium"
                    >
                      Update
                    </button>
                  </div>
                  <button
                    onClick={handleManageBilling}
                    className="w-full px-4 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-medium transition-colors"
                  >
                    Manage Payment Methods
                  </button>
                </div>
              </Card>

              
              <Card className="p-6 bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-600 to-emerald-700 flex items-center justify-center text-2xl">
                    📊
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      Billing History
                    </h3>
                    <p className="text-sm text-slate-400">
                      View your past invoices
                    </p>
                  </div>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between p-3 bg-slate-900/50 rounded-lg border border-slate-700">
                    <div>
                      <p className="text-white font-medium">January 2025</p>
                      <p className="text-xs text-slate-400">Paid on Jan 15</p>
                    </div>
                    <span className="text-emerald-400 font-semibold">
                      $
                      {currentPlan.price === "$29" ||
                      currentPlan.price === "$99"
                        ? currentPlan.price.slice(1)
                        : "29.00"}
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-900/50 rounded-lg border border-slate-700">
                    <div>
                      <p className="text-white font-medium">December 2024</p>
                      <p className="text-xs text-slate-400">Paid on Dec 15</p>
                    </div>
                    <span className="text-emerald-400 font-semibold">
                      $
                      {currentPlan.price === "$29" ||
                      currentPlan.price === "$99"
                        ? currentPlan.price.slice(1)
                        : "29.00"}
                    </span>
                  </div>
                </div>
                <button
                  onClick={handleManageBilling}
                  className="w-full px-4 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-medium transition-colors"
                >
                  View All Invoices
                </button>
              </Card>
            </div>

        
            <Card className="p-6 bg-gradient-to-br from-red-600/5 to-slate-900 border-red-600/20">
              <div className="flex items-start justify-between flex-wrap gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                    <span>⚠️</span>
                    <span>Cancel Subscription</span>
                  </h3>
                  <p className="text-slate-400 mb-3">
                    If you cancel, you'll still have access to Pro features
                    until{" "}
                    <span className="text-white font-semibold">
                      {currentPlan.nextBilling}
                    </span>
                    . After that, your account will be downgraded to the Free
                    plan.
                  </p>
                  <div className="flex flex-wrap gap-3 text-sm mb-4">
                    <div className="flex items-center gap-2 text-slate-400">
                      <span>✓</span>
                      <span>No hidden fees</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-400">
                      <span>✓</span>
                      <span>Cancel anytime</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-400">
                      <span>✓</span>
                      <span>Instant confirmation</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => {
                    const confirmed = confirm(
                      `Are you sure you want to cancel your ${currentPlan.name} subscription?\n\n• You'll lose access to premium features after ${currentPlan.nextBilling}\n• Your account will be downgraded to Free plan\n• All your data will be preserved\n\nThis action can be undone by reactivating before the billing period ends.`
                    );
                    if (confirmed) {
                      console.log("Cancelling subscription...");
      
                      alert(
                        "Subscription cancellation initiated. You'll receive a confirmation email shortly."
                      );
                    }
                  }}
                  className="px-6 py-3 bg-red-600/20 hover:bg-red-600/30 text-red-400 rounded-lg font-medium transition-colors border border-red-600/30 whitespace-nowrap"
                >
                  Cancel Subscription
                </button>
              </div>
            </Card>
          </div>
        )} */}

        {/* Benefits Section - Only show for free users */}
        {!isPaidUser && (
          <Card className="p-8 mb-8 bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700">
            <h2 className="text-3xl font-bold mb-6 text-white text-center">
              Why Upgrade to Pro?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="p-5 bg-slate-900/50 rounded-xl border border-slate-700 hover:border-slate-600 transition-all"
                >
                  <div className="text-4xl mb-3">{benefit.icon}</div>
                  <h3 className="font-bold text-white text-lg mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-slate-400">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </Card>
        )}

        {/* Testimonials */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-6 text-white text-center">
            What Our Athletes Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="p-6 bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700"
              >
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-orange-400 text-xl">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-slate-300 mb-4 italic">
                  "{testimonial.comment}"
                </p>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-slate-400">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <Card className="p-8 mb-8 bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700">
          <h2 className="text-3xl font-bold mb-6 text-white text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="p-5 bg-slate-900/50 rounded-xl border border-slate-700"
              >
                <h3 className="font-bold text-white text-lg mb-2">
                  {faq.question}
                </h3>
                <p className="text-slate-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Money-Back Guarantee & Security - Only show for free users */}
        {!isPaidUser && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="p-6 bg-gradient-to-br from-emerald-600/10 to-slate-800 border-emerald-600/30">
              <h3 className="text-xl font-bold mb-4 text-white flex items-center gap-2">
                <span>✓</span>
                <span>Money-Back Guarantee</span>
              </h3>
              <p className="text-slate-300 mb-4">
                Try any plan risk-free for 7 days. If you're not completely
                satisfied, we'll refund your money—no questions asked.
              </p>
              <div className="flex items-center gap-3 p-4 bg-emerald-600/20 border border-emerald-600/30 rounded-lg">
                <span className="text-3xl">✓</span>
                <div>
                  <p className="font-semibold text-emerald-300">
                    7-Day Money Back
                  </p>
                  <p className="text-sm text-slate-400">
                    Cancel anytime, hassle-free
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-blue-600/10 to-slate-800 border-blue-600/30">
              <h3 className="text-xl font-bold mb-4 text-white flex items-center gap-2">
                <span>🔒</span>
                <span>Secure Payment</span>
              </h3>
              <p className="text-slate-300 mb-4">
                Your payment information is encrypted and secure. We accept all
                major credit cards and payment methods.
              </p>
              <div className="flex items-center gap-4 text-3xl">
                <span>💳</span>
                <span>🍎</span>
                <span>💰</span>
                <span>🔐</span>
              </div>
            </Card>
          </div>
        )}

        {/* Paid User: Usage Stats */}
        {/* {isPaidUser && (
          <Card className="p-8 mt-8 bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700">
            <h2 className="text-2xl font-bold mb-6 text-white">
              Your Usage This Month
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-5 bg-slate-900/50 rounded-xl border border-slate-700">
                <div className="text-3xl mb-2">🎯</div>
                <p className="text-2xl font-bold text-white mb-1">Unlimited</p>
                <p className="text-sm text-slate-400">Active Programs</p>
              </div>
              <div className="p-5 bg-slate-900/50 rounded-xl border border-slate-700">
                <div className="text-3xl mb-2">📊</div>
                <p className="text-2xl font-bold text-white mb-1">156</p>
                <p className="text-sm text-slate-400">Workouts Completed</p>
              </div>
              <div className="p-5 bg-slate-900/50 rounded-xl border border-slate-700">
                <div className="text-3xl mb-2">⏱️</div>
                <p className="text-2xl font-bold text-white mb-1">47h 23m</p>
                <p className="text-sm text-slate-400">Total Training Time</p>
              </div>
            </div>
          </Card>
        )} */}
      </div>
    </LayoutWrapper>
  );
}
