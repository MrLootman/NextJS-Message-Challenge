"use client";

import Input from "@/components/Input/Input";
import "./page.css";
import action from "@/actions/homeActions";
import { useActionState } from "react";
// import { ANSWERS } from "@/lib/data";

export default function Home() {
  const [state, formAction, isPending] = useActionState(action, undefined);

  if (state) {
    // do something
  }

  return (
    <main className="home">
      <form action={formAction}>
        <label htmlFor="answer">
          L'art contemporain est-il une niche fiscale ?
        </label>
        <Input />
        <button type="submit" disabled={isPending}>
          Valider
        </button>
      </form>
    </main>
  );
}
