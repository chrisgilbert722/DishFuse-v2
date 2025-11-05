export async function GET() {
  const body = `User-agent: *
Disallow: /mobile/
Sitemap: https://dishfuse-v2.vercel.app/sitemap.xml`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
