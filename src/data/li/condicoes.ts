/**
 * Bloco 2 — "Sua dor tem nome".
 * Lista de condições definida no brief (§3, Bloco 2).
 * FALTA: cliente validar quais condições o produto legitimamente
 * atende antes de ir ao ar — nomear condição é afirmar escopo.
 */
export interface Condicao {
  nome: string;
  frase: string;
}

export const CONDICOES: Condicao[] = [
  { nome: 'Vaginismo', frase: 'O corpo fecha e "não entra", mesmo quando você quer.' },
  { nome: 'Dispareunia', frase: 'Dor ou ardência durante ou depois da relação.' },
  { nome: 'Endometriose', frase: 'A dor profunda que acompanha o diagnóstico.' },
  { nome: 'Dor pós-parto', frase: 'Depois do bebê, a relação nunca voltou a ser confortável.' },
  { nome: 'Secura e menopausa', frase: 'A mudança hormonal trouxe ardência e desconforto.' },
  { nome: 'Dor pós-cirúrgica', frase: 'Depois da cirurgia, o corpo passou a se defender.' },
  { nome: 'Tensão pélvica crônica', frase: 'A musculatura vive contraída, mesmo fora da relação.' },
];
