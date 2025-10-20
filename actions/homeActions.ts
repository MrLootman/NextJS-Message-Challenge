"use server";

export default async function action(
  prev: boolean | undefined,
  formData: FormData
) {
  const hiddenAnswer = "oui"; // Pourrait venir d'une variable d'environnement ou d'une database

  const answer = formData.get("answer");

  if (answer?.toString().toLowerCase() !== hiddenAnswer) {
    return false;
  }

  return true;
}
