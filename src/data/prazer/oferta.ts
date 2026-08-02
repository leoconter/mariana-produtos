/**
 * Desbloqueando o Prazer — única fonte de preço, entregáveis e
 * checkout. Copy recuperada de prazer.marianavalentina.com.br
 * (Base44, client-rendered).
 *
 * ATENÇÃO: o checkout é o MESMO UUID do produto principal do
 * Liberdade Íntima (d4959531…) — confirmado no bundle da página
 * atual e fornecido pelo Leo. Confirmar no Kirvano se é intencional.
 */
export const PRAZER = {
  nome: 'Desbloqueando o Prazer',
  autora: 'Dra. Mariana Della Valentina',

  preco: 57,
  precoFmt: 'R$57',
  ancoragemFmt: 'R$109',
  parcelasFmt: '3x de R$20,26',

  checkoutUrl: 'https://pay.kirvano.com/d4959531-a3f5-416a-a878-16042e00daa7',

  // Padrão do projeto: um único label, primeira pessoa, com preço.
  ctaLabel: 'Quero meu acesso imediato — R$57',
  microcopy: 'Acesso imediato · Privado · Garantia de 7 dias',

  garantiaDias: 7,

  // Lista da caixa de oferta (copy da página atual)
  incluidos: [
    'Aulas gravadas explicando o que está bloqueando seu prazer e sua libido',
    'Exercícios guiados para ativar a sensibilidade e a resposta corporal',
    'Técnicas práticas de reconexão com o corpo e com o prazer',
    'Passo a passo progressivo para aplicar no dia a dia',
    'Protocolos rápidos de 5 a 10 minutos — sem equipamentos',
    'Sequência estruturada do entendimento até a integração',
    'Acesso vitalício a todo o conteúdo',
  ],

  dores: [
    'Não consegue chegar ao orgasmo, ou sente que está cada vez mais difícil',
    'Sente pouco prazer, mesmo com estimulação',
    'Tem libido baixa ou instável, sem entender o porquê',
    'Precisa se esforçar para sentir algo durante a relação',
    'Sente o corpo desconectado, como se a mente quisesse mas o corpo não acompanhasse',
    'Já resolveu outros problemas… mas o prazer ainda não voltou junto',
  ],

  consequencias: [
    {
      a: 'Você começa a se distanciar do próprio corpo.',
      b: 'Como se ele pertencesse a outra pessoa — e você só observa.',
    },
    {
      a: 'Evita o momento. Evita a expectativa.',
      b: 'A intimidade vira fonte de ansiedade, não de prazer.',
    },
    {
      a: 'E por dentro, uma mistura difícil de nomear.',
      b: 'Frustração. Culpa. A sensação de que algo está faltando.',
    },
  ],

  etapas: [
    {
      rotulo: 'Etapa 1 — Entender',
      titulo: 'Você aprende o que realmente está travando o seu prazer',
      texto:
        'De forma clara, sem termos técnicos complicados. Você vai entender pela primeira vez o que acontece no seu sistema nervoso e por que o corpo bloqueia a resposta ao prazer.',
    },
    {
      rotulo: 'Etapa 2 — Despertar',
      titulo: 'Começa a estimular as estruturas que geram sensação',
      texto:
        'Práticas guiadas de 5 a 10 minutos por dia que ativam a sensibilidade corporal. Simples de encaixar na rotina, sem equipamentos e sem exposição.',
    },
    {
      rotulo: 'Etapa 3 — Ativar',
      titulo: 'Remove as barreiras físicas e neurológicas',
      texto:
        'A musculatura relaxa, a circulação melhora e o sistema nervoso aprende a associar o momento íntimo com prazer — não com bloqueio.',
    },
    {
      rotulo: 'Etapa 4 — Integrar',
      titulo: 'Seu corpo passa a responder de forma mais natural',
      texto:
        'O prazer começa a emergir de dentro pra fora. Sem forçar. Sem pressão. Respeitando o seu ritmo — porque agora o corpo está preparado para sentir.',
    },
  ],

  beneficios: [
    'Mais desejo e libido',
    'Maior sensibilidade e prazer',
    'Orgasmos mais frequentes e intensos',
    'Reconexão com o próprio corpo',
    'Mais segurança e presença durante a intimidade',
  ],

  credenciais: [
    'Fisioterapeuta Pélvica',
    'Mestre em Ciências da Reabilitação',
    'Doutoranda (UFCSPA)',
    'Professora de Pós-graduação',
    'Palestrante nacional e internacional',
    'CREFITO 213.111-F',
  ],

  faq: [
    {
      q: '"E se não funcionar pra mim?"',
      a: 'O método atua na causa real — sistema nervoso e musculatura pélvica. Não é uma solução superficial. Ele trabalha o ciclo que bloqueia a resposta ao prazer, independentemente de quanto tempo você já convive com isso. E ainda tem garantia de 7 dias: se não fizer sentido, você pede o reembolso sem perguntas.',
    },
    {
      q: '"Minha libido nunca foi lá essas coisas. Isso tem solução?"',
      a: 'Sim. A libido baixa tem raízes fisiológicas concretas — e o programa trabalha exatamente essas raízes. É progressivo, respeita o seu ritmo e funciona mesmo para quem nunca sentiu muito prazer na vida adulta.',
    },
    {
      q: '"Já tentei de tudo e nada funcionou."',
      a: 'A maioria das tentativas foca no sintoma ou só no emocional. Aqui você atua na causa real: a resposta automática do sistema nervoso e da musculatura pélvica — ativando prazer de dentro pra fora. É diferente do que você provavelmente já tentou.',
    },
    {
      q: '"Não tenho tempo."',
      a: 'Os exercícios foram pensados para a sua rotina real. São 5 a 10 minutos por dia — no horário que você preferir, no celular ou computador. Você não precisa reorganizar a vida para começar.',
    },
    {
      q: '"Tenho vergonha de tratar isso."',
      a: 'Eu entendo. E é exatamente por isso que esse programa existe: 100% digital, totalmente privado, sem precisar falar com ninguém. Nome neutro na fatura. Só você e o seu corpo, no seu tempo.',
    },
  ],
} as const;
