import { useEffect, useState, useSyncExternalStore } from "react";

export type BakeEntry = {
  id: string;
  recipeSlug: string;
  name: string;
  emoji: string;
  date: string; // ISO
  rating: number; // 1-5
  note: string;
  photo: string | null; // dataURL
};

export type QuizResult = {
  correct: number;
  total: number;
  date: string;
};

export type Settings = {
  name: string;
  convection: boolean;
  sound: boolean;
  showTips: boolean;
  metric: "dl" | "gram";
};

export type State = {
  pantry: string[];
  bakbok: BakeEntry[];
  quiz: Record<string, QuizResult>;
  settings: Settings;
};

const STORAGE_KEY = "bakskolan:state:v1";

const DEFAULT_STATE: State = {
  pantry: [],
  bakbok: [],
  quiz: {},
  settings: {
    name: "Bagare",
    convection: false,
    sound: true,
    showTips: true,
    metric: "dl",
  },
};

let state: State = DEFAULT_STATE;
let loaded = false;
const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((l) => l());
}

function persist() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    /* full eller blockerad localStorage – ignorera */
  }
}

function load() {
  if (loaded || typeof window === "undefined") return;
  loaded = true;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as Partial<State>;
      state = {
        ...DEFAULT_STATE,
        ...parsed,
        settings: { ...DEFAULT_STATE.settings, ...(parsed.settings ?? {}) },
      };
      emit();
    }
  } catch {
    /* trasig data – börja om */
  }
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getSnapshot() {
  return state;
}

export function setState(updater: (prev: State) => State) {
  state = updater(state);
  persist();
  emit();
}

/** Läser hela appens sparade tillstånd (localStorage). */
export function useStore(): State {
  const snapshot = useSyncExternalStore(subscribe, getSnapshot, () => DEFAULT_STATE);
  useEffect(() => {
    load();
  }, []);
  return snapshot;
}

/** True först efter att localStorage lästs in – används för att undvika hydration-glitch. */
export function useHydrated(): boolean {
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    load();
    setHydrated(true);
  }, []);
  return hydrated;
}

/* ---------- Actions ---------- */

export const actions = {
  addIngredient(name: string) {
    const clean = name.trim().toLowerCase();
    if (!clean) return;
    setState((s) =>
      s.pantry.includes(clean) ? s : { ...s, pantry: [...s.pantry, clean] },
    );
  },
  removeIngredient(name: string) {
    setState((s) => ({ ...s, pantry: s.pantry.filter((i) => i !== name) }));
  },
  toggleIngredient(name: string) {
    const clean = name.trim().toLowerCase();
    if (!clean) return;
    setState((s) => ({
      ...s,
      pantry: s.pantry.includes(clean)
        ? s.pantry.filter((i) => i !== clean)
        : [...s.pantry, clean],
    }));
  },
  clearPantry() {
    setState((s) => ({ ...s, pantry: [] }));
  },
  addBake(entry: Omit<BakeEntry, "id" | "date"> & { date?: string }) {
    const full: BakeEntry = {
      ...entry,
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      date: entry.date ?? new Date().toISOString(),
    };
    setState((s) => ({ ...s, bakbok: [...s.bakbok, full] }));
    return full;
  },
  removeBake(id: string) {
    setState((s) => ({ ...s, bakbok: s.bakbok.filter((b) => b.id !== id) }));
  },
  saveQuiz(slug: string, correct: number, total: number) {
    setState((s) => ({
      ...s,
      quiz: {
        ...s.quiz,
        [slug]: { correct, total, date: new Date().toISOString() },
      },
    }));
  },
  updateSettings(patch: Partial<Settings>) {
    setState((s) => ({ ...s, settings: { ...s.settings, ...patch } }));
  },
  resetAll() {
    state = DEFAULT_STATE;
    persist();
    emit();
  },
};

/* ---------- Derived ---------- */

export type Achievement = {
  id: string;
  title: string;
  description: string;
  emoji: string;
  unlocked: boolean;
};

export function getStats(state: State) {
  const bakes = state.bakbok.length;
  const quizzes = Object.keys(state.quiz).length;
  const quizCorrect = Object.values(state.quiz).reduce((a, q) => a + q.correct, 0);
  const quizTotal = Object.values(state.quiz).reduce((a, q) => a + q.total, 0);
  const ratings = state.bakbok.map((b) => b.rating).filter(Boolean);
  const avgRating = ratings.length
    ? ratings.reduce((a, b) => a + b, 0) / ratings.length
    : 0;

  const counts = new Map<string, number>();
  state.bakbok.forEach((b) => counts.set(b.name, (counts.get(b.name) ?? 0) + 1));
  let favorite = "–";
  let best = 0;
  counts.forEach((count, name) => {
    if (count > best) {
      best = count;
      favorite = name;
    }
  });

  const xp = bakes * 40 + quizCorrect * 10;
  const level = Math.max(1, Math.floor(xp / 100) + 1);
  const levelProgress = xp % 100;

  const titles = [
    "Nybörjare",
    "Hemmabagare",
    "Kakkonnässör",
    "Degmästare",
    "Bakproffs",
    "Bakskolans stolthet",
  ];

  return {
    bakes,
    quizzes,
    quizCorrect,
    quizTotal,
    avgRating,
    favorite,
    xp,
    level,
    levelProgress,
    title: titles[Math.min(level - 1, titles.length - 1)]!,
  };
}

export function getAchievements(state: State): Achievement[] {
  const stats = getStats(state);
  const uniqueRecipes = new Set(state.bakbok.map((b) => b.recipeSlug)).size;
  const withPhoto = state.bakbok.filter((b) => b.photo).length;
  const perfectQuiz = Object.values(state.quiz).some((q) => q.correct === q.total);

  return [
    {
      id: "first-bake",
      title: "Första bakningen",
      description: "Slutför din första bakning",
      emoji: "🎉",
      unlocked: stats.bakes >= 1,
    },
    {
      id: "three-bakes",
      title: "Bakhumör",
      description: "Slutför 3 bakningar",
      emoji: "🔥",
      unlocked: stats.bakes >= 3,
    },
    {
      id: "variety",
      title: "Nyfiken bagare",
      description: "Baka 3 olika recept",
      emoji: "🧭",
      unlocked: uniqueRecipes >= 3,
    },
    {
      id: "photographer",
      title: "Bakfotograf",
      description: "Spara en bakning med bild",
      emoji: "📸",
      unlocked: withPhoto >= 1,
    },
    {
      id: "student",
      title: "Flitig elev",
      description: "Klara 3 quiz",
      emoji: "📚",
      unlocked: stats.quizzes >= 3,
    },
    {
      id: "perfect",
      title: "Alla rätt",
      description: "Få full pott på ett quiz",
      emoji: "💯",
      unlocked: perfectQuiz,
    },
  ];
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("sv-SE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
