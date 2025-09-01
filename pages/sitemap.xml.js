// pages/sitemap.xml.js
import post25 from "../posts/post25";
import post24 from "../posts/post24";
import post23 from "../posts/post23";
import post22 from "../posts/post22";
import post21 from "../posts/post21";
import post20 from "../posts/post20";
import post19 from "../posts/post19";
import post18 from "../posts/post18";
import post17 from "../posts/post17";
import post16 from "../posts/post16";
import post15 from "../posts/post15";
import post14 from "../posts/post14";
import post13 from "../posts/post13";
import post12 from "../posts/post12";
import post11 from "../posts/post11";
import post10 from "../posts/post10";
import post9 from "../posts/post9";
import post8 from "../posts/post8";
import post7 from "../posts/post7";
import post6 from "../posts/post6";
import post5 from "../posts/post5";
import post4 from "../posts/post4";
import post1 from "../posts/post1";
import post2 from "../posts/post2";
import post3 from "../posts/post3";

function buildSiteMap(posts) {
  const baseUrl = "https://gamingpulse24.com"; 
  const staticUrls = ["", "/blog"];

  const urls = staticUrls
    .map(
      (p) => `
  <url>
    <loc>${baseUrl}${p}</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>`
    )
    .join("");

  const postUrls = posts
    .map(
      (post) => `
  <url>
    <loc>${baseUrl}/blog/${post.id}</loc>
    <lastmod>${post.date}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`
    )
    .join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
${postUrls}
</urlset>`;
}

export async function getServerSideProps({ res }) {
  const posts = [post25, post24, post23, post22, post21, post20, post19, post18, post17, post16, post15, post14, post13, post12, post11, post10, post9, post8, post7, post6, post5, post4, post3, post2, post1];
  const sitemap = buildSiteMap(posts);

  res.setHeader("Content-Type", "application/xml");
  res.write(sitemap);
  res.end();

  return { props: {} };
}

export default function SiteMap() {
  return null;
}
