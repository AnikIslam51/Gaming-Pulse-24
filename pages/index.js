// pages/index.js
import Head from "next/head";
import FaqAccordion from "../components/FaqAccordion";

export default function Home() {
  return (
    <>
      <Head>
        <title>GamingPulse24 — Play & Win Real Money</title>
        <meta
          name="description"
          content="GamingPulse24 — Online casino, slot games, and sports betting in Bangladesh. Trusted payments with bKash & Nagad."
        />
        <meta property="og:title" content="GamingPulse24 — Play & Win Real Money" />
        <meta
          property="og:description"
          content="Online casino, slot games, and sports betting in Bangladesh. Trusted payments with bKash & Nagad."
        />
      </Head>

      <div className="min-h-screen bg-gray-900 text-gray-100 antialiased">
        {/* Header */}
        <header className="bg-black/70 sticky top-0 z-30">
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

        {/* Hero */}
        <section
          className="relative bg-cover bg-center"
          style={{ backgroundImage: "url('/hero-bg.jpg')" }}
        >
          <div className="bg-black/60">
            <div className="max-w-6xl mx-auto px-4 py-28 text-center">
              <h1 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-lg">
                Play & Win Real Money Today
              </h1>
              <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
                Join thousands of Bangladeshi players enjoying online casino, slot games, and sports betting — trusted payments with bKash & Nagad.
              </p>
              <div className="mt-8 flex items-center justify-center gap-4">
                <a href="https://seo201.bengalgov.com/register.html" target="_blank" rel="noreferrer">
                  <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 rounded-lg font-semibold shadow-lg">
                    👉 Play Here
                  </button>
                </a>
                <a href="#why" className="text-sm text-gray-300 underline underline-offset-4">
                  Why choose us?
                </a>
              </div>
            </div>
          </div>
        </section>

        <main className="max-w-6xl mx-auto px-4 py-12">
          {/* WHY CHOOSE US */}
          <section id="why" className="mb-14">
            <h2 className="text-yellow-400 font-bold text-xl mb-4">Why Choose GamingPulse24?</h2>
            <p className="text-gray-300 mb-6">
              Discover trusted options for <strong>bd slot game online</strong>, secure
              <strong> casino payment bkash nagad</strong>, and reliable
              <strong> sports betting Bangladesh</strong> — all in one place.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <a
                href="https://seo201.bengalgov.com/register.html"
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="block bg-gray-800 rounded-xl p-4 shadow-xl hover:-translate-y-1 transition"
              >
                <img src="/casino1.jpg" alt="bd slot game online" className="rounded-md w-full h-40 object-cover mb-4" loading="lazy" />
                <h3 className="text-lg font-semibold text-yellow-300 mb-2">
                  BD Slot Game Online — Exciting Slot Games
                </h3>
                <p className="text-gray-300 text-sm">
                  Play top slot titles (JILI, PG Soft) with secure <em>casino payment via bKash & Nagad</em>.
                </p>
              </a>

              <a
                href="https://seo201.bengalgov.com/register.html"
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="block bg-gray-800 rounded-xl p-4 shadow-xl hover:-translate-y-1 transition"
              >
                <img src="/casino2.jpg" alt="Bangladesh casino site" className="rounded-md w-full h-40 object-cover mb-4" loading="lazy" />
                <h3 className="text-lg font-semibold text-yellow-300 mb-2">
                  Bangladesh Casino Site — Live Casino & Teen Patti
                </h3>
                <p className="text-gray-300 text-sm">
                  Join trusted live tables and casino games with fast withdrawals.
                </p>
              </a>

              <a
                href="https://seo201.bengalgov.com/register.html"
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="block bg-gray-800 rounded-xl p-4 shadow-xl hover:-translate-y-1 transition"
              >
                <img src="/casino3.jpg" alt="cricket betting Bangladesh" className="rounded-md w-full h-40 object-cover mb-4" loading="lazy" />
                <h3 className="text-lg font-semibold text-yellow-300 mb-2">
                  Cricket Betting Bangladesh — Trusted Sports Betting
                </h3>
                <p className="text-gray-300 text-sm">
                  Bet on cricket and other sports with live odds and free bonus offers.
                </p>
              </a>
            </div>
          </section>

          {/* Trusted Payment */}
          <section className="mb-14">
            <h3 className="text-yellow-300 font-semibold mb-3">Trusted Payment Methods</h3>
            <p className="text-gray-300">
              We accept bKash, Nagad & more. Fast deposits, quick withdrawals, and secure transactions.
            </p>
          </section>

          {/* FAQ Section */}
          <FaqAccordion />
        </main>

        {/* Footer */}
        <footer className="bg-black/70 text-gray-400 py-6">
          <div className="max-w-6xl mx-auto px-4 text-center">
            &copy; {new Date().getFullYear()} GamingPulse24. All rights reserved.
          </div>
        </footer>
      </div>
    </>
  );
}
