// pages/blog/[id].js
import Head from "next/head";
import { useRouter } from "next/router";
import post1 from "./post1";

const posts = [post1];

export default function PostPage({ post }) {
  const router = useRouter();
  if (router.isFallback) return <div className="min-h-screen text-gray-100">Loading...</div>;

  // simple Article schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    datePublished: post.date,
    author: { "@type": "Person", name: "GamingPulse24" },
    publisher: {
      "@type": "Organization",
      name: "GamingPulse24",
      url: "https://gamingpulse24.com"
    },
    description: post.excerpt,
  };

  return (
    <>
      <Head>
        <title>{post.title} | GamingPulse24</title>
        <meta name="description" content={post.excerpt} />
        <meta name="keywords" content={post.keywords.join(", ")} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </Head>

      <main className="min-h-screen bg-gray-900 text-gray-100 px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-yellow-400 mb-2">{post.title}</h1>
          <p className="text-gray-400 text-sm mb-6">{post.date}</p>

          <article className="prose prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </main>
    </>
  );
}

// getStaticPaths + getStaticProps for SSG
export async function getStaticPaths() {
  const paths = posts.map((p) => ({ params: { id: p.id } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const post = posts.find((p) => p.id === params.id) || null;
  if (!post) return { notFound: true };
  return { props: { post } };
}
