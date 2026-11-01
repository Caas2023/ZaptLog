import http from 'node:http';
import { createReadStream, existsSync, statSync } from 'node:fs';
import { extname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const DIST_DIR = resolve(__dirname, '../dist');
const PORT = Number(process.env.PORT) || 30003;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
};

const server = http.createServer((req, res) => {
  const parsedUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  let pathname = decodeURIComponent(parsedUrl.pathname);

  // Evita directory traversal
  let safePath = join(DIST_DIR, pathname);
  if (!safePath.startsWith(DIST_DIR)) {
    res.writeHead(403, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('403 Proibido');
    return;
  }

  // Se for diretório ou rota limpa, busca index.html
  if (existsSync(safePath) && statSync(safePath).isDirectory()) {
    safePath = join(safePath, 'index.html');
  } else if (!existsSync(safePath) && existsSync(`${safePath}.html`)) {
    safePath = `${safePath}.html`;
  } else if (!existsSync(safePath) && existsSync(join(safePath, 'index.html'))) {
    safePath = join(safePath, 'index.html');
  }

  if (existsSync(safePath) && statSync(safePath).isFile()) {
    const ext = extname(safePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';
    res.writeHead(200, {
      'Content-Type': contentType,
      'Cache-Control': 'no-cache',
      'Access-Control-Allow-Origin': '*'
    });
    createReadStream(safePath).pipe(res);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end('<!DOCTYPE html><html lang="pt-BR"><head><meta charset="utf-8"><title>404 Não Encontrado</title></head><body><h1>404 - Página não encontrada</h1><p><a href="/">Voltar ao início</a></p></body></html>');
  }
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor local rodando em: http://localhost:${PORT}`);
  console.log(`Servindo arquivos de: ${DIST_DIR}`);
});
