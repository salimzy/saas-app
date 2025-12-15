import { Download } from "lucide-react";

export default function Hero() {
    return (   
     <section className="relative min-h-screen flex flex-col justify-center items-center px-4 py-20 overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-purple-900/20 via-transparent to-transparent pointer-events-none"></div>
      
      {/* Glowing orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative z-10 max-w-4xl text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-gray-200 bg-linear-to-r from-purple-400 via-pink-400 to-purple-400 leading-tight">
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
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 p-6">
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
};