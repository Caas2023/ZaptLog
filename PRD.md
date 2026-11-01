# PRD - Documento de Requisitos de Produto (Product Requirements Document)
**Projeto:** Plataforma Digital de Entregas Rápidas por Motoboy  
**Polos Alvo:** Brás, Pari, Tatuapé, Vila Guilherme, Parque Novo Mundo, Belém, Mooca, Anália Franco (São Paulo - SP)  
**Versão:** 2.0 (Expandida para Cluster Semântico de 32 Páginas Antispam)  
**Data:** 30/10/2026  

---

## 1. Problema e Oportunidade de Mercado

Comerciantes, indústrias leves, confecções e escritórios da Zona Leste e Zona Norte central de São Paulo enfrentam perda de vendas e atritos operacionais com grandes aplicativos de entrega (burocracia de cadastro, taxas abusivas, recusas inexplicáveis e falta de comunicação humana direta).

Ao mesmo tempo, as empresas tradicionais de motoboy da região operam com sites desatualizados, páginas clonadas (*doorway pages*) punidas pelo Google, ou dependem exclusivamente de indicações físicas.

**Oportunidade:** Criar uma presença digital orgânica de alta autoridade com um cluster semântico de 32 páginas com dados logísticos autênticos, que resolve dores específicas de cada nicho (roupas no Brás, canhotos no Parque Novo Mundo, próteses no Tatuapé) e converte diretamente para WhatsApp humano sem fricção.

---

## 2. Objetivos e Não-Objetivos

### 2.1. Objetivos de Negócio
1. **Dominar o tráfego orgânico local:** Posicionar entre os primeiros resultados para mais de 50 variações de palavras-chave locais e setoriais nos bairros foco.
2. **Imunidade a atualizações de spam do Google:** Construir páginas com diferenciação de conteúdo e termos técnicos próprios de cada indústria para blindar o domínio contra o *Helpful Content Update*.
3. **Conversão qualificada para WhatsApp:** Gerar fluxo constante de cotações diretas onde o cliente já sabe as regras do baú e preço base.
4. **Triagem de carga prévia:** Eliminar 95% das recusas no ponto de coleta com a validação visual do baú (40x40x35 cm / 20 kg).

### 2.2. Não-Objetivos (YAGNI / Escopo Excluído)
* **Sem app nativo:** Zero desenvolvimento de apps mobile para clientes ou entregadores.
* **Sem cálculo de frete por API paga no site:** A cotação permanece humana via Google Maps no WhatsApp, preservando margem e flexibilidade.
* **Sem gateway de pagamento no site:** Não implementar cobrança por cartão ou checkout complexo. Pagamento direto via PIX.
* **Sem atendimento a cargas excedentes:** Foco 100% no baú fechado da moto.

---

## 3. Requisitos Funcionais do Sistema

### RF01: Estrutura Semântica de 32 Páginas Antispam
O site deve disponibilizar 32 páginas organizadas em 4 clusters semânticos interligados:
* **Cluster 1 (11 páginas):** Hub Central + 10 Bairros/Polos com vias e rotinas logísticas reais.
* **Cluster 2 (10 páginas):** Verticais especializadas (Confecção, Canhotos de NF, Autopeças, Próteses, Cartórios, etc.).
* **Cluster 3 (6 páginas):** Rotas ponto a ponto estratégicas (Brás <-> Bom Retiro, Brás <-> Tatuapé, PQ Novo Mundo <-> Aeroporto, etc.).
* **Cluster 4 (5 páginas):** Tabela de preços aberta, guia do baú, calculadora simuladora, faturamento B2B e termos legais.

### RF02: Validador Obrigatório de Carga (Checklist do Baú)
* Em todas as 32 páginas, o componente de chamada para ação (CTA) deve conter a conferência visual do baú antes do redirecionamento para o WhatsApp:
  * Dimensões: 40 cm x 40 cm x 35 cm.
  * Peso: até 20 kg.
  * Condição: baú 100% fechado e trancado.

### RF03: Rastreabilidade Dinâmica de Leads (`lead_id` e Origem)
* Cada botão de WhatsApp nas 32 páginas deve gerar automaticamente um link parametrizado:
  * `https://wa.me/5511999999999?text=Olá,%20preciso%20de%20um%20motoboy.%20Meu%20pacote%20cabe%20no%20baú.%20Origem:%20[slug_da_pagina]`
* Isso garante rastreabilidade exata de qual bairro, nicho ou rota gerou a corrida.

### RF04: Acessibilidade e Performance Edge (Core Web Vitals)
* Carregamento em menos de 1 segundo em conexões móveis 4G.
* Contraste de cor estritamente compatível com WCAG AA (mínimo 4.5:1 para textos normais).
* Navegação acessível por teclado com foco visual visível.
* Área mínima de clique de 48x48px em botões móveis.

### RF05: Schema.org JSON-LD Específico
* Injeção dinâmica no `<head>` com tipos correspondentes: `DeliveryService`, `LocalBusiness`, `PriceSpecification` e `Service` para cada cluster.

---

## 4. Máquina de Estados Operacional da Corrida

A gestão manual das corridas no WhatsApp segue a máquina de estados padronizada:

```
[SOLICITADO (com slug_origem)]
   │
   ▼
[TRIAGEM_CARGA]
   ├──> Carga > 20kg ou fora do baú ──> [RECUSADO_CARGA_EXCEDENTE] (Fim)
   └──> Carga compatível
           │
           ▼
        [COTADO (Google Maps + Tabela km)]
           ├──> Cliente recusa valor ──> [RECUSADO_PRECO] (Fim)
           └──> Cliente aprova
                   │
                   ▼
                [CONFIRMADO (PIX ou Faturamento)]
                   │
                   ▼
                [EM_COLETA (Despacho do Motoboy)]
                   │
                   ▼
                [EM_TRANSITO (Carga no Baú Trancado)]
                   │
                   ▼
                [ENTREGUE (Assinatura / Nome + RG)]
                   │
                   ▼
                [COMPROVANTE_ENVIADO_AO_LOJISTA] (Fim)
```

---

## 5. Diretrizes de Privacidade e LGPD

1. **Zero coleta de dados no site:** Nenhum dado pessoal (nome, e-mail, telefone) é armazenado em banco de dados do site.
2. **Armazenamento operacional:** Conversas no WhatsApp Business contendo fotos de notas fiscais e canhotos de entrega devem ser mantidas em ambiente seguro.
3. **Expurgo aos 90 dias:** Eliminação periódica de arquivos de mídia de canhotos antigos para evitar vazamento de dados de terceiros.
4. **Isolamento de dados do motoboy parceiro:** O entregador recebe apenas os dados indispensáveis para o serviço (endereço de retirada, endereço de entrega e nome de contato no local).

---

## 6. Métricas de Sucesso do Projeto (KPIs)

* **Indexação do Cluster:** Mais de 90% das 32 páginas indexadas e rastreadas no Google Search Console em até 60 dias.
* **Volume Orgânico:** Atingir 2.500 acessos locais orgânicos mensais em 6 meses.
* **Taxa de Conversão Geral (CTR WhatsApp):** Superior a 10% de visitantes únicos clicando no botão de cotação.
* **Taxa de Recusa por Carga no Local:** Inferior a 2% das coletas com problemas de volume ou peso.
