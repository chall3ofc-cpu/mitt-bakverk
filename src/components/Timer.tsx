import { Pause, Play, RotateCcw, Timer as TimerIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { useStore } from "@/lib/store";

function format(sec: number) {
  const m = Math.floor(Math.abs(sec) / 60);
  const s = Math.abs(sec) % 60;
  return `${sec < 0 ? "-" : ""}${m}:${String(s).padStart(2, "0")}`;
}

function beep() {
  try {
    const Ctx =
      window.AudioContext ??
      (window as unknown as { webkitAudioContext?: typeof AudioContext })
        .webkitAudioContext;
    if (!Ctx) return;
    const ctx = new Ctx();
    [0, 0.35, 0.7].forEach((offset) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.frequency.value = 880;
      osc.connect(gain);
      gain.connect(ctx.destination);
      gain.gain.setValueAtTime(0.001, ctx.currentTime + offset);
      gain.gain.exponentialRampToValueAtTime(0.2, ctx.currentTime + offset + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + offset + 0.25);
      osc.start(ctx.currentTime + offset);
      osc.stop(ctx.currentTime + offset + 0.3);
    });
  } catch {
    /* ljud stöds inte */
  }
}

export function Timer({ seconds, label }: { seconds: number; label?: string }) {
  const { settings } = useStore();
  const [remaining, setRemaining] = useState(seconds);
  const [running, setRunning] = useState(false);
  const [done, setDone] = useState(false);
  const soundRef = useRef(settings.sound);
  soundRef.current = settings.sound;

  useEffect(() => {
    setRemaining(seconds);
    setRunning(false);
    setDone(false);
  }, [seconds]);

  useEffect(() => {
    if (!running) return;
    const id = window.setInterval(() => {
      setRemaining((prev) => {
        const next = prev - 1;
        if (prev > 0 && next <= 0) {
          setDone(true);
          if (soundRef.current) beep();
        }
        return next;
      });
    }, 1000);
    return () => window.clearInterval(id);
  }, [running]);

  const progress = Math.min(100, Math.max(0, (1 - remaining / seconds) * 100));

  return (
    <div className="card-soft overflow-hidden">
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 p-4">
        <div className="min-w-0">
          <p className="flex items-center gap-1.5 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
            <TimerIcon className="h-3.5 w-3.5 shrink-0" />
            <span className="truncate">{label ?? "Timer"}</span>
          </p>
          <p
            className={`font-display text-3xl font-semibold tabular-nums sm:text-4xl ${
              done ? "text-primary" : ""
            }`}
          >
            {format(remaining)}
          </p>
          {done ? (
            <p className="text-sm font-medium text-primary">Klart – kolla i ugnen! 🔔</p>
          ) : null}
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <button
            onClick={() => setRunning((r) => !r)}
            aria-label={running ? "Pausa timer" : "Starta timer"}
            className="press grid h-12 w-12 place-items-center rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
          >
            {running ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
          </button>
          <button
            onClick={() => {
              setRunning(false);
              setRemaining(seconds);
              setDone(false);
            }}
            aria-label="Nollställ timer"
            className="press grid h-12 w-12 place-items-center rounded-full border border-border bg-card hover:bg-secondary"
          >
            <RotateCcw className="h-5 w-5" />
          </button>
        </div>
      </div>
      <div className="h-1.5 w-full bg-secondary">
        <div
          className="h-full bg-primary transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
