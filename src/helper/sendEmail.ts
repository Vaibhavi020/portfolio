import { resend } from "@/lib/resend";
import ContactEmail from "../../emails/ContactEmail";

export async function sendVerificationEmail(
  name: string,
  email: string,
  message: string
) {
  try {
    await resend.emails.send({
      from: "no-reply@updates.ayushsoni.dev",
      to: "vaibhavideshpande0213@gmail.com",
      subject: "New message from your portfolio",
      react: ContactEmail({ name, email, message }),
      replyTo: email,
    });
    return { success: true, message: "Email send succesfully " };
  } catch (emailerror) {
    console.error("Error sending email", emailerror);
    return { success: false, message: "Failed to send email" };
  }
}
