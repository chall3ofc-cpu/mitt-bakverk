import { Link, createFileRoute, useNavigate } from "@tanstack/react-router";
import {
  ArrowLeft,
  Camera,
  Check,
  ChefHat,
  Clock,
  Lightbulb,
  Star,
  X,
} from "lucide-react";
import { useRef, useState } from "react";

import { LogoMark } from "@/components/Logo";
import { Timer } from "@/components/Timer";
import { fileToCompressedDataUrl } from "@/lib/photo";
import { canonical, getRecipe } from "@/lib/recipes";
import { actions, useStore } from "@/lib/store";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/baka/$slug")({
  head: ({ params }) => {
    const recipe = getRecipe(params.slug);
    const title = recipe ? `${recipe.name} – baka steg för steg` : "Recept";
    const description = recipe
      ? `${recipe.description} ${recipe.minutes} minuter, ${recipe.difficulty.toLowerCase()} nivå.`
      : "Receptet kunde inte hittas.";
    return {
      meta: [
        { title: `${title} | Bakskolan` },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  component: RecipePage,
});

type Phase = "overview" | "baking" | "done" | "saved";

function RecipePage() {
  const { slug } = Route.useParams();
  const recipe = getRecipe(slug);
  const state = useStore();
  const navigate = useNavigate();

  const [phase, setPhase] = useState<Phase>("overview");
  const [stepIndex, setStepIndex] = useState(0);
  const [rating, setRating] = useState(5);
  const [note, setNote] = useState("");
  const [photo, setPhoto] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  if (!recipe) {
    return (
      <div className="mx-auto max-w-md px-4 py-20 text-center">
        <h1 className="text-2xl font-semibold">Receptet finns inte</h1>
        <Link
          to="/baka"
          className="press mt-6 inline-flex rounded-full bg-primary px-5 py-3 font-semibold text-primary-foreground"
        >
          Tillbaka till Baka
        </Link>
      </div>
    );
  }

  const have = new Set(state.pantry.map(canonical));
  const step = recipe.steps[stepIndex]!;
  const progress = ((stepIndex + (phase === "done" ? 1 : 0)) / recipe.steps.length) * 100;

  /* ---------- Översikt ---------- */
  if (phase === "overview") {
    return (
      <div className="min-h-screen bg-background pb-16">
        <div className="mx-auto w-full max-w-3xl px-4 py-5 sm:px-6 sm:py-8">
          <Link
            to="/baka"
            className="press inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" /> Alla bakverk
          </Link>

          <header className="card-soft rise mt-4 p-5 sm:p-7">
            <span className="text-4xl sm:text-5xl">{recipe.emoji}</span>
            <h1 className="mt-2 text-3xl font-semibold sm:text-4xl">{recipe.name}</h1>
            <p className="mt-2 text-sm text-muted-foreground sm:text-base">
              {recipe.description}
            </p>
            <ul className="mt-4 flex flex-wrap gap-2 text-sm">
              <li className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1.5">
                <Clock className="h-4 w-4" /> {recipe.minutes} min
              </li>
              <li className="rounded-full bg-sage-soft px-3 py-1.5 font-medium text-sage">
                {recipe.difficulty}
              </li>
              <li className="rounded-full bg-secondary px-3 py-1.5">{recipe.portions}</li>
              <li className="rounded-full bg-secondary px-3 py-1.5">
                {recipe.steps.length} steg
              </li>
            </ul>
          </header>

          <section className="card-soft mt-5 p-5 sm:p-7">
            <h2 className="text-xl font-semibold">Ingredienser</h2>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {recipe.ingredients.map((ing) => {
                const owned = have.has(canonical(ing.key));
                return (
                  <li
                    key={ing.key}
                    className="flex items-center gap-2.5 rounded-xl bg-secondary/60 px-3 py-2.5"
                  >
                    <span
                      className={cn(
                        "grid h-6 w-6 shrink-0 place-items-center rounded-full",
                        owned
                          ? "bg-sage text-sage-foreground"
                          : "bg-muted text-muted-foreground",
                      )}
                    >
                      {owned ? <Check className="h-3.5 w-3.5" /> : <X className="h-3.5 w-3.5" />}
                    </span>
                    <span className="min-w-0 text-sm">{ing.amount}</span>
                  </li>
                );
              })}
            </ul>
          </section>

          <button
            onClick={() => {
              setPhase("baking");
              setStepIndex(0);
            }}
            className="press mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-base font-semibold text-primary-foreground shadow-lift hover:bg-primary/90"
          >
            <ChefHat className="h-5 w-5" /> Börja baka
          </button>
        </div>
      </div>
    );
  }

  /* ---------- Bakläge ---------- */
  if (phase === "baking") {
    return (
      <div className="flex min-h-screen flex-col bg-background">
        <header className="sticky top-0 z-30 border-b border-border bg-background/95 backdrop-blur">
          <div className="mx-auto grid w-full max-w-3xl grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 px-4 py-3 sm:px-6">
            <button
              onClick={() =>
                stepIndex === 0 ? setPhase("overview") : setStepIndex((i) => i - 1)
              }
              aria-label="Föregående steg"
              className="press grid h-10 w-10 place-items-center rounded-full border border-border bg-card"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <div className="min-w-0 text-center">
              <p className="truncate text-sm font-semibold">{recipe.name}</p>
              <p className="text-xs text-muted-foreground">
                Steg {stepIndex + 1} av {recipe.steps.length}
              </p>
            </div>
            <LogoMark className="h-9 w-9" />
          </div>
          <div className="h-1.5 w-full bg-secondary">
            <div
              className="h-full rounded-r-full bg-primary transition-all duration-500"
              style={{ width: `${Math.max(6, progress)}%` }}
            />
          </div>
        </header>

        <div
          key={stepIndex}
          className="rise mx-auto w-full max-w-3xl flex-1 px-4 py-6 sm:px-6 sm:py-10"
        >
          <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">
            Steg {stepIndex + 1}
          </p>
          <h1 className="mt-2 text-2xl leading-tight font-semibold sm:text-4xl">
            {step.title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed sm:text-xl">{step.text}</p>

          {step.timerSec ? (
            <div className="mt-6">
              <Timer seconds={step.timerSec} label={step.title} />
            </div>
          ) : null}

          {step.why ? (
            <div className="card-soft mt-5 bg-sage-soft/60 p-4">
              <p className="text-sm font-semibold">💡 Varför?</p>
              <p className="mt-1 text-sm leading-relaxed">{step.why}</p>
            </div>
          ) : null}

          {step.tip && state.settings.showTips ? (
            <div className="card-soft mt-3 bg-accent/70 p-4">
              <p className="flex items-center gap-1.5 text-sm font-semibold text-accent-foreground">
                <Lightbulb className="h-4 w-4" /> 👨‍🍳 Bakproffs-tipset
              </p>
              <p className="mt-1 text-sm leading-relaxed text-accent-foreground">
                {step.tip.replace("👨‍🍳 ", "")}
              </p>
            </div>
          ) : null}
        </div>

        <div className="safe-bottom sticky bottom-0 border-t border-border bg-card/95 pt-3 backdrop-blur">
          <div className="mx-auto w-full max-w-3xl px-4 sm:px-6">
            <button
              onClick={() => {
                if (stepIndex + 1 < recipe.steps.length) {
                  setStepIndex((i) => i + 1);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                } else {
                  setPhase("done");
                }
              }}
              className="press inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-base font-semibold text-primary-foreground shadow-lift hover:bg-primary/90"
            >
              {stepIndex + 1 < recipe.steps.length ? "Jag är klar →" : "Sista steget klart 🎉"}
            </button>
          </div>
        </div>
      </div>
    );
  }

  /* ---------- Sparad ---------- */
  if (phase === "saved") {
    return (
      <div className="mx-auto flex min-h-screen max-w-md flex-col items-center justify-center px-4 text-center">
        <LogoMark className="h-16 w-16" />
        <h1 className="mt-4 text-3xl font-semibold">Sparat i din Bakbok!</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          {recipe.name} har fått en egen sida med bild, betyg och anteckning.
        </p>
        <div className="mt-7 flex w-full flex-col gap-3">
          <Link
            to="/bakbok"
            className="press inline-flex items-center justify-center rounded-full bg-primary px-6 py-3.5 font-semibold text-primary-foreground shadow-lift"
          >
            Öppna Bakboken
          </Link>
          <button
            onClick={() => navigate({ to: "/baka" })}
            className="press inline-flex items-center justify-center rounded-full border border-border bg-card px-6 py-3.5 font-medium hover:bg-secondary"
          >
            Baka något mer
          </button>
        </div>
      </div>
    );
  }

  /* ---------- Klar: betyg, anteckning, bild ---------- */
  return (
    <div className="min-h-screen bg-background">
      <div className="rise mx-auto w-full max-w-2xl px-4 py-8 sm:px-6 sm:py-12">
        <div className="text-center">
          <span className="text-5xl">🎉</span>
          <h1 className="mt-3 text-3xl font-semibold sm:text-4xl">Du klarade det!</h1>
          <p className="mt-2 text-sm text-muted-foreground sm:text-base">
            {recipe.name} är klar. Sätt betyg, skriv en anteckning och ta en bild till
            Bakboken.
          </p>
        </div>

        <section className="card-soft mt-6 p-5 sm:p-7">
          <h2 className="text-base font-semibold">Hur blev det?</h2>
          <div className="mt-3 flex gap-1.5">
            {[1, 2, 3, 4, 5].map((n) => (
              <button
                key={n}
                onClick={() => setRating(n)}
                aria-label={`${n} av 5`}
                className="press p-1"
              >
                <Star
                  className={cn(
                    "h-8 w-8 text-primary sm:h-9 sm:w-9",
                    n <= rating ? "fill-current" : "opacity-40",
                  )}
                />
              </button>
            ))}
          </div>

          <label className="mt-6 block">
            <span className="text-base font-semibold">Din anteckning</span>
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              rows={4}
              placeholder="T.ex. gräddade 2 min kortare – perfekt kladd!"
              className="mt-2 w-full rounded-2xl border border-input bg-background p-3.5 outline-none focus:border-primary focus:ring-2 focus:ring-ring/30"
            />
          </label>

          <div className="mt-4">
            <p className="text-base font-semibold">Bild på resultatet</p>
            <input
              ref={fileRef}
              type="file"
              accept="image/*"
              capture="environment"
              className="hidden"
              onChange={async (e) => {
                const file = e.target.files?.[0];
                if (file) setPhoto(await fileToCompressedDataUrl(file));
              }}
            />
            {photo ? (
              <div className="mt-2">
                <img
                  src={photo}
                  alt="Ditt bakverk"
                  className="max-h-72 w-full rounded-2xl object-cover"
                />
                <button
                  onClick={() => setPhoto(null)}
                  className="press mt-2 text-sm text-muted-foreground hover:text-destructive"
                >
                  Ta bort bild
                </button>
              </div>
            ) : (
              <button
                onClick={() => fileRef.current?.click()}
                className="press mt-2 flex w-full flex-col items-center gap-2 rounded-2xl border-2 border-dashed border-border bg-secondary/40 px-4 py-8 text-sm text-muted-foreground hover:border-primary hover:text-foreground"
              >
                <Camera className="h-7 w-7" />
                Ta eller ladda upp en bild
              </button>
            )}
          </div>
        </section>

        <button
          onClick={() => {
            actions.addBake({
              recipeSlug: recipe.slug,
              name: recipe.name,
              emoji: recipe.emoji,
              rating,
              note,
              photo,
            });
            setPhase("saved");
          }}
          className="press mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-base font-semibold text-primary-foreground shadow-lift hover:bg-primary/90"
        >
          Spara i Bakboken
        </button>
      </div>
    </div>
  );
}
