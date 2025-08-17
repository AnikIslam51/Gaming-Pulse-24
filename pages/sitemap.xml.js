// pages/sitemap.xml.js
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
  const posts = [,post6, post5, post4, post3, post2, post1];
  const sitemap = buildSiteMap(posts);

  res.setHeader("Content-Type", "application/xml");
  res.write(sitemap);
  res.end();

  return { props: {} };
}

export default function SiteMap() {
  return null;
}
