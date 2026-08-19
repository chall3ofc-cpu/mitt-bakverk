import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, BookOpen, ChefHat, Clock, Sparkles, Star } from "lucide-react";

import { AppShell } from "@/components/AppShell";
import { LogoMark } from "@/components/Logo";
import { lessonOfTheDay } from "@/lib/lessons";
import { RECIPES } from "@/lib/recipes";
import { formatDate, getStats, useStore } from "@/lib/store";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bakskolan – din bakassistent i köket" },
      {
        name: "description",
        content:
          "Ange vad du har hemma, hitta bakverk du kan baka nu, följ steg-för-steg med timers och spara resultatet i din Bakbok.",
      },
      { property: "og:title", content: "Bakskolan – din bakassistent i köket" },
      {
        property: "og:description",
        content:
          "Hitta bakverk utifrån dina ingredienser, baka steg för steg och samla dina bakningar i Bakboken.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const state = useStore();
  const stats = getStats(state);
  const lesson = lessonOfTheDay();
  const last = state.bakbok[state.bakbok.length - 1];
  const recommended = RECIPES.slice(0, 3);

  return (
    <AppShell>
      <section className="rise card-soft relative overflow-hidden p-5 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -top-16 -right-12 h-52 w-52 rounded-full bg-primary-soft/70 blur-2xl" />
        <div className="relative grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
          <div className="min-w-0">
            <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">
              Hej {state.settings.name}
            </p>
            <h1 className="mt-2 text-3xl leading-tight font-semibold sm:text-4xl lg:text-5xl">
              Vad vill du göra idag?
            </h1>
            <p className="mt-3 max-w-md text-sm text-muted-foreground sm:text-base">
              Berätta vad du har hemma – Bakskolan hittar bakverket, guidar dig genom
              varje steg och sparar resultatet i din Bakbok.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/baka"
                className="press inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground shadow-lift hover:bg-primary/90"
              >
                <ChefHat className="h-5 w-5" />
                Baka något
              </Link>
              <Link
                to="/lar-dig"
                className="press inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-base font-medium hover:bg-secondary"
              >
                <Sparkles className="h-5 w-5 text-sage" />
                Lär dig något nytt
              </Link>
            </div>
          </div>
          <LogoMark
            eager
            className="hidden h-40 w-40 justify-self-end lg:block xl:h-48 xl:w-48"
          />
        </div>
      </section>

      <section className="mt-5 grid grid-cols-2 gap-3 sm:mt-6 sm:grid-cols-4 sm:gap-4">
        <StatTile label="Bakningar" value={String(stats.bakes)} />
        <StatTile label="Nivå" value={String(stats.level)} />
        <StatTile label="Quiz klarade" value={String(stats.quizzes)} />
        <StatTile
          label="Snittbetyg"
          value={stats.avgRating ? stats.avgRating.toFixed(1) : "–"}
        />
      </section>

      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        <section className="lg:col-span-2">
          <div className="mb-3 flex items-end justify-between gap-3">
            <h2 className="text-xl font-semibold sm:text-2xl">Rekommenderat för dig</h2>
            <Link
              to="/baka"
              className="shrink-0 text-sm font-medium text-primary hover:underline"
            >
              Visa alla
            </Link>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {recommended.map((recipe) => (
              <li key={recipe.slug}>
                <Link
                  to="/baka/$slug"
                  params={{ slug: recipe.slug }}
                  className="press card-soft flex h-full flex-col gap-2 p-4 hover:shadow-lift"
                >
                  <span className="text-3xl">{recipe.emoji}</span>
                  <span className="font-display text-lg font-semibold">
                    {recipe.name}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {recipe.description}
                  </span>
                  <span className="mt-auto flex items-center gap-3 pt-2 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" /> {recipe.minutes} min
                    </span>
                    <span className="rounded-full bg-sage-soft px-2 py-0.5 font-medium text-sage">
                      {recipe.difficulty}
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <div className="flex flex-col gap-5">
          <section className="card-soft p-4 sm:p-5">
            <h2 className="flex items-center gap-2 text-base font-semibold">
              <BookOpen className="h-4 w-4 text-primary" /> Senaste bakning
            </h2>
            {last ? (
              <Link
                to="/bakbok"
                className="press mt-3 flex items-center gap-3 rounded-xl bg-secondary/70 p-3 hover:bg-secondary"
              >
                {last.photo ? (
                  <img
                    src={last.photo}
                    alt={last.name}
                    loading="lazy"
                    className="h-14 w-14 shrink-0 rounded-lg object-cover"
                  />
                ) : (
                  <span className="grid h-14 w-14 shrink-0 place-items-center rounded-lg bg-card text-2xl">
                    {last.emoji}
                  </span>
                )}
                <span className="min-w-0">
                  <span className="block truncate font-medium">{last.name}</span>
                  <span className="block text-xs text-muted-foreground">
                    {formatDate(last.date)}
                  </span>
                  <span className="mt-0.5 flex text-primary">
                    {Array.from({ length: 5 }, (_, i) => (
                      <Star
                        key={i}
                        className={
                          i < last.rating ? "h-3.5 w-3.5 fill-current" : "h-3.5 w-3.5"
                        }
                      />
                    ))}
                  </span>
                </span>
              </Link>
            ) : (
              <p className="mt-3 text-sm text-muted-foreground">
                Du har inte sparat någon bakning än. Din första sida i Bakboken väntar!
              </p>
            )}
          </section>

          <section className="card-soft bg-sage-soft/60 p-4 sm:p-5">
            <h2 className="text-base font-semibold">Dagens lilla lektion</h2>
            <p className="mt-2 text-2xl">{lesson.emoji}</p>
            <p className="font-display text-lg font-semibold">{lesson.title}</p>
            <p className="mt-1 line-clamp-3 text-sm text-muted-foreground">
              {lesson.intro}
            </p>
            <Link
              to="/lar-dig/$slug"
              params={{ slug: lesson.slug }}
              className="press mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-sage hover:gap-2.5"
            >
              Läs lektionen <ArrowRight className="h-4 w-4" />
            </Link>
          </section>
        </div>
      </div>
    </AppShell>
  );
}

function StatTile({ label, value }: { label: string; value: string }) {
  return (
    <div className="card-soft px-3 py-3.5 text-center sm:px-4">
      <p className="font-display text-2xl font-semibold sm:text-3xl">{value}</p>
      <p className="mt-0.5 text-xs text-muted-foreground sm:text-sm">{label}</p>
    </div>
  );
}
