"use server";

import { sendMail } from "../lib/mailing";

export default async function homeAction(
  prev: boolean | undefined,
  formData: FormData
) {
  const answer = formData.get("answer");
  const hiddenAnswer = process.env.NEXT_PUBLIC_ANSWER;

  const stringAnswer = answer?.toString().toLowerCase();

  if (stringAnswer !== hiddenAnswer) {
    return false;
  }

  await sendMail();

  return true;
}
