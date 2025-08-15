// pages/blog/[id].js
import { useRouter } from "next/router";
import Head from "next/head";
import post1 from "../../posts/post1";
import Link from "next/link";
import { useState } from "react";

const allPosts = [post1];

export default function SinglePost() {
  const router = useRouter();
  const { id } = router.query;
  const [menuOpen, setMenuOpen] = useState(false);

  const post = allPosts.find((p) => p.slug === id);

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-900 text-gray-100 flex items-center justify-center">
        <p>Post not found</p>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{post.title} — GamingPulse24 Blog</title>
        <meta name="description" content={post.excerpt} />
      </Head>

      {/* Keep same wrapper structure to avoid hydration issues */}
      <div className="min-h-screen bg-gray-900 text-gray-100 px-4 py-12">
        
        {/* Navbar */}
        <header className="bg-black/70 sticky top-0 z-30 mb-8">
          <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="text-yellow-400 font-bold text-lg">🎲 GamingPulse24</div>
              <span className="text-xs text-gray-400">Play & Win</span>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden md:flex gap-6 text-gray-300">
              <Link className="hover:text-yellow-400" href="/">Home</Link>
              <Link className="hover:text-yellow-400" href="/blog">Blog</Link>
              <Link className="hover:text-yellow-400" href="/about">About</Link>
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

        {/* Single Post Content */}
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-yellow-400 mb-6">{post.title}</h1>
          <div
            className="prose prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </div>
    </>
  );
}
