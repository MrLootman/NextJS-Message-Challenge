"use client";
import Input from "@/components/Input/Input";
import "./page.css";
import homeAction from "@/actions/homeActions";
import { useActionState, useState, useEffect } from "react";
import { redirect } from "next/navigation";

const ANSWERS = [
  "Tu connais pourtant la seule véritable bonne réponse",
  "Fais un petit effort",
  "On dirait que tu le fais exprès",
  "Laisse-toi aller à ce que tu ressens vraiment à ce sujet",
  "Ne sois pas de mauvaise foi",
  "C'est pourtant évident",
  "Allez, on se concentre",
  "Il s'agirait d'écrire la bonne réponse",
  "Essaye encore",
];

export default function Home() {
  const [state, formAction, isPending] = useActionState(homeAction, undefined);
  const [currentAnswer, setCurrentAnswer] = useState<string | null>(null);
  const [arrayOfAnswers, setArrayOfAnswers] = useState(ANSWERS);

  function handleCurrentAnswer(originalArr: string[]) {
    setArrayOfAnswers(originalArr.sort(() => Math.random() - 0.5));
    setCurrentAnswer("Olala l'chantier");
  }

  function handleErrors(originalArr: string[], copy: string[]) {
    if (!copy.length) {
      return handleCurrentAnswer(originalArr);
    }

    const tmp = [...copy];
    const [answer] = tmp.splice(0, 1);

    setCurrentAnswer(answer);
    setArrayOfAnswers(tmp);
  }

  useEffect(() => {
    state !== undefined && !isPending && handleErrors(ANSWERS, arrayOfAnswers);
  }, [state, isPending]);

  if (state) {
    redirect("/song");
  }

  return (
    <main className="home">
      <form action={formAction}>
        <label htmlFor="answer">
          L'art contemporain peut-il dignement être qualifié d'art ?
        </label>
        <Input />
        <button type="submit" disabled={isPending}>
          Valider
        </button>
        {currentAnswer && <p>{currentAnswer}</p>}
      </form>
    </main>
  );
}
