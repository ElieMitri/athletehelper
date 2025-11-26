import LayoutWrapper from '@/components/layout/LayoutWrapper';
import Card from '@/components/shared/Card';
import Button from '@/components/shared/Button';

export default function PricingPage() {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      description: 'Perfect for getting started',
      features: [
        'Access to 3 programs',
        'Basic exercise library',
        'Mobile app access',
        'Community support',
        'Progress tracking'
      ],
      cta: 'Get Started',
      highlighted: false
    },
    {
      name: 'Pro',
      price: '$29',
      period: 'per month',
      description: 'For serious athletes',
      features: [
        'Unlimited programs',
        'Full exercise library',
        'Advanced analytics',
        'Priority support',
        'Custom workout builder',
        'Team features (up to 5)',
        'Rehab protocols',
        'Video tutorials'
      ],
      cta: 'Start Free Trial',
      highlighted: true
    },
    {
      name: 'Team',
      price: '$99',
      period: 'per month',
      description: 'For coaches and organizations',
      features: [
        'Everything in Pro',
        'Up to 50 athletes',
        'Team management dashboard',
        'Advanced analytics',
        'API access',
        'Custom branding',
        'Dedicated support',
        'Training on request'
      ],
      cta: 'Contact Sales',
      highlighted: false
    }
  ];

  const faqs = [
    {
      question: 'Can I change plans at any time?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.'
    },
    {
      question: 'Is there a free trial?',
      answer: 'Yes, Pro and Team plans come with a 14-day free trial. No credit card required.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, and bank transfers for Team plans.'
    },
    {
      question: 'Can I cancel anytime?',
      answer: 'Yes, you can cancel your subscription at any time. No questions asked.'
    }
  ];

  return (
    <LayoutWrapper>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">Choose Your Plan</h1>
          <p className="text-xl text-gray-600">
            Start training smarter today with plans designed for every athlete
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`p-8 ${
                plan.highlighted
                  ? 'border-2 border-blue-500 shadow-lg relative'
                  : ''
              }`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-bl">
                  POPULAR
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-gray-600 mb-6">{plan.description}</p>
              <div className="mb-6">
                <span className="text-5xl font-bold">{plan.price}</span>
                <span className="text-gray-600 ml-2">{plan.period}</span>
              </div>
              <Button
                className="w-full mb-6"
                variant={plan.highlighted ? 'primary' : 'secondary'}
              >
                {plan.cta}
              </Button>
              <ul className="space-y-3">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <div className="bg-blue-50 rounded-lg p-8 mb-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Need a Custom Solution?</h2>
          <p className="text-lg text-gray-700 mb-6">
            For organizations with more than 50 athletes or specific requirements,
            we offer custom enterprise plans.
          </p>
          <Button size="lg">Contact Sales Team</Button>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-6">
                <h3 className="font-bold mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
          <p className="text-gray-600 mb-4">
            Our team is here to help you choose the right plan for your needs.
          </p>
          <Button variant="secondary">Contact Support</Button>
        </div>
      </div>
    </LayoutWrapper>
  );
}
