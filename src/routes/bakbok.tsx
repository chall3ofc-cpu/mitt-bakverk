import { Link, createFileRoute } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight, Star, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";

import { AppShell } from "@/components/AppShell";
import { LogoMark } from "@/components/Logo";
import { actions, formatDate, useStore, type BakeEntry } from "@/lib/store";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/bakbok")({
  head: () => ({
    meta: [
      { title: "Min Bakbok – dina sparade bakningar | Bakskolan" },
      {
        name: "description",
        content:
          "Bakboken samlar dina bakningar som sidor i en riktig bok – med bild, datum, betyg och egna anteckningar.",
      },
      { property: "og:title", content: "Min Bakbok – dina sparade bakningar" },
      {
        property: "og:description",
        content: "Bläddra i din personliga bakbok med bilder, betyg och anteckningar.",
      },
    ],
  }),
  component: BakbokPage,
});

function BakbokPage() {
  const { bakbok } = useStore();
  const [spread, setSpread] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const update = () => setSpread(window.innerWidth >= 768);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const perView = spread ? 2 : 1;
  const totalViews = Math.max(1, Math.ceil(bakbok.length / perView));
  const view = Math.min(index, totalViews - 1);
  const pages = bakbok.slice(view * perView, view * perView + perView);

  return (
    <AppShell>
      <div className="mb-6 flex flex-col items-center text-center">
        <LogoMark className="h-12 w-12" />
        <h1 className="mt-2 text-2xl font-semibold tracking-[0.2em] sm:text-3xl">
          MIN BAKBOK
        </h1>
        <p className="mt-1.5 text-sm text-muted-foreground">
          {bakbok.length === 0
            ? "Din bok är ännu tom"
            : `${bakbok.length} ${bakbok.length === 1 ? "bakning" : "bakningar"} sparade`}
        </p>
      </div>

      {bakbok.length === 0 ? (
        <div className="book-page mx-auto max-w-md rounded-3xl p-8 text-center shadow-book">
          <p className="text-4xl">📖</p>
          <h2 className="mt-3 font-display text-xl font-semibold">Sida 1 väntar</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Slutför en bakning och spara den – då blir den din första sida här.
          </p>
          <Link
            to="/baka"
            className="press mt-5 inline-flex rounded-full bg-primary px-5 py-3 font-semibold text-primary-foreground shadow-soft"
          >
            Börja baka
          </Link>
        </div>
      ) : (
        <>
          <div
            className={cn(
              "relative mx-auto w-full max-w-5xl rounded-3xl bg-paper-edge/60 p-2 shadow-book sm:p-3",
              spread ? "md:bg-paper-edge/70" : "",
            )}
          >
            <div className="grid gap-2 md:grid-cols-2 md:gap-0">
              {pages.map((entry, i) => (
                <BookPage
                  key={entry.id}
                  entry={entry}
                  pageNumber={view * perView + i + 1}
                  side={spread ? (i === 0 ? "left" : "right") : "single"}
                />
              ))}
              {spread && pages.length === 1 ? (
                <div className="book-page hidden rounded-r-2xl md:block" />
              ) : null}
            </div>
          </div>

          <div className="mx-auto mt-5 grid w-full max-w-5xl grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3">
            <button
              onClick={() => setIndex((v) => Math.max(0, v - 1))}
              disabled={view === 0}
              className="press inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2.5 text-sm font-medium disabled:opacity-40"
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="hidden sm:inline">Föregående</span>
            </button>
            <p className="text-center text-sm text-muted-foreground">
              {spread ? "Uppslag" : "Sida"} {view + 1} av {totalViews}
            </p>
            <button
              onClick={() => setIndex((v) => Math.min(totalViews - 1, v + 1))}
              disabled={view >= totalViews - 1}
              className="press inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2.5 text-sm font-medium disabled:opacity-40"
            >
              <span className="hidden sm:inline">Nästa</span>
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </>
      )}
    </AppShell>
  );
}

function BookPage({
  entry,
  pageNumber,
  side,
}: {
  entry: BakeEntry;
  pageNumber: number;
  side: "left" | "right" | "single";
}) {
  return (
    <article
      className={cn(
        "book-page rise flex flex-col rounded-2xl p-5 sm:p-7",
        side === "left" && "md:rounded-r-none md:border-r-0",
        side === "right" && "md:rounded-l-none",
      )}
    >
      {entry.photo ? (
        <img
          src={entry.photo}
          alt={entry.name}
          loading="lazy"
          className="aspect-[4/3] w-full rounded-xl object-cover shadow-soft"
        />
      ) : (
        <div className="grid aspect-[4/3] w-full place-items-center rounded-xl bg-secondary/70 text-5xl">
          {entry.emoji}
        </div>
      )}

      <h2 className="mt-4 font-display text-xl font-semibold sm:text-2xl">
        {entry.name}
      </h2>
      <p className="text-sm text-muted-foreground">{formatDate(entry.date)}</p>

      <div className="mt-2 flex items-center gap-1 text-primary">
        {Array.from({ length: 5 }, (_, i) => (
          <Star
            key={i}
            className={cn("h-4 w-4", i < entry.rating ? "fill-current" : "opacity-35")}
          />
        ))}
        <span className="ml-1 text-sm text-muted-foreground">{entry.rating}/5</span>
      </div>

      <p className="mt-3 min-h-16 border-l-2 border-primary/40 pl-3 text-sm leading-relaxed italic">
        {entry.note ? `”${entry.note}”` : "Ingen anteckning den här gången."}
      </p>

      <div className="mt-auto flex items-center justify-between gap-3 pt-5">
        <button
          onClick={() => actions.removeBake(entry.id)}
          className="press inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-destructive"
        >
          <Trash2 className="h-3.5 w-3.5" /> Ta bort sida
        </button>
        <span className="font-display text-sm text-muted-foreground">– {pageNumber} –</span>
      </div>
    </article>
  );
}
