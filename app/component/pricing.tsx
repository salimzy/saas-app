export default function Pricing() {
     const plans = [
      {
        name: 'Free Tier',
        price: '$0',
        description: 'Perfect for getting started',
        features: [
          'Up to 5 products',
          'Basic analytics',
          '5% platform fee',
          'Community support',
        ],
        cta: 'Get Started',
        popular: false,
      },
      {
        name: 'Pro Tier',
        price: '$19',
        description: 'For growing creators',
        features: [
          'Unlimited products',
          'Advanced analytics',
          '2% platform fee',
          'Priority support',
          'Custom branding',
          'API access',
        ],
        cta: 'Choose Plan',
        popular: true,
      },
      {
        name: 'Business Tier',
        price: '$79',
        description: 'For established sellers',
        features: [
          'Everything in Pro',
          'White-label solution',
          '0% platform fee',
          '24/7 dedicated support',
          'Advanced reports',
          'Revenue share option',
        ],
        cta: 'Contact Sales',
        popular: false,
      },
    ];

    return (
      <section className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-gray-300 bg-linear-to-r from-purple-400 to-pink-400">
              Pricing Plans for Sellers
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Choose the perfect plan to start monetizing your digital products
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-2xl transition-all duration-300 ${
                  plan.popular ? 'md:scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <>
                    <div className="absolute inset-0 bg-linear-to-r from-purple-600/30 to-pink-600/30 rounded-2xl blur-2xl"></div>
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-linear-to-r from-purple-500 to-pink-500 text-white px-6 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </>
                )}

                <div
                  className={`relative glass-morphism-card p-8 rounded-2xl border transition-all duration-300 ${
                    plan.popular
                      ? 'border-purple-500/50 shadow-lg shadow-purple-500/30'
                      : 'border-purple-500/20 hover:border-purple-500/50'
                  }`}
                >
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 text-sm mb-6">{plan.description}</p>

                  <div className="mb-8">
                    <span className="text-5xl font-bold bg-clip-text text-gray-300 bg-linear-to-r from-purple-400 to-pink-400">
                      {plan.price}
                    </span>
                    <span className="text-gray-400 ml-2">/month</span>
                  </div>

                  <button
                    className={`w-full py-3 rounded-lg font-semibold mb-8 transition-all duration-300 ${
                      plan.popular
                        ? 'bg-linear-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg hover:shadow-purple-500/50'
                        : 'border border-purple-500/50 text-purple-300 hover:bg-purple-500/10'
                    }`}
                  >
                    {plan.cta}
                  </button>

                  <div className="space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-linear-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };