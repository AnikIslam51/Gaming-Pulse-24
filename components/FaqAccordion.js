// components/FaqAccordion.js
import { useState } from "react";

const faqList = [
  {
    id: 1,
    q_en: "How can I start online betting in Bangladesh using bKash or Nagad?",
    q_bn: "বাংলাদেশে বিকাশ বা নগদ দিয়ে অনলাইন বেটিং শুরু করার উপায় কী?",
    a_en:
      "Register at a trusted online betting site that accepts bKash or Nagad, verify your account, choose your payment method, and deposit to start playing. Look for sites that show clear payment instructions and offer secure transactions.",
    a_bn:
      "বিকাশ বা নগদ গ্রহণ করে এমন একটি ট্রাস্টেড অনলাইন বেটিং সাইটে রেজিস্ট্রেশন করুন, অ্যাকাউন্ট ভেরিফাই করুন, পেমেন্ট মেথড নির্বাচন করে ডিপোজিট করুন এবং খেলা শুরু করুন। স্পষ্ট পেমেন্ট নির্দেশ ও নিরাপদ লেনদেন প্রদান করে এমন সাইট বেছে নিন।",
  },
  {
    id: 2,
    q_en: "Which is the best betting site in BD for real money gambling?",
    q_bn: "বাংলাদেশে আসল টাকা দিয়ে জুয়ার জন্য সেরা বেটিং সাইট কোনটি?",
    a_en: (
      <>
        Sites like{" "}
        <a
          href="https://www.benglabet.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-yellow-400 underline hover:text-yellow-300"
        >
          Benglabet.com
        </a>{" "}
        and{" "}
        <a
          href="https://www.bengalgov.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-yellow-400 underline hover:text-yellow-300"
        >
          Bengalgov.com
        </a>{" "}
        are widely used for real money gambling in BD; they typically offer sports betting, live casino and slot games, and support fast payments like bKash and Nagad. Always check user reviews and payment reliability before depositing.
      </>
    ),
    a_bn: (
      <>
        <a
          href="https://www.benglabet.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-yellow-300 underline hover:text-yellow-200"
        >
          Benglabet.com
        </a>{" "}
        এবং{" "}
        <a
          href="https://www.bengalgov.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-yellow-300 underline hover:text-yellow-200"
        >
          Bengalgov.com
        </a>{" "}
        এর মতো সাইটগুলো বাংলাদেশে আসল টাকা জুয়ার জন্য জনপ্রিয়; সাধারণত এখানে স্পোর্টস বেটিং, লাইভ ক্যাসিনো ও স্লট গেম থাকে এবং বিকাশ/নগদ ইত্যাদি দ্রুত পেমেন্ট সাপোর্ট করে। ডিপোজিটের আগে ইউজার রিভিউ ও পেমেন্ট নির্ভরযোগ্যতা যাচাই করুন।
      </>
    ),
  },
  {
    id: 3,
    q_en: "Can I play slot games, Teen Patti, and cricket betting on a trusted Bangladesh casino site?",
    q_bn: "বাংলাদেশের ট্রাস্টেড ক্যাসিনো সাইটে কি স্লট গেম, তিন পাত্তি এবং ক্রিকেট বেটিং খেলা যায়?",
    a_en:
      "Yes — many trusted Bangladesh casino sites and mobile apps host slot games, Teen Patti, and cricket betting. They let you play on mobile/desktop and support local payment methods, so you can deposit and withdraw easily.",
    a_bn:
      "হ্যাঁ — অনেক ট্রাস্টেড বাংলাদেশ ক্যাসিনো সাইট ও মোবাইল অ্যাপে স্লট গেম, তিন পাত্তি এবং ক্রিকেট বেটিং খেলার সুবিধা রয়েছে। এগুলো মোবাইল ও ডেস্কটপে খেলার উপযোগী এবং লোকাল পেমেন্ট মেথড সাপোর্ট করে।",
  },
  {
    id: 4,
    q_en: "How do I get a free bonus on an online casino without deposit in Bangladesh?",
    q_bn: "বাংলাদেশে ডিপোজিট ছাড়াই অনলাইন ক্যাসিনো থেকে ফ্রি বোনাস কিভাবে পাবো?",
    a_en:
      "Search for platforms advertising a 'no deposit bonus' or 'free bonus' for new sign-ups. Usually you must register and verify your account to claim the bonus. Read wagering requirements carefully before withdrawing winnings.",
    a_bn:
      "নো ডিপোজিট বোনাস বা নতুন সাইন-আপ ফ্রি বোনাস দেওয়া প্ল্যাটফর্মগুলো খুঁজুন। সাধারণত রেজিস্ট্রেশন ও ভেরিফিকেশন করতে হয় বোনাস নেয়ার জন্য। উইনিং তুলে নেওয়ার আগে ওয়েজারিং শর্তগুলো ভালো করে পড়ে নিন।",
  },
  {
    id: 5,
    q_en: "Is it possible to join Bangladesh lottery or lucky draw through a mobile betting app?",
    q_bn: "মোবাইল বেটিং অ্যাপ দিয়ে কি বাংলাদেশ লটারি বা লাকি ড্রতে অংশ নেওয়া সম্ভব?",
    a_en:
      "Yes, some mobile betting apps list local lottery or lucky draw options. These provide ticket purchases, instant results, and secure payments (bKash/Nagad) — check the app's legitimacy and terms before participating.",
    a_bn:
      "হ্যাঁ, কিছু মোবাইল বেটিং অ্যাপে স্থানীয় লটারি বা লাকি ড্র অপশন থাকে। এসব অ্যাপে টিকিট কেনা, তাত্ক্ষণিক রেজাল্ট এবং বিকাশ/নগদের মাধ্যমে নিরাপদ পেমেন্ট করা যায় — অংশ নেওয়ার আগে অ্যাপটির বৈধতা ও শর্তগুলো যাচাই করুন।",
  },
];

export default function FaqAccordion() {
  const [openId, setOpenId] = useState(null);
  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <section aria-labelledby="faq-heading" className="mb-20">
      <h3 id="faq-heading" className="text-2xl font-bold text-yellow-300 mb-4">
        Frequently Asked Questions
      </h3>
      <p className="text-gray-300 mb-6">
        Quick answers to the most common questions about online gaming, payments and bonuses.
      </p>

      <div className="space-y-3">
        {faqList.map((item) => {
          const isOpen = openId === item.id;
          return (
            <div key={item.id} className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
              <button
                onClick={() => toggle(item.id)}
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${item.id}`}
                className="w-full flex items-start justify-between gap-4 px-4 py-4 md:py-5 text-left focus:outline-none focus:ring-2 focus:ring-yellow-400"
              >
                <div>
                  <div className="flex items-center gap-3">
                    <span className="text-lg font-medium">{item.q_en}</span>
                  </div>
                  <div className="mt-1 text-sm text-gray-400">{item.q_bn}</div>
                </div>

                <div className={`flex-shrink-0 transform transition-transform duration-200 ${isOpen ? "rotate-180" : "rotate-0"}`} aria-hidden="true">
                  <svg className="w-6 h-6 text-yellow-300" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 8L10 13L15 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </button>

              <div
                id={`faq-panel-${item.id}`}
                role="region"
                aria-labelledby={`faq-${item.id}`}
                className={`px-4 pb-4 transition-[max-height,opacity] duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
                style={{ overflow: "hidden" }}
              >
                <div className="pt-2 text-sm text-gray-300">
                  <p className="mb-2">{item.a_en}</p>
                  <p className="text-gray-400">{item.a_bn}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
