// newsletter-template.ts — Reusable HTML email template for Soft Breathe newsletter
// Produces inline-styled HTML compatible with all major email clients

interface PracticeCTA {
    /** Pattern key: 'relax' | 'box' | '478' | 'energise' */
    pattern: string;
    /** Human-readable name, e.g. "Relax 4-6" */
    name: string;
    /** Duration string, e.g. "5 min" */
    duration: string;
}

const SITE = 'https://softbreathe.com';

const PATTERN_META: Record<string, { name: string; nameZh: string; rhythm: string; rhythmZh: string }> = {
    relax: { name: 'Relax 4-6', nameZh: '放松 4-6', rhythm: 'Inhale 4s · Exhale 6s', rhythmZh: '吸气4秒 · 呼气6秒' },
    box: { name: 'Box Breathing', nameZh: '方块呼吸', rhythm: '4s · Hold 4s · 4s · Hold 4s', rhythmZh: '4秒 · 屏息4秒 · 4秒 · 屏息4秒' },
    '478': { name: '4-7-8 Sleep', nameZh: '4-7-8 睡眠', rhythm: 'Inhale 4s · Hold 7s · Exhale 8s', rhythmZh: '吸气4秒 · 屏息7秒 · 呼气8秒' },
    energise: { name: 'Energise 6-2', nameZh: '激活 6-2', rhythm: 'Inhale 6s · Exhale 2s', rhythmZh: '吸气6秒 · 呼气2秒' },
};

/**
 * Build the "This Week's Practice" CTA block for emails.
 */
function practiceCTABlock(pattern: string): string {
    const meta = PATTERN_META[pattern] || PATTERN_META['relax'];
    const url = `${SITE}/practice?pattern=${pattern}`;
    return `
    <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:40px; border-top:1px solid #e0dbd0; padding-top:32px;">
      <tr>
        <td style="font-family:'DM Mono',Menlo,monospace; font-size:10px; letter-spacing:0.3em; text-transform:uppercase; color:#b8b8b0; padding-bottom:16px;">
          本周练习 · This Week's Practice
        </td>
      </tr>
      <tr>
        <td style="padding-bottom:8px;">
          <span style="font-family:'IM Fell English',Georgia,serif; font-size:22px; color:#1a1a18;">${meta.name}</span>
          <span style="font-family:'DM Mono',Menlo,monospace; font-size:12px; color:#8a8a80; margin-left:12px;">${meta.rhythm}</span>
        </td>
      </tr>
      <tr>
        <td style="padding-bottom:4px;">
          <span style="font-family:sans-serif; font-size:14px; color:#8a8a80;">${meta.nameZh} · ${meta.rhythmZh}</span>
        </td>
      </tr>
      <tr>
        <td style="padding-top:16px;">
          <a href="${url}" style="font-family:'DM Mono',Menlo,monospace; font-size:12px; letter-spacing:0.15em; text-transform:uppercase; color:#1a1a18; text-decoration:none; border-bottom:1px solid #1a1a18; padding-bottom:2px;">
            → 开始练习 · Start Practice
          </a>
        </td>
      </tr>
    </table>`;
}

/**
 * Full newsletter email template.
 */
export function buildNewsletter(opts: {
    issueNumber: number;
    subject: string;
    headline: string;
    practiceSection: string;
    scienceSection: string;
    shiftSection: string;
    practicePattern: string;
}): string {
    const { issueNumber, headline, practiceSection, scienceSection, shiftSection, practicePattern } = opts;

    return `<!DOCTYPE html>
<html lang="zh">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0; padding:0; background-color:#f5f3ee; font-family:'Noto Serif',Georgia,serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f5f3ee;">
    <tr><td align="center" style="padding:60px 20px 40px;">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px; width:100%;">

        <!-- Header -->
        <tr><td style="padding-bottom:40px; border-bottom:1px solid #e0dbd0;">
          <p style="font-family:'DM Mono',Menlo,monospace; font-size:10px; letter-spacing:0.35em; text-transform:uppercase; color:#b8b8b0; margin:0 0 8px;">
            Soft Breathe · 同修 · Vol. ${String(issueNumber).padStart(2, '0')}
          </p>
          <h1 style="font-family:'IM Fell English',Georgia,serif; font-size:28px; line-height:1.4; color:#1a1a18; margin:0; font-weight:normal;">
            ${headline}
          </h1>
        </td></tr>

        <!-- Practice -->
        <tr><td style="padding:40px 0 0;">
          <p style="font-family:'DM Mono',Menlo,monospace; font-size:10px; letter-spacing:0.3em; text-transform:uppercase; color:#b8b8b0; margin:0 0 16px;">
            一 · The Practice
          </p>
          <div style="font-size:16px; line-height:1.85; color:#4a4a45; font-style:italic;">
            ${practiceSection}
          </div>
        </td></tr>

        <!-- Science -->
        <tr><td style="padding:40px 0 0;">
          <p style="font-family:'DM Mono',Menlo,monospace; font-size:10px; letter-spacing:0.3em; text-transform:uppercase; color:#b8b8b0; margin:0 0 16px;">
            二 · The Science
          </p>
          <div style="font-size:16px; line-height:1.85; color:#4a4a45; font-style:italic;">
            ${scienceSection}
          </div>
        </td></tr>

        <!-- Shift -->
        <tr><td style="padding:40px 0 0;">
          <p style="font-family:'DM Mono',Menlo,monospace; font-size:10px; letter-spacing:0.3em; text-transform:uppercase; color:#b8b8b0; margin:0 0 16px;">
            三 · The Shift
          </p>
          <div style="font-size:16px; line-height:1.85; color:#4a4a45; font-style:italic;">
            ${shiftSection}
          </div>
        </td></tr>

        <!-- ★ This Week's Practice CTA — the critical feedback loop -->
        <tr><td>
          ${practiceCTABlock(practicePattern)}
        </td></tr>

        <!-- Footer -->
        <tr><td style="padding:48px 0 0; border-top:1px solid #e0dbd0; margin-top:40px;">
          <p style="font-family:'DM Mono',Menlo,monospace; font-size:10px; letter-spacing:0.2em; color:#b8b8b0; margin:0;">
            Soft Breathe · 息 · Written from Bali
          </p>
          <p style="font-family:sans-serif; font-size:11px; color:#b8b8b0; margin:8px 0 0;">
            <a href="${SITE}" style="color:#8a8a80;">softbreathe.com</a> · 
            <a href="{{{RESEND_UNSUBSCRIBE_URL}}}" style="color:#8a8a80;">Unsubscribe</a>
          </p>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

/**
 * Welcome email sent immediately after subscription.
 */
export function buildWelcomeEmail(): string {
    return `<!DOCTYPE html>
<html lang="zh">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0; padding:0; background-color:#f5f3ee; font-family:'Noto Serif',Georgia,serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f5f3ee;">
    <tr><td align="center" style="padding:60px 20px 40px;">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px; width:100%;">

        <!-- Header -->
        <tr><td style="padding-bottom:40px; border-bottom:1px solid #e0dbd0;">
          <p style="font-family:'DM Mono',Menlo,monospace; font-size:10px; letter-spacing:0.35em; text-transform:uppercase; color:#b8b8b0; margin:0 0 8px;">
            Soft Breathe · 同修
          </p>
          <h1 style="font-family:'IM Fell English',Georgia,serif; font-size:28px; line-height:1.4; color:#1a1a18; margin:0; font-weight:normal;">
            Welcome to the Collective.<br>
            <em style="color:#4a4a45;">欢迎加入同修。</em>
          </h1>
        </td></tr>

        <!-- Body -->
        <tr><td style="padding:40px 0;">
          <p style="font-size:16px; line-height:1.85; color:#4a4a45; font-style:italic; margin:0 0 16px;">
            Every week, you'll receive one letter with three things inside: a practice, the science behind it, and one small shift for the week.
          </p>
          <p style="font-size:16px; line-height:1.85; color:#4a4a45; font-style:italic; margin:0 0 16px;">
            每周，你会收到一封信，里面有三件事：一个练习，背后的科学，以及一个小小的转变。
          </p>
          <p style="font-size:16px; line-height:1.85; color:#4a4a45; font-style:italic; margin:0 0 24px;">
            No noise. No streaks. Just the kite, the string, and the next breath.
          </p>
          <p style="font-size:15px; line-height:1.85; color:#8a8a80; margin:0 0 16px;">
            While you wait for the first issue, here's a practice to begin with:
          </p>
          <p style="font-size:15px; line-height:1.85; color:#8a8a80; margin:0;">
            在等待第一封信的同时，这里有一个练习可以开始：
          </p>
        </td></tr>

        <!-- Practice CTA -->
        <tr><td>
          ${practiceCTABlock('relax')}
        </td></tr>

        <!-- Footer -->
        <tr><td style="padding:48px 0 0; border-top:1px solid #e0dbd0; margin-top:40px;">
          <p style="font-family:'DM Mono',Menlo,monospace; font-size:10px; letter-spacing:0.2em; color:#b8b8b0; margin:0;">
            Soft Breathe · 息 · Written from Bali
          </p>
          <p style="font-family:sans-serif; font-size:11px; color:#b8b8b0; margin:8px 0 0;">
            <a href="${SITE}" style="color:#8a8a80;">softbreathe.com</a> · 
            <a href="{{{RESEND_UNSUBSCRIBE_URL}}}" style="color:#8a8a80;">Unsubscribe</a>
          </p>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}
