'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronDown, Star, Download, Users, Lock, Zap, Menu, X } from 'lucide-react';
import Nav from './component/nav';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  // Hero Section Component
  const HeroSection = () => (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-4 py-20 overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-purple-900/20 via-transparent to-transparent pointer-events-none"></div>
      
      {/* Glowing orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative z-10 max-w-4xl text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-linear-to-r from-purple-400 via-pink-400 to-purple-400 leading-tight">
          Your Ultimate Marketplace for Digital Products
        </h1>
        
        <p className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed max-w-2xl mx-auto">
          Discover, create, and monetize digital assets. From templates to courses, find everything you need to grow your creative business.
        </p>

        {/* Search Bar */}
        <div className="relative mb-12 max-w-2xl mx-auto">
          <div className="glass-morphism-card p-1 rounded-full">
            <input
              type="text"
              placeholder="Search templates, e-books, music, courses..."
              className="w-full px-6 py-3 bg-transparent text-white placeholder-gray-500 focus:outline-none"
            />
          </div>
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 px-6 py-2 bg-linear-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300">
            Explore
          </button>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button className="px-8 py-4 bg-linear-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300">
            Browse Products
          </button>
          <button className="px-8 py-4 border border-purple-500/50 text-white rounded-lg font-semibold hover:bg-purple-500/10 transition-all duration-300">
            Start Selling
          </button>
        </div>

        {/* Glowing product preview card */}
        <div className="relative mt-20 max-w-md mx-auto">
          <div className="absolute inset-0 bg-linear-to-r from-purple-600/30 to-pink-600/30 rounded-2xl blur-2xl"></div>
          <div className="relative glass-morphism-card p-6 rounded-2xl border border-purple-500/30">
            <div className="bg-linear-to-br from-purple-600/20 to-blue-600/20 rounded-lg h-48 flex items-center justify-center mb-4 border border-purple-400/20">
              <div className="text-center">
                <div className="text-5xl mb-2">🎨</div>
                <p className="text-purple-300 font-semibold">Premium UI Kit</p>
              </div>
            </div>
            <h3 className="text-white font-bold mb-2">Modern Design System</h3>
            <p className="text-gray-400 text-sm mb-4">500+ components, fully customizable</p>
            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold text-purple-400">$29</span>
              <button className="px-4 py-2 bg-purple-500/20 border border-purple-400/50 text-purple-300 rounded-lg hover:bg-purple-500/30 transition-all">
                <Download className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  // Featured Categories Component
  const FeaturedCategories = () => {
    const categories = [
      { icon: '📋', name: 'Templates', count: '2,340 items' },
      { icon: '📚', name: 'E-books', count: '1,820 items' },
      { icon: '🎨', name: 'UI Kits', count: '945 items' },
      { icon: '🖼️', name: 'Digital Art', count: '3,120 items' },
      { icon: '🎵', name: 'Music Packs', count: '1,560 items' },
      { icon: '⚙️', name: 'Software Tools', count: '680 items' },
      { icon: '🎓', name: 'Courses', count: '420 items' },
    ];

    return (
      <section className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-gray-300 bg-linear-to-r from-purple-400 to-pink-400">
              Featured Categories
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Explore our curated collection of digital assets across multiple categories
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <div
                key={index}
                className="group glass-morphism-card p-6 rounded-2xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 cursor-pointer"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{category.icon}</div>
                <h3 className="text-white font-bold text-lg mb-2">{category.name}</h3>
                <p className="text-gray-400 text-sm">{category.count}</p>
                <div className="mt-4 h-1 bg-linear-to-r from-purple-500 to-pink-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  // Trending Products Component
  const TrendingProducts = () => {
    const products = [
      { id: 1, icon: '🎨', title: 'UI Design System', creator: 'Creative Studio', price: '$49', rating: 4.9, reviews: 342 },
      { id: 2, icon: '📱', title: 'Mobile App Templates', creator: 'Design Labs', price: '$39', rating: 4.8, reviews: 256 },
      { id: 3, icon: '🎬', title: 'Video Editor Presets', creator: 'Motion Pro', price: '$29', rating: 4.7, reviews: 189 },
      { id: 4, icon: '🎵', title: 'Royalty-Free Music Pack', creator: 'Audio Forge', price: '$19', rating: 4.9, reviews: 512 },
      { id: 5, icon: '📘', title: 'Complete Web Dev Course', creator: 'Tech Academy', price: '$99', rating: 4.8, reviews: 1023 },
      { id: 6, icon: '🖼️', title: '3D Model Collection', creator: 'Studio 3D', price: '$59', rating: 4.6, reviews: 178 },
    ];

    return (
      <section className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-gray-300 bg-linear-to-r from-purple-400 to-pink-400">
              Trending Digital Products
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Discover the most popular and highest-rated digital assets this week
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="group glass-morphism-card rounded-2xl overflow-hidden border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30 hover:-translate-y-2"
              >
                <div className="relative h-48 bg-linear-to-br from-purple-600/30 to-blue-600/20 flex items-center justify-center overflow-hidden">
                  <div className="text-7xl group-hover:scale-110 transition-transform">{product.icon}</div>
                  <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-white font-bold text-lg mb-2">{product.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{product.creator}</p>

                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-600'}`}
                      />
                    ))}
                    <span className="text-gray-400 text-xs ml-2">({product.reviews})</span>
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t border-purple-500/20">
                    <span className="text-2xl font-bold text-purple-400">{product.price}</span>
                    <button className="px-4 py-2 bg-linear-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/50 text-purple-300 rounded-lg hover:bg-linear-to-r hover:from-purple-500/40 hover:to-pink-500/40 transition-all">
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  // Features Section Component
  const FeaturesSection = () => {
    const features = [
      { icon: <Lock className="w-8 h-8" />, title: 'Secure Payments', description: 'Bank-level encryption for every transaction' },
      { icon: <Download className="w-8 h-8" />, title: 'Instant Downloads', description: 'Get your products immediately after purchase' },
      { icon: <Users className="w-8 h-8" />, title: 'Verified Sellers', description: 'All sellers are verified for quality assurance' },
      { icon: <Zap className="w-8 h-8" />, title: 'Fast Analytics', description: 'Real-time sales tracking and insights' },
    ];

    return (
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-gray-300 bg-linear-to-r from-purple-400 to-pink-400">
              Why Choose DigiMarket Hub
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="relative group">
                {/* Glowing line */}
                <div className="absolute -left-6 top-0 w-1 h-full bg-linear-to-b from-purple-500 to-transparent rounded-full group-hover:shadow-lg group-hover:shadow-purple-500/50"></div>

                <div className="glass-morphism-card p-8 rounded-xl border border-purple-500/20 h-full hover:border-purple-500/50 transition-all duration-300">
                  <div className="text-purple-400 mb-4 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-white font-bold text-lg mb-3">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  // Testimonials Component
  const TestimonialsSection = () => {
    const testimonials = [
      {
        name: 'Sarah Anderson',
        role: 'Graphic Designer',
        image: '👩‍🎨',
        review: 'DigiMarket Hub transformed how I sell my design work. The platform is intuitive and the payment processing is seamless!',
        rating: 5,
      },
      {
        name: 'Marcus Chen',
        role: 'Developer',
        image: '👨‍💻',
        review: 'As a buyer, I love the variety and quality. The instant downloads and verified sellers give me peace of mind.',
        rating: 5,
      },
      {
        name: 'Emily Rodriguez',
        role: 'Content Creator',
        image: '👩‍🎬',
        review: 'The analytics dashboard is amazing. I can track every sale in real-time and optimize my offerings easily.',
        rating: 4.5,
      },
    ];

    return (
      <section className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-gray-300 bg-linear-to-r from-purple-400 to-pink-400">
              What Creators Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="glass-morphism-card p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-5xl">{testimonial.image}</div>
                  <div>
                    <h3 className="text-white font-bold">{testimonial.name}</h3>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>

                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < Math.floor(testimonial.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-600'}`}
                    />
                  ))}
                </div>

                <p className="text-gray-300 leading-relaxed italic">"{testimonial.review}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  // Pricing Section Component
  const PricingSection = () => {
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

  // FAQ Component
  const FAQSection = () => {
    const faqs = [
      {
        question: 'How do I upload and sell my digital products?',
        answer:
          'Simply create an account, navigate to the seller dashboard, and upload your product files. Add pricing, descriptions, and preview images, then publish. Your products are instantly available for purchase.',
      },
      {
        question: 'What payment methods do you accept?',
        answer:
          'We accept all major credit cards, PayPal, and bank transfers. Payments are processed securely with bank-level encryption. You can withdraw your earnings weekly.',
      },
      {
        question: 'How are downloads and licensing handled?',
        answer:
          'Buyers receive instant downloads after purchase. You can set license types (personal, commercial) for each product. All license terms are clearly displayed and enforced.',
      },
      {
        question: 'What commission does DigiMarket Hub take?',
        answer:
          'Our commission varies by plan: Free (5%), Pro (2%), and Business (0%). All plans allow you to withdraw earnings with no hidden fees.',
      },
      {
        question: 'Is there support for creators?',
        answer:
          'Yes! We offer 24/7 support for Business tier members, priority email support for Pro members, and community support for free members. Check our help center anytime.',
      },
      {
        question: 'Can I use DigiMarket Hub as a buyer only?',
        answer:
          'Absolutely! Browse and download products without becoming a seller. Create collections, leave reviews, and support your favorite creators.',
      },
    ];

    return (
      <section className="py-20 px-4 relative w-full">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-gray-300 bg-linear-to-r from-purple-400 to-pink-400">
          Frequently Asked Questions
        </h2>
          </div>

          <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="glass-morphism-card rounded-xl border border-purple-500/20 overflow-hidden hover:border-purple-500/50 transition-all"
          >
            <button
          onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
          className="w-full p-6 flex justify-between items-center hover:bg-purple-500/10 transition-colors"
            >
          <h3 className="text-white font-semibold text-left">{faq.question}</h3>
          <ChevronDown
            className={`w-5 h-5 text-purple-400 transition-transform ${
              expandedFAQ === index ? 'rotate-180' : ''
            }`}
          />
            </button>

            {expandedFAQ === index && (
          <div className="px-6 pb-6 border-t border-purple-500/20 pt-4">
            <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
          </div>
            )}
          </div>
        ))}
          </div>
        </div>
      </section>
    );
  };

  // Footer Component
  const Footer = () => (
    <footer className="relative py-16 px-4 border-t border-purple-500/20 bg-linear-to-b from-transparent to-purple-950/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">DigiMarket Hub</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your ultimate marketplace for digital products and creative assets.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              {['Browse', 'Sell', 'Pricing', 'Blog'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              {['Help Center', 'Contact', 'Status', 'FAQ'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Licenses'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-purple-500/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">© 2025 DigiMarket Hub. All rights reserved.</p>
          <div className="flex gap-4">
            {['Twitter', 'Discord', 'Instagram', 'LinkedIn'].map((social) => (
              <a
                key={social}
                href="#"
                className="w-10 h-10 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 hover:bg-purple-500/20 hover:border-purple-500/50 transition-all"
              >
                {social.charAt(0)}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );

  return (
    <div>
     <Nav />
      {/* Main Sections */}
      <HeroSection />
      <FeaturedCategories />
      <TrendingProducts />
      <FeaturesSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <Footer />
    </div>
  );
}
