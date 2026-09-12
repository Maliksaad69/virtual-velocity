"use client";

import { useState, useEffect, useRef } from "react";

export const SoundToggle = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscRef = useRef<OscillatorNode | null>(null);

  const toggleSound = () => {
    if (isPlaying) {
      if (oscRef.current) {
        oscRef.current.stop();
        oscRef.current.disconnect();
      }
      setIsPlaying(false);
    } else {
      try {
        const AudioContext = window.AudioContext || (window as unknown as { webkitAudioContext: typeof window.AudioContext }).webkitAudioContext;
        const ctx = new AudioContext();
        audioCtxRef.current = ctx;

        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = "sine";
        osc.frequency.setValueAtTime(220, ctx.currentTime); // Soft ambient chord
        gain.gain.setValueAtTime(0.015, ctx.currentTime); // Subtle volume

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start();
        oscRef.current = osc;
        setIsPlaying(true);
      } catch (e) {
        console.error("Audio Context error:", e);
      }
    }
  };

  useEffect(() => {
    return () => {
      if (oscRef.current) {
        oscRef.current.stop();
      }
    };
  }, []);

  return (
    <button
      onClick={toggleSound}
      aria-label="Toggle ambient sound"
      className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-40 flex items-center gap-2 sm:gap-3 px-3.5 py-2.5 sm:px-5 sm:py-3 rounded-full bg-white/95 border border-zinc-300 text-zinc-800 hover:text-zinc-900 backdrop-blur-xl hover:border-zinc-900 transition-all duration-300 shadow-xl text-[11px] sm:text-xs font-mono select-none min-h-[44px] touch-manipulation"
      data-cursor-pointer
    >
      <div className="flex items-end gap-0.5 h-3">
        <span className={`w-0.5 bg-zinc-900 rounded-full transition-all duration-300 ${isPlaying ? "animate-pulse h-3" : "h-1"}`} />
        <span className={`w-0.5 bg-zinc-900 rounded-full transition-all duration-300 ${isPlaying ? "animate-bounce h-2" : "h-1.5"}`} />
        <span className={`w-0.5 bg-zinc-900 rounded-full transition-all duration-300 ${isPlaying ? "animate-pulse h-3.5" : "h-1"}`} />
      </div>
      <span>SOUND: {isPlaying ? "ON" : "OFF"}</span>
    </button>
  );
};
