import { resend } from "@/lib/resend";
import ContactEmail from "../../emails/ContactEmail";

export async function sendVerificationEmail(
  senderName: string,
  senderEmail: string,
  message: string
) {
  try {
    await resend.emails.send({
      from: "no-reply@updates.ayushsoni.dev",
      to: "ayusoni86@gmail.com",
      subject: "New message from your portfolio",
      react: ContactEmail({ senderName, senderEmail, message }),
      replyTo: senderEmail,
    });
    return { success: true, message: "Email send succesfully " };
  } catch (emailerror) {
    console.error("Error sending email", emailerror);
    return { success: false, message: "Failed to send email" };
  }
}
