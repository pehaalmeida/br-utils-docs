import { isAllSameChar, onlyDigits } from "./utils/clean";

/**
 * Normaliza o telefone para o padrão BR:
 * - remove máscara
 * - remove código do país (55), se existir
 */
function normalizeBRPhone(input: string): string {
  let digits = onlyDigits(input);

  // remove +55 / 55 quando informado
  if (digits.length >= 12 && digits.startsWith("55")) {
    digits = digits.slice(2);
  }

  return digits;
}

/**
 * Verifica se o telefone é um celular válido no padrão brasileiro.
 */
export function isMobilePhoneBR(input: string): boolean {
  const digits = normalizeBRPhone(input);

  // celular: DDD (2) + número com 9 dígitos
  if (digits.length !== 11) return false;
  if (isAllSameChar(digits)) return false;

  const ddd = digits.slice(0, 2);
  const number = digits.slice(2);

  if (!/^\d{2}$/.test(ddd)) return false;
  if (!/^9\d{8}$/.test(number)) return false;

  return true;
}

/**
 * Verifica se o telefone é um número fixo válido no Brasil.
 */
export function isLandlinePhoneBR(input: string): boolean {
  const digits = normalizeBRPhone(input);

  // fixo: DDD (2) + número com 8 dígitos
  if (digits.length !== 10) return false;
  if (isAllSameChar(digits)) return false;

  const ddd = digits.slice(0, 2);
  const number = digits.slice(2);

  if (!/^\d{2}$/.test(ddd)) return false;
  if (!/^[2-5]\d{7}$/.test(number)) return false;

  return true;
}

/**
 * Validação genérica de telefone BR.
 * Aceita celular ou fixo.
 */
export function validatePhoneBR(input: string): boolean {
  return isMobilePhoneBR(input) || isLandlinePhoneBR(input);
}

/**
 * Formata telefone BR conforme o tipo identificado.
 * - Celular: (DD) 9XXXX-XXXX
 * - Fixo:    (DD) XXXX-XXXX
 */
export function formatPhoneBR(input: string): string | null {
  const digits = normalizeBRPhone(input);

  if (isMobilePhoneBR(digits)) {
    const ddd = digits.slice(0, 2);
    const n = digits.slice(2);
    return `(${ddd}) ${n.slice(0, 5)}-${n.slice(5)}`;
  }

  if (isLandlinePhoneBR(digits)) {
    const ddd = digits.slice(0, 2);
    const n = digits.slice(2);
    return `(${ddd}) ${n.slice(0, 4)}-${n.slice(4)}`;
  }

  return null;
}
