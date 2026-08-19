import logo from "@/assets/bakskolan-logo.png";
import { cn } from "@/lib/utils";

export function LogoMark({
  className,
  eager = false,
}: {
  className?: string;
  eager?: boolean;
}) {
  return (
    <img
      src={logo}
      alt="Bakskolans logotyp – en cupcake med studentmössa"
      width={816}
      height={816}
      loading={eager ? "eager" : "lazy"}
      className={cn("h-9 w-9 object-contain", className)}
    />
  );
}

export function Logo({
  className,
  size = "md",
  eager = false,
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
  eager?: boolean;
}) {
  const mark = size === "lg" ? "h-14 w-14" : size === "sm" ? "h-7 w-7" : "h-10 w-10";
  const text =
    size === "lg" ? "text-3xl sm:text-4xl" : size === "sm" ? "text-base" : "text-xl";

  return (
    <span className={cn("flex min-w-0 items-center gap-2.5", className)}>
      <LogoMark className={cn(mark, "shrink-0")} eager={eager} />
      <span className={cn("truncate font-display font-semibold tracking-tight", text)}>
        Bakskolan
      </span>
    </span>
  );
}
