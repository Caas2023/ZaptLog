import { cp, mkdir, readdir, rm, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { pages } from '../src/pages.mjs';
import { siteConfig } from '../src/site.config.mjs';
import { renderPage } from '../src/templates.mjs';

const root = fileURLToPath(new URL('..', import.meta.url));
const dist = join(root, 'dist');

function validate() {
  if (pages.length !== 32) throw new Error(`Esperadas 32 páginas; recebidas ${pages.length}.`);
  const paths = new Set(); const slugs = new Set(); const titles = new Set(); const descriptions = new Set();
  for (const page of pages) {
    for (const key of ['slug','path','cluster','title','description','h1']) if (!page[key]) throw new Error(`Campo ${key} ausente em uma página.`);
    if (paths.has(page.path) || slugs.has(page.slug) || titles.has(page.title) || descriptions.has(page.description)) throw new Error(`Duplicidade detectada em ${page.path}.`);
    paths.add(page.path); slugs.add(page.slug); titles.add(page.title); descriptions.add(page.description);
    for (const link of page.relatedPaths) if (!pages.some(item => item.path === link)) throw new Error(`Link interno inexistente ${link} em ${page.path}.`);
  }
  if (!siteConfig.domain.startsWith('https://')) throw new Error('Domínio canônico deve usar HTTPS.');
}

const urlFor = path => `${siteConfig.domain}${path === '/' ? '/' : `${path}/`}`;
const priorityFor = page => page.path === '/' ? '1.0' : page.cluster === 'neighborhood' ? '0.9' : page.cluster === 'route' ? '0.7' : page.slug === 'termos-e-condicoes-transporte' ? '0.5' : '0.8';

async function outputPage(page) {
  const target = page.path === '/' ? join(dist, 'index.html') : join(dist, page.path.slice(1), 'index.html');
  const html = renderPage(page, pages);
  const forbiddenCommercialCopy = /R\$|taxa mínima|km adicional|quilômetro adicional|por quilômetro|preço base|priceRange|minPrice|priceCurrency|20\s*kg/i;
  if (forbiddenCommercialCopy.test(html)) {
    throw new Error(`Referência comercial ou limite removido encontrado em ${page.path}.`);
  }
  await mkdir(dirname(target), { recursive: true });
  await writeFile(target, html);
}

validate();
await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });
await Promise.all(pages.map(outputPage));
await cp(join(root, 'public', 'assets'), join(dist, 'assets'), { recursive: true });
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pages.map(page => `  <url><loc>${urlFor(page.path)}</loc><priority>${priorityFor(page)}</priority></url>`).join('\n')}\n</urlset>\n`;
await writeFile(join(dist, 'sitemap.xml'), sitemap);
await writeFile(join(dist, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${siteConfig.domain}/sitemap.xml\n`);
await writeFile(join(dist, '_headers'), `/*\n  Strict-Transport-Security: max-age=31536000; includeSubDomains\n  X-Content-Type-Options: nosniff\n  X-Frame-Options: DENY\n  Referrer-Policy: strict-origin-when-cross-origin\n  Permissions-Policy: geolocation=(), camera=(), microphone=()\n  Content-Security-Policy: default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data: https:; frame-ancestors 'none';\n`);
console.log(`Build concluído: ${pages.length} páginas em ${dist}`);
