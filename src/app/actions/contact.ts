"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  // FIXME: setup resend domain or do it in BE
  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "tuwana.ib@gmail.com",
    subject: "Portfolio Contact",
    reply_to: email,
    text: message,
  });
};
