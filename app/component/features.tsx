import { Download, Users, Zap,Lock } from "lucide-react";


export default function Features() {
   

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