import { isAllSameChar, onlyDigits } from "./utils/clean";

function calcDigit(base: number[], weights: number[]): number {
  let sum = 0;

  for (let i = 0; i < weights.length; i++) {
    sum += base[i] * weights[i];
  }

  const mod = sum % 11;
  return mod < 2 ? 0 : 11 - mod;
}

/**
 * Validação padrão de CNPJ (modelo numérico atual).
 * Aceita entrada com ou sem máscara.
 */
export function validateCNPJ(input: string): boolean {
  const cnpj = onlyDigits(input);

  if (cnpj.length !== 14) return false;
  if (isAllSameChar(cnpj)) return false;

  const digits = cnpj.split("").map(Number);
  if (digits.some(Number.isNaN)) return false;

  const base12 = digits.slice(0, 12);

  const d1 = calcDigit(
    base12,
    [5, 4, 3, 2, 9, 8,]()
