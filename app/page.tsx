"use client";
import Input from "@/components/Input/Input";
import "./page.css";
import homeAction from "@/actions/homeActions";
import { useActionState, useState, useEffect, useRef } from "react";
import { redirect } from "next/navigation";
import { ANSWERS } from "@/lib/data";

export default function Home() {
  const [state, formAction, isPending] = useActionState(homeAction, undefined);
  const [currentAnswer, setCurrentAnswer] = useState<string | null>(null);

  const answersRef = useRef([...ANSWERS]);

  function nextAnswer() {
    if (!answersRef.current.length) {
      answersRef.current = [...ANSWERS].sort(() => Math.random() - 0.5);
      return setCurrentAnswer("Olala, l'chantier !");
    }

    const next = answersRef.current.shift();
    setCurrentAnswer(next ?? null);
  }

  useEffect(() => {
    if (state !== undefined && !isPending) {
      nextAnswer();
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
