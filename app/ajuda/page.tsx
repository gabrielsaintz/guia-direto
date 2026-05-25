import { MapPin, Phone, Clock, ExternalLink } from "lucide-react";
import { orgaos } from "@/lib/ajuda-conde";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function AjudaPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-10">
        <h1 className="text-2xl font-bold text-foreground">
          Onde buscar ajuda em Conde-PB
        </h1>
        <p className="mt-2 text-muted-foreground">
          Órgãos públicos e serviços gratuitos disponíveis para você.
        </p>

        <div className="mt-8 flex flex-col gap-4">
          {orgaos.map((org) => (
            <div
              key={org.nome}
              className="rounded-xl border border-border bg-card p-5"
            >
              <h2 className="font-semibold text-foreground">{org.nome}</h2>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                {org.descricao}
              </p>

              <div className="mt-4 flex flex-col gap-2 text-sm">
                <div className="flex items-start gap-2 text-muted-foreground">
                  <MapPin className="mt-0.5 size-4 shrink-0" />
                  <span>{org.endereco}</span>
                </div>
                {org.telefone && (
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Phone className="size-4 shrink-0" />
                    <span>{org.telefone}</span>
                  </div>
                )}
                {org.horario && (
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="size-4 shrink-0" />
                    <span>{org.horario}</span>
                  </div>
                )}
              </div>

              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(org.mapQuery)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-foreground underline-offset-4 hover:underline"
              >
                Ver no Google Maps
                <ExternalLink className="size-3.5" />
              </a>
            </div>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
