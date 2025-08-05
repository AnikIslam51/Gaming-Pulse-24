export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 antialiased">
      {/* Sticky Header */}
      <header className="bg-black/70 backdrop-blur-sm sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-yellow-400 font-bold text-lg">🎲 GamingPulse24</div>
            <span className="text-xs text-gray-400">Play & Win</span>
          </div>
          <nav className="hidden md:flex gap-6 text-gray-300">
            <a className="hover:text-yellow-400" href="#">Home</a>
            <a className="hover:text-yellow-400" href="#">Blog</a>
            <a className="hover:text-yellow-400" href="#">About</a>
            <a className="hover:text-yellow-400" href="#">Contact</a>
          </nav>
        </div>
      </header>

      {/* Marquee / Promo */}
      <div className="marquee py-2 border-t border-b border-gray-800">
        <div className="track px-4 text-sm text-yellow-300 font-medium">
          <span className="mr-12">🎁 REGISTER NOW — Get ৳1288 Bonus Instantly!</span>
          <span className="mr-12">⚡ Fast deposits via bKash & Nagad</span>
          <span className="mr-12">🔥 Exclusive slots & live casino tournaments</span>
          <span className="mr-12">🎁 REGISTER NOW — Get ৳1288 Bonus Instantly!</span>
        </div>
      </div>

      {/* HERO */}
      <section
        className="relative bg-cover bg-center"
        style={{
          backgroundImage: "url('/hero-bg.jpg')",
        }}
      >
        <div className="bg-black/60">
          <div className="max-w-6xl mx-auto px-4 py-28 text-center">
            <h1 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-lg">
              Play & Win Real Money Today
            </h1>
            <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
              Join thousands of Bangladeshi players enjoying online casino, slot games, and sports betting
              — trusted payments with bKash & Nagad.
            </p>

            <div className="mt-8 flex items-center justify-center gap-4">
              <a href="https://www.bengalbet.com/m/home" target="_blank" rel="noreferrer">
                <button className="btn-glow bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 rounded-lg font-semibold shadow-lg">
                  👉 Play Now at BengalBet
                </button>
              </a>

              <a href="#why" className="text-sm text-gray-300 underline underline-offset-4">Why choose us?</a>
            </div>
          </div>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* WHY CHOOSE US (casino style cards) */}
        <section id="why" className="mb-14">
          <h2 className="text-yellow-400 font-bold text-xl mb-6">Why Choose US?</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* card 1 */}
            <div className="relative card-shine bg-gray-800 rounded-xl p-4 shadow-xl transform hover:-translate-y-1 transition">
              <img src="/casino1.jpg" alt="slot" className="rounded-md w-full h-40 object-cover mb-4" />
              <h3 className="text-lg font-semibold text-yellow-300 mb-2">Exciting Slot Games</h3>
              <p className="text-gray-300 text-sm">Spin & win with our top slot machines — JILI, PG Soft & more.</p>
            </div>

            {/* card 2 */}
            <div className="relative card-shine bg-gray-800 rounded-xl p-4 shadow-xl transform hover:-translate-y-1 transition">
              <img src="/casino2.jpg" alt="live" className="rounded-md w-full h-40 object-cover mb-4" />
              <h3 className="text-lg font-semibold text-yellow-300 mb-2">Live Casino</h3>
              <p className="text-gray-300 text-sm">Real dealers, real wins — live tables you can join from mobile.</p>
            </div>

            {/* card 3 */}
            <div className="relative card-shine bg-gray-800 rounded-xl p-4 shadow-xl transform hover:-translate-y-1 transition">
              <img src="/casino3.jpg" alt="cricket" className="rounded-md w-full h-40 object-cover mb-4" />
              <h3 className="text-lg font-semibold text-yellow-300 mb-2">Cricket Betting</h3>
              <p className="text-gray-300 text-sm">Bet on cricket matches with live odds and instant settlements.</p>
            </div>
          </div>
        </section>

        {/* Trusted Payment */}
        <section className="mb-14">
          <h3 className="text-yellow-300 font-semibold mb-3">Trusted Payment Methods</h3>
          <p className="text-gray-300">We accept bKash, Nagad & more. Fast deposits, quick withdrawals, and secure transactions.</p>
        </section>

        {/* FAQ */}
        <section className="mb-20">
          <h3 className="text-2xl font-bold mb-6">Frequently Asked Questions</h3>

          <div className="space-y-4">
            <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
              <h4 className="font-medium text-yellow-300">How do I deposit with bKash/Nagad?</h4>
              <p className="text-gray-300 text-sm">Choose a payment method and follow the on-screen instructions to complete the deposit.</p>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
              <h4 className="font-medium text-yellow-300">Is BengalBet legal in Bangladesh?</h4>
              <p className="text-gray-300 text-sm">BengalBet is an offshore platform. Players should follow local laws and use services at their discretion.</p>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
              <h4 className="font-medium text-yellow-300">How do withdrawals work?</h4>
              <p className="text-gray-300 text-sm">Withdrawals are processed via local payment rails like bKash/Nagad — times vary by method.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-black/70 text-gray-400 py-6">
        <div className="max-w-6xl mx-auto px-4 text-center">
          &copy; 2025 GamingPulse. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
