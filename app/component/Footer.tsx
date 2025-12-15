
export default function Trending() {
    return (
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
};