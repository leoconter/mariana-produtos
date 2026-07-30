# Copy atual recuperada — li.marianavalentina.com.br

> **Origem:** engenharia reversa do bundle Base44 (`index-DH3JogMP.js` + 14 chunks de seção)
> + screenshot mobile 603×15747. Recuperado em 2026-07-30.
> Isto **não** foi fornecido em `/referencia` — foi reconstruído. Validar antes de reusar.

## Confirmação técnica do problema

```
curl https://li.marianavalentina.com.br/  →  HTTP 200, 4.304 bytes
<body> útil: 745 caracteres (apenas um "seo-snapshot" escondido com clip:rect(0,0,0,0))
Conteúdo real: 360KB de JS + 14 chunks lazy + 77KB CSS
Eventos Pixel disparados: fbq("track","PageView")  ← e nada mais
Repasse de UTM para o checkout: inexistente (URLs Kirvano são constantes hardcoded)
```

## Configuração recuperada

| Item | Valor |
|---|---|
| Checkout principal (`/`) | `https://pay.kirvano.com/d4959531-a3f5-416a-a878-16042e00daa7` |
| Checkout variante (`/2`) | `https://pay.kirvano.com/e0534305-ebb0-4b9c-9cf1-99cdfcd400d8` |
| Checkout upsell (`/obrigado`) | `https://pay.kirvano.com/f0e3309d-20e9-44e0-bf51-6d33f3d5e74f` |
| Meta Pixel (`/`) | `757623503939865` |
| Meta Pixel (`/2`) | `914091528117846` |
| Preço | R$37 · ancoragem "de R$97" · "ou 3x de R$13,55" |
| Garantia | 7 dias (em todos os pontos da página) |
| Prova agregada | "mais de 1.500 mulheres" |

---

## Bloco 1 — Hero

- **H1:** Liberdade / **Íntima** ← nome do produto, não promessa
- **Sub:** "Reduza a dor, a ardência e o travamento do corpo em até 21 dias com um protocolo prático, privado e baseado em neurociência. Sem medicamentos. Sem exposição."
- **Imagem:** capa 3D do ebook, vertical, ocupa ~500px de altura no mobile
- **Eyebrow:** "SE ISSO ACONTECE COM VOCÊ:"
  - Ardência ou sensação de rasgo no início da relação
  - Sensação de que "não entra" ou que o corpo fecha sozinho
  - Medo, tensão e vontade de evitar a intimidade
- **CTA:** "Quero recuperar meu prazer" (sem preço)
- **Microcopy sob CTA:** "Acesso imediato. Privado. Garantia de 7 dias."

## Bloco Identificação

- **H2:** "Dor, ardência ou sensação de rasgo **no início da relação?**"
- **Parágrafo:** "Isso é mais comum do que você imagina. Não é frescura, não é psicológico "inventado" e não é um problema só seu. É um sinal de que seu corpo está em estado de alerta, com a musculatura pélvica travada. E existe um caminho prático para mudar isso."
- **3 cards com foto (stock, escura, mulher na cama):**
  - "Eu travo." — Só de pensar, o corpo já se fecha.
  - "Eu finjo que estou cansada." — Para evitar a dor e a frustração.
  - "Eu tenho medo de tentar." — Cada tentativa parece piorar tudo.
- **CTA:** "Quero mudar minha realidade"

> Nenhuma condição clínica é nomeada em toda a página. Só sintoma.

## Bloco Custo Invisível (= Bloco 4 do brief, o ciclo)

- **Eyebrow:** "CONSEQUÊNCIA SILENCIOSA"
- **H2:** "Cada tentativa frustrada treina **seu corpo a fechar mais**"
- **Parágrafo:** "Quando você ignora o sinal do corpo e tenta novamente sem entender o que está acontecendo, o ciclo se fortalece. O sistema nervoso interpreta a tentativa como ameaça e responde com mais rigidez."
- **Lista numerada 01–06:**
  1. A tensão muscular aumenta a cada tentativa frustrada
  2. O medo se instala e vira resposta automática do corpo
  3. Você começa a evitar a intimidade, e a culpa cresce
  4. A distância do parceiro(a) se torna inevitável
  5. A autoestima desmorona em silêncio
  6. O desejo some, não porque você não quer, mas porque a dor venceu
- **Fecho:** "É sua autoestima e sua relação."

## Bloco Mecanismo (= Bloco 5)

- **Eyebrow:** "Mecanismo Balance Pélvico"
- **H2:** "… **não é só lubrificação**"
- **Parágrafo:** "A maioria dos tratamentos foca no sintoma. Lubrificante ameniza no momento, mas o corpo continua travando. O método Liberdade Íntima atua na raiz: o sistema nervoso em alerta e a musculatura pélvica que não aprendeu a relaxar."
- **Fecho:** "… parar de lutar contra o prazer."

> Termos técnicos aparecem **sem tradução**: "Balance Pélvico", "neuroeducação",
> "raiz neuromuscular". Brief exige tradução na mesma frase.

## Bloco Promessa (Antes / Depois)

- **H2:** "… **resposta natural**"
- **Parágrafo:** "O protocolo Liberdade Íntima trabalha a raiz neuromuscular do problema. Isso significa que você não vai apenas mascarar a dor. Vai ensinar o corpo a reagir de forma diferente, com segurança e no seu ritmo."

| Antes | Depois |
|---|---|
| Dor e ardência a cada tentativa | Confiança no próprio corpo |
| Corpo travando contra sua vontade | Resposta natural e relaxamento |
| Medo constante da intimidade | Calma e segurança na intimidade |
| Evitar e fingir cansaço | Desejo e conexão com o parceiro |
| Culpa e vergonha em silêncio | Autonomia e autoestima restauradas |

## Bloco Solução (≈ Bloco 6 + 7)

- **Destaque:** "5-10 min" / "por dia. Em casa."
- **Parágrafo:** "O protocolo é feito 100% em casa, com total privacidade, sem equipamentos, sem exposição. Você acompanha no seu celular ou computador, no horário que preferir."
- **"O que você recebe:"**
  - Vídeos explicativos para te guiar na jornada inicial
  - Ebook completo do Método Liberdade Íntima (passo a passo)
  - Ritual de 21 dias com missões diárias guiadas
  - Exercícios simples e rápidos (5 a 10 min por dia)
  - Neuroeducação e técnicas para reduzir ansiedade e medo
  - Orientações de aplicação em casa, de forma discreta
  - Suporte no WhatsApp para dúvidas
  - Acesso vitalício ao material completo

> **Zero números concretos:** nenhuma página, nenhuma contagem de exercícios,
> nenhuma quantidade de vídeos, nenhum formato de arquivo, nenhuma plataforma.
> Não existe divisão semana 1 / 2 / 3 em nenhum lugar da página.

## Bloco Para Quem (≈ Bloco 8)

**"Para você se"**
- Sente dor, ardência ou queimação no início da relação
- Sente que o corpo fecha ou trava contra a sua vontade
- Está cansada de soluções paliativas que não resolvem
- Quer um método prático, privado e no seu ritmo
- Deseja recuperar prazer, confiança e conexão
- Está disposta a dedicar 5 a 10 minutos por dia durante 21 dias

**"Não é para você se"**
- Busca um milagre sem fazer nenhum exercício
- Não quer seguir um passo a passo ou dedicar tempo diário

- **CTA:** "Quero fazer parte do protocolo"

## Bloco Benefícios (= Bloco 8 "O que muda")

- **H2:** "O que muda quando seu corpo **para de reagir com dor**"
- **6 cards** (ícone + título + linha):
  - Alívio e relaxamento pélvico — Seu corpo aprende a soltar a tensão acumulada.
  - Prazer sem interrupções — Sem ardência cortando o momento.
  - Confiança no próprio corpo — Você para de temer a intimidade.
  - *(+3 não capturados no screenshot — recuperar)*
- **Bloco "Imagine isso":** "Você está deitada ao lado do seu parceiro. Ele se aproxima. E, pela primeira vez em muito tempo, em vez de tensão, você sente calma. Em vez de medo, curiosidade. Seu corpo não trava. Você está presente. Conectada. Sem dor interrompendo. Sem culpa depois. Só presença."

## Bloco Quebra de Crenças

- **H2:** "… **presa**"
- **3 objeções + "A verdade":**
  - "Meu caso é único, nada vai funcionar para mim."
  - "Já tentei de tudo e nada resolveu." → "Lubrificantes, pomadas e remédios agem no sintoma. Aqui você trabalha a causa: o sistema nervoso em alerta e a musculatura que não aprendeu a soltar. É uma abordagem diferente."
  - "Tenho medo de piorar ou de fazer errado." → "O protocolo é progressivo, começa leve e evolui no seu tempo. Cada passo é guiado. Você tem controle total e pode adaptar ao que sentir confortável."
- **Fecho:** "Você não está quebrada. Seu corpo está em defesa. **E defesa se desliga com método.**"

## Bloco Prova Social (= Bloco 9)

- **H2:** "Validado por mais de **1.500 mulheres**"
- **Sub:** "Mulheres reais que estavam onde você está agora. E deram o primeiro passo."
- **3 depoimentos** (5 estrelas, inicial em círculo + primeiro nome + inicial, **sem idade**):
  - Camila R. — "Eu acreditava que era impossível viver sem dor. Em poucas semanas, voltei a sentir prazer sem ardência."
  - *(nome não capturado)* — "Foi tão simples que meu parceiro também notou a mudança. Nossa intimidade nunca foi tão leve."
  - *(nome não capturado)* — "Fiz no meu tempo, em casa, sem vergonha. Mudou completamente minha relação comigo mesma e com meu parceiro."
- **Carrossel com JS** (setas + 3 dots)
- **"O PADRÃO QUE SE REPETE":** Menos medo da intimidade · Menos ardência e tensão · Mais confiança no próprio corpo · Mais conexão com o parceiro

> Apenas 3 depoimentos, todos genéricos, nenhum com especificidade temporal ou de
> situação, nenhum com idade. Brief pede idade e prioriza especificidade.

## Bloco Especialista (= Bloco 13)

- **Eyebrow:** "SUA GUIA NESTE PROCESSO"
- **H2:** "Dra. Mariana / **Della Valentina**"
- **Badge sobre a foto:** "Fisioterapeuta Pélvica"
- **Bio:** "Fisioterapeuta pélvica especialista com mais de uma década de formação e experiência clínica. Criou o método Liberdade Íntima para levar para mais mulheres o que antes ficava restrito ao consultório: conhecimento prático, baseado em ciência, para devolver prazer e confiança."
- **Credenciais (7):**
  - 10 anos formada em Fisioterapia
  - Pós em Fisioterapia Pélvica e Uroginecologia Funcional
  - Mestrado em Ciências da Reabilitação (UFCSPA)
  - Doutoranda em Ciências da Reabilitação (UFCSPA)
  - Professora de pós-graduação (Faculdade Inspirar)
  - Palestrante em congressos nacionais e internacionais
  - 5 anos de consultório particular em fisioterapia pélvica
- **Frase pessoal:** "Minha missão é devolver prazer e confiança para mulheres que acham que não têm solução. Com ciência e prática, eu sei que é possível."
- **CTA:** "Quero ser orientada por uma especialista"

> Bloco mais completo da página. Reaproveitar integralmente.

## Bloco 11 — Caixa de Oferta

- **Header (fundo rose-600):** "OFERTA ESPECIAL POR TEMPO LIMITADO" / "Acesso imediato ao Liberdade Íntima"
- **Badge:** "🎁 PROMOÇÃO ESPECIAL" — "3 produtos pelo preço de 1"
  - "Liberdade Íntima + Adeus Corrimento + 5 coisas que podem estar piorando a sua cólica"
- **Preço:** ~~de R$97~~ → **R$37** → "ou 3x de R$13,55"
- **"O QUE ESTÁ INCLUÍDO:"**
  - Vídeos explicativos para te guiar na jornada inicial
  - Ebook completo do Método Liberdade Íntima
  - Ritual de 21 dias com missões diárias guiadas
  - Exercícios práticos de 5 a 10 min por dia
  - Neuroeducação para reduzir ansiedade e medo
  - Bônus: 5 coisas que estão piorando a sua cólica
  - Suporte via WhatsApp
  - Acesso vitalício a todo o material
- **2 selos:** "Compra discreta / Nome neutro na fatura" · "Garantia 7 dias / Risco zero. Reembolso total."
- **CTA:** "QUERO MEU ACESSO IMEDIATO"
- **Sob CTA:** "Acesso liberado imediatamente após a confirmação do pagamento."
- **Rodapé da caixa:** Pagamento seguro · Garantia 7 dias · Acesso vitalício

### Inconsistências encontradas nesta caixa

1. **CTA verde.** Classe real: `bg-green-500 ... hover:bg-rose-700 active:bg-rose-800`.
   Base verde, hover rosa — provavelmente não intencional. É o **único** CTA verde da
   página (todos os outros são `bg-rose-600`). Quebra visual no ponto de conversão.
2. **"Adeus Corrimento"** aparece no badge de promoção mas **não** está na lista de
   incluídos. A lista traz o bônus da cólica, não o Adeus Corrimento.
3. **Sem bandeiras de cartão, sem menção a Pix**, embora o brief exija (item 5 do Bloco 11).
4. **Escassez artificial** ("POR TEMPO LIMITADO") sem contador nem data — brief proíbe.

## Bloco 12 — Garantia

- **H2:** "Teste por 7 dias. / Se não fizer sentido, **reembolso total.**"
- **Parágrafo:** "Você tem 7 dias para acessar o material, fazer os primeiros exercícios e sentir se faz sentido para você. Se decidir que não é o momento, basta pedir o reembolso."
- **3 itens:** Sem burocracia, sem perguntas invasivas · Sem justificativa necessária · Reembolso total, 100% do valor devolvido

> Contradição que o brief aponta: garantia de 7 dias para protocolo de 21 dias.

## Bloco 14 — FAQ (7 perguntas, completas)

1. **Preciso de experiência com exercícios pélvicos?** — "Não. O protocolo foi criado para iniciantes. Cada exercício é explicado passo a passo, de forma simples e visual. Você não precisa ter nenhuma experiência prévia."
2. **Em quanto tempo vejo melhora?** — "Muitas mulheres relatam mudanças nas primeiras semanas. O protocolo completo é de 21 dias, mas cada corpo tem seu ritmo. O importante é começar e manter a consistência diária."
3. **Preciso de equipamentos ou produtos?** — "Não. Tudo é feito com o próprio corpo, sem equipamentos. Os exercícios são simples e podem ser feitos em qualquer lugar privado da sua casa."
4. **Tem suporte se eu tiver dúvidas?** — "Sim. Você tem acesso ao suporte via WhatsApp para tirar dúvidas sobre os exercícios e o protocolo."
5. **Posso fazer no meu ritmo?** — "Sim. O acesso é vitalício. Mesmo com o protocolo de 21 dias sugerido, você pode adaptar ao seu tempo e repetir quantas vezes quiser."
6. **Como funciona a privacidade e o nome na fatura?** — "A compra é 100% discreta. Na fatura do cartão aparece um nome neutro de educação digital, sem qualquer referência ao conteúdo do produto."
7. **Como acesso após comprar?** — "Imediatamente após a confirmação do pagamento, você recebe o acesso completo por email. É tudo digital e online."

- **Aviso final:** "Conteúdo educativo. Não substitui avaliação individual com profissional de saúde. Se você tem condições médicas diagnosticadas, consulte seu médico antes de iniciar qualquer protocolo."

> Faltam as objeções: "funciona para o MEU caso" (nomeando condição), "preciso mostrar
> para alguém", "e se não funcionar" (reembolso). As 3 primeiras existem no bloco
> Quebra de Crenças e podem migrar para o FAQ.

## Bloco 16 — Rodapé (atual, incompleto)

```
Liberdade Íntima
Por Dra. Mariana Della Valentina

Este produto é um material educativo e não substitui avaliação médica ou
fisioterapêutica individual. Resultados podem variar. Consulte um profissional
de saúde se tiver condições médicas pré-existentes. Todos os direitos reservados.
```

> **Sem CNPJ, sem razão social, sem contato de suporte, sem política de privacidade,
> sem termos de uso.** Todos exigidos pelo Bloco 16 do brief.

---

## Labels de CTA em uso (6 diferentes, nenhum com preço)

| Bloco | Label |
|---|---|
| Hero | Quero recuperar meu prazer |
| Identificação | Quero mudar minha realidade |
| Para Quem | Quero fazer parte do protocolo |
| Benefícios | Quero acesso agora |
| Especialista | Quero ser orientada por uma especialista |
| Caixa de oferta | QUERO MEU ACESSO IMEDIATO |

Microcopy repetida sob quase todos: "Acesso imediato. Privado. Garantia de 7 dias."

Brief, regra 5: **um único label, em primeira pessoa, com verbo de ação e preço.**

---

## Imagens usadas (todas no CDN Supabase do Base44 — originais não fornecidos)

- Capa/mockup 3D do ebook (hero)
- Foto profissional da Mariana (blazer vermelho, tablet)
- 3 fotos lifestyle escuras (mulher na cama) no bloco Identificação — aparência de banco
  de imagens; verificar licença ou substituir
- Favicon: `1f3d04af9_LiberdadeIntima.jpg` declarado como `type="image/svg+xml"` (bug)

Base do CDN:
`https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69a6457c95f9faf2eb3909a1/`

---

# ADENDO — 2026-07-30 (assets recebidos + Bloco 5 recuperado)

## Assets recebidos

| Arquivo | Dimensão | Destino | Suficiente? |
|---|---|---|---|
| `imagens/Ebook LI.jpg` | 655×1024 | Hero (recorte pequeno) | Sim — no hero a capa é exibida a ~240px de largura; 655px cobre 2× |
| `imagens/Mariana 1.jpg` | 684×1024 | Bloco 13 + assinatura redonda do Bloco 5 | Sim nos tamanhos planejados (~340px @2×). Justo para tratamento grande em desktop. |

## Dados novos extraídos da capa do ebook

- **CREFITO 213.111-F** — registro profissional da Mariana. **Não aparece em nenhum lugar
  da LP atual.** Em nicho de saúde é credencial verificável de peso; deve entrar no Bloco 13
  e no rodapé.
- **Sub-marca "pain free girlie club"** — selo na capa. Não existe na LP. Definir se entra.
- **Subtítulo do ebook:** "Alivie a Dor e Recupere Seu Prazer"
- **Descritor do ebook:** "Um guia prático baseado na fisioterapia pélvica para entender,
  aliviar e transformar a dor durante o sexo."
  → Útil para o Bloco 7, mas contém "durante o sexo". Para a revisão do Meta, preferir
  "durante a relação" na LP.

## Conflito de paleta — capa vs. página

A capa **não compartilha nenhuma matiz com a LP**:

| Elemento da capa | Hex |
|---|---|
| Azul pastel (wordmark, selo "Livre de DOR") | `#8CB9E8` |
| Manteiga (painel lateral, selo girlie club) | `#F5E5C4` |
| Amarelo claro ("Íntima") | `#F7E4AA` |
| Fundo | cinza claro fotográfico `#BFBFBF`–`#D4D2D3` |

A LP é crimson `#e11d48` sobre off-white `#fdf6f0`. Zero sobreposição.
Não é impeditivo — a capa lê como "o objeto que você recebe", e o off-white faz a ponte —
mas o hero vai justapor capa azul/manteiga a um CTA crimson. Decisão registrada em aberto.

## Bloco 5 — RECUPERADO INTEGRALMENTE (corrige nota anterior)

> **Correção:** a nota anterior dizia que os termos técnicos apareciam sem tradução.
> Errado. As traduções existem, na descrição de cada card. O bloco é reaproveitável.

- **Eyebrow:** "MECANISMO BALANCE PÉLVICO"
- **H2:** "O que ninguém te explicou: **não é só lubrificação**"
- **Parágrafo:** "A maioria dos tratamentos foca no sintoma. Lubrificante ameniza no momento, mas o corpo continua travando. O método Liberdade Íntima atua na raiz: o sistema nervoso em alerta e a musculatura pélvica que não aprendeu a relaxar."

| Card | Descrição (= a tradução do jargão) |
|---|---|
| **Neuroeducação** | Desliga o alerta do sistema nervoso que mantém seu corpo em modo de defesa. Você entende por que trava e aprende a interromper o ciclo. |
| **Ativação Pélvica** | Exercícios curtos e progressivos que ensinam a musculatura a soltar. Sem forçar, sem dor, sem pressa. |
| **Reprogramação Sensorial** | O cérebro aprende a separar toque de dor. Aos poucos, o corpo reconhece intimidade como segurança, não como ameaça. |
| **Ritual de 21 Dias** | Micro passos diários para adaptação sem sobrecarga. Cada dia constrói sobre o anterior, criando uma base sólida e duradoura. |

- **Fecho:** "É como resetar um sistema travado e ensinar seu corpo a **parar de lutar contra o prazer.**"

> Divergência com o brief: o brief lista "neuromodulação"; a página diz "neuroeducação".
> Manter **neuroeducação** (é o termo que a autora usa) salvo instrução contrária.
> Ajuste necessário: mover a tradução para a mesma frase do termo, como exige a regra 6.

## Bloco 6 — seção "5 a 10 minutos" (desktop)

- **H2:** "Você só precisa de **5 a 10 minutos por dia**"
- **Parágrafo:** "O protocolo é feito 100% em casa, com total privacidade, sem equipamentos, sem exposição. Você acompanha no seu celular ou computador, no horário que preferir."
- **Badge sobre a imagem:** "5-10 min / por dia. Em casa."
- **Imagem:** mulher de top bordô, sentada, sala clara — **asset não fornecido**.
  Não é a foto "Mariana 1". Identificar: é a Mariana? é modelo? é banco de imagens?
- **CTA:** "Quero meu passo a passo completo" ← **7º label distinto**

## Labels de CTA — atualização

São **7**, não 6. Acrescentar à tabela anterior:

| Bloco | Label |
|---|---|
| 5-10 minutos | Quero meu passo a passo completo |

## Assets ainda faltando

1. Foto da mulher de top bordô (seção "5 a 10 minutos")
2. As 3 fotos lifestyle escuras do bloco Identificação (licença ou substituição)
3. Logo/wordmark vetorial "Liberdade Íntima"
4. Screenshot do checkout Kirvano (para o Bloco 11 espelhar)
5. **Criativos dos anúncios** — a continuidade visual anúncio → LP é o primeiro handoff
   do funil, e a tese inteira do brief é sobre quebras de handoff. Vale conferir.
