import Head from "next/head";
import Link from "next/link";
import FaqAccordion from "../components/FaqAccordion";

export default function Home() {
  const faqJsonForSchema = [
    {
      question: "How can I start online betting in Bangladesh using bKash or Nagad?",
      answer:
        "Register at a trusted online betting site that accepts bKash or Nagad, verify your account, choose your payment method, and deposit to start playing. Look for sites that show clear payment instructions and offer secure transactions.",
    },
    {
      question: "Which is the best betting site in BD for real money gambling?",
      answer:
        "Sites like https://seo201.bengalgov.com/register.html are widely used for real money gambling in BD; they typically offer sports betting, live casino and slot games, and support fast payments like bKash and Nagad. Always check user reviews and payment reliability before depositing.",
    },
    {
      question: "Can I play slot games, Teen Patti, and cricket betting on a trusted Bangladesh casino site?",
      answer:
        "Yes — many trusted Bangladesh casino sites and mobile apps host slot games, Teen Patti, and cricket betting. They let you play on mobile/desktop and support local payment methods, so you can deposit and withdraw easily.",
    },
    {
      question: "How do I get a free bonus on an online casino without deposit in Bangladesh?",
      answer:
        "Search for platforms advertising a 'no deposit bonus' or 'free bonus' for new sign-ups. Usually you must register and verify your account to claim the bonus. Read wagering requirements carefully before withdrawing winnings.",
    },
    {
      question: "Is it possible to join Bangladesh lottery or lucky draw through a mobile betting app?",
      answer:
        "Yes, some mobile betting apps list local lottery or lucky draw options. These provide ticket purchases, instant results, and secure payments (bKash/Nagad) — check the app's legitimacy and terms before participating.",
    },
  ];

  function generateJsonLd() {
    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqJsonForSchema.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    };
  }

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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(generateJsonLd()) }}
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
              <Link className="hover:text-yellow-400" href="/">Home</Link>
              <Link className="hover:text-yellow-400" href="/blog">Blog</Link>
              <Link className="hover:text-yellow-400" href="#">About</Link>
              <Link className="hover:text-yellow-400" href="#">Contact</Link>
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
                  <button className="btn-glow bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 rounded-lg font-semibold shadow-lg">
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

        {/* Main */}
        <main className="max-w-6xl mx-auto px-4 py-12">
          {/* WHY CHOOSE US */}
          <section id="why" className="mb-14">
            <h2 className="text-yellow-400 font-bold text-xl mb-4">Why Choose GamingPulse24?</h2>
            <p className="text-gray-300 mb-6">
              Discover trusted options for <strong>bd slot game online</strong>, secure <strong>casino payment bkash nagad</strong>, and reliable <strong>sports betting Bangladesh</strong> — all in one place.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <a href="https://seo201.bengalgov.com/register.html" target="_blank" rel="noopener noreferrer sponsored" className="block bg-gray-800 rounded-xl p-4 shadow-xl hover:-translate-y-1 transition">
                <img src="/casino1.jpg" alt="bd slot game online" className="rounded-md w-full h-40 object-cover mb-4" />
                <h3 className="text-lg font-semibold text-yellow-300 mb-2">BD Slot Game Online</h3>
                <p className="text-gray-300 text-sm">Play top slot titles with secure casino payment via bKash & Nagad.</p>
              </a>
              <a href="https://seo201.bengalgov.com/register.html" target="_blank" rel="noopener noreferrer sponsored" className="block bg-gray-800 rounded-xl p-4 shadow-xl hover:-translate-y-1 transition">
                <img src="/casino2.jpg" alt="Bangladesh casino site" className="rounded-md w-full h-40 object-cover mb-4" />
                <h3 className="text-lg font-semibold text-yellow-300 mb-2">Bangladesh Casino Site</h3>
                <p className="text-gray-300 text-sm">Live casino, Teen Patti and more with local payments.</p>
              </a>
              <a href="https://seo201.bengalgov.com/register.html" target="_blank" rel="noopener noreferrer sponsored" className="block bg-gray-800 rounded-xl p-4 shadow-xl hover:-translate-y-1 transition">
                <img src="/casino3.jpg" alt="Cricket betting Bangladesh" className="rounded-md w-full h-40 object-cover mb-4" />
                <h3 className="text-lg font-semibold text-yellow-300 mb-2">Cricket Betting Bangladesh</h3>
                <p className="text-gray-300 text-sm">Bet on cricket and other sports with live odds and bonus offers.</p>
              </a>
            </div>
          </section>

          {/* Trusted Payment */}
          <section className="mb-14">
            <h3 className="text-yellow-300 font-semibold mb-3">Trusted Payment Methods</h3>
            <p className="text-gray-300">We accept bKash, Nagad & more. Fast deposits, quick withdrawals, and secure transactions.</p>
          </section>

          {/* FAQ */}
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
