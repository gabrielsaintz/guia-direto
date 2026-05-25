import Link from "next/link";
import { Scale, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex flex-1 flex-col items-center justify-center px-4 py-16 text-center">
        <div className="mx-auto max-w-lg">
          <div className="mb-6 flex justify-center">
            <div className="flex size-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
              <Scale className="size-8" />
            </div>
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-foreground">
            Guia Direto
          </h1>
          <p className="mt-4 text-xl text-muted-foreground">
            Descubra seus direitos trabalhistas em linguagem simples e direta.
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Para trabalhadores de Conde-PB e região — sem juridiquês.
          </p>

          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link href="/guia">
              <Button size="lg" className="gap-2 px-8">
                Descobrir meus direitos
                <ArrowRight className="size-4" />
              </Button>
            </Link>
            <Link href="/ajuda">
              <Button variant="outline" size="lg" className="gap-2 px-8">
                <MapPin className="size-4" />
                Onde buscar ajuda
              </Button>
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-4 text-left sm:grid-cols-3">
            <div className="rounded-xl border border-border bg-card p-4">
              <p className="font-semibold text-foreground">1. Seu vínculo</p>
              <p className="mt-1 text-sm text-muted-foreground">
                CLT, estágio, jovem aprendiz ou informal
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-4">
              <p className="font-semibold text-foreground">2. Sua dúvida</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Férias, demissão, salário, carga horária...
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-4">
              <p className="font-semibold text-foreground">3. Sua resposta</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Explicação clara com base legal validada
              </p>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
