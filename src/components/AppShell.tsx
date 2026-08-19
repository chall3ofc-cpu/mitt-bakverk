import { Link } from "@tanstack/react-router";
import { BookOpen, ChefHat, GraduationCap, Home, User } from "lucide-react";
import type { ReactNode } from "react";

import { Logo } from "@/components/Logo";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Hem", icon: Home },
  { to: "/lar-dig", label: "Lär dig", icon: GraduationCap },
  { to: "/baka", label: "Baka", icon: ChefHat, primary: true },
  { to: "/bakbok", label: "Bakbok", icon: BookOpen },
  { to: "/profil", label: "Profil", icon: User },
] as const;

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-md">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-3 sm:px-6">
          <Link to="/" className="min-w-0">
            <Logo size="sm" eager className="sm:hidden" />
            <Logo eager className="hidden sm:flex" />
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {links.map(({ to, label, icon: Icon, ...rest }) => {
              const primary = "primary" in rest && rest.primary;
              return (
                <Link
                  key={to}
                  to={to}
                  activeOptions={{ exact: to === "/" }}
                  className={cn(
                    "press flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium",
                    primary
                      ? "bg-primary text-primary-foreground shadow-soft hover:bg-primary/90"
                      : "text-muted-foreground hover:bg-secondary hover:text-foreground",
                  )}
                  activeProps={{
                    className: primary
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-foreground",
                  }}
                >
                  <Icon className="h-4 w-4 shrink-0" />
                  <span>{label}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl flex-1 px-4 pt-5 pb-28 sm:px-6 sm:pt-8 md:pb-12">
        {children}
      </main>

      <BottomNav />
    </div>
  );
}

function BottomNav() {
  return (
    <nav className="safe-bottom fixed inset-x-0 bottom-0 z-40 border-t border-border bg-card/95 pt-1.5 backdrop-blur-md md:hidden">
      <ul className="mx-auto grid max-w-md grid-cols-5 items-end px-1">
        {links.map(({ to, label, icon: Icon, ...rest }) => {
          const primary = "primary" in rest && rest.primary;

          if (primary) {
            return (
              <li key={to} className="flex justify-center">
                <Link
                  to={to}
                  className="press -mt-6 flex w-full max-w-[84px] flex-col items-center gap-1"
                >
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-lift ring-4 ring-background">
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="text-[11px] font-semibold text-primary">{label}</span>
                </Link>
              </li>
            );
          }

          return (
            <li key={to} className="flex justify-center">
              <Link
                to={to}
                activeOptions={{ exact: to === "/" }}
                className="press flex w-full flex-col items-center gap-1 rounded-xl py-1.5 text-muted-foreground"
                activeProps={{ className: "text-primary" }}
              >
                <Icon className="h-5 w-5" />
                <span className="text-[11px] font-medium">{label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
