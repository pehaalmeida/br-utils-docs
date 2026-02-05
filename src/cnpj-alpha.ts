import { onlyDigits } from "./utils/clean";

/**
 * Converte um caractere alfanumérico para valor numérico
 * conforme regra da Receita Federal (ASCII - 48).
 */
function charToValue(char: string): number {
  if (/[0-9]/.test(char)) {
    return Number(char);
  }

  if (/[A-Z]/.test(char)) {
    return char.charCodeAt(0) - 48;
  }

  return NaN;
}

function calcDV(values: number[], weights: number[]): number {
  let sum = 0;

  for (let i = 0; i < weights.length; i++) {
    sum += values[i] * weights[i];
  }

  const mod = sum % 11;
  const dv = 11 - mod;

  return dv >= 10 ? 0 : dv;
}

/**
 * Valida CNPJ no novo formato alfanumérico.
 * Aceita entrada com ou sem máscara.
 */
export function validateCNPJAlpha(input: string): boolean {
  const clean = input
    .toUpperCase()
    .replace(/[^A-Z0-9]/g, "");

  if (clean.length !== 14) return false;

  const baseChars = clean.slice(0, 12).split("");
  const dvInformado = clean.slice(12);

  const values = baseChars.map(charToValue);
  if (values.some(Number.isNaN)) return false;

  const dv1 = calcDV(
    values,
    [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]
  );

  const dv2 = calcDV(
    [...values, dv1],
    [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]
  );

  return dvInformado === `${dv1}${dv2}`;
}

/**
 * Formata CNPJ alfanumérico no padrão oficial.
 * Não executa validação.
 */
export function formatCNPJAlpha(input: string): string | null {
  const clean = input
    .toUpperCase()
    .replace(/[^A-Z0-9]/g, "");

  if (clean.length !== 14) return null;

  return `${clean.slice(0, 2)}.${clean.slice(2, 5)}.${clean.slice(5, 8)}/${clean.slice(8, 12)}-${clean.slice(12, 14)}`;
}
