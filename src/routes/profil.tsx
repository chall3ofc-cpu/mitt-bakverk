import { createFileRoute } from "@tanstack/react-router";
import { Lock } from "lucide-react";
import { useState } from "react";

import { AppShell } from "@/components/AppShell";
import { LogoMark } from "@/components/Logo";
import { PageHeader } from "@/components/PageHeader";
import { actions, getAchievements, getStats, useStore } from "@/lib/store";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/profil")({
  head: () => ({
    meta: [
      { title: "Profil – nivå, statistik och achievements | Bakskolan" },
      {
        name: "description",
        content:
          "Se din nivå, dina bakningar, favoritbakverk, quizresultat och achievements – och ändra dina inställningar.",
      },
      { property: "og:title", content: "Profil – nivå, statistik och achievements" },
      {
        property: "og:description",
        content: "Följ din utveckling som bagare i Bakskolan.",
      },
    ],
  }),
  component: ProfilePage,
});

function ProfilePage() {
  const state = useStore();
  const stats = getStats(state);
  const achievements = getAchievements(state);
  const [confirmReset, setConfirmReset] = useState(false);

  return (
    <AppShell>
      <PageHeader eyebrow="Profil" title="Din bakresa" />

      <section className="card-soft relative overflow-hidden p-5 sm:p-7">
        <div className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-4">
          <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-primary-soft sm:h-20 sm:w-20">
            <LogoMark className="h-10 w-10 sm:h-12 sm:w-12" />
          </span>
          <div className="min-w-0">
            <h2 className="truncate font-display text-xl font-semibold sm:text-2xl">
              {state.settings.name}
            </h2>
            <p className="text-sm text-muted-foreground">
              Nivå {stats.level} · {stats.title}
            </p>
          </div>
        </div>

        <div className="mt-5">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>Nivå {stats.level}</span>
            <span>{stats.levelProgress}/100 XP</span>
          </div>
          <div className="mt-1.5 h-2.5 w-full overflow-hidden rounded-full bg-secondary">
            <div
              className="h-full rounded-full bg-primary transition-all duration-700"
              style={{ width: `${stats.levelProgress}%` }}
            />
          </div>
        </div>
      </section>

      <section className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
        <Stat label="Bakningar" value={String(stats.bakes)} />
        <Stat label="Favorit" value={stats.favorite} />
        <Stat
          label="Quiz"
          value={stats.quizTotal ? `${stats.quizCorrect}/${stats.quizTotal}` : "–"}
        />
        <Stat
          label="Snittbetyg"
          value={stats.avgRating ? stats.avgRating.toFixed(1) : "–"}
        />
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold sm:text-2xl">Achievements</h2>
        <ul className="mt-3 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {achievements.map((a) => (
            <li
              key={a.id}
              className={cn(
                "card-soft grid grid-cols-[auto_minmax(0,1fr)] items-center gap-3 p-4",
                !a.unlocked && "opacity-60",
              )}
            >
              <span
                className={cn(
                  "grid h-11 w-11 shrink-0 place-items-center rounded-xl text-xl",
                  a.unlocked ? "bg-sage-soft" : "bg-muted",
                )}
              >
                {a.unlocked ? a.emoji : <Lock className="h-4 w-4 text-muted-foreground" />}
              </span>
              <div className="min-w-0">
                <p className="truncate font-medium">{a.title}</p>
                <p className="text-xs text-muted-foreground">{a.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-8 max-w-2xl">
        <h2 className="text-xl font-semibold sm:text-2xl">Inställningar</h2>
        <div className="card-soft mt-3 divide-y divide-border">
          <label className="block p-4">
            <span className="text-sm font-medium">Ditt namn</span>
            <input
              value={state.settings.name}
              onChange={(e) => actions.updateSettings({ name: e.target.value })}
              className="mt-2 w-full rounded-xl border border-input bg-background px-3.5 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-ring/30"
            />
          </label>

          <Toggle
            label="Varmluftsugn"
            description="Vi påminner om att sänka temperaturen ca 20°C."
            checked={state.settings.convection}
            onChange={(v) => actions.updateSettings({ convection: v })}
          />
          <Toggle
            label="Ljudsignal på timers"
            description="Piper när en timer är klar."
            checked={state.settings.sound}
            onChange={(v) => actions.updateSettings({ sound: v })}
          />
          <Toggle
            label="Visa bakproffs-tips"
            description="Extra tips i varje steg i bakläget."
            checked={state.settings.showTips}
            onChange={(v) => actions.updateSettings({ showTips: v })}
          />

          <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 p-4">
            <div className="min-w-0">
              <p className="text-sm font-medium">Måttenhet</p>
              <p className="text-xs text-muted-foreground">Visa mängder i dl eller gram.</p>
            </div>
            <div className="flex shrink-0 rounded-full bg-secondary p-1">
              {(["dl", "gram"] as const).map((unit) => (
                <button
                  key={unit}
                  onClick={() => actions.updateSettings({ metric: unit })}
                  className={cn(
                    "press rounded-full px-3.5 py-1.5 text-sm font-medium",
                    state.settings.metric === unit
                      ? "bg-card text-foreground shadow-soft"
                      : "text-muted-foreground",
                  )}
                >
                  {unit}
                </button>
              ))}
            </div>
          </div>

          <div className="p-4">
            {confirmReset ? (
              <div className="flex flex-wrap items-center gap-2">
                <p className="min-w-0 flex-1 text-sm text-muted-foreground">
                  Detta rensar skafferi, Bakbok, quiz och inställningar.
                </p>
                <button
                  onClick={() => {
                    actions.resetAll();
                    setConfirmReset(false);
                  }}
                  className="press rounded-full bg-destructive px-4 py-2.5 text-sm font-semibold text-destructive-foreground"
                >
                  Ja, rensa allt
                </button>
                <button
                  onClick={() => setConfirmReset(false)}
                  className="press rounded-full border border-border px-4 py-2.5 text-sm"
                >
                  Avbryt
                </button>
              </div>
            ) : (
              <button
                onClick={() => setConfirmReset(true)}
                className="press text-sm font-medium text-destructive hover:underline"
              >
                Rensa all min data
              </button>
            )}
          </div>
        </div>
      </section>
    </AppShell>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="card-soft px-3 py-3.5 text-center">
      <p className="truncate font-display text-lg font-semibold sm:text-2xl">{value}</p>
      <p className="mt-0.5 text-xs text-muted-foreground sm:text-sm">{label}</p>
    </div>
  );
}

function Toggle({
  label,
  description,
  checked,
  onChange,
}: {
  label: string;
  description: string;
  checked: boolean;
  onChange: (value: boolean) => void;
}) {
  return (
    <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 p-4">
      <div className="min-w-0">
        <p className="text-sm font-medium">{label}</p>
        <p className="text-xs text-muted-foreground">{description}</p>
      </div>
      <button
        role="switch"
        aria-checked={checked}
        aria-label={label}
        onClick={() => onChange(!checked)}
        className={cn(
          "press relative h-7 w-12 shrink-0 rounded-full transition-colors",
          checked ? "bg-sage" : "bg-muted",
        )}
      >
        <span
          className={cn(
            "absolute top-1 h-5 w-5 rounded-full bg-card shadow-soft transition-all",
            checked ? "left-6" : "left-1",
          )}
        />
      </button>
    </div>
  );
}
