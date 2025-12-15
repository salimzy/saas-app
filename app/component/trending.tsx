import { Download, Star } from "lucide-react";


export default function Trending() {
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