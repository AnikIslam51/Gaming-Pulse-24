// pages/blog/index.js
import Head from "next/head";
import Link from "next/link";
import post1 from "../../posts/post1";
import { useState } from "react";

const posts = [post1];

export default function BlogPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Head>
        <title>GamingPulse24 Blog — Casino & Betting Tips in Bangladesh</title>
        <meta
          name="description"
          content="Read the latest tips, guides, and news about online casino, slot games, and sports betting in Bangladesh. Stay updated with GamingPulse24 Blog."
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
              <Link className="hover:text-yellow-400" href="#">About</Link>
              <Link className="hover:text-yellow-400" href="#">Contact</Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-gray-300 focus:outline-none"
            >
              ☰
            </button>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="md:hidden bg-black/90 text-gray-300 px-4 py-3 space-y-2">
              <Link className="block hover:text-yellow-400" href="/">Home</Link>
              <Link className="block hover:text-yellow-400" href="/blog">Blog</Link>
              <Link className="block hover:text-yellow-400" href="#">About</Link>
              <Link className="block hover:text-yellow-400" href="#">Contact</Link>
            </div>
          )}
        </header>

        {/* Blog List */}
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold text-yellow-400 mb-6">
            GamingPulse24 Blog
          </h1>

          {posts.map((post, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-6 mb-6 shadow-md hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold text-yellow-300 mb-2">
                {post.title}
              </h2>
              <p className="text-gray-300 mb-4">{post.excerpt}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="text-yellow-400 hover:text-yellow-300 font-semibold"
              >
                Read More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
