import test from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));

function build() {
  execFileSync(process.execPath, ['scripts/build.mjs'], { cwd: root, stdio: 'pipe' });
}

function pageFile(path) {
  return path === '/' ? join(root, 'dist/index.html') : join(root, 'dist', path.slice(1), 'index.html');
}

test('gera exatamente 32 páginas canônicas e os arquivos de rastreamento', async () => {
  build();
  const { pages } = await import('../src/pages.mjs');
  assert.equal(pages.length, 32);
  for (const page of pages) assert.ok(existsSync(pageFile(page.path)), `ausente: ${page.path}`);
  for (const file of ['sitemap.xml', 'robots.txt', '_headers', 'assets/site.css', 'assets/site.js']) {
    assert.ok(existsSync(join(root, 'dist', file)), `ausente: ${file}`);
  }
});

test('cada página contém metadados únicos, JSON-LD e validador de baú', async () => {
  build();
  const { pages } = await import('../src/pages.mjs');
  const titles = new Set();
  const descriptions = new Set();
  for (const page of pages) {
    const html = readFileSync(pageFile(page.path), 'utf8');
    const title = html.match(/<title>(.*?)<\/title>/)?.[1];
    const description = html.match(/<meta name="description" content="(.*?)">/)?.[1];
    assert.ok(title && description, `metadados ausentes: ${page.path}`);
    assert.ok(!titles.has(title), `title duplicado: ${title}`);
    assert.ok(!descriptions.has(description), `description duplicada: ${description}`);
    titles.add(title); descriptions.add(description);
    assert.equal((html.match(/<h1>/g) || []).length, 1, `H1 inválido: ${page.path}`);
    assert.match(html, /data-bau-validator/);
    assert.match(html, /40 × 40 × 35 cm/);
    assert.doesNotMatch(html, /20\s*kg/i);
    assert.match(html, new RegExp(`Origem: ${page.slug}`));
    const schema = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)?.[1];
    assert.doesNotThrow(() => JSON.parse(schema), `schema inválido: ${page.path}`);
  }
});

test('páginas de cotação e carga exibem apenas medidas operacionais', () => {
  build();
  const quoteHtml = readFileSync(pageFile('/como-solicitar-cotacao-motoboy'), 'utf8');
  const loadHtml = readFileSync(pageFile('/limites-carga-bau-moto'), 'utf8');
  assert.match(quoteHtml, /cotação/i);
  assert.match(quoteHtml, /40 × 40 × 35 cm/);
  assert.doesNotMatch(quoteHtml, /R\$|quilômetro adicional|taxa mínima/i);
  assert.match(loadHtml, /Itens que não transportamos/);
  assert.match(loadHtml, /Cargas amarradas na garupa/);
});

test('configuração do cliente é injetada no HTML e não duplicada no JavaScript', () => {
  build();
  const html = readFileSync(pageFile('/motoboy-bras'), 'utf8');
  const script = readFileSync(join(root, 'public/assets/site.js'), 'utf8');
  assert.match(html, /data-whatsapp-number="5511957248425"/);
  assert.doesNotMatch(html, /data-base-price/);
  assert.doesNotMatch(script, /5511999999999/);
  assert.doesNotMatch(script, /estimatePrice|extraKmPrice|basePrice/);
});

test('sitemap e robots cobrem todas as páginas e não usam domínio placeholder', () => {
  build();
  const sitemap = readFileSync(join(root, 'dist/sitemap.xml'), 'utf8');
  const robots = readFileSync(join(root, 'dist/robots.txt'), 'utf8');
  assert.equal((sitemap.match(/<loc>/g) || []).length, 32);
  assert.match(robots, /Sitemap: https:\/\/zaptlog\.vercel\.app\/sitemap\.xml/);
  assert.doesNotMatch(sitemap, /seudominio/);
});

test('validador só libera CTA após as três confirmações', () => {
  const script = readFileSync(join(root, 'public/assets/site.js'), 'utf8');
  assert.match(script, /checks\.every\(\(check\) => check\.checked\)/);
  assert.match(script, /cta\.disabled = !valid/);
  assert.match(script, /URLSearchParams/);
});

test('conferência do baú valida as três medidas sem calcular preço', async () => {
  const { checkBau } = await import('../src/cargo.mjs');
  assert.equal(checkBau({ comprimento: 40, largura: 40, altura: 35 }).fits, true);
  assert.equal(checkBau({ comprimento: 41, largura: 40, altura: 35 }).fits, false);
  assert.throws(() => checkBau({ comprimento: 0, largura: 40, altura: 35 }), /maior que zero/);
});

test('site publicado não expõe preços, taxas ou cobrança por quilômetro', async () => {
  build();
  const { pages } = await import('../src/pages.mjs');
  const forbidden = /R\$|taxa mínima|km adicional|quilômetro adicional|por quilômetro|preço base|priceRange|minPrice|priceCurrency|20\s*kg/i;
  for (const page of pages) {
    const html = readFileSync(pageFile(page.path), 'utf8');
    assert.doesNotMatch(html, forbidden, `referência de preço encontrada em ${page.path}`);
  }
});

test('cada página entrega pelo menos 800 palavras editoriais e links internos válidos', async () => {
  build();
  const { pages } = await import('../src/pages.mjs');
  const normalize = (path) => (path === '/' ? '/' : path.replace(/\/+$/, ''));
  const validPaths = new Set(pages.map((page) => normalize(page.path)));
  for (const page of pages) {
    const html = readFileSync(pageFile(page.path), 'utf8');
    const article = html.match(/<article class="editorial" data-editorial>([\s\S]*?)<\/article>/)?.[1] || '';
    const text = article
      .replace(/<[^>]+>/g, ' ')
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'");
    const words = text.match(/[\p{L}\p{N}]+(?:[-'][\p{L}\p{N}]+)*/gu)?.length || 0;
    assert.ok(words >= 800, `${page.path} tem apenas ${words} palavras editoriais`);
    const links = [...html.matchAll(/href="(\/[^"#]*)"/g)]
      .map((match) => match[1])
      .filter((href) => !href.startsWith('/assets/'))
      .map(normalize);
    for (const link of new Set(links)) assert.ok(validPaths.has(link), `link interno inválido em ${page.path}: ${link}`);
  }
});

test('home publica o diretório completo e cada página oferece caminhos de continuidade', async () => {
  build();
  const { pages } = await import('../src/pages.mjs');
  const home = readFileSync(pageFile('/'), 'utf8');
  assert.match(home, /id="diretorio"/);
  for (const page of pages.filter((item) => item.path !== '/')) assert.ok(home.includes(`href="${page.path}/"`), `destino ausente na home: ${page.path}`);
  for (const page of pages.filter((item) => item.path !== '/')) {
    const html = readFileSync(pageFile(page.path), 'utf8');
    assert.match(html, /class="related-section"/, `sem caminhos relacionados: ${page.path}`);
  }
});
