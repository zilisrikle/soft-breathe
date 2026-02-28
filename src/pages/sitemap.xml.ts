import type { APIRoute } from 'astro';

const SITE = 'https://softbreathe.com';

const pages = [
    '',
    '/practice',
    '/science',
    '/collective',
];

export const GET: APIRoute = async () => {
    const urls = pages
        .map(
            (p) => `  <url><loc>${SITE}${p}/</loc></url>`
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
