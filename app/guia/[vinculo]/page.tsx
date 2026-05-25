import { notFound } from "next/navigation";
import { vinculos, getVinculo } from "@/lib/data";
import { OptionCard } from "@/components/option-card";
import { BreadcrumbSteps } from "@/components/breadcrumb-steps";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const STEPS = [
  { label: "Vínculo", done: true },
  { label: "Tópico", done: false },
  { label: "Resposta", done: false },
];

export function generateStaticParams() {
  return vinculos.map((v) => ({ vinculo: v.slug }));
}

export default async function VinculoPage({
  params,
}: {
  params: Promise<{ vinculo: string }>;
}) {
  const { vinculo: vinculoSlug } = await params;
  const vinculo = getVinculo(vinculoSlug);

  if (!vinculo) notFound();

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-10">
        <BreadcrumbSteps steps={STEPS} current={1} />

        <div className="mt-6">
          <p className="text-sm text-muted-foreground">
            Vínculo selecionado:{" "}
            <span className="font-medium text-foreground">{vinculo.nome}</span>
          </p>
          <h1 className="mt-2 text-2xl font-bold text-foreground">
            O que você quer saber?
          </h1>
          <p className="mt-2 text-muted-foreground">
            Escolha um tópico para ver seus direitos de forma simples.
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-3">
          {vinculo.topicos.map((t) => (
            <OptionCard
              key={t.slug}
              href={`/guia/${vinculo.slug}/${t.slug}`}
              title={t.nome}
              description=""
            />
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
