import { Briefcase, GraduationCap, Sparkles, HandCoins } from "lucide-react";
import { vinculos } from "@/lib/data";
import { OptionCard } from "@/components/option-card";
import { BreadcrumbSteps } from "@/components/breadcrumb-steps";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const STEPS = [
  { label: "Vínculo", done: false },
  { label: "Tópico", done: false },
  { label: "Resposta", done: false },
];

const ICONS: Record<string, React.ReactNode> = {
  Briefcase: <Briefcase className="size-5" />,
  GraduationCap: <GraduationCap className="size-5" />,
  Sparkles: <Sparkles className="size-5" />,
  HandCoins: <HandCoins className="size-5" />,
};

export default function GuiaPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-10">
        <BreadcrumbSteps steps={STEPS} current={0} />

        <h1 className="mt-6 text-2xl font-bold text-foreground">
          Qual é o seu vínculo de trabalho?
        </h1>
        <p className="mt-2 text-muted-foreground">
          Escolha a opção que melhor descreve sua situação atual.
        </p>

        <div className="mt-8 flex flex-col gap-3">
          {vinculos.map((v) => (
            <OptionCard
              key={v.slug}
              href={`/guia/${v.slug}`}
              title={v.nome}
              description={v.descricao}
              icon={ICONS[v.icone]}
            />
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
