// pages/blog/index.js
import Head from "next/head";
import Link from "next/link";
import post1 from "../../posts/post1";

const posts = [post1];

export default function BlogPage() {
  return (
    <>
      <Head>
        <title>GamingPulse24 Blog — Casino & Betting Tips in Bangladesh</title>
        <meta
          name="description"
          content="Read the latest tips, guides, and news about online casino, slot games, and sports betting in Bangladesh. Stay updated with GamingPulse24 Blog."
        />
      </Head>

      <div className="min-h-screen bg-gray-900 text-gray-100 px-4 py-12">
        <div className="max-w-4xl mx-auto">
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
