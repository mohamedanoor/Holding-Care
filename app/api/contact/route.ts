import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { firstName, lastName, email, phone, message } = await req.json();

    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    const { error } = await resend.emails.send({
      from: "Holding Care Website <onboarding@resend.dev>",
      to: "holdhandsinc@gmail.com",
      replyTo: email,
      subject: `New inquiry from ${firstName} ${lastName}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 32px 24px; background: #f5faf7;">
          <div style="background: #ffffff; border-radius: 10px; padding: 32px; border: 1px solid #c8ddd3;">
            <p style="font-size: 11px; font-family: monospace; letter-spacing: 0.12em; text-transform: uppercase; color: #2d7a50; margin: 0 0 12px;">
              Holding Care — New Website Inquiry
            </p>
            <h2 style="font-size: 20px; font-weight: 600; color: #1a2e22; margin: 0 0 24px;">
              Message from ${firstName} ${lastName}
            </h2>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px; font-size: 14px;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2eeea; color: #4a6557; width: 100px;">Name</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2eeea; color: #1a2e22; font-weight: 500;">${firstName} ${lastName}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2eeea; color: #4a6557;">Email</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2eeea;">
                  <a href="mailto:${email}" style="color: #2d7a50;">${email}</a>
                </td>
              </tr>
              ${phone ? `<tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2eeea; color: #4a6557;">Phone</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2eeea; color: #1a2e22;">${phone}</td>
              </tr>` : ""}
            </table>
            <div style="background: #f5faf7; border-left: 3px solid #2d7a50; border-radius: 4px; padding: 16px 20px;">
              <p style="font-size: 12px; color: #4a6557; margin: 0 0 8px; font-family: monospace; text-transform: uppercase; letter-spacing: 0.08em;">Message</p>
              <p style="font-size: 15px; color: #1a2e22; line-height: 1.7; margin: 0; white-space: pre-wrap;">${message}</p>
            </div>
            <p style="font-size: 12px; color: #94a3b8; margin: 20px 0 0;">Reply directly to this email to respond to ${firstName}.</p>
          </div>
        </div>
      `,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Unexpected error." }, { status: 500 });
  }
}
