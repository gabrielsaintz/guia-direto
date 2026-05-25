import { cn } from "@/lib/utils";

type Step = {
  label: string;
  done: boolean;
};

export function BreadcrumbSteps({
  steps,
  current,
}: {
  steps: Step[];
  current: number;
}) {
  return (
    <div className="flex items-center gap-2 text-sm">
      {steps.map((step, i) => (
        <div key={i} className="flex items-center gap-2">
          <span
            className={cn(
              "flex size-6 items-center justify-center rounded-full text-xs font-medium",
              i < current
                ? "bg-primary text-primary-foreground"
                : i === current
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground"
            )}
          >
            {i + 1}
          </span>
          <span
            className={cn(
              "hidden sm:inline",
              i === current ? "font-medium text-foreground" : "text-muted-foreground"
            )}
          >
            {step.label}
          </span>
          {i < steps.length - 1 && (
            <span className="text-muted-foreground">›</span>
          )}
        </div>
      ))}
    </div>
  );
}
