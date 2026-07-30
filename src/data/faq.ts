/**
 * Bloco 14 — as 7 perguntas atuais (copy integral) + 3 novas
 * cobrindo objeções que o brief exige (meu caso / mostrar para
 * alguém / e se não funcionar), escritas a partir de copy que
 * já existe em outros blocos da página atual.
 */
export interface Pergunta {
  q: string;
  a: string;
}

export const FAQ: Pergunta[] = [
  {
    q: 'Funciona para o meu caso?',
    a: 'O protocolo trabalha a raiz neuromuscular que é comum aos casos de tensão pélvica e dor: o sistema nervoso em alerta e a musculatura que não aprendeu a soltar. É flexível, progressivo e respeita seu ritmo. Ele não substitui investigação médica — se a sua dor é recente, intensa ou vem com outros sintomas, procure avaliação profissional.',
  },
  {
    q: 'Já tentei de tudo e nada resolveu. Por que isso seria diferente?',
    a: 'Lubrificantes, pomadas e remédios agem no sintoma. Aqui você trabalha a causa: o sistema nervoso em alerta e a musculatura que não aprendeu a soltar. É uma abordagem diferente.',
  },
  {
    q: 'Preciso de experiência com exercícios pélvicos?',
    a: 'Não. O protocolo foi criado para iniciantes. Cada exercício é explicado passo a passo, de forma simples e visual. Você não precisa ter nenhuma experiência prévia.',
  },
  {
    q: 'Em quanto tempo vejo melhora?',
    a: 'Muitas mulheres relatam mudanças nas primeiras semanas. O protocolo completo é de 21 dias, mas cada corpo tem seu ritmo. O importante é começar e manter a consistência diária.',
  },
  {
    q: 'Tenho medo de piorar ou de fazer errado.',
    a: 'O protocolo é progressivo, começa leve e evolui no seu tempo. Cada passo é guiado. Você tem controle total e pode adaptar ao que sentir confortável.',
  },
  {
    q: 'Preciso de equipamentos ou produtos?',
    a: 'Não. Tudo é feito com o próprio corpo, sem equipamentos. Os exercícios são simples e podem ser feitos em qualquer lugar privado da sua casa.',
  },
  {
    q: 'Alguém vai ficar sabendo? Preciso aparecer ou falar com alguém?',
    a: 'Não. Não tem consulta, não tem grupo, não tem chamada de vídeo. O acesso chega por e-mail e você faz tudo sozinha, em casa. Na fatura do cartão aparece um nome neutro de educação digital, sem qualquer referência ao conteúdo do produto.',
  },
  {
    q: 'Posso fazer no meu ritmo?',
    a: 'Sim. O acesso é vitalício. Mesmo com o protocolo de 21 dias sugerido, você pode adaptar ao seu tempo e repetir quantas vezes quiser.',
  },
  {
    q: 'Como acesso após comprar?',
    a: 'Imediatamente após a confirmação do pagamento, você recebe o acesso completo por email. É tudo digital e online.',
  },
  {
    q: 'E se não funcionar para mim?',
    a: 'Você tem 7 dias para acessar o material, fazer os primeiros exercícios e sentir se faz sentido para você. Se decidir que não é o momento, basta pedir o reembolso — sem burocracia, sem justificativa, 100% do valor devolvido.',
  },
];
