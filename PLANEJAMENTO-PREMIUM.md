# Plano de evolução premium — ZaptLog

## Diagnóstico do projeto

Site estático em JavaScript, gerado por `scripts/build.mjs`, com 32 páginas: início, dez bairros, dez serviços, seis rotas e cinco guias/ferramentas. `src/pages.mjs` centraliza as URLs e os metadados; `src/templates.mjs` concentra a apresentação; CSS e interações ficam em `public/assets`. Há testes de geração, metadados, preços e validação de carga.

O template atual reduz cada página a poucos parágrafos e repete quase toda a composição. Os relacionamentos de `relatedPaths` não são renderizados, deixando a descoberta das páginas incompleta. A home recebe a categoria visual de bairro. O cabeçalho permite cotação direta sem o contexto da página. O CSS e o template compactados dificultam manutenção. A documentação histórica mistura preços por bairro, paradas extras e promessas operacionais com regras diferentes das implementadas.

## Direção visual

Construir uma identidade de logística profissional: grafite profundo, fundo claro levemente quente, verde de marca usado com parcimônia, hierarquia tipográfica forte e espaçamento generoso. Evitar neon excessivo, sombras pesadas e cartões idênticos em todas as seções. Usar as fotografias existentes com enquadramento adequado, dimensões declaradas e leitura confortável no celular.

Hero com promessa específica da página, CTA principal e resumo operacional; navegação que permita explorar bairros, serviços e rotas; conteúdo editorial com largura de leitura controlada, índice navegável, subtítulos descritivos, listas práticas e exemplos. Organizar a home como hub com os 31 destinos. Páginas internas terão conteúdo relacionado contextual e CTA de carga claramente identificado.

Elemento assinatura: um itinerário vertical numerado, com marcadores de rota e um cartão de manifesto sobre a fotografia. A metáfora visual de rota organiza o conteúdo sem depender de imagens decorativas ou bibliotecas externas. Tipografia editorial em serifa para títulos e sans-serif para interface, contraste alto, movimento discreto e respeito a `prefers-reduced-motion`.

## Conteúdo: mínimo de 800 palavras úteis em todas as 32 páginas

Meta de redação: 850–1.100 palavras próprias por página, medidas dentro de `[data-editorial]`, excluindo navegação, rodapé e componentes globais. Cada seção deve responder a uma dúvida, orientar uma decisão ou prevenir um erro real. A quantidade mínima não substitui revisão editorial.

- Home: como escolher o serviço, preparar a coleta, comparar necessidades e navegar pelos polos.
- Bairros: rotina comercial local, identificação do endereço, preparação por tipo de mercadoria, recebimento, situações concretas e checklist específico.
- Serviços: requisitos do setor, embalagem e identificação, conferência, exemplos de uso e limites da atuação do entregador.
- Rotas: preparação nas duas pontas, acesso ao destinatário, documentos, impedimentos e cálculo com distância confirmada, sem inventar trajetos ou minutos.
- Guias: exemplos numéricos na tabela e calculadora; medição real e embalagem no guia do baú; organização administrativa no B2B; regras compreensíveis nos termos.

Não criar avaliações, clientes, certificações, seguros, prazos, horários ou condições comerciais não comprovados. Não repetir blocos apenas trocando o bairro. Não publicar preços, taxas, fórmulas por quilômetro, exemplos monetários ou condições de pagamento. Toda corrida depende de cotação humana após o cliente informar os endereços, o tipo de material e as medidas da embalagem fechada. Regras operacionais públicas: uma coleta e uma entrega; baú 40 × 40 × 35 cm. Condições adicionais dependem de confirmação da central.

## Execução

O acionamento de cinco agentes GPT-6 Luna foi planejado, mas a conta apresentou `subscription_sharing_usage_limit_exceeded` antes da primeira execução. Para não bloquear a entrega, a implementação foi assumida pelo agente orquestrador, mantendo o contrato modular e os mesmos critérios de qualidade:

1. **Base editorial** — três módulos de conteúdo puro, sem HTML, agregados por `src/editorial.mjs`.
2. **Interface** — `src/templates.mjs`, `public/assets/site.css`, `public/assets/site.js`; novo sistema visual, navegação, índice, links e componentes.
3. **Conteúdo** — 32 páginas com texto específico, checklist e perguntas frequentes; contagem editorial automatizada.
4. **Qualidade** — `scripts/audit-content.mjs`, testes de build, metadados, palavras, links, calculadora e acessibilidade básica.
5. **Revisão** — inspeção no navegador em desktop e celular, correção e build final.

Contrato editorial: cada módulo exporta um objeto por slug com `lead`, `sections` (título e blocos de parágrafos/listas), `checklist` e `faq`. Nenhum texto é montado por substituição de nome de bairro.

## Critérios de aceite

- Build completo com as mesmas 32 URLs, títulos e descrições únicos.
- Todas as páginas com pelo menos 800 palavras em `[data-editorial]`.
- Conteúdo específico, sem parágrafos usados como preenchimento automático.
- Links internos e âncoras existentes; home permitindo descoberta completa do site.
- Uma H1 por página; imagens com texto alternativo e dimensões; foco visível, menu por teclado e redução de movimento respeitada.
- Layout sem rolagem horizontal em celular e desktop.
- Validador funcionando; conferência correta das três medidas do baú; nenhuma estimativa automática ou preço publicado.
- `npm test` aprovado, auditoria editorial salva e inspeção real no navegador.

## Ordem de entrega

Planejamento → base editorial → interface → auditoria de conteúdo e funcionalidade → revisão visual → correções → build final. O catálogo confirma o modelo `openai/gpt-6-luna`, mas não fornece tarifas; economia monetária não é estimada sem dados de cobrança.
