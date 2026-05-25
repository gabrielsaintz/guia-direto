import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type OptionCardProps = {
  href: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
};

export function OptionCard({
  href,
  title,
  description,
  icon,
  className,
}: OptionCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-all hover:border-foreground/20 hover:bg-accent",
        className
      )}
    >
      {icon && (
        <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-muted text-foreground">
          {icon}
        </div>
      )}
      <div className="flex-1 min-w-0">
        <p className="font-medium text-foreground">{title}</p>
        <p className="text-sm text-muted-foreground mt-0.5 leading-snug">
          {description}
        </p>
      </div>
      <ChevronRight className="size-4 shrink-0 text-muted-foreground group-hover:text-foreground transition-colors" />
    </Link>
  );
}
