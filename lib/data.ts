export type Topico = {
  slug: string;
  nome: string;
  resposta: string;
  baseLegal?: string;
  alertas?: string[];
};

export type Vinculo = {
  slug: string;
  nome: string;
  descricao: string;
  icone: string;
  topicos: Topico[];
};

export const vinculos: Vinculo[] = [
  {
    slug: "clt",
    nome: "CLT (Carteira Assinada)",
    descricao: "Trabalhador com contrato formal registrado em CTPS",
    icone: "Briefcase",
    topicos: [
      {
        slug: "ferias",
        nome: "Férias",
        resposta:
          "Após 12 meses de trabalho (período aquisitivo), você tem direito a 30 dias de férias remuneradas. O salário das férias é acrescido de 1/3 extra (abono de férias). Seu empregador deve avisar com 30 dias de antecedência quando as férias começarão.",
        baseLegal: "CLT art. 129–133",
        alertas: [
          "As férias não podem ser substituídas por dinheiro (exceto 1/3 ao pedir conversão de abono).",
          "Se o empregador não conceder férias no prazo, o valor dobra.",
          "Férias podem ser parceladas em até 3 períodos (somente com sua concordância).",
        ],
      },
      {
        slug: "demissao",
        nome: "Demissão",
        resposta:
          "Se você for demitido sem justa causa, tem direito a: aviso prévio (30 dias + 3 por ano trabalhado), saldo de salário, 13º proporcional, férias proporcionais + 1/3, multa de 40% sobre o FGTS e saque do FGTS. O seguro-desemprego deve ser solicitado no SINE em até 120 dias.",
        baseLegal: "CLT art. 477–478, Lei 8.036/90",
        alertas: [
          "Se pedir demissão (não for demitido), você não recebe multa do FGTS nem seguro-desemprego.",
          "Justa causa elimina quase todos os direitos — exija por escrito os motivos.",
          "O prazo para receber as verbas rescisórias é de 10 dias corridos após o desligamento.",
        ],
      },
      {
        slug: "carga-horaria",
        nome: "Carga Horária",
        resposta:
          "A jornada máxima é de 8 horas por dia e 44 horas semanais. Horas extras devem ser pagas com acréscimo mínimo de 50% (ou 100% em feriados). O intervalo mínimo de almoço é de 1 hora para jornadas acima de 6 horas.",
        baseLegal: "CLT art. 58–59, CF art. 7º XIII",
        alertas: [
          "Horas extras habituais acima de 2h/dia são ilegais.",
          "Banco de horas exige acordo coletivo ou individual escrito.",
          "Trabalhador em regime de tempo parcial tem regras diferentes.",
        ],
      },
      {
        slug: "salario",
        nome: "Salário",
        resposta:
          "O salário não pode ser inferior ao salário mínimo nacional (ou piso da categoria, se maior). O pagamento deve ocorrer até o 5º dia útil do mês seguinte. O 13º salário é pago em duas parcelas: até 30/11 e até 20/12.",
        baseLegal: "CLT art. 459, CF art. 7º IV e VIII",
        alertas: [
          "Desconto sem autorização escrita do empregado é ilegal.",
          "Atraso no pagamento gera direito a multa por dano moral.",
        ],
      },
      {
        slug: "decimo-terceiro",
        nome: "13º Salário",
        resposta:
          "O 13º é calculado proporcionalmente ao tempo trabalhado no ano. Quem trabalha o ano todo recebe um salário completo dividido em duas parcelas. Quem trabalha menos recebe proporcional (1/12 por mês ou fração acima de 14 dias).",
        baseLegal: "Lei 4.090/62",
        alertas: [
          "Aviso prévio indenizado conta para o cálculo do 13º.",
          "Descontos de INSS e IR incidem sobre o 13º.",
        ],
      },
    ],
  },
  {
    slug: "estagio",
    nome: "Estágio",
    descricao: "Estudante em estágio curricular ou não obrigatório",
    icone: "GraduationCap",
    topicos: [
      {
        slug: "ferias",
        nome: "Férias / Recesso",
        resposta:
          "Estagiários com mais de 1 ano de estágio têm direito a 30 dias de recesso remunerado. Com menos de 1 ano, o recesso é proporcional (1/12 por mês). O recesso deve ser combinado com a instituição e a empresa concedente.",
        baseLegal: "Lei 11.788/08 art. 13",
        alertas: [
          "Recesso é diferente de férias da CLT — não gera o 1/3 adicional.",
          "Se o recesso não for concedido, deve ser pago em dobro.",
        ],
      },
      {
        slug: "demissao",
        nome: "Encerramento do Estágio",
        resposta:
          "O estágio pode ser encerrado a qualquer momento por qualquer das partes, sem necessidade de justificativa. Não há aviso prévio, multa de FGTS ou seguro-desemprego. O estagiário recebe apenas o saldo de bolsa e recesso proporcional.",
        baseLegal: "Lei 11.788/08",
        alertas: [
          "Estágio não gera vínculo empregatício — isso é legal, diferente do que muitos pensam.",
          "Se a empresa te obriga a trabalhar como funcionário mas te trata como estagiário (sem supervisor, sem relação com o curso), isso pode ser vínculo disfarçado.",
        ],
      },
      {
        slug: "carga-horaria",
        nome: "Carga Horária",
        resposta:
          "Estágio não obrigatório: máximo 6 horas diárias e 30 horas semanais. Para estudantes do ensino médio ou EJA: máximo 4 horas diárias e 20 horas semanais. No período de provas, a carga horária deve ser reduzida à metade.",
        baseLegal: "Lei 11.788/08 art. 10",
        alertas: [
          "A empresa não pode exigir horas além do contrato de estágio.",
          "Você pode faltar para provas sem desconto na bolsa (desde que comunique com antecedência).",
        ],
      },
      {
        slug: "salario",
        nome: "Bolsa-Auxílio",
        resposta:
          "Para estágio não obrigatório, a bolsa é obrigatória e deve ser definida no Termo de Compromisso. Não existe valor mínimo nacional fixado em lei (apenas o acordado). Além da bolsa, auxílio-transporte é obrigatório.",
        baseLegal: "Lei 11.788/08 art. 12",
        alertas: [
          "Auxílio-transporte é obrigatório para estágio não obrigatório.",
          "A bolsa não sofre desconto de INSS ou FGTS (o estagiário não está coberto por essas contribuições).",
          "Verifique se o seu contrato de estágio tem Apólice de Seguro Contra Acidentes Pessoais — é obrigatório.",
        ],
      },
      {
        slug: "decimo-terceiro",
        nome: "13º Salário",
        resposta:
          "Estagiários não têm direito ao 13º salário. O que existe é o recesso proporcional (férias), que é diferente. Alguns contratos podem prever gratificação por mérito, mas isso é acordo entre as partes, não obrigação legal.",
        baseLegal: "Lei 11.788/08",
        alertas: [
          "A ausência de 13º é legal para estagiários.",
          "Se um benefício foi prometido no contrato e não foi pago, você pode reclamá-lo.",
        ],
      },
    ],
  },
  {
    slug: "jovem-aprendiz",
    nome: "Jovem Aprendiz",
    descricao: "Contrato de aprendizagem para jovens de 14 a 24 anos",
    icone: "Sparkles",
    topicos: [
      {
        slug: "ferias",
        nome: "Férias",
        resposta:
          "O jovem aprendiz tem direito a férias nos períodos de férias escolares. Se as férias escolares coincidirem com o contrato de aprendizagem, as férias devem ser concedidas nesse período. Não é possível converter férias em dinheiro.",
        baseLegal: "CLT art. 428–433",
        alertas: [
          "As férias do jovem aprendiz devem coincidir com o período escolar.",
          "O jovem aprendiz precisa estar matriculado e frequentando escola — isso é obrigatório.",
        ],
      },
      {
        slug: "demissao",
        nome: "Encerramento do Contrato",
        resposta:
          "O contrato de aprendizagem é por prazo determinado (máximo 2 anos). Pode ser encerrado antes por: conclusão do curso, desempenho insuficiente, ausência injustificada, ou ao completar 24 anos. Direitos na rescisão: saldo de salário, férias proporcionais, 13º proporcional e FGTS (sem multa de 40%).",
        baseLegal: "CLT art. 433",
        alertas: [
          "Demissão sem justa causa antes do prazo gera multa de 50% sobre FGTS (regra especial de aprendizes).",
          "O jovem aprendiz não tem direito ao seguro-desemprego em caso de término do contrato.",
        ],
      },
      {
        slug: "carga-horaria",
        nome: "Carga Horária",
        resposta:
          "Para jovens de 14 a 16 anos: máximo 6 horas diárias (sem horas extras). Para jovens de 16 a 24 anos: máximo 8 horas diárias, incluindo o tempo na escola. A carga horária inclui as aulas teóricas na entidade formadora (SENAI, SENAC etc.).",
        baseLegal: "CLT art. 432",
        alertas: [
          "Horas extras são proibidas para aprendizes menores de 16 anos.",
          "O tempo de aula conta como trabalho e deve ser remunerado.",
        ],
      },
      {
        slug: "salario",
        nome: "Salário",
        resposta:
          "O salário mínimo do jovem aprendiz é calculado proporcionalmente às horas trabalhadas. Se trabalhar 20h/semana, recebe 50% do salário mínimo. O cálculo é: (horas trabalhadas ÷ 220h) × salário mínimo. FGTS é recolhido à alíquota de 2% (não os usuais 8%).",
        baseLegal: "CLT art. 428, Decreto 5.598/05",
        alertas: [
          "O FGTS do aprendiz é de 2%, não 8% — mas ele existe e é seu direito.",
          "Verifique se o contrato cumpre a carga horária e o salário proporcional.",
        ],
      },
      {
        slug: "decimo-terceiro",
        nome: "13º Salário",
        resposta:
          "O jovem aprendiz tem direito ao 13º salário proporcional ao tempo trabalhado no ano. O cálculo é igual ao do trabalhador CLT: 1/12 por mês ou fração superior a 14 dias.",
        baseLegal: "CLT art. 428–433, Lei 4.090/62",
        alertas: [
          "O 13º deve ser pago nas mesmas datas do CLT: 1ª parcela até 30/11, 2ª até 20/12.",
          "Na rescisão, o 13º proporcional é pago junto com as demais verbas.",
        ],
      },
    ],
  },
  {
    slug: "informal",
    nome: "Trabalho Informal",
    descricao: "Trabalhador sem carteira assinada ou autônomo",
    icone: "HandCoins",
    topicos: [
      {
        slug: "ferias",
        nome: "Férias",
        resposta:
          "Trabalhadores informais não têm direito legal garantido a férias, pois não possuem vínculo empregatício formal. Porém, se provar (via testemunhas, mensagens, pagamentos) que há relação de emprego (subordinação, habitualidade, onerosidade), pode entrar com ação na Justiça do Trabalho para reconhecer o vínculo e receber todos os direitos.",
        baseLegal: "CLT art. 2–3 (caracterização do vínculo)",
        alertas: [
          "Guarde mensagens, comprovantes de pagamento e testemunhos — são provas de vínculo.",
          "O prazo para entrar com ação trabalhista é de 2 anos após o fim do trabalho.",
          "Procure a Defensoria Pública ou o CRAS para orientação gratuita.",
        ],
      },
      {
        slug: "demissao",
        nome: "Fim do Trabalho",
        resposta:
          "Sem carteira assinada, você não tem acesso ao seguro-desemprego, FGTS ou aviso prévio legalmente. Mas se o trabalho tinha as características de emprego (horário fixo, subordinação, dependência da empresa), é possível entrar com ação de reconhecimento de vínculo na Justiça do Trabalho e receber todos os direitos retroativos.",
        baseLegal: "CLT art. 2–3",
        alertas: [
          "Prazo para ação: 2 anos após o fim do contrato, com direitos dos últimos 5 anos.",
          "A ação pode ser ajuizada mesmo sem advogado (jus postulandi), mas advogado ou Defensoria Pública aumentam as chances.",
          "Reúna provas: fotos no local de trabalho, mensagens do patrão, pagamentos via PIX/transferência.",
        ],
      },
      {
        slug: "carga-horaria",
        nome: "Carga Horária",
        resposta:
          "Trabalhadores informais não têm proteção legal de jornada. Porém, se o patrão controla o horário e exige presença em determinados horários, isso caracteriza subordinação — elemento essencial para reconhecer vínculo empregatício e garantir os direitos de limitação de jornada e horas extras.",
        baseLegal: "CLT art. 2–3",
        alertas: [
          "Controle de ponto, escalas e obrigação de comparecer são sinais de vínculo empregatício.",
          "Se provado o vínculo, horas extras devem ser pagas retroativamente.",
        ],
      },
      {
        slug: "salario",
        nome: "Salário / Pagamento",
        resposta:
          "Se você trabalha de forma informal, pode exigir o pagamento combinado por qualquer meio (inclusive judicial). Se as características são de emprego formal, tem direito ao salário mínimo. Sem reconhecimento de vínculo, o valor é o que foi acordado verbalmente ou por escrito.",
        baseLegal: "CLT art. 2–3, Código Civil art. 593–609",
        alertas: [
          "Guarde todos os comprovantes de pagamento (PIX, recibos, mensagens).",
          "Calotes salariais podem ser cobrados na Justiça do Trabalho (reconhecimento de vínculo) ou Cível (prestação de serviços).",
          "Para valores até 20 salários mínimos, considere o Juizado Especial Cível (não precisa de advogado).",
        ],
      },
      {
        slug: "decimo-terceiro",
        nome: "13º Salário",
        resposta:
          "Trabalhadores informais não têm direito automático ao 13º. Mas se houver reconhecimento de vínculo empregatício na Justiça, o 13º de todos os anos trabalhados deve ser pago retroativamente (até 5 anos de prescrição).",
        baseLegal: "CLT art. 2–3, Lei 4.090/62",
        alertas: [
          "Com reconhecimento de vínculo, todos os direitos CLT se aplicam retroativamente.",
          "Busque orientação na Defensoria Pública ou no CRAS antes de decidir entrar com ação.",
        ],
      },
    ],
  },
];

export function getVinculo(slug: string): Vinculo | undefined {
  return vinculos.find((v) => v.slug === slug);
}

export function getTopico(
  vinculoSlug: string,
  topicoSlug: string
): Topico | undefined {
  return getVinculo(vinculoSlug)?.topicos.find((t) => t.slug === topicoSlug);
}
