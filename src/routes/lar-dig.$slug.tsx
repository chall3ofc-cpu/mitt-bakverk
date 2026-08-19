import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, Check, X } from "lucide-react";
import { useState } from "react";

import { AppShell } from "@/components/AppShell";
import { getLesson } from "@/lib/lessons";
import { actions } from "@/lib/store";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/lar-dig/$slug")({
  head: ({ params }) => {
    const lesson = getLesson(params.slug);
    const title = lesson ? lesson.title : "Lektion";
    const description = lesson ? lesson.intro : "Lektionen kunde inte hittas.";
    return {
      meta: [
        { title: `${title} | Bakskolan` },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  component: LessonPage,
});

function LessonPage() {
  const { slug } = Route.useParams();
  const lesson = getLesson(slug);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [finished, setFinished] = useState(false);

  if (!lesson) {
    return (
      <AppShell>
        <div className="py-16 text-center">
          <h1 className="text-2xl font-semibold">Lektionen finns inte</h1>
          <Link
            to="/lar-dig"
            className="press mt-5 inline-flex rounded-full bg-primary px-5 py-3 font-semibold text-primary-foreground"
          >
            Till alla lektioner
          </Link>
        </div>
      </AppShell>
    );
  }

  const correctCount = lesson.quiz.filter((q, i) => answers[i] === q.correct).length;
  const allAnswered = Object.keys(answers).length === lesson.quiz.length;

  return (
    <AppShell>
      <Link
        to="/lar-dig"
        className="press inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" /> Alla lektioner
      </Link>

      <div className="mx-auto mt-4 w-full max-w-3xl">
        <article className="card-soft rise p-5 sm:p-7">
          <span className="text-4xl">{lesson.emoji}</span>
          <h1 className="mt-2 text-2xl font-semibold sm:text-3xl">{lesson.title}</h1>
          <p className="mt-3 text-base leading-relaxed">{lesson.intro}</p>
          <ul className="mt-5 grid gap-2.5">
            {lesson.points.map((point) => (
              <li
                key={point}
                className="flex gap-2.5 rounded-xl bg-secondary/60 p-3.5 text-sm leading-relaxed"
              >
                <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                {point}
              </li>
            ))}
          </ul>
        </article>

        <section className="mt-6">
          <h2 className="text-xl font-semibold sm:text-2xl">Quiz</h2>
          <ul className="mt-3 grid gap-4">
            {lesson.quiz.map((q, qi) => {
              const answer = answers[qi];
              const answered = answer !== undefined;
              return (
                <li key={q.question} className="card-soft p-4 sm:p-5">
                  <p className="font-medium">
                    {qi + 1}. {q.question}
                  </p>
                  <ul className="mt-3 grid gap-2">
                    {q.options.map((option, oi) => {
                      const isChosen = answer === oi;
                      const isCorrect = oi === q.correct;
                      return (
                        <li key={option}>
                          <button
                            disabled={answered}
                            onClick={() => setAnswers((a) => ({ ...a, [qi]: oi }))}
                            className={cn(
                              "press flex w-full items-center justify-between gap-3 rounded-xl border px-4 py-3 text-left text-sm",
                              !answered && "border-border bg-background hover:bg-secondary",
                              answered && isCorrect && "border-sage bg-sage-soft",
                              answered &&
                                isChosen &&
                                !isCorrect &&
                                "border-destructive/60 bg-destructive/10",
                              answered && !isChosen && !isCorrect && "border-border opacity-60",
                            )}
                          >
                            <span className="min-w-0">{option}</span>
                            {answered && isCorrect ? (
                              <Check className="h-4 w-4 shrink-0 text-sage" />
                            ) : null}
                            {answered && isChosen && !isCorrect ? (
                              <X className="h-4 w-4 shrink-0 text-destructive" />
                            ) : null}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                  {answered ? (
                    <p className="mt-3 rounded-xl bg-secondary/60 p-3 text-sm">
                      {answer === q.correct ? "✅ Helt rätt! " : "❌ Inte riktigt. "}
                      {q.explanation}
                    </p>
                  ) : null}
                </li>
              );
            })}
          </ul>

          {allAnswered && !finished ? (
            <button
              onClick={() => {
                actions.saveQuiz(lesson.slug, correctCount, lesson.quiz.length);
                setFinished(true);
              }}
              className="press mt-5 inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-4 font-semibold text-primary-foreground shadow-lift"
            >
              Spara resultat
            </button>
          ) : null}

          {finished ? (
            <div className="card-soft rise mt-5 bg-sage-soft/60 p-5 text-center">
              <p className="text-3xl">{correctCount === lesson.quiz.length ? "💯" : "👏"}</p>
              <p className="mt-1 font-display text-xl font-semibold">
                {correctCount} av {lesson.quiz.length} rätt
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Resultatet är sparat i din profil.
              </p>
              <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:justify-center">
                <Link
                  to="/lar-dig"
                  className="press inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
                >
                  Nästa lektion
                </Link>
                <Link
                  to="/baka"
                  className="press inline-flex items-center justify-center rounded-full border border-border bg-card px-5 py-3 text-sm font-medium"
                >
                  Baka något
                </Link>
              </div>
            </div>
          ) : null}
        </section>
      </div>
    </AppShell>
  );
}
