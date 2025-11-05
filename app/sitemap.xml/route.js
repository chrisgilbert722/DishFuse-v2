// app/sitemap.xml/route.js
export async function GET() {
  // List the key URLs you want indexed
  const base = "https://dish-fuse-v2.vercel.app";

  const urls = [
    `${base}/desktop`,
    `${base}/mobile`,
    `${base}/`, // home redirect
  ];

  // Generate XML
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls
      .map(
        (url) => `
    <url>
      <loc>${url}</loc>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
    </url>`
      )
      .join("")}
  </urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
