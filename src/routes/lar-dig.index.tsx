import { Link, createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, Clock } from "lucide-react";

import { AppShell } from "@/components/AppShell";
import { PageHeader } from "@/components/PageHeader";
import { LESSONS } from "@/lib/lessons";
import { useStore } from "@/lib/store";

export const Route = createFileRoute("/lar-dig/")({
  head: () => ({
    meta: [
      { title: "Lär dig baka – korta lektioner och quiz | Bakskolan" },
      {
        name: "description",
        content:
          "Korta lektioner om ägg, smör, mjöl, socker, bakpulver, ugnstemperatur och blandning – med quiz och direkt feedback.",
      },
      { property: "og:title", content: "Lär dig baka – korta lektioner och quiz" },
      {
        property: "og:description",
        content: "Förstå varför bakning fungerar, två minuter i taget.",
      },
    ],
  }),
  component: LearnPage,
});

function LearnPage() {
  const { quiz } = useStore();

  return (
    <AppShell>
      <PageHeader
        eyebrow="Lär dig"
        title="Små lektioner, stor skillnad"
        description="Två minuter per lektion. Sedan ett kort quiz så att kunskapen fastnar."
      />

      <ul className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {LESSONS.map((lesson) => {
          const result = quiz[lesson.slug];
          return (
            <li key={lesson.slug}>
              <Link
                to="/lar-dig/$slug"
                params={{ slug: lesson.slug }}
                className="press card-soft flex h-full flex-col p-5 hover:shadow-lift"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="text-3xl">{lesson.emoji}</span>
                  {result ? (
                    <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-sage-soft px-2.5 py-1 text-xs font-semibold text-sage">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                      {result.correct}/{result.total}
                    </span>
                  ) : null}
                </div>
                <h2 className="mt-2 font-display text-lg font-semibold">
                  {lesson.title}
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">{lesson.intro}</p>
                <span className="mt-auto inline-flex items-center gap-1.5 pt-3 text-xs text-muted-foreground">
                  <Clock className="h-3.5 w-3.5" /> {lesson.minutes} min ·{" "}
                  {lesson.quiz.length} frågor
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </AppShell>
  );
}
