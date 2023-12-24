import { NextResponse } from "next/server";
import { Resend } from "resend";

import React from "react";
import { EmailTemplate } from "@/app/components/emails/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);
export async function POST(request: Request) {
  const { name, message, email, phone, source } = await request.json();

  try {
    const { data } = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "fianu@wislawedufund.org",
      subject: name,
      text: message,
      react: React.createElement(EmailTemplate, {
        message: message as string,
        email: email as string,
        phone: phone as string,
        source: source as string,
        name: name as string,
      }),
    });

    return NextResponse.json({
      status:
        "This is the part you do not see if you are not a developer like me😜",
    });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
