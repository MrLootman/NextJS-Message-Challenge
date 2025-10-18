"use client";

import "./page.css";
import { useEffect, useRef, useState } from "react";

export default function Song() {
  const [play, setPlay] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio("/JADMUC-OùPensesTuAller.wav");
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  const closeModal = () => {
    if (dialogRef.current) {
      dialogRef.current.close();
    }

    setPlay(true);
  };

  useEffect(() => {
    if (!play) return;

    audioRef.current?.play();

    () => audioRef.current?.pause();
  }, [play]);

  return (
    <main className="song">
      <img
        src="Christelle_M.png"
        style={{ display: play ? "block" : "none" }}
      />
      <dialog ref={dialogRef} popover="auto" open>
        <p>Veux-tu jouer cette musique ?</p>

        <button onClick={closeModal} type="button">
          Bien évidemment
        </button>
      </dialog>

      <img
        className="broccoli"
        style={{ display: play ? "block" : "none" }}
        src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExdTluYjlyY2NndHBycWQ1bzUwcTFzbWk5MTUxMTRhZnYxZ3RkanZjMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xTiTnh3xPm4npfcy1a/giphy.gif"
      />
    </main>
  );
}
