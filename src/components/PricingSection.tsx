import React, { useState } from 'react';
import { Check, Star, Sparkles } from 'lucide-react';

export const PricingSection: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const plans = [
    {
      name: 'Whisper',
      description: 'For those beginning their journey',
      monthlyPrice: 29,
      yearlyPrice: 290,
      features: [
        'Personal guidance sessions',
        'Access to quiet spaces',
        'Monthly reflection journal',
        'Community support',
        'Basic meditation library'
      ],
      popular: false,
      gradient: 'from-white/10 to-white/5'
    },
    {
      name: 'Stillness',
      description: 'For deeper exploration',
      monthlyPrice: 79,
      yearlyPrice: 790,
      features: [
        'Everything in Whisper',
        'Weekly one-on-one sessions',
        'Advanced meditation practices',
        'Exclusive retreat access',
        'Priority community support',
        'Custom journey mapping'
      ],
      popular: true,
      gradient: 'from-white/20 to-white/10'
    },
    {
      name: 'Unknown',
      description: 'For those ready to transcend',
      monthlyPrice: 149,
      yearlyPrice: 1490,
      features: [
        'Everything in Stillness',
        'Daily personal guidance',
        'Private retreat experiences',
        'Master-level teachings',
        'Lifetime community access',
        'Personal transformation coaching',
        'Sacred ceremony invitations'
      ],
      popular: false,
      gradient: 'from-white/15 to-white/8'
    }
  ];

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center py-20 px-8">
      {/* Background continuation */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="w-6 h-6 text-white/60 mr-3" />
            <span className="font-manrope text-sm font-medium text-white/60 tracking-widest uppercase">
              Choose Your Path
            </span>
          </div>
          <h2 className="font-libre-caslon text-4xl md:text-5xl font-light text-white mb-6 tracking-tight">
            Journey Into Stillness
          </h2>
          <p className="font-manrope text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            Every path to the unknown begins with a single step. Choose the guidance that resonates with your soul.
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex items-center justify-center mb-12">
          <div className="bg-white/10 backdrop-blur-md rounded-full p-1 border border-white/20">
            <div className="flex items-center">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-6 py-2 rounded-full font-manrope text-sm font-medium transition-all duration-300 ${
                  billingCycle === 'monthly'
                    ? 'bg-white text-black shadow-lg'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('yearly')}
                className={`px-6 py-2 rounded-full font-manrope text-sm font-medium transition-all duration-300 relative ${
                  billingCycle === 'yearly'
                    ? 'bg-white text-black shadow-lg'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                Yearly
                <span className="absolute -top-2 -right-2 bg-gradient-to-r from-amber-400 to-orange-500 text-black text-xs px-2 py-1 rounded-full font-medium">
                  Save 17%
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative group ${
                plan.popular ? 'md:-mt-4 md:mb-4' : ''
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                  <div className="bg-gradient-to-r from-amber-400 to-orange-500 text-black px-4 py-1 rounded-full font-manrope text-xs font-medium flex items-center">
                    <Star className="w-3 h-3 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}

              <div
                className={`relative h-full bg-gradient-to-br ${plan.gradient} backdrop-blur-xl rounded-2xl border border-white/20 p-8 transition-all duration-500 hover:scale-105 hover:border-white/30 hover:shadow-2xl hover:shadow-white/10 group-hover:bg-gradient-to-br group-hover:from-white/25 group-hover:to-white/15`}
              >
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <h3 className="font-libre-caslon text-2xl font-light text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="font-manrope text-sm text-white/70 mb-6">
                    {plan.description}
                  </p>
                  
                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-libre-caslon font-light text-white">
                        ${billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                      </span>
                      <span className="font-manrope text-white/60 ml-2">
                        /{billingCycle === 'monthly' ? 'month' : 'year'}
                      </span>
                    </div>
                    {billingCycle === 'yearly' && (
                      <p className="font-manrope text-xs text-white/50 mt-1">
                        ${Math.round(plan.yearlyPrice / 12)}/month billed annually
                      </p>
                    )}
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-white/80 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="font-manrope text-sm text-white/80 leading-relaxed">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button
                  className={`w-full py-3 px-6 rounded-xl font-manrope text-sm font-medium transition-all duration-300 ${
                    plan.popular
                      ? 'bg-white text-black hover:bg-gray-100 hover:shadow-lg hover:scale-105'
                      : 'bg-white/10 text-white border border-white/20 hover:bg-white/20 hover:border-white/30 hover:shadow-lg'
                  }`}
                >
                  Begin Your Journey
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="font-manrope text-white/60 text-sm mb-4">
            Not sure which path is right for you?
          </p>
          <button className="font-manrope text-sm font-medium text-white/80 hover:text-white transition-colors duration-300 underline underline-offset-4 hover:underline-offset-8">
            Schedule a guidance call →
          </button>
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-1/4 left-1/6 animate-pulse">
        <div className="w-2 h-2 bg-white/20 rounded-full"></div>
      </div>
      <div className="absolute top-3/4 right-1/6 animate-pulse delay-1000">
        <div className="w-1 h-1 bg-white/15 rounded-full"></div>
      </div>
    </section>
  );
};