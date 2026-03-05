/// <reference types="astro/client" />

type Runtime = import('@astrojs/cloudflare').Runtime<Env>;

declare namespace App {
    interface Locals extends Runtime { }
}

interface Env {
    NEWSLETTER_SECRET: string;
    RESEND_API_KEY: string;
}
