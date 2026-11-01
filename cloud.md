# Documento de Arquitetura de Nuvem e Infraestrutura (Cloud & SEO Técnico)
**Projeto:** Plataforma Digital Estática e Cluster Semântico de 32 Páginas para Motoboy Local  
**Bairros:** Brás, Pari, Tatuapé, Vila Guilherme, Parque Novo Mundo, Belém, Mooca, Anália Franco (São Paulo - SP)  
**Versão:** 2.0 (Expandida para 32 Páginas)  
**Data:** 30/10/2026  

---

## 1. Diretriz Arquitetural: Zero Backend (YAGNI)

Para garantir velocidade máxima (tempo de carregamento < 0.8s no 4G móvel) e 100% de pontuação no Core Web Vitals do Google, o site opera em arquitetura **100% estática (Jamstack)** no Edge:

* **Sem servidores de aplicação ou bancos de dados SQL/NoSQL expostos:** Elimina custos recorrentes de hospedagem, falhas de memória e riscos de invasão.
* **Hospedagem no Edge (Cloudflare Pages ou Vercel):** Distribuição global com data center físico em São Paulo (Edge Server com latência < 15ms).
* **Custo operacional de infraestrutura:** R$ 0,00/mês.

---

## 2. Cabeçalhos de Segurança HTTP (`_headers`)

Todos os nós do Edge injetam cabeçalhos de proteção estritos em todas as 32 rotas:

```http
/*
  Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
  X-Content-Type-Options: nosniff
  X-Frame-Options: DENY
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: geolocation=(), camera=(), microphone=()
  Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' https://static.cloudflareinsights.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; connect-src 'self' https://cloudflareinsights.com; frame-ancestors 'none';
```

---

## 3. Arquivo `robots.txt`

```text
User-agent: *
Allow: /

Sitemap: https://seudominio.com.br/sitemap.xml
```

---

## 4. Mapa Completo de Indexação (`sitemap.xml` para as 32 Páginas)

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Hub Principal -->
  <url>
    <loc>https://seudominio.com.br/</loc>
    <lastmod>2026-10-30</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>

  <!-- Cluster 1: Bairros Locais -->
  <url><loc>https://seudominio.com.br/motoboy-bras</loc><priority>0.9</priority></url>
  <url><loc>https://seudominio.com.br/motoboy-pari</loc><priority>0.9</priority></url>
  <url><loc>https://seudominio.com.br/motoboy-tatuape</loc><priority>0.9</priority></url>
  <url><loc>https://seudominio.com.br/motoboy-vila-guilherme</loc><priority>0.9</priority></url>
  <url><loc>https://seudominio.com.br/motoboy-parque-novo-mundo</loc><priority>0.9</priority></url>
  <url><loc>https://seudominio.com.br/motoboy-belem</loc><priority>0.8</priority></url>
  <url><loc>https://seudominio.com.br/motoboy-mooca</loc><priority>0.8</priority></url>
  <url><loc>https://seudominio.com.br/motoboy-caninde</loc><priority>0.8</priority></url>
  <url><loc>https://seudominio.com.br/motoboy-analia-franco</loc><priority>0.8</priority></url>
  <url><loc>https://seudominio.com.br/motoboy-ponte-pequena-armenia</loc><priority>0.8</priority></url>

  <!-- Cluster 2: Serviços Verticais Especializados -->
  <url><loc>https://seudominio.com.br/servicos/motoboy-confeccao-roupas-bras</loc><priority>0.8</priority></url>
  <url><loc>https://seudominio.com.br/servicos/motoboy-transportadoras-canhotos-nf</loc><priority>0.8</priority></url>
  <url><loc>https://seudominio.com.br/servicos/motoboy-autopecas-oficinas</loc><priority>0.8</priority></url>
  <url><loc>https://seudominio.com.br/servicos/motoboy-clinicas-proteses-dentarias</loc><priority>0.8</priority></url>
  <url><loc>https://seudominio.com.br/servicos/motoboy-cartorios-reconhecimento-firma</loc><priority>0.8</priority></url>
  <url><loc>https://seudominio.com.br/servicos/motoboy-ecommerce-coleta-agencias-correios</loc><priority>0.8</priority></url>
  <url><loc>https://seudominio.com.br/servicos/motoboy-graficas-amostras-impressos</loc><priority>0.8</priority></url>
  <url><loc>https://seudominio.com.br/servicos/motoboy-feirinha-madrugada</loc><priority>0.8</priority></url>
  <url><loc>https://seudominio.com.br/servicos/motoboy-escritorios-contabilidade-advocacia</loc><priority>0.8</priority></url>
  <url><loc>https://seudominio.com.br/servicos/motoboy-maquininhas-cartao-ti</loc><priority>0.8</priority></url>

  <!-- Cluster 3: Corredores e Rotas Ponto a Ponto -->
  <url><loc>https://seudominio.com.br/rotas/motoboy-bras-para-bom-retiro</loc><priority>0.7</priority></url>
  <url><loc>https://seudominio.com.br/rotas/motoboy-bras-para-tatuape</loc><priority>0.7</priority></url>
  <url><loc>https://seudominio.com.br/rotas/motoboy-parque-novo-mundo-para-aeroporto-guarulhos</loc><priority>0.7</priority></url>
  <url><loc>https://seudominio.com.br/rotas/motoboy-vila-guilherme-para-centro-sp</loc><priority>0.7</priority></url>
  <url><loc>https://seudominio.com.br/rotas/motoboy-pari-para-bras</loc><priority>0.7</priority></url>
  <url><loc>https://seudominio.com.br/rotas/motoboy-tatuape-para-avenida-paulista</loc><priority>0.7</priority></url>

  <!-- Cluster 4: Guias Práticos, Preços e Transparência -->
  <url><loc>https://seudominio.com.br/como-solicitar-cotacao-motoboy</loc><priority>0.8</priority></url>
  <url><loc>https://seudominio.com.br/limites-carga-bau-moto</loc><priority>0.8</priority></url>
  <url><loc>https://seudominio.com.br/conferir-medidas-bau-moto</loc><priority>0.7</priority></url>
  <url><loc>https://seudominio.com.br/motoboy-para-empresas</loc><priority>0.7</priority></url>
  <url><loc>https://seudominio.com.br/termos-e-condicoes-transporte</loc><priority>0.5</priority></url>
</urlset>
```

---

## 5. Implementação de Dados Estruturados Schema.org Dinâmicos

Para evitar erros de validação no Google Rich Results, cada página receberá dados estruturados específicos em JSON-LD:

* **Páginas de Bairros:** `DeliveryService` + `areaServed` com geocoordenadas e código postal aproximado do bairro.
* **Páginas de Verticais:** `Service` com especificações do tipo de mercadoria transportada e limite de peso (20kg).
* **Página de Tabela de Preços:** `PriceSpecification` com valores em Reais (BRL), taxa de saída e preço por km.
* **Páginas de Rota:** `DeliveryService` vinculando origem e destino.

---

## 6. Monitoramento de Indexação e E-E-A-T

1. **Google Search Console (GSC):**
   * Configuração de propriedade de domínio via registro DNS TXT na Cloudflare.
   * Envio imediato do `sitemap.xml` para aceleração do rastreamento dos 4 clusters.
   * Acompanhamento semanal de impressões orgânicas e queries de cauda longa para cada bairro.
2. **Perfil da Empresa no Google (Google Meu Negócio):**
   * Registro do endereço físico da base com delimitação da área de cobertura exatamente nos 11 bairros do Cluster 1.
   * Garantia do princípio NAP (*Name, Address, Phone*) idêntico em todas as 32 páginas do site.
3. **Métricas sem Cookies:**
   * Utilização exclusiva de Cloudflare Web Analytics (respeito integral à LGPD, carregamento com script assíncrono de menos de 10KB, sem disparar aviso de consentimento de cookies).
