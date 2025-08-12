// pages/blog/[id].js
import { useRouter } from "next/router";
import Head from "next/head";
import post1 from "../../posts/post1";

const allPosts = [post1];

export default function SinglePost() {
  const router = useRouter();
  const { id } = router.query;

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

      <div className="min-h-screen bg-gray-900 text-gray-100 px-4 py-12">
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
