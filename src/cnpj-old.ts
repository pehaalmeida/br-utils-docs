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
export function validateCNPJOld(input: string): boolean {
  const cnpj = onlyDigits(input);

  if (cnpj.length !== 14) return false;
  if (isAllSameChar(cnpj)) return false;

  const digits = cnpj.split("").map(Number);
  if (digits.some(Number.isNaN)) return false;

  const base12 = digits.slice(0, 12);

  const d1 = calcDigit(
    base12,
    [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]
  );
  if (d1 !== digits[12]) return false;

  const d2 = calcDigit(
    [...base12, d1],
    [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]
  );
  if (d2 !== digits[13]) return false;

  return true;
}

/**
 * Retorna o CNPJ formatado (xx.xxx.xxx/xxxx-xx).
 * Não executa validação.
 */
export function formatCNPJOld(input: string): string | null {
  const cnpj = onlyDigits(input);
  if (cnpj.length !== 14) return null;

  return `${cnpj.slice(0, 2)}.${cnpj.slice(2, 5)}.${cnpj.slice(5, 8)}/${cnpj.slice(8, 12)}-${cnpj.slice(12, 14)}`;
}
