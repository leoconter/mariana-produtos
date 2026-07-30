/**
 * Única fonte de preço, entregáveis e checkout.
 * Hero, oferta mini, caixa principal e CTA fixo leem daqui —
 * preço e lista de incluídos não podem divergir entre blocos.
 */
export const OFERTA = {
  nome: 'Liberdade Íntima',
  autora: 'Dra. Mariana Della Valentina',
  credencial: 'Fisioterapeuta pélvica · CREFITO 213.111-F',

  preco: 37,
  precoFmt: 'R$37',
  ancoragemFmt: 'R$97',
  parcelasFmt: '3x de R$13,55',

  // Checkout "home" da página atual (recuperado do bundle Base44)
  checkoutUrl: 'https://pay.kirvano.com/d4959531-a3f5-416a-a878-16042e00daa7',
  pixelId: '757623503939865',

  // Regra do brief: um único label, primeira pessoa, verbo de ação, preço.
  ctaLabel: 'Quero começar agora — R$37',
  microcopy: 'Acesso imediato. Privado. Garantia de 7 dias.',

  garantiaDias: 7, // FALTA: cliente autorizar 30 dias ("teste o protocolo inteiro")
  provaSocial: 'Mais de 1.500 mulheres já entraram no protocolo',

  // Lista única de entregáveis (copy atual da caixa de oferta).
  // Ordem: suporte individual subiu p/ 3ª posição (maior valor
  // percebido num produto de R$37); bônus despriorizado p/ último.
  incluidos: [
    'Ebook completo do Método Liberdade Íntima (passo a passo)',
    'Ritual de 21 dias com missões diárias guiadas',
    'Suporte individual via WhatsApp',
    'Vídeos explicativos para te guiar na jornada inicial',
    'Exercícios práticos de 5 a 10 min por dia',
    'Neuroeducação para reduzir ansiedade e medo',
    'Acesso vitalício a todo o material',
    // NOTA: bônus off-thesis, candidato a substituição
    'Bônus: 5 coisas que estão piorando a sua cólica',
  ],
} as const;
