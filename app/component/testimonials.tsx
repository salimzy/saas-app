import { Star } from "lucide-react";

export default function Testimonials() {
 
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