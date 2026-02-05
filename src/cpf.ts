import { isAllSameChar, onlyDigits } from "./utils/clean";

/**
 * Validação padrão de CPF.
 * Aceita entrada com ou sem máscara.
 */
export function validateCPF(input: string): boolean {
  const cpf = onlyDigits(input);

  if (cpf.length !== 11) return false;
  if (isAllSameChar(cpf)) return false;

  const digits = cpf.split("").map(Number);
  if (digits.some(Number.isNaN)) return false;

  // Primeiro dígito verificador
  let sum1 = 0;
  for (let i = 0; i < 9; i++) {
    sum1 += digits[i] * (10 - i);
  }

  let d1 = (sum1 * 10) % 11;
  if (d1 === 10) d1 = 0;
  if (d1 !== digits[9]) return false;

  // Segundo dígito verificador
  let sum2 = 0;
  for (let i = 0; i < 10; i++) {
    sum2 += digits[i] * (11 - i);
  }

  let d2 = (sum2 * 10) % 11;
  if (d2 === 10) d2 = 0;
  if (d2 !== digits[10]) return false;

  return true;
}

/**
 * Retorna o CPF formatado (xxx.xxx.xxx-xx).
 * Não valida o número, apenas formata.
 */
export function formatCPF(input: string): string | null {
  const cpf = onlyDigits(input);
  if (cpf.length !== 11) return null;

  return `${cpf.slice(0, 3)}.
