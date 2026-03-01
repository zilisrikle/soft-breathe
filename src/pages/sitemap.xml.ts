import type { APIRoute } from 'astro';

const SITE = 'https://softbreathe.com';

const pages = [
    { path: '', priority: '1.0', changefreq: 'weekly', lastmod: '2026-03-01' },
    { path: '/practice', priority: '0.9', changefreq: 'weekly', lastmod: '2026-03-01' },
    { path: '/science', priority: '0.8', changefreq: 'monthly', lastmod: '2026-03-01' },
    { path: '/breathing-for-anxiety', priority: '0.8', changefreq: 'monthly', lastmod: '2026-03-01' },
    { path: '/breathing-for-sleep', priority: '0.8', changefreq: 'monthly', lastmod: '2026-03-01' },
    { path: '/breathing-for-focus', priority: '0.8', changefreq: 'monthly', lastmod: '2026-03-01' },
    { path: '/collective', priority: '0.6', changefreq: 'monthly', lastmod: '2026-02-28' },
];

export const GET: APIRoute = async () => {
    const urls = pages
        .map(
            (p) => `  <url>
    <loc>${SITE}${p.path}/</loc>
    <lastmod>${p.lastmod}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`
        )
        .join('\n');

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

    return new Response(sitemap, {
        headers: {
            'Content-Type': 'application/xml; charset=utf-8',
            'Cache-Control': 'public, max-age=86400',
        },
    });
};
