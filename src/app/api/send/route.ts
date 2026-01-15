import { EmailTemplate } from "@/components/email-template";
import { config } from "@/data/config";
import { Resend } from "resend";
import { z } from "zod";

const getResend = () => new Resend(process.env.RESEND_API_KEY || "");

const Email = z.object({
  fullName: z.string().min(2, "Full name is invalid!"),
  email: z.string().email({ message: "Email is invalid!" }),
  message: z.string().min(2, "Message is too short!"),
  gotcha: z.string().optional(),
});
export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("Received body:", body);
    
    // Honeypot check
    if (body.gotcha) {
      console.warn("Spam detected!");
      return Response.json({ status: "success" }); // Silent success
    }
    const {
      success: zodSuccess,
      data: zodData,
      error: zodError,
    } = Email.safeParse(body);
    if (!zodSuccess) {
      console.error("Zod Validation Error:", zodError.format());
      return Response.json({ error: zodError?.message }, { status: 400 });
    }

    const resend = getResend();
    const { data: resendData, error: resendError } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: [config.email],
      subject: "Contact me from portfolio",
      react: EmailTemplate({
        fullName: zodData.fullName,
        email: zodData.email,
        message: zodData.message,
      }),
    });

    if (resendError) {
      return Response.json({ resendError }, { status: 500 });
    }

    return Response.json(resendData);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
