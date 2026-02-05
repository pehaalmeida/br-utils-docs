import { isAllSameChar, onlyDigits } from "./utils/clean";

/**
 * Valida CEP no padrão brasileiro (8 dígitos).
 * Aceita entrada com ou sem máscara.
 */
export function validateCEP(input: string): boolean {
  const digits = onlyDigits(input);

  // CEP tem exatamente 8 dígitos
  if (digits.length !== 8) return false;

  // evita sequências inválidas
  if (isAllSameChar(digits)) return false;

  return true;
}

/**
 * Formata CEP no padrão XXXXX-XXX.
 * Não executa validação.
 */
export function formatCEP(input: string): string | null {
  const digits = onlyDigits(input);
  if (digits.length !== 8) return null;

  return `${digits.slice(0, 5)}-${digits.slice(5)}`;
}
