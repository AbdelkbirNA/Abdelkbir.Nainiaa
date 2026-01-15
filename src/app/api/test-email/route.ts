import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  await sendTestEmail();
  return Response.json({ status: 'Email sent' });
}

export async function GET() {
  const result = await sendTestEmail();
  return Response.json(result);
}

async function sendTestEmail() {
  try {
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'abdlekbir.nainiaa12@gmail.com',
      subject: 'Hello World',
      html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
    });

    if (error) {
      return { error };
    }

    return data;
  } catch (error) {
    return { error };
  }
}

