"use server";

import nodemailer from "nodemailer";
import { mailTemplate } from "./data";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

export async function sendMail() {
  try {
    const info = await transporter.sendMail({
      from: `"Sébastien Lecornu (aka Séboubou)" <sebastien.lecornu@lafrance.fr>`,
      to: process.env.RECIPIENT,
      subject:
        "La vérité ne saurait être cachée aux hommes cis-het et de souche plus longtemps",
      html: mailTemplate,
    });

    console.log("Message sent:", info.messageId);
  } catch (err) {
    console.error(err);
  }
}
