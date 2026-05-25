import { notFound } from "next/navigation";
import Link from "next/link";
import { AlertTriangle, BookOpen, ArrowLeft, MapPin } from "lucide-react";
import { vinculos, getVinculo, getTopico } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BreadcrumbSteps } from "@/components/breadcrumb-steps";
import { FeedbackButton } from "@/components/feedback-button";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const STEPS = [
  { label: "Vínculo", done: true },
  { label: "Tópico", done: true },
  { label: "Resposta", done: false },
];

export function generateStaticParams() {
  return vinculos.flatMap((v) =>
    v.topicos.map((t) => ({ vinculo: v.slug, topico: t.slug }))
  );
}

export default async function TopicoPage({
  params,
}: {
  params: Promise<{ vinculo: string; topico: string }>;
}) {
  const { vinculo: vinculoSlug, topico: topicoSlug } = await params;
  const vinculo = getVinculo(vinculoSlug);
  const topico = getTopico(vinculoSlug, topicoSlug);

  if (!vinculo || !topico) notFound();

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-10">
        <BreadcrumbSteps steps={STEPS} current={2} />

        <div className="mt-6">
          <p className="text-sm text-muted-foreground">
            {vinculo.nome} · {topico.nome}
          </p>
          <h1 className="mt-2 text-2xl font-bold text-foreground">
            {topico.nome}
          </h1>
        </div>

        <div className="mt-6 rounded-xl border border-border bg-card p-6">
          <p className="leading-relaxed text-foreground">{topico.resposta}</p>

          {topico.baseLegal && (
            <div className="mt-5 flex items-center gap-2">
              <BookOpen className="size-4 shrink-0 text-muted-foreground" />
              <Badge variant="secondary" className="text-xs">
                {topico.baseLegal}
              </Badge>
            </div>
          )}

          {topico.alertas && topico.alertas.length > 0 && (
            <div className="mt-6 rounded-lg bg-muted p-4">
              <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                <AlertTriangle className="size-4" />
                Pontos de atenção
              </div>
              <ul className="mt-3 flex flex-col gap-2">
                {topico.alertas.map((alerta, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-muted-foreground" />
                    {alerta}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Link href={`/guia/${vinculo.slug}`}>
              <Button variant="outline" size="sm" className="gap-2">
                <ArrowLeft className="size-4" />
                Ver outro tópico
              </Button>
            </Link>
            <Link href="/ajuda">
              <Button variant="ghost" size="sm" className="gap-2">
                <MapPin className="size-4" />
                Buscar ajuda em Conde
              </Button>
            </Link>
          </div>
          <FeedbackButton />
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
