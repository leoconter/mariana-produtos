/**
 * Bloco 9 — depoimentos reais recuperados da página atual.
 * FALTA: /referencia/depoimentos não foi fornecido. O brief pede
 * depoimentos com idade e especificidade temporal/de situação —
 * os 3 atuais não têm idade e são genéricos. Substituir quando
 * o cliente enviar o material.
 */
export interface Depoimento {
  nome: string;
  texto: string;
}

export const DEPOIMENTOS: Depoimento[] = [
  {
    nome: 'Camila R.',
    texto:
      'Eu acreditava que era impossível viver sem dor. Em poucas semanas, voltei a sentir prazer sem ardência.',
  },
  {
    nome: 'Patrícia M.',
    texto:
      'Foi tão simples que meu parceiro também notou a mudança. Nossa intimidade nunca foi tão leve.',
  },
  {
    nome: 'Juliana S.',
    texto:
      'Fiz no meu tempo, em casa, sem vergonha. Mudou completamente minha relação comigo mesma e com meu parceiro.',
  },
];

export const PADRAO_QUE_SE_REPETE = [
  'Menos medo da intimidade',
  'Menos ardência e tensão',
  'Mais confiança no próprio corpo',
  'Mais conexão com o parceiro',
];
