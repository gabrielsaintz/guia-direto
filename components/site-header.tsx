import Link from "next/link";
import { Scale } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteHeader() {
  return (
    <header className="border-b border-border bg-background">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2 font-semibold text-foreground">
          <Scale className="size-5" />
          Guia Direto
        </Link>
        <nav className="flex items-center gap-4 text-sm">
          <Link
            href="/guia"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Descobrir direitos
          </Link>
          <Link
            href="/ajuda"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Onde buscar ajuda
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
