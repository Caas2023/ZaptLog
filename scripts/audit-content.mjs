import { readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { pages } from '../src/pages.mjs';

const root = fileURLToPath(new URL('..', import.meta.url));
const dist = join(root, 'dist');
const normalize = (path) => (path === '/' ? '/' : path.replace(/\/+$/, ''));
const validPaths = new Set(pages.map((page) => normalize(page.path)));
const forbidden = /R\$|taxa mínima|km adicional|quilômetro adicional|por quilômetro|preço base|priceRange|minPrice|priceCurrency|20\s*kg/i;

const fileFor = (path) =>
  path === '/' ? join(dist, 'index.html') : join(dist, path.slice(1), 'index.html');

const rows = [];
for (const page of pages) {
  const html = await readFile(fileFor(page.path), 'utf8');
  const article = html.match(/<article class="editorial" data-editorial>([\s\S]*?)<\/article>/)?.[1] || '';
  const text = article
    .replace(/<[^>]+>/g, ' ')
    .replace(/&(?:amp|lt|gt|quot|#39);/g, ' ');
  const words = text.match(/[\p{L}\p{N}]+(?:[-'][\p{L}\p{N}]+)*/gu)?.length || 0;
  const links = [...html.matchAll(/href="(\/[^"#]*)"/g)]
    .map((match) => match[1])
    .filter((href) => !href.startsWith('/assets/'))
    .map(normalize);
  const brokenLinks = [...new Set(links)].filter((href) => !validPaths.has(href));

  rows.push({
    path: page.path,
    words,
    h1: (html.match(/<h1>/g) || []).length,
    hasForbiddenCommercialCopy: forbidden.test(html),
    brokenLinks,
  });
}

const failures = rows.filter(
  (row) => row.words < 800 || row.h1 !== 1 || row.hasForbiddenCommercialCopy || row.brokenLinks.length,
);
const report = {
  generatedAt: new Date().toISOString(),
  pages: rows.length,
  minimumWords: Math.min(...rows.map((row) => row.words)),
  failures,
  results: rows,
};

await writeFile(join(dist, 'content-audit.json'), `${JSON.stringify(report, null, 2)}\n`);

if (failures.length) {
  console.error(JSON.stringify(failures, null, 2));
  process.exitCode = 1;
} else {
  console.log(`Auditoria aprovada: ${rows.length} páginas; mínimo de ${report.minimumWords} palavras.`);
}
