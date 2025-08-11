// pages/blog/index.js
import Head from "next/head";
import Link from "next/link";
import post1 from "./post1";

const posts = [post1];

export default function BlogIndex() {
  return (
    <>
      <Head>
        <title>GamingPulse24 Blog — অনলাইন বেটিং ও ক্যাসিনো টিপস</title>
        <meta
          name="description"
          content="বাংলাদেশে অনলাইন বেটিং, ক্যাসিনো, স্লট গেম ও ক্রিকেট বেটিং সম্পর্কিত টিপস এবং গাইড। bKash/Nagad পেমেন্ট সমর্থিত সাইট নিয়ে রিভিউ।"
        />
        <meta
          name="keywords"
          content="অনলাইন বেটিং বাংলাদেশ, সেরা বেটিং সাইট, casino payment bkash nagad, cricket betting Bangladesh, bd slot game online"
        />
      </Head>

      <main className="min-h-screen bg-gray-900 text-gray-100 px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-yellow-400 mb-4">GamingPulse24 Blog</h1>
          <p className="text-gray-300 mb-8">
            এখানে পাবেন বাংলাদেশে অনলাইন বেটিং, ক্যাসিনো, স্লট গেম ও স্পোর্টস বেটিং সম্পর্কিত
            টিপস, গাইড এবং আপডেট।
          </p>

          <div className="grid gap-6">
            {posts.map((p) => (
              <article key={p.id} className="bg-gray-800 p-6 rounded-lg shadow">
                <h2 className="text-2xl font-semibold text-yellow-300 mb-2">
                  <Link href={`/blog/${p.id}`}>
                    <a>{p.title}</a>
                  </Link>
                </h2>

                <p className="text-gray-400 text-sm mb-3">{p.date}</p>
                <p className="text-gray-300 mb-4">{p.excerpt}</p>

                <Link href={`/blog/${p.id}`}>
                  <a className="text-yellow-400 font-medium hover:underline">বিস্তারিত পড়ুন →</a>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
