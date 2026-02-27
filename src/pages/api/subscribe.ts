import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const POST: APIRoute = async ({ request }) => {
    try {
        const { email } = await request.json();

        if (!email || typeof email !== 'string') {
            return new Response(
                JSON.stringify({ success: false, error: 'Email is required' }),
                { status: 400, headers: { 'Content-Type': 'application/json' } }
            );
        }

        const apiKey = import.meta.env.RESEND_API_KEY || process.env.RESEND_API_KEY;

        if (!apiKey) {
            return new Response(
                JSON.stringify({ success: false, error: 'Server configuration error' }),
                { status: 500, headers: { 'Content-Type': 'application/json' } }
            );
        }

        const resend = new Resend(apiKey);

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
