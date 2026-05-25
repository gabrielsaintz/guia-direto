export type OrgaoAjuda = {
  nome: string;
  descricao: string;
  endereco: string;
  telefone?: string;
  horario?: string;
  mapQuery: string;
};

export const orgaos: OrgaoAjuda[] = [
  {
    nome: "Defensoria Pública do Estado da Paraíba",
    descricao:
      "Assistência jurídica gratuita para quem não pode pagar advogado. Atende questões trabalhistas, cíveis e criminais.",
    endereco: "Av. Epitácio Pessoa, João Pessoa - PB (comarca mais próxima de Conde)",
    telefone: "(83) 3208-7400",
    horario: "Segunda a sexta, 8h às 14h",
    mapQuery: "Defensoria Pública do Estado da Paraíba João Pessoa",
  },
  {
    nome: "Superintendência Regional do Trabalho e Emprego (SRTE-PB)",
    descricao:
      "Órgão do Ministério do Trabalho. Fiscaliza condições de trabalho, recebe denúncias de irregularidades e orienta sobre direitos trabalhistas.",
    endereco: "Av. Almirante Barroso, 234 - Centro, João Pessoa - PB",
    telefone: "(83) 3612-3300",
    horario: "Segunda a sexta, 8h às 17h",
    mapQuery: "Superintendência Regional do Trabalho Paraíba João Pessoa",
  },
  {
    nome: "CRAS Conde",
    descricao:
      "Centro de Referência de Assistência Social. Oferece orientação social, encaminhamento para serviços públicos e apoio a famílias em vulnerabilidade.",
    endereco: "Conde - PB (consulte a Prefeitura Municipal para o endereço exato)",
    telefone: "Consulte a Prefeitura de Conde: (83) 3291-0000",
    horario: "Segunda a sexta, 8h às 17h",
    mapQuery: "CRAS Conde Paraíba",
  },
  {
    nome: "Núcleo de Prática Jurídica (NPJ)",
    descricao:
      "Serviço jurídico gratuito prestado por estudantes de Direito supervisionados por professores. Atende questões trabalhistas e cíveis.",
    endereco: "TODO: insira o endereço do NPJ da sua instituição de ensino aqui",
    telefone: "TODO: insira o telefone do NPJ aqui",
    horario: "TODO: insira o horário de funcionamento aqui",
    mapQuery: "Núcleo de Prática Jurídica Conde Paraíba",
  },
  {
    nome: "SINE / Agência do Trabalhador de Conde",
    descricao:
      "Sistema Nacional de Empregos. Emite carteira de trabalho, solicita seguro-desemprego e oferece intermediação de empregos.",
    endereco: "Conde - PB (consulte a Prefeitura Municipal para o endereço exato)",
    telefone: "Consulte a Prefeitura de Conde: (83) 3291-0000",
    horario: "Segunda a sexta, 8h às 17h",
    mapQuery: "SINE Conde Paraíba",
  },
];
