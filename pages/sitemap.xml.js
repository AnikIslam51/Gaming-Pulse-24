// pages/sitemap.xml.js
import post1 from "./blog/post1";

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
  const posts = [post1];
  const sitemap = buildSiteMap(posts);

  res.setHeader("Content-Type", "application/xml");
  res.write(sitemap);
  res.end();

  return { props: {} };
}

export default function SiteMap() {
  return null;
}
