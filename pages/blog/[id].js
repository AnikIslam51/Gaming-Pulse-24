// pages/blog/[id].js
import Link from "next/link";
import { useRouter } from "next/router";
import Head from "next/head";
import { useState } from "react";
import allPosts from "../../posts";

export default function SinglePost() {
  const router = useRouter();
  const { id } = router.query;

  const post = allPosts.find((p) => p.slug === id);

  const [menuOpen, setMenuOpen] = useState(false);

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

      <div className="min-h-screen bg-gray-900 text-gray-100 antialiased">
        {/* Header with Hamburger */}
        <header className="bg-black/70 sticky top-0 z-30">
          <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="text-yellow-400 font-bold text-lg">🎲 GamingPulse24</div>
              <span className="text-xs text-gray-400">Play & Win</span>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden md:flex gap-6 text-gray-300">
              <Link className="hover:text-yellow-400" href="/">Home</Link>
              <Link className="hover:text-yellow-400" href="/blog">Blog</Link>
              <Link className="hover:text-yellow-400" href="/about">About</Link>
              <Link className="hover:text-yellow-400" href="/contact">Contact</Link>
            </nav>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden text-gray-300 text-2xl"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              ☰
            </button>
          </div>

          {/* Mobile Dropdown */}
          {menuOpen && (
            <div className="md:hidden bg-black/90 px-6 py-4 flex flex-col gap-4 text-gray-300">
              <Link className="hover:text-yellow-400" href="/" onClick={() => setMenuOpen(false)}>Home</Link>
              <Link className="hover:text-yellow-400" href="/blog" onClick={() => setMenuOpen(false)}>Blog</Link>
              <Link className="hover:text-yellow-400" href="/about" onClick={() => setMenuOpen(false)}>About</Link>
              <Link className="hover:text-yellow-400" href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
            </div>
          )}
        </header>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold text-yellow-400 mb-2">{post.title}</h1>
          <p className="text-sm text-gray-400 mb-6">By {post.author} — {post.date}</p>
          <div
            className="prose prose-invert max-w-none
                      prose-headings:text-yellow-400
                      prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-8 prose-h2:mb-4
                      prose-p:mb-6 prose-p:leading-relaxed
                      prose-a:text-yellow-400 prose-a:underline hover:prose-a:text-yellow-300
                      prose-strong:text-yellow-300
                      prose-ul:list-disc prose-ul:pl-6 prose-li:mb-2
                      prose-ol:list-decimal prose-ol:pl-6 prose-li:mb-2
                      prose-img:rounded-lg prose-img:shadow-lg prose-img:my-6"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

        </div>
      </div>
    </>
  );
}
