"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Hero from "@/components/screens/Hero";
import Swan from "@/components/screens/Swan";
import Envelope from "@/components/screens/Envelope";
import Letter from "@/components/screens/Letter";

const LAST_SCREEN = 4;
const ENVELOPE_DURATION = 2600;
const GESTURES = ["pointerdown", "touchstart", "keydown"] as const;

export default function Experience() {
  const [screen, setScreen] = useState(1);
  const [opening, setOpening] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const audio = new Audio("/cupids.mp3");
    audio.loop = true;
    audio.volume = 0.5;
    audio.preload = "auto";
    audioRef.current = audio;

    // Unprompted autoplay is refused by most mobile browsers (always on iOS),
    // so retry on whatever the first interaction turns out to be.
    let started = false;
    const attempt = () => {
      if (started) return;
      audio
        .play()
        .then(() => {
          started = true;
          detach();
        })
        .catch(() => {});
    };
    const detach = () => {
      for (const type of GESTURES) document.removeEventListener(type, attempt);
    };

    attempt();
    for (const type of GESTURES)
      document.addEventListener(type, attempt, { passive: true });

    return () => {
      detach();
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const go = useCallback((n: number) => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    setScreen(Math.max(1, Math.min(LAST_SCREEN, n)));
    setOpening(false);
    window.scrollTo(0, 0);
  }, []);

  const openLetter = useCallback(() => {
    if (opening) return;
    setOpening(true);
    timerRef.current = setTimeout(() => go(LAST_SCREEN), ENVELOPE_DURATION);
  }, [opening, go]);

  const begin = useCallback(() => {
    audioRef.current?.play().catch(() => {});
    go(2);
  }, [go]);

  const back = useCallback(() => go(screen - 1), [go, screen]);

  const next = useCallback(() => {
    if (screen === 3) openLetter();
    else if (screen < LAST_SCREEN) go(screen + 1);
  }, [screen, openLetter, go]);

  return (
    <>
      {screen === 1 && <Hero onBegin={begin} />}
      {screen === 2 && <Swan />}
      {screen === 3 && <Envelope opening={opening} onOpen={openLetter} />}
      {screen === 4 && <Letter />}

      {screen > 1 && !opening && (
        <div className="absolute inset-0 z-[4] flex">
          <button
            type="button"
            onClick={back}
            aria-label="Go back"
            className="flex-1 cursor-w-resize"
          />
          <button
            type="button"
            onClick={next}
            aria-label="Continue"
            className="flex-[1.4] cursor-e-resize"
          />
        </div>
      )}

      {screen === 2 && (
        <div className="pointer-events-none absolute bottom-[26px] left-0 right-0 z-[5] flex animate-[fadeIn_2s_6s_both] justify-between px-[26px] text-[13px] uppercase tracking-[.2em] text-ink/[.35]">
          <span>&larr; back</span>
          <span>tap right &rarr;</span>
        </div>
      )}
    </>
  );
}
