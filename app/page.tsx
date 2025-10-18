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
  const [usedIndices, setUsedIndices] = useState<Set<number>>(new Set());
  const [currentAnswer, setCurrentAnswer] = useState<string | null>(null);

  useEffect(() => {
    if (state !== undefined && !isPending) {
      const unusedIndices = [];

      for (let i = 0; i < ANSWERS.length; i++) {
        if (!usedIndices.has(i)) {
          unusedIndices.push(i);
        }
      }

      // VERSION PROPOSEE PAR INTELLIGENCE ARTIFICIELLE :
      // const unusedIndices = ANSWERS
      //   .map((_, i) => i)
      //   .filter(i => !usedIndices.has(i));

      // const unusedIndices = ANSWERS.reduce<number[]>((acc, _, i) => {
      //   !usedIndices.has(i) && acc.push(i);
      //   return acc;
      // }, []);

      // const unusedIndices = ANSWERS.filter((el, i) => {
      //   return !usedIndices.has(i);
      // });

      let nextIndex: number;

      if (unusedIndices.length === 0) {
        setUsedIndices(new Set());
        nextIndex = Math.floor(Math.random() * ANSWERS.length);
      } else {
        nextIndex =
          unusedIndices[Math.floor(Math.random() * unusedIndices.length)];
      }

      setUsedIndices((prev) => new Set(prev).add(nextIndex));
      setCurrentAnswer(ANSWERS[nextIndex]);
    }
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
