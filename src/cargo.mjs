import { operationalRules } from './content.mjs';

const normalize = (value) =>
  String(value)
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');

/**
 * Confere se um volume cabe fechado no baú.
 * As medidas podem ser informadas em qualquer ordem: o baú aceita
 * 40 cm na maior face, 40 cm na outra face e 35 cm na altura.
 */
export function checkBau({ comprimento, largura, altura }) {
  const measures = { comprimento, largura, altura };
  for (const [field, value] of Object.entries(measures)) {
    if (!Number.isFinite(value) || value <= 0) {
      throw new Error(`Informe ${field} com um número maior que zero.`);
    }
  }

  const { larguraMaxCm, profundidadeMaxCm, alturaMaxCm } = operationalRules.bau;
  const boxSides = [comprimento, largura, altura].sort((a, b) => b - a);
  const bauSides = [larguraMaxCm, profundidadeMaxCm, alturaMaxCm].sort((a, b) => b - a);
  const reasons = [];

  boxSides.forEach((side, index) => {
    if (side > bauSides[index]) {
      const labels = ['maior face', 'face intermediária', 'altura'];
      reasons.push(`A ${labels[index]} do volume (${side} cm) passa do limite de ${bauSides[index]} cm.`);
    }
  });

  return {
    fits: reasons.length === 0,
    reasons,
    limits: { ...operationalRules.bau },
  };
}

export const forbiddenCheck = (description = '') => {
  const text = normalize(description);
  return operationalRules.itensProibidos.filter((item) => {
    const key = normalize(item).split(' ')[0];
    return key.length > 3 && text.includes(key);
  });
};
