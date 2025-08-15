// pages/about.js
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

export default function AboutPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Head>
        <title>About Us — GamingPulse24</title>
        <meta
          name="description"
          content="GamingPulse24 is a trusted online casino and betting guide in Bangladesh. Learn about our mission, vision, and secure gaming tips for Bangladeshi players."
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

            {/* Desktop Menu */}
            <nav className="hidden md:flex gap-6 text-gray-300">
              <Link className="hover:text-yellow-400" href="/">Home</Link>
              <Link className="hover:text-yellow-400" href="/blog">Blog</Link>
              <Link className="hover:text-yellow-400 text-yellow-400" href="/about">About</Link>
              <Link className="hover:text-yellow-400" href="#">Contact</Link>
            </nav>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-gray-300 focus:outline-none"
            >
              ☰
            </button>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="md:hidden bg-black/90 px-4 py-3 space-y-3">
              <Link className="block hover:text-yellow-400" href="/">Home</Link>
              <Link className="block hover:text-yellow-400" href="/blog">Blog</Link>
              <Link className="block hover:text-yellow-400 text-yellow-400" href="/about">About</Link>
              <Link className="block hover:text-yellow-400" href="#">Contact</Link>
            </div>
          )}
        </header>

        {/* Main Content */}
        <main className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold text-yellow-400 mb-6">About Us — GamingPulse24</h1>

          <p className="mb-4">
            <strong>বাংলায়:</strong> GamingPulse24 হলো বাংলাদেশের অন্যতম জনপ্রিয় অনলাইন ক্যাসিনো এবং বেটিং তথ্যভিত্তিক প্ল্যাটফর্ম।
            আমরা সঠিক তথ্য, গেম রিভিউ, এবং নিরাপদ বেটিং সাইটের গাইডলাইন প্রদান করি। আমাদের মূল লক্ষ্য হচ্ছে বাংলাদেশি খেলোয়াড়দের জন্য
            <strong> bd slot game online</strong>, <strong> sports betting Bangladesh</strong>, এবং
            <strong> casino payment bkash nagad</strong> বিষয়ে সঠিক ও নির্ভরযোগ্য তথ্য সরবরাহ করা।
          </p>

          <ul className="list-disc list-inside mb-4">
            <li>বিশ্বস্ত অনলাইন ক্যাসিনো ও স্পোর্টস বেটিং সাইট</li>
            <li>bKash ও Nagad পেমেন্ট সাপোর্ট করা প্ল্যাটফর্ম</li>
            <li>নতুন বোনাস ও প্রোমোশন সংক্রান্ত তথ্য</li>
            <li>বাংলাদেশি খেলোয়াড়দের জন্য নিরাপদ গেমিং গাইড</li>
          </ul>

          <p className="mb-4">
            <strong>In English:</strong> GamingPulse24 is one of the leading online casino and betting information platforms in Bangladesh.
            We provide accurate information, game reviews, and safe betting site guidelines. Our goal is to help Bangladeshi players find the best
            <strong> BD slot games online</strong>, <strong> sports betting Bangladesh</strong>, and secure
            <strong> casino payments with bKash & Nagad</strong>.
          </p>

          <ul className="list-disc list-inside mb-6">
            <li>Trusted online casinos & sports betting platforms</li>
            <li>Platforms supporting bKash and Nagad payments</li>
            <li>Latest bonus and promotions info</li>
            <li>Safe gaming tips for Bangladeshi players</li>
          </ul>

          <h2 className="text-xl font-semibold text-yellow-300 mb-2">Mission</h2>
          <p className="mb-4">
            To create a safe, transparent, and user-friendly platform for all Bangladeshi casino enthusiasts.
          </p>

          <h2 className="text-xl font-semibold text-yellow-300 mb-2">Vision</h2>
          <p>
            To become the most trusted and informative online casino guide in Bangladesh.
          </p>
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
