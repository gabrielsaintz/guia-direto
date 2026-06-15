# Guia Direto

Aplicação web para trabalhadores de **Conde-PB e região** consultarem seus direitos trabalhistas em linguagem simples, sem juridiquês.

## O que é

Guia interativo em 3 passos:

1. **Vínculo** — usuário escolhe seu tipo de contrato
2. **Tópico** — escolhe a dúvida
3. **Resposta** — recebe explicação clara com base legal e pontos de atenção

Também possui página `/ajuda` listando órgãos públicos gratuitos de Conde-PB (endereço, telefone, horário e link para Google Maps).

## Vínculos cobertos

| Vínculo | Tópicos |
| --- | --- |
| CLT (Carteira Assinada) | Férias, Demissão, Carga Horária, Salário, 13º Salário |
| Estágio | Recesso, Encerramento, Carga Horária, Bolsa-Auxílio, 13º |
| Jovem Aprendiz | Férias, Encerramento, Carga Horária, Salário, 13º |
| Trabalho Informal | Férias, Fim do Trabalho, Carga Horária, Pagamento, 13º |

## Stack

- **Next.js** (App Router) + TypeScript
- **Tailwind CSS** + shadcn/ui
- Conteúdo estático em `lib/data.ts` — sem banco de dados

## Rodar localmente

```bash
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

## Contexto

Projeto acadêmico desenvolvido para a faculdade, com foco em acessibilidade da informação jurídica para trabalhadores de municípios pequenos.
