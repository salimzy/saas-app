

export default function Featured() {
    
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
}