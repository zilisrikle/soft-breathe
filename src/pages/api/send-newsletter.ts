import type { APIRoute } from 'astro';
import { Resend } from 'resend';
import { buildNewsletter } from '../../lib/newsletter-template';

/**
 * POST /api/send-newsletter
 * 
 * Admin-only endpoint for sending weekly newsletter to all audience contacts.
 * Protected by NEWSLETTER_SECRET env var.
 * 
 * Body JSON:
 * {
 *   "secret": "your-secret",
 *   "issueNumber": 1,
 *   "subject": "The exhale that resets everything",
 *   "headline": "\"The exhale is not the end of the breath.<br><em>It is the beginning of the next one.</em>\"",
 *   "practiceSection": "<p>HTML content for the practice section...</p>",
 *   "scienceSection": "<p>HTML content for the science section...</p>",
 *   "shiftSection": "<p>HTML content for the shift section...</p>",
 *   "practicePattern": "relax"
 * }
 */
export const POST: APIRoute = async ({ request }) => {
    try {
        const body = await request.json();
        const { secret, issueNumber, subject, headline, practiceSection, scienceSection, shiftSection, practicePattern } = body;

        // Auth check
        const expectedSecret = import.meta.env.NEWSLETTER_SECRET || process.env.NEWSLETTER_SECRET;

        console.log('Received secret length:', secret?.length);
        console.log('Expected secret length:', expectedSecret?.length);
        console.log('Match?', secret === expectedSecret);

        if (!expectedSecret || secret !== expectedSecret) {
            return new Response(
                JSON.stringify({ success: false, error: 'Unauthorized' }),
                { status: 401, headers: { 'Content-Type': 'application/json' } }
            );
        }

        const apiKey = import.meta.env.RESEND_API_KEY || process.env.RESEND_API_KEY;
        if (!apiKey) {
            return new Response(
                JSON.stringify({ success: false, error: 'Missing RESEND_API_KEY' }),
                { status: 500, headers: { 'Content-Type': 'application/json' } }
            );
        }

        const resend = new Resend(apiKey);

        // Build the email HTML
        const html = buildNewsletter({
            issueNumber: issueNumber || 1,
            subject: subject || '',
            headline: headline || '',
            practiceSection: practiceSection || '',
            scienceSection: scienceSection || '',
            shiftSection: shiftSection || '',
            practicePattern: practicePattern || 'relax',
        });

        // Send to audience via Resend broadcast
        const { data, error } = await resend.emails.send({
            from: 'Soft Breathe <hello@softbreathe.com>',
            to: 'delivered@resend.dev', // Placeholder — replace with audience ID for broadcast
            subject: `Soft Breathe · Vol. ${String(issueNumber || 1).padStart(2, '0')} — ${subject}`,
            html,
        });

        if (error) {
            return new Response(
                JSON.stringify({ success: false, error: error.message }),
                { status: 400, headers: { 'Content-Type': 'application/json' } }
            );
        }

        return new Response(
            JSON.stringify({ success: true, id: data?.id, message: 'Newsletter sent' }),
            { status: 200, headers: { 'Content-Type': 'application/json' } }
        );
    } catch (err: any) {
        return new Response(
            JSON.stringify({ success: false, error: err.message || 'Internal server error' }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
    }
};
