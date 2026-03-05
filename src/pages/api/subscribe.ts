import type { APIRoute } from 'astro';
import { Resend } from 'resend';
import { buildWelcomeEmail } from '../../lib/newsletter-template';

export const POST: APIRoute = async (context) => {
    try {
        const { request, locals } = context;
        const { email } = await request.json();

        if (!email || typeof email !== 'string') {
            return new Response(
                JSON.stringify({ success: false, error: 'Email is required' }),
                { status: 400, headers: { 'Content-Type': 'application/json' } }
            );
        }

        const env = locals.runtime?.env || {};
        const apiKey = env.RESEND_API_KEY || import.meta.env.RESEND_API_KEY || process.env.RESEND_API_KEY;

        if (!apiKey) {
            return new Response(
                JSON.stringify({ success: false, error: 'Server configuration error' }),
                { status: 500, headers: { 'Content-Type': 'application/json' } }
            );
        }

        const resend = new Resend(apiKey);

        // 1. Add contact to audience
        const { data, error } = await resend.contacts.create({
            email,
            unsubscribed: false,
        });

        if (error) {
            return new Response(
                JSON.stringify({ success: false, error: error.message }),
                { status: 400, headers: { 'Content-Type': 'application/json' } }
            );
        }

        // 2. Send welcome email with practice CTA (closes the feedback loop)
        try {
            await resend.emails.send({
                from: 'Soft Breathe <hello@softbreathe.com>',
                to: email,
                subject: 'Welcome to the Collective · 欢迎加入同修',
                html: buildWelcomeEmail(),
            });
        } catch (emailErr) {
            // Don't fail the subscription if the welcome email fails
            console.error('Welcome email failed:', emailErr);
        }

        return new Response(
            JSON.stringify({ success: true, id: data?.id }),
            { status: 200, headers: { 'Content-Type': 'application/json' } }
        );
    } catch (err: any) {
        return new Response(
            JSON.stringify({ success: false, error: err.message || 'Internal server error' }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
    }
};
