import { Link, createFileRoute } from "@tanstack/react-router";
import { Check, Clock, Plus, Search, Sparkles, Trash2, X } from "lucide-react";
import { useMemo, useState } from "react";

import { AppShell } from "@/components/AppShell";
import { PageHeader } from "@/components/PageHeader";
import {
  COMMON_INGREDIENTS,
  matchRecipes,
  missingLabel,
  type Match,
} from "@/lib/recipes";
import { actions, useStore } from "@/lib/store";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/baka/")({
  head: () => ({
    meta: [
      { title: "Baka – hitta bakverk av det du har hemma | Bakskolan" },
      {
        name: "description",
        content:
          "Lägg till dina ingredienser och se direkt vilka bakverk du kan baka nu och vad du saknar.",
      },
      { property: "og:title", content: "Baka – hitta bakverk av det du har hemma" },
      {
        property: "og:description",
        content:
          "Matcha ditt skafferi mot tio svenska klassiker och börja baka steg för steg.",
      },
    ],
  }),
  component: BakaPage,
});

function BakaPage() {
  const state = useStore();
  const [query, setQuery] = useState("");
  const [matches, setMatches] = useState<Match[] | null>(null);

  const suggestions = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return COMMON_INGREDIENTS.filter(
      (i) => i.includes(q) && !state.pantry.includes(i),
    ).slice(0, 6);
  }, [query, state.pantry]);

  function add(name: string) {
    actions.addIngredient(name);
    setQuery("");
    setMatches(null);
  }

  return (
    <AppShell>
      <PageHeader
        eyebrow="Baka"
        title="Vad har du hemma?"
        description="Lägg till ingredienser – vi matchar dem mot recepten och visar vad du kan baka nu."
      />

      <section className="card-soft p-4 sm:p-6">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            add(query);
          }}
          className="grid grid-cols-[minmax(0,1fr)_auto] gap-2"
        >
          <label className="relative min-w-0">
            <span className="sr-only">Sök ingrediens</span>
            <Search className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Sök ingrediens, t.ex. mjöl"
              className="w-full rounded-full border border-input bg-background py-3 pr-4 pl-9 outline-none focus:border-primary focus:ring-2 focus:ring-ring/30"
            />
          </label>
          <button
            type="submit"
            className="press inline-flex shrink-0 items-center gap-1.5 rounded-full bg-secondary px-4 py-3 text-sm font-semibold hover:bg-primary-soft"
          >
            <Plus className="h-4 w-4" />
            <span className="hidden sm:inline">Lägg till</span>
          </button>
        </form>

        {suggestions.length > 0 ? (
          <ul className="mt-3 flex flex-wrap gap-2">
            {suggestions.map((s) => (
              <li key={s}>
                <button
                  onClick={() => add(s)}
                  className="press rounded-full border border-dashed border-primary/50 px-3 py-1.5 text-sm text-primary"
                >
                  + {s}
                </button>
              </li>
            ))}
          </ul>
        ) : null}

        <p className="mt-5 text-sm font-semibold">Vanliga ingredienser</p>
        <ul className="mt-2 flex flex-wrap gap-2">
          {COMMON_INGREDIENTS.map((ing) => {
            const active = state.pantry.includes(ing);
            return (
              <li key={ing}>
                <button
                  onClick={() => {
                    actions.toggleIngredient(ing);
                    setMatches(null);
                  }}
                  aria-pressed={active}
                  className={cn(
                    "press rounded-full border px-3 py-1.5 text-sm",
                    active
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-background hover:bg-secondary",
                  )}
                >
                  {active ? <Check className="mr-1 inline h-3.5 w-3.5" /> : null}
                  {ing}
                </button>
              </li>
            );
          })}
        </ul>

        {state.pantry.length > 0 ? (
          <div className="mt-5 border-t border-border pt-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="text-sm font-semibold">
                Ditt skafferi ({state.pantry.length})
              </p>
              <button
                onClick={() => {
                  actions.clearPantry();
                  setMatches(null);
                }}
                className="press inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-destructive"
              >
                <Trash2 className="h-3.5 w-3.5" /> Rensa
              </button>
            </div>
            <ul className="mt-2 flex flex-wrap gap-2">
              {state.pantry.map((ing) => (
                <li key={ing}>
                  <button
                    onClick={() => {
                      actions.removeIngredient(ing);
                      setMatches(null);
                    }}
                    className="press inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1.5 text-sm text-accent-foreground"
                  >
                    {ing}
                    <X className="h-3.5 w-3.5" />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        <button
          onClick={() => setMatches(matchRecipes(state.pantry))}
          className="press mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-base font-semibold text-primary-foreground shadow-lift hover:bg-primary/90 sm:w-auto"
        >
          <Sparkles className="h-5 w-5" />
          Hitta bakverk
        </button>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold sm:text-2xl">
          {matches ? "Det här kan du baka" : "Alla bakverk"}
        </h2>
        <ul className="mt-3 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {(matches ?? matchRecipes(state.pantry)).map((match) => (
            <li key={match.recipe.slug}>
              <RecipeCard match={match} />
            </li>
          ))}
        </ul>
      </section>
    </AppShell>
  );
}

function RecipeCard({ match }: { match: Match }) {
  const { recipe, missing } = match;
  const complete = missing.length === 0;

  return (
    <Link
      to="/baka/$slug"
      params={{ slug: recipe.slug }}
      className="press card-soft flex h-full flex-col p-4 hover:shadow-lift"
    >
      <div className="flex items-start justify-between gap-3">
        <span className="text-3xl">{recipe.emoji}</span>
        <span
          className={cn(
            "shrink-0 rounded-full px-2.5 py-1 text-xs font-semibold",
            complete
              ? "bg-sage text-sage-foreground"
              : missing.length === 1
                ? "bg-primary-soft text-accent-foreground"
                : "bg-muted text-muted-foreground",
          )}
        >
          {missingLabel(missing.length)}
        </span>
      </div>
      <h3 className="mt-2 font-display text-lg font-semibold">{recipe.name}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{recipe.description}</p>
      {missing.length > 0 && missing.length <= 3 ? (
        <p className="mt-2 text-xs text-muted-foreground">
          Saknas: {missing.map((m) => m.key).join(", ")}
        </p>
      ) : null}
      <div className="mt-auto flex items-center gap-3 pt-3 text-xs text-muted-foreground">
        <span className="inline-flex items-center gap-1">
          <Clock className="h-3.5 w-3.5" /> {recipe.minutes} min
        </span>
        <span className="rounded-full bg-secondary px-2 py-0.5 font-medium">
          {recipe.difficulty}
        </span>
        <span>{recipe.steps.length} steg</span>
      </div>
    </Link>
  );
}
