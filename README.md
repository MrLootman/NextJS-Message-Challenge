### That is the question

      // MA VERSION
      // const unusedIndices = [];

      // for (let i = 0; i < ANSWERS.length; i++) {
      //   if (!usedIndices.has(i)) {
      //     unusedIndices.push(i);
      //   }
      // }

      // VERSIONS PROPOSEES PAR INTELLIGENCE ARTIFICIELLE :
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

      // let nextIndex: number;

      // if (unusedIndices.length === 0) {
      //   setUsedIndices(new Set());
      //   nextIndex = Math.floor(Math.random() * ANSWERS.length);
      // } else {
      //   nextIndex =
      //     unusedIndices[Math.floor(Math.random() * unusedIndices.length)];
      // }

      // setUsedIndices((prev) => new Set(prev).add(nextIndex));
      // setCurrentAnswer(ANSWERS[nextIndex]);

/// POUR LE STREAM (première version) :

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
const [arrayOfAnswers, setArrayOfAnswers] = useState([...ANSWERS])

const handleCurrentAnswer = (originalArr: string[]) => {
setArrayOfAnswers([...ANSWERS].sort(() => Math.random() - 0.5));
setCurrentAnswer("Olala l'chantier");
};

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
state !== undefined &&
!isPending &&
handleErrors(ANSWERS, answersRef.current);
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
