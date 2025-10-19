"use server";

// import { sendMail } from "../lib/mailing";

export default async function homeAction(
  prev: boolean | undefined,
  formData: FormData
) {
  const hiddenAnswer = process.env.ANSWER;

  const answer = formData.get("answer");
  const stringAnswer = answer?.toString().toLowerCase();

  if (stringAnswer !== hiddenAnswer) {
    return false;
  }

  // await sendMail();

  return true;
}
