import { ChevronDown } from "lucide-react";
import { useState } from "react";
// import { FiEye, FiEyeOff } from 'react-icons/fi'

export default function Faqs() {
    const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
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