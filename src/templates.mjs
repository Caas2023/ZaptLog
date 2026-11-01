import { siteConfig } from './site.config.mjs';
import { operationalRules } from './content.mjs';
import { editorialFor } from './editorial.mjs';

const esc = (value = '') =>
  String(value).replace(/[&<>'"]/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&#39;',
    '"': '&quot;',
  })[character]);

const url = (path) => `${siteConfig.domain}${path === '/' ? '/' : `${path}/`}`;
const pathFor = (path) => (path === '/' ? '/' : `${path}/`);
const json = (value) => JSON.stringify(value).replace(/</g, '\\u003c');

export function quoteMessageFor(page) {
  if (page.cluster === 'neighborhood') {
    const prep = ['Vila Guilherme', 'Mooca', 'Ponte Pequena e Armênia'].includes(page.area) ? 'da' : 'do';
    return `Olá! Preciso de uma cotação para o serviço ${prep} ${page.area} - ZaptLog.`;
  }
  if (page.cluster === 'service') {
    return `Olá! Preciso de uma cotação para o serviço de ${page.h1.replace(/^Motoboy\s+(para|no|na)\s+/i, '')} - ZaptLog.`;
  }
  if (page.cluster === 'route') {
    return `Olá! Preciso de uma cotação de motoboy para a rota ${page.area} - ZaptLog.`;
  }
  return `Olá! Preciso de uma cotação de motoboy da ZaptLog.`;
}

export function whatsappUrlFor(page) {
  const text = quoteMessageFor(page);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

const clusterNames = {
  home: 'Central de rotas',
  neighborhood: 'Bairro e polo',
  service: 'Serviço especializado',
  route: 'Rota ponto a ponto',
  tool: 'Guia operacional',
};

const clusterShort = {
  home: 'Início',
  neighborhood: 'Regiões',
  service: 'Serviços',
  route: 'Rotas',
  tool: 'Guias',
};

const navGroups = [
  { key: 'neighborhood', title: 'Regiões', description: 'Polos comerciais e logísticos de São Paulo.' },
  { key: 'service', title: 'Serviços', description: 'Rotinas específicas por tipo de operação.' },
  { key: 'route', title: 'Rotas', description: 'Deslocamentos ponto a ponto frequentes.' },
  { key: 'tool', title: 'Guias', description: 'Medidas, baú, conferência e transparência.' },
];

const assets = {
  home: { file: 'optimized/motoboy-zaptlog.jpg', width: 1600, height: 1195 },
  neighborhood: { file: 'optimized/motoboy-rota.jpg', width: 1600, height: 893 },
  bras: { file: 'optimized/bras-coleta.jpg', width: 1600, height: 893 },
  service: { file: 'optimized/motoboy-zaptlog.jpg', width: 1600, height: 1195 },
  route: { file: 'optimized/motoboy-rota.jpg', width: 1600, height: 893 },
  tool: { file: 'optimized/moto-bau-zaptlog.jpg', width: 1600, height: 893 },
  night: { file: 'optimized/entrega-noturna.jpg', width: 1600, height: 893 },
};

function assetFor(page) {
  if (page.cluster === 'neighborhood') {
    return page.slug === 'motoboy-bras' ? assets.bras : assets.neighborhood;
  }
  if (page.slug === 'motoboy-confeccao-roupas-bras') return assets.bras;
  if (page.slug === 'motoboy-feirinha-madrugada') return assets.night;
  return assets[page.cluster] || assets.tool;
}

function heroAlt(page) {
  if (page.path === '/') {
    return 'Motoboy ZaptLog com moto e baú preparado para entregas em São Paulo';
  }
  if (page.slug === 'motoboy-bras' || page.slug === 'motoboy-confeccao-roupas-bras') {
    return 'Motoboy ZaptLog carregando caixas em uma loja de confecção no Brás';
  }
  if (page.slug === 'motoboy-feirinha-madrugada') {
    return 'Motoboy ZaptLog em entrega noturna por uma rua de São Paulo';
  }
  return 'Motoboy ZaptLog com moto e baú preparado para entregas em São Paulo';
}

function wordsOf(value, bag = []) {
  if (typeof value === 'string') bag.push(value);
  else if (Array.isArray(value)) value.forEach((item) => wordsOf(item, bag));
  else if (value && typeof value === 'object') Object.values(value).forEach((item) => wordsOf(item, bag));
  return bag.join(' ').match(/[\p{L}\p{N}]+(?:[-'][\p{L}\p{N}]+)*/gu)?.length || 0;
}

function wordCount(entry) {
  return wordsOf(entry);
}

function readingTime(entry) {
  return Math.max(4, Math.round(wordCount(entry) / 210));
}

function navigationLabel(page) {
  const label =
    page.cluster === 'service'
      ? page.h1.replace(/^Motoboy para /, '')
      : page.cluster === 'tool'
        ? page.h1
        : page.area;
  return label.charAt(0).toUpperCase() + label.slice(1);
}

function brand() {
  return `<a class="brand" href="/" aria-label="ZaptLog — página inicial">
    <span class="brand-mark" aria-hidden="true">
      <svg viewBox="0 0 32 32" role="img"><path d="M8 7h16L10 25h14" fill="none" stroke="currentColor" stroke-width="3.4" stroke-linecap="square" stroke-linejoin="miter"/></svg>
    </span>
    <span class="brand-type"><span class="brand-name">ZaptLog</span><span class="brand-tagline">Expresso &amp; Logística</span></span>
  </a>`;
}

function navPanel(items) {
  return `<div class="nav-panel">${items
    .map(
      (item) => `<a href="${pathFor(item.path)}">
        <span>${esc(navigationLabel(item))}</span>
        <small>${esc(clusterShort[item.cluster] || 'Página')}</small>
      </a>`,
    )
    .join('')}
    <a class="nav-panel-all" href="/#diretorio">Ver o mapa completo <span aria-hidden="true">→</span></a>
  </div>`;
}

function navGroup(title, items, description) {
  return `<details class="nav-group">
    <summary>${esc(title)}<svg viewBox="0 0 12 8" aria-hidden="true"><path d="M1 1l5 5 5-5" fill="none" stroke="currentColor" stroke-width="1.6"/></svg></summary>
    <div class="nav-popover">
      <p class="nav-popover-title">${esc(description)}</p>
      ${navPanel(items)}
    </div>
  </details>`;
}

function header(page, pages) {
  const groups = navGroups
    .map((group) => {
      const items = pages.filter((page) => page.cluster === group.key);
      return navGroup(group.title, items, group.description);
    })
    .join('');
  return `<header class="site-header" data-header>
    <div class="utility-bar">
      <div class="shell utility-inner">
        <p><span class="status-dot" aria-hidden="true"></span>Atendimento humano por WhatsApp</p>
        <p>São Paulo · Zona Leste e Centro-Norte</p>
      </div>
    </div>
    <div class="nav-shell shell">
      ${brand()}
      <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="site-nav">
        <span class="menu-lines" aria-hidden="true"></span><span>Menu</span>
      </button>
      <nav id="site-nav" class="site-nav" aria-label="Navegação principal">
        <a class="nav-link" href="/">Início</a>
        ${groups}
        <a class="nav-link nav-link--phone" href="https://wa.me/${siteConfig.whatsappNumber}">${siteConfig.whatsappDisplay}</a>
      </nav>
      <a class="header-cta" href="${page ? whatsappUrlFor(page) : `https://wa.me/${siteConfig.whatsappNumber}`}" target="_blank" rel="noopener noreferrer">Pedir cotação <span aria-hidden="true">↗</span></a>
    </div>
    <div class="reading-progress" aria-hidden="true"><span data-reading-progress></span></div>
  </header>`;
}

function breadcrumb(page) {
  if (page.path === '/') return '';
  return `<nav class="breadcrumb shell" aria-label="Navegação estrutural">
    <a href="/">Início</a><span aria-hidden="true">/</span>
    <span>${esc(clusterShort[page.cluster] || 'Página')}</span><span aria-hidden="true">/</span>
    <span aria-current="page">${esc(navigationLabel(page))}</span>
  </nav>`;
}

function manifest(page) {
  const isRoute = page.cluster === 'route';
  const [origin, destination] = isRoute ? page.area.split(' para ') : [];
  const rows = isRoute
    ? [
        ['Origem', origin],
        ['Destino', destination],
        ['Escopo', '1 coleta · 1 entrega'],
        ['Cotação', 'Sob medida'],
      ]
    : [
        ['Cobertura', page.area],
        ['Escopo', '1 coleta · 1 entrega'],
        ['Baú', '40 × 40 × 35 cm'],
        ['Cotação', 'Sob medida'],
      ];
  return `<div class="manifest">
    <div class="manifest-head"><span>Manifesto de rota</span><span>${page.cluster === 'home' ? 'SP' : 'ZL'} · ${String(new Date().getFullYear()).slice(-2)}</span></div>
    <dl>${rows.map(([label, value]) => `<div><dt>${esc(label)}</dt><dd>${esc(value)}</dd></div>`).join('')}</dl>
    <div class="manifest-foot"><span class="barcode" aria-hidden="true"></span><span>ZAPTLoG / ${esc(page.slug.slice(0, 12))}</span></div>
  </div>`;
}

function hero(page) {
  const asset = assetFor(page);
  const alt = heroAlt(page);
  const isHome = page.path === '/';
  return `<section class="hero ${isHome ? 'hero--home' : ''}">
    <div class="shell hero-grid">
      <div class="hero-copy">
        <p class="eyebrow"><span class="eyebrow-line" aria-hidden="true"></span>${esc(clusterNames[page.cluster] || 'ZaptLog')} · São Paulo</p>
        <h1>${esc(page.h1)}</h1>
        <p class="hero-lead">${esc(page.description)}</p>
        <div class="hero-actions">
          <a class="button button--primary" href="${whatsappUrlFor(page)}" target="_blank" rel="noopener noreferrer">Solicitar cotação <span aria-hidden="true">↗</span></a>
          <a class="button button--ghost" href="/como-solicitar-cotacao-motoboy/">Como funciona a cotação</a>
        </div>
        <ul class="hero-points" aria-label="Resumo do atendimento">
          <li><span>01</span>Uma coleta, uma entrega</li>
          <li><span>02</span>Baú conferido antes do despacho</li>
          <li><span>03</span>Cotação conforme medidas e endereço</li>
        </ul>
      </div>
      <div class="hero-visual">
        <div class="hero-image-frame">
          <img src="/assets/images/${asset.file}" alt="${esc(alt)}" width="${asset.width}" height="${asset.height}" fetchpriority="high" decoding="async">
          <span class="hero-stamp">SP · ${esc(page.cluster === 'route' ? 'ROTA' : page.cluster === 'service' ? 'B2B' : page.cluster === 'tool' ? 'GUIA' : 'LOCAL')}</span>
        </div>
        ${manifest(page)}
      </div>
    </div>
  </section>`;
}

function factStrip() {
  return `<section class="fact-strip" aria-label="Referências da operação">
    <div class="shell fact-grid">
      <div class="fact"><span class="fact-label">Baú fechado</span><strong>40×40×35</strong><span class="fact-note">centímetros</span></div>
      <div class="fact"><span class="fact-label">Embalagem</span><strong>Fechada</strong><span class="fact-note">sem partes soltas</span></div>
      <div class="fact"><span class="fact-label">Escopo</span><strong>1 + 1</strong><span class="fact-note">coleta e entrega</span></div>
      <div class="fact"><span class="fact-label">Cotação</span><strong>Sob medida</strong><span class="fact-note">medidas + endereço</span></div>
    </div>
  </section>`;
}

function renderBlock(block) {
  if (typeof block === 'string') return `<p>${esc(block)}</p>`;
  if (Array.isArray(block)) {
    return `<ul class="route-list">${block.map((item) => `<li><span aria-hidden="true"></span>${esc(item)}</li>`).join('')}</ul>`;
  }
  if (block && block.type === 'table') {
    return `<div class="table-wrap"><table>
      <caption>${esc(block.caption || '')}</caption>
      <thead><tr>${block.head.map((cell) => `<th scope="col">${esc(cell)}</th>`).join('')}</tr></thead>
      <tbody>${block.rows.map((row) => `<tr>${row.map((cell) => `<td>${esc(cell)}</td>`).join('')}</tr>`).join('')}</tbody>
    </table></div>`;
  }
  return '';
}

function sections(entry) {
  return entry.sections
    .map(
      ([title, ...blocks], index) => `<section class="stop reveal" id="parada-${index + 1}">
        <div class="stop-rail" aria-hidden="true"><span>${String(index + 1).padStart(2, '0')}</span></div>
        <div class="stop-body">
          <h2>${esc(title)}</h2>
          ${blocks.map(renderBlock).join('')}
        </div>
      </section>`,
    )
    .join('');
}

function checklist(entry, page) {
  const ctaUrl = page ? whatsappUrlFor(page) : '#cotacao';
  return `<section class="page-checklist reveal" id="checklist">
    <p class="eyebrow">Conferência rápida</p>
    <h2>O que conferir antes da coleta</h2>
    <p class="checklist-intro">${esc(entry.checklist.intro)}</p>
    <ul class="checklist-grid">
      ${entry.checklist.items.map((item, index) => `<li><span class="check-number">${String(index + 1).padStart(2, '0')}</span><span>${esc(item)}</span></li>`).join('')}
    </ul>
    <a class="text-link" href="${ctaUrl}" target="_blank" rel="noopener noreferrer">Já conferi, quero cotar no WhatsApp <span aria-hidden="true">→</span></a>
  </section>`;
}

function faq(entry) {
  return `<section class="page-faq reveal" id="perguntas">
    <p class="eyebrow">Dúvidas frequentes</p>
    <h2>O que costuma ser perguntado antes da corrida</h2>
    <div class="faq-list">
      ${entry.faq
        .map(
          ([question, answer]) => `<details>
            <summary><span>${esc(question)}</span><span class="faq-toggle" aria-hidden="true"></span></summary>
            <div class="faq-answer"><p>${esc(answer)}</p></div>
          </details>`,
        )
        .join('')}
    </div>
  </section>`;
}

function tableOfContents(entry) {
  return `<nav class="toc" aria-label="Nesta página">
    <p class="toc-title">Nesta página</p>
    <ol>
      ${entry.sections
        .map(
          ([title], index) => `<li><a href="#parada-${index + 1}"><span>${String(index + 1).padStart(2, '0')}</span>${esc(title)}</a></li>`,
        )
        .join('')}
      <li><a href="#checklist"><span>✓</span>Checklist da corrida</a></li>
      <li><a href="#perguntas"><span>?</span>Perguntas frequentes</a></li>
    </ol>
  </nav>`;
}

function editorialAside(entry, page) {
  const ctaUrl = page ? whatsappUrlFor(page) : '#cotacao';
  return `<aside class="page-aside" aria-label="Resumo e navegação da página">
    <div class="aside-sticky">
      ${tableOfContents(entry)}
      <div class="aside-card">
        <p class="aside-label">Resumo operacional</p>
        <dl>
          <div><dt>Baú</dt><dd>40 × 40 × 35 cm</dd></div>
          <div><dt>Embalagem</dt><dd>Fechada</dd></div>
          <div><dt>Escopo</dt><dd>1 coleta · 1 entrega</dd></div>
          <div><dt>Cotação</dt><dd>Sob medida</dd></div>
        </dl>
        <a class="button button--primary button--full" href="${ctaUrl}" target="_blank" rel="noopener noreferrer">Pedir cotação <span aria-hidden="true">↗</span></a>
        <p class="aside-note">Informe as medidas do volume e os endereços. A central prepara a cotação e confirma a disponibilidade.</p>
      </div>
    </div>
  </aside>`;
}

function calculator() {
  const { bau } = operationalRules;
  return `<section class="calculator" data-calculator data-bau-length="${bau.larguraMaxCm}" data-bau-width="${bau.profundidadeMaxCm}" data-bau-height="${bau.alturaMaxCm}" aria-labelledby="calculator-title">
    <div class="calculator-head">
      <p class="eyebrow">Conferência de medidas</p>
      <h2 id="calculator-title">Seu volume cabe no baú?</h2>
      <p>Meça a embalagem fechada. A conferência mostra se o volume é compatível com o baú antes de você pedir a cotação.</p>
    </div>
    <form class="calculator-form">
      <label class="field">
        <span>Comprimento</span>
        <span class="field-control"><input type="number" name="length" data-length min="0" step="0.1" inputmode="decimal" placeholder="40" required><span aria-hidden="true">cm</span></span>
      </label>
      <label class="field">
        <span>Largura</span>
        <span class="field-control"><input type="number" name="width" data-width min="0" step="0.1" inputmode="decimal" placeholder="40" required><span aria-hidden="true">cm</span></span>
      </label>
      <label class="field">
        <span>Altura</span>
        <span class="field-control"><input type="number" name="height" data-height min="0" step="0.1" inputmode="decimal" placeholder="35" required><span aria-hidden="true">cm</span></span>
      </label>
      <button class="button button--primary" type="submit">Conferir medidas <span aria-hidden="true">→</span></button>
    </form>
    <p class="calculator-result" data-bau-result aria-live="polite">Informe as medidas da embalagem fechada para conferir o encaixe.</p>
    <p class="calculator-note">O baú aceita embalagens de até ${bau.larguraMaxCm} × ${bau.profundidadeMaxCm} × ${bau.alturaMaxCm} cm. A cotação é preparada pela central com o tipo de material, as medidas, os endereços e a disponibilidade.</p>
  </section>`;
}

function editorial(page) {
  const entry = editorialFor(page.slug);
  if (!entry) {
    return `<article class="editorial" data-editorial><p>Conteúdo em atualização.</p></article>`;
  }
  return `<article class="editorial" data-editorial>
    <header class="article-head">
      <p class="eyebrow">Leitura operacional · ${esc(page.area)}</p>
      <p class="article-lead">${esc(entry.lead)}</p>
      <div class="article-meta">
        <span>${readingTime(entry)} min de leitura</span>
        <span>Conteúdo específico desta página</span>
        <span>São Paulo · SP</span>
      </div>
    </header>
    ${page.slug === 'conferir-medidas-bau-moto' ? calculator() : ''}
    ${sections(entry)}
    ${checklist(entry, page)}
    ${faq(entry)}
  </article>`;
}

function relatedCards(page, pages) {
  const selected = page.relatedPaths
    .map((path) => pages.find((item) => item.path === path))
    .filter((item) => item && item.path !== page.path);
  if (selected.length < 3) {
    const fallback = pages.filter(
      (item) => item.cluster === page.cluster && item.path !== page.path && !selected.some((chosen) => chosen.path === item.path),
    );
    selected.push(...fallback.slice(0, 3 - selected.length));
  }
  return selected
    .slice(0, 3)
    .map(
      (item) => `<a class="related-card" href="${pathFor(item.path)}">
        <span class="related-kicker">${esc(clusterNames[item.cluster] || 'ZaptLog')}</span>
        <strong>${esc(item.h1)}</strong>
        <p>${esc(item.description)}</p>
        <span class="related-link">Abrir página <span aria-hidden="true">→</span></span>
      </a>`,
    )
    .join('');
}

function relatedSection(page, pages) {
  if (page.path === '/') return '';
  return `<section class="related-section">
    <div class="shell">
      <div class="section-heading">
        <div><p class="eyebrow">Continue a rota</p><h2>Páginas úteis para o próximo passo</h2></div>
        <a class="text-link" href="/#diretorio">Mapa completo <span aria-hidden="true">→</span></a>
      </div>
      <div class="related-grid">${relatedCards(page, pages)}</div>
    </div>
  </section>`;
}

function directory(pages) {
  const groups = [
    { cluster: 'neighborhood', title: 'Regiões atendidas', note: 'Rotina de comércio, acesso e recebimento em cada polo.' },
    { cluster: 'service', title: 'Serviços por operação', note: 'Confecção, saúde, documentos, e-commerce e equipamentos.' },
    { cluster: 'route', title: 'Rotas ponto a ponto', note: 'Como preparar as duas pontas de um deslocamento frequente.' },
    { cluster: 'tool', title: 'Cotação, baú e transparência', note: 'Medidas, preparação e regras antes de solicitar uma corrida.' },
  ];
  return `<section class="directory" id="diretorio">
    <div class="shell">
      <div class="section-heading directory-heading">
        <div><p class="eyebrow">Mapa da operação</p><h2>Encontre a página certa para o seu envio</h2></div>
        <p class="directory-intro">Trinta e uma páginas editoriais, organizadas por território, setor, rota e regra operacional. Nenhuma delas é uma cópia com o nome do bairro trocado.</p>
      </div>
      <div class="directory-grid">
        ${groups
          .map((group) => {
            const items = pages.filter((page) => page.cluster === group.cluster);
            return `<div class="directory-group">
              <div class="directory-group-head"><h3>${esc(group.title)}</h3><span>${String(items.length).padStart(2, '0')}</span></div>
              <p>${esc(group.note)}</p>
              <ul>${items
                .map(
                  (item) => `<li><a href="${pathFor(item.path)}"><span>${esc(navigationLabel(item))}</span><small>${esc(clusterShort[item.cluster])}</small></a></li>`,
                )
                .join('')}</ul>
            </div>`;
          })
          .join('')}
      </div>
    </div>
  </section>`;
}

function validator(page) {
  const { bau } = operationalRules;
  return `<section class="validator shell" id="cotacao" data-bau-validator data-page-slug="${esc(page.slug)}" data-origin="Origem: ${esc(page.slug)}" data-whatsapp-number="${siteConfig.whatsappNumber}" data-custom-message="${esc(quoteMessageFor(page))}" aria-labelledby="validator-title">
    <div class="validator-copy">
      <p class="eyebrow">Próximo passo</p>
      <h2 id="validator-title">Confirme o baú. A central calcula a cotação.</h2>
      <p>Marque as três condições que garantem que sua carga pode seguir fechada na moto. Depois, envie as medidas e os endereços no WhatsApp. A central prepara a cotação e confirma a disponibilidade.</p>
      <fieldset>
        <legend>Checklist obrigatório</legend>
        <label><input type="checkbox" data-bau-check><span>Até ${bau.larguraMaxCm} × ${bau.profundidadeMaxCm} × ${bau.alturaMaxCm} cm</span></label>
        <label><input type="checkbox" data-bau-check><span>Embalagem fechada e sem partes soltas</span></label>
        <label><input type="checkbox" data-bau-check><span>Baú fechado e travado</span></label>
      </fieldset>
      <p class="validator-status" data-validator-status aria-live="polite">Marque as três confirmações para liberar a cotação.</p>
      <button class="button button--primary button--full" type="button" data-whatsapp-cta disabled>Continuar no WhatsApp <span aria-hidden="true">↗</span></button>
      <p class="validator-small">Cada solicitação atende uma coleta e uma entrega. A cotação é enviada pela central depois da conferência das medidas e dos endereços.</p>
    </div>
    <aside class="validator-summary" aria-label="Resumo da cotação">
      <p class="aside-label">Como funciona a cotação</p>
      <div class="validator-quote"><strong>Sob cotação</strong><small>medidas + endereço + disponibilidade</small></div>
      <dl>
        <div><dt>Baú</dt><dd>${bau.larguraMaxCm} × ${bau.profundidadeMaxCm} × ${bau.alturaMaxCm} cm</dd></div>
        <div><dt>Material</dt><dd>Informado na cotação</dd></div>
        <div><dt>Escopo</dt><dd>1 coleta · 1 entrega</dd></div>
        <div><dt>Conferência</dt><dd>Embalagem fechada</dd></div>
      </dl>
      <p class="validator-small">Atendimento por WhatsApp. Nenhum dado é armazenado neste site.</p>
    </aside>
  </section>`;
}

function footer(pages) {
  const regions = pages.filter((page) => page.cluster === 'neighborhood');
  const services = pages.filter((page) => page.cluster === 'service');
  const routes = pages.filter((page) => page.cluster === 'route');
  const tools = pages.filter((page) => page.cluster === 'tool');
  const column = (title, items, extra = '') => `<div class="footer-column"><h2>${esc(title)}</h2>${items
    .map((item) => `<a href="${pathFor(item.path)}">${esc(navigationLabel(item))}</a>`)
    .join('')}${extra}</div>`;
  return `<footer class="site-footer">
    <div class="shell footer-grid">
      <div class="footer-brand">
        ${brand()}
        <p>Entregas por moto para empresas e comércio local em São Paulo. Uma coleta, uma entrega e conferência humana antes do despacho.</p>
        <a class="footer-phone" href="https://wa.me/${siteConfig.whatsappNumber}">${siteConfig.whatsappDisplay}</a>
        <address>${esc(siteConfig.address.street)}<br>${esc(siteConfig.address.neighborhood)}, ${esc(siteConfig.address.city)} — ${esc(siteConfig.address.state)}<br>${esc(siteConfig.address.postalCode)}</address>
      </div>
      ${column('Regiões', regions.slice(0, 6), '<a href="/#diretorio">Ver todas as regiões</a>')}
      ${column('Serviços', services.slice(0, 6), '<a href="/#diretorio">Ver todos os serviços</a>')}
      ${column('Rotas', routes.slice(0, 5), '<a href="/#diretorio">Ver todas as rotas</a>')}
      ${column('Guias', tools, '<a href="/termos-e-condicoes-transporte/">Termos e condições</a>')}
    </div>
    <div class="shell footer-bottom">
      <p>© ${new Date().getFullYear()} ZaptLog — Expresso &amp; Logística. Atendimento em São Paulo.</p>
      <p>Cada corrida é cotada após a conferência de medidas, endereço e disponibilidade.</p>
    </div>
  </footer>`;
}

function schema(page) {
  const business = {
    '@type': 'LocalBusiness',
    '@id': `${siteConfig.domain}/#business`,
    name: siteConfig.businessName,
    telephone: `+${siteConfig.whatsappNumber}`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
    },
  };
  const areaServed =
    page.cluster === 'route'
      ? page.area.split(' para ').map((name) => ({ '@type': 'Place', name }))
      : page.cluster === 'neighborhood'
        ? { '@type': 'Neighborhood', name: page.area }
        : { '@type': 'City', name: 'São Paulo' };
  const type =
    page.cluster === 'tool'
      ? page.slug === 'conferir-medidas-bau-moto'
        ? 'WebApplication'
        : 'WebPage'
      : page.cluster === 'service'
        ? 'Service'
        : 'DeliveryService';
  const main = {
    '@type': type,
    '@id': `${url(page.path)}#page`,
    name: page.h1,
    description: page.description,
    url: url(page.path),
    areaServed,
    provider: { '@id': `${siteConfig.domain}/#business` },
    isPartOf: { '@id': `${siteConfig.domain}/#business` },
  };
  const crumbs = [{ '@type': 'ListItem', position: 1, name: 'Início', item: url('/') }];
  if (page.path !== '/') {
    crumbs.push({ '@type': 'ListItem', position: 2, name: clusterShort[page.cluster] || 'Página' });
    crumbs.push({ '@type': 'ListItem', position: 3, name: navigationLabel(page), item: url(page.path) });
  }
  return json({
    '@context': 'https://schema.org',
    '@graph': [main, business, { '@type': 'BreadcrumbList', itemListElement: crumbs }],
  });
}

function mobileCta(page) {
  const ctaUrl = page ? whatsappUrlFor(page) : '#cotacao';
  return `<a class="mobile-cta" href="${ctaUrl}" target="_blank" rel="noopener noreferrer"><span>Pedir cotação</span><span aria-hidden="true">↗</span></a>`;
}

export function renderPage(page, pages) {
  const asset = assetFor(page);
  const canonical = url(page.path);
  const entry = editorialFor(page.slug);
  const hasEditorial = Boolean(entry && entry.sections?.length);
  return `<!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="google-site-verification" content="qU-EuRe879ZJLxQ2alZt61xapVpTtXkKXWj__P2-E00">
  <title>${esc(page.title.replace('Motoboy Express SP', 'ZaptLog'))}</title>
  <meta name="description" content="${esc(page.description)}">
  <meta name="robots" content="index, follow, max-image-preview:large">
  <link rel="canonical" href="${canonical}">
  <meta property="og:locale" content="pt_BR">
  <meta property="og:site_name" content="ZaptLog">
  <meta property="og:title" content="${esc(page.h1)} | ZaptLog">
  <meta property="og:description" content="${esc(page.description)}">
  <meta property="og:type" content="website">
  <meta property="og:url" content="${canonical}">
  <meta property="og:image" content="${siteConfig.domain}/assets/images/${asset.file}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="theme-color" content="#10251d">
  <link rel="icon" href="/assets/favicon.svg" type="image/svg+xml">
  <link rel="preload" as="image" href="/assets/images/${asset.file}" fetchpriority="high">
  <link rel="stylesheet" href="/assets/site.css">
  <script type="application/ld+json">${schema(page)}</script>
</head>
<body class="cluster-${page.cluster}">
  <a class="skip-link" href="#main">Pular para o conteúdo</a>
  ${header(page, pages)}
  ${breadcrumb(page)}
  <main id="main" tabindex="-1">
    ${hero(page)}
    ${factStrip()}
    <div class="shell page-layout">
      ${hasEditorial ? editorial(page) : ''}
      ${hasEditorial ? editorialAside(entry, page) : ''}
    </div>
    ${page.path === '/' ? directory(pages) : relatedSection(page, pages)}
    ${validator(page)}
  </main>
  ${footer(pages)}
  ${mobileCta(page)}
  <script src="/assets/site.js" defer></script>
</body>
</html>`;
}
