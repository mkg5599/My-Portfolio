import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  const { email, subject, message } = await req.json();
  const fromEmail = process.env.FROM_EMAIL; // your sender email

  // Create a nodemailer transporter using your SMTP configuration
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST, // e.g., smtp.gmail.com
    port: Number(process.env.EMAIL_PORT), // e.g., 587
    secure: process.env.EMAIL_PORT === "465", // true for port 465, false for others
    auth: {
      user: process.env.EMAIL_USER, // your email address
      pass: process.env.EMAIL_PASS, // your email password or app-specific password
    },
  });

  try {
    const mailData = {
      from: fromEmail,
      to: [fromEmail, email], // sending to your email and the sender
      subject,
      html: `
        <h1>${subject}</h1>
        <p>Thank you for contacting!</p>
        <p>New message submitted:</p>
        <p>${message}</p>
        <p>Sender: ${email}</p>
      `,
    };

    const info = await transporter.sendMail(mailData);

    return NextResponse.json({ message: "Email sent successfully", info });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: error.message });
  }
}