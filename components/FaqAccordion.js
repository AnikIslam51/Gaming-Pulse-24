// components/FaqAccordion.js
import { useState } from "react";

export default function FaqAccordion() {
  const faqs = [
    {
      qEn: "How can I start online betting in Bangladesh using bKash or Nagad?",
      qBn: "আমি কীভাবে বিকাশ বা নগদ ব্যবহার করে বাংলাদেশে অনলাইন বেটিং শুরু করতে পারি?",
      aEn: "Register at a trusted online betting site that accepts bKash or Nagad, verify your account, choose your payment method, and deposit to start playing. Look for sites that show clear payment instructions and offer secure transactions.",
      aBn: "একটি বিশ্বস্ত অনলাইন বেটিং সাইটে রেজিস্টার করুন যা বিকাশ বা নগদ গ্রহণ করে, আপনার অ্যাকাউন্ট ভেরিফাই করুন, পেমেন্ট মেথড নির্বাচন করুন এবং খেলা শুরু করতে ডিপোজিট করুন। এমন সাইট বেছে নিন যেখানে পরিষ্কার পেমেন্ট নির্দেশনা এবং নিরাপদ লেনদেন রয়েছে।",
    },
    {
      qEn: "Which is the best betting site in BD for real money gambling?",
      qBn: "বাংলাদেশে আসল টাকা দিয়ে জুয়ার জন্য কোনটি সেরা বেটিং সাইট?",
      aEn: `Sites like <a href="https://seo201.bengalgov.com/register.html" target="_blank" rel="noopener noreferrer">Benglabet.com</a> and <a href="https://seo201.bengalgov.com/register.html" target="_blank" rel="noopener noreferrer">Bengalgov.com</a> are widely used for real money gambling in BD; they typically offer sports betting, live casino and slot games, and support fast payments like bKash and Nagad. Always check user reviews and payment reliability before depositing.`,
      aBn: `<a href="https://seo201.bengalgov.com/register.html" target="_blank" rel="noopener noreferrer">Benglabet.com</a> এবং <a href="https://seo201.bengalgov.com/register.html" target="_blank" rel="noopener noreferrer">Bengalgov.com</a> এর মতো সাইটগুলো বাংলাদেশে আসল টাকা দিয়ে জুয়ার জন্য ব্যাপকভাবে ব্যবহৃত হয়; এগুলো সাধারণত স্পোর্টস বেটিং, লাইভ ক্যাসিনো এবং স্লট গেম অফার করে এবং বিকাশ ও নগদের মতো দ্রুত পেমেন্ট সাপোর্ট করে। ডিপোজিট করার আগে সর্বদা ইউজার রিভিউ এবং পেমেন্ট নির্ভরযোগ্যতা পরীক্ষা করুন।`,
    },
    {
      qEn: "Can I play slot games, Teen Patti, and cricket betting on a trusted Bangladesh casino site?",
      qBn: "আমি কি একটি বিশ্বস্ত বাংলাদেশ ক্যাসিনো সাইটে স্লট গেম, তিন পাত্তি এবং ক্রিকেট বেটিং খেলতে পারি?",
      aEn: "Yes — many trusted Bangladesh casino sites and mobile apps host slot games, Teen Patti, and cricket betting. They let you play on mobile/desktop and support local payment methods, so you can deposit and withdraw easily.",
      aBn: "হ্যাঁ — অনেক বিশ্বস্ত বাংলাদেশ ক্যাসিনো সাইট এবং মোবাইল অ্যাপ স্লট গেম, তিন পাত্তি এবং ক্রিকেট বেটিং অফার করে। এগুলোতে মোবাইল/ডেস্কটপে খেলা যায় এবং লোকাল পেমেন্ট মেথড সাপোর্ট করে, ফলে সহজেই ডিপোজিট ও উইথড্র করা যায়।",
    },
    {
      qEn: "How do I get a free bonus on an online casino without deposit in Bangladesh?",
      qBn: "বাংলাদেশে ডিপোজিট ছাড়া অনলাইন ক্যাসিনোতে আমি কীভাবে ফ্রি বোনাস পাব?",
      aEn: "Search for platforms advertising a 'no deposit bonus' or 'free bonus' for new sign-ups. Usually you must register and verify your account to claim the bonus. Read wagering requirements carefully before withdrawing winnings.",
      aBn: "'নো ডিপোজিট বোনাস' বা 'ফ্রি বোনাস' নতুন সাইনআপের জন্য অফার করছে এমন প্ল্যাটফর্ম খুঁজুন। সাধারণত বোনাস দাবি করতে আপনাকে রেজিস্টার করতে হবে এবং অ্যাকাউন্ট ভেরিফাই করতে হবে। জেতা তোলার আগে বাজির শর্তগুলো ভালো করে পড়ুন।",
    },
    {
      qEn: "Is it possible to join Bangladesh lottery or lucky draw through a mobile betting app?",
      qBn: "মোবাইল বেটিং অ্যাপের মাধ্যমে কি বাংলাদেশ লটারি বা লাকি ড্রতে অংশ নেওয়া সম্ভব?",
      aEn: "Yes, some mobile betting apps list local lottery or lucky draw options. These provide ticket purchases, instant results, and secure payments (bKash/Nagad) — check the app's legitimacy and terms before participating.",
      aBn: "হ্যাঁ, কিছু মোবাইল বেটিং অ্যাপে লোকাল লটারি বা লাকি ড্র অপশন থাকে। এগুলোতে টিকিট কেনা, তাৎক্ষণিক ফলাফল এবং নিরাপদ পেমেন্ট (বিকাশ/নগদ) পাওয়া যায় — অংশগ্রহণের আগে অ্যাপের বৈধতা ও শর্তাবলী পরীক্ষা করুন।",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="mb-14">
      <h2 className="text-yellow-400 font-bold text-xl mb-4">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <div key={i} className="bg-gray-800 rounded-lg">
            <button
              onClick={() => toggleFaq(i)}
              className="w-full text-left px-4 py-3 flex justify-between items-center"
            >
              <span>
                {faq.qEn} <br />
                <span className="text-sm text-gray-400">{faq.qBn}</span>
              </span>
              <span className="text-yellow-400">{openIndex === i ? "▲" : "▼"}</span>
            </button>
            {openIndex === i && (
              <div className="px-4 pb-4 text-gray-300 text-sm">
                <div dangerouslySetInnerHTML={{ __html: faq.aEn }} />
                <div className="mt-2 text-gray-400" dangerouslySetInnerHTML={{ __html: faq.aBn }} />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
