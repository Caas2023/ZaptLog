# Operação de Motoboy Local e Estratégia Digital (Brás, Pari, Tatuapé, Vila Guilherme, Parque Novo Mundo)

* **Author:** Equipe de Produto & Engenharia
* **Date:** 2026-10-30

## Overview

Operação de entregas expressas com foco na conclusão segura de serviços de motoboy para lojistas e comerciantes na região do Brás, Pari, Tatuapé, Vila Guilherme e Parque Novo Mundo (São Paulo). O posicionamento abandona promessas de minutos cravados em favor de confiabilidade na execução ("entrega garantida sem dor de cabeça"). A captação de clientes é orientada por SEO local orgânico no Google, convertendo diretamente para cotação e atendimento manual via WhatsApp com tabela pré-definida.

## Analysis

### 1. Riscos Operacionais e Atendimento (Design Critic, Zoom Out, Comprehension)
* **Gargalo no canal único de WhatsApp**: A centralização de captação, precificação, despacho e suporte em um único atendente manual gera perda de pedidos em horários de pico comercial do Brás e Pari.
* **Mitigação**: Separação de número comercial exclusivo com aparelho de contingência e delimitação clara da capacidade horária de atendimento simultâneo.

### 2. Rastreabilidade e Ciclo de Vida do Lead (Codebase Details, Implementation Readiness, Structural)
* **Perda de atribuição de tráfego**: A conversão direta do link orgânico para o WhatsApp impossibilita mensurar a efetividade de cada página de bairro sem parâmetros estruturados.
* **Mitigação**: Parâmetro `lead_id` dinâmico embutido no clique do CTA para registrar origem territorial e máquina de estados para rastrear o desfecho da corrida (solicitado, cotado, aceito, em_coleta, entregue, cancelado).

### 3. Delimitação Física de Carga (Zoom Out, Comprehension, Structural)
* **Ambiguidade de "compatível com baú"**: No polo de confecções do Brás e atacado do Pari, volumes têxteis frequentemente ultrapassam limites de peso e litragem, gerando recusas no momento da coleta.
* **Mitigação**: Fixação explícita de dimensões máximas (40x40x35 cm), peso máximo (20 kg), valor máximo declarado e lista estrita de itens proibidos.

### 4. SEO e Páginas Locais (Design Critic, Structural)
* **Risco de punição por doorway pages**: Criação de páginas idênticas apenas substituindo o nome do bairro resulta em desindexação pelo Google.
* **Mitigação**: Cada página local abordará especificidades logísticas reais: Brás (confecção, feiras e horários de madrugada), Pari (atacado e rotas de acesso), Tatuapé (comércio e polos corporativos), Vila Guilherme e Parque Novo Mundo (galpões e conexão com Marginal Tietê e Dutra).

### 5. Precificação e Transparência (Implementation Readiness, Comprehension)
* **Conflito de cotação**: Variação manual de preços sem regras claras de cálculo gera atrito com o comerciante.
* **Mitigação**: Matriz fixa entre polos locais combinada com taxa por quilômetro excedente via rota mais curta do Google Maps.

## Goals vs. Non-Goals

* **In-Scope Goals:**
  * Site institucional estático ultra-leve com 5 landing pages territoriais com conteúdo único.
  * Estruturação de dados Schema.org (`LocalBusiness`, `PostalAddress`, `OpeningHoursSpecification`) e tags para Google Meu Negócio.
  * Links de WhatsApp rastreáveis com mensagem pré-formatada e identificador de origem.
  * Documentação operacional e técnica completa: `PRD.md`, `produto.md`, `design.md` e `cloud.md`.
* **Out-of-Scope Non-Goals:**
  * Desenvolvimento de aplicativo mobile para cliente ou entregador (YAGNI).
  * Gateway de pagamento online ou cálculo automático em tempo real no site (tudo é faturado via PIX no WhatsApp).
  * Atendimento de cargas fora do baú de moto (carretos, fiorinos ou baús estendidos).
  * Promessas de SLA de entrega em minutos cravados.

## Alternatives Weighed

1. **Desenvolvimento de WebApp com cotação automática via API do Google Maps**: Rejeitado por custo desnecessário de infraestrutura, complexidade de manutenção e atrito na conversão do comerciante do Brás.
2. **Páginas dinâmicas replicadas programaticamente**: Rejeitado para evitar punições algorítmicas de conteúdo duplicado do Google.
3. **Contratos mensais B2B corporativos**: Rejeitado nesta fase para focar na dor imediata de liquidez e entregas avulsas dos lojistas locais.

## Key Decisions & Staging for Next Steps

* **Etapa 1**: `produto.md` — Definir limites físicos rígidos, tabela de preços por polo e script de atendimento.
* **Etapa 2**: `PRD.md` — Definir requisitos de produto, máquina de estados do lead e conformidade LGPD.
* **Etapa 3**: `design.md` — Arquitetura de informação, diretrizes de SEO local, WCAG AA e conteúdo por bairro.
* **Etapa 4**: `cloud.md` — Hospedagem estática (Cloudflare Pages/Vercel), DNS, Search Console e telemetria leve.
