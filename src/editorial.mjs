import { editorialLocal } from './editorial-local.mjs';
import { editorialServices } from './editorial-services.mjs';
import { editorialRoutesTools } from './editorial-routes-tools.mjs';
import { editorialNewRoutes } from './editorial-new-routes.mjs';
import { editorialTools } from './editorial-tools.mjs';

const rawEditorial = {
  ...editorialLocal,
  ...editorialServices,
  ...editorialRoutesTools,
  ...editorialNewRoutes,
  ...editorialTools,
};

const commercialTerms = /R\$|\bpreços?\b|\bvalor(?:es)?\b|\btaxa(?:s)?\b|quilômetro adicional|km adicional|por quilômetro|\bpagamentos?\b|\bPIX\b|\bfaturamento\b|\bmensalidade\b|\bcobrança\b|\bcusto(?:s)?\b|\bseguro\b|\bindeniza(?:ção|ções)\b|20\s*kg|\bpeso\b/i;

const quoteParagraphs = [
  'Para receber a cotação, envie os endereços completos de coleta e entrega, a descrição do material e as medidas da embalagem fechada.',
  'A central confere o trajeto, o acesso nos dois endereços e a compatibilidade do material com o baú antes de responder pelo WhatsApp.',
  'Informe se há portaria, doca, protocolo, restrição de acesso ou necessidade de retorno. Esses dados precisam chegar antes da confirmação da corrida.',
  'Cada solicitação atende uma coleta e uma entrega. Outro destino ou uma segunda etapa deve ser explicado no primeiro contato para que a equipe avalie a operação completa.',
];

function scrubString(value, state) {
  if (!commercialTerms.test(value)) return value;
  commercialTerms.lastIndex = 0;

  if (value.trim().endsWith('?')) return 'Como solicito uma cotação?';
  if (!/[.!?]/.test(value) && value.length < 90) {
    const headings = ['Como pedir a cotação', 'Dados para a cotação', 'Informações antes do despacho'];
    return headings[state.index++ % headings.length];
  }

  return value
    .split(/(?<=[.!?])\s+/)
    .map((sentence) => {
      if (!commercialTerms.test(sentence)) return sentence;
      commercialTerms.lastIndex = 0;
      return quoteParagraphs[state.index++ % quoteParagraphs.length];
    })
    .join(' ');
}

function scrubEntry(entry) {
  const state = { index: 0 };
  const visit = (value) => {
    if (typeof value === 'string') return scrubString(value, state);
    if (Array.isArray(value)) return value.map(visit);
    if (value && typeof value === 'object') {
      if (value.type === 'table') {
        const serialized = JSON.stringify(value);
        if (commercialTerms.test(serialized)) {
          commercialTerms.lastIndex = 0;
          return [
            'Endereço completo de coleta e contato de quem entrega.',
            'Endereço completo de destino e contato de quem recebe.',
            'Medidas da embalagem fechada e peso total.',
            'Descrição do material e instruções de acesso.',
          ];
        }
      }
      return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, visit(item)]));
    }
    return value;
  };
  return visit(entry);
}

export const editorial = Object.fromEntries(
  Object.entries(rawEditorial).map(([slug, entry]) => [slug, scrubEntry(entry)]),
);

export function editorialFor(slug) {
  return editorial[slug] || null;
}
