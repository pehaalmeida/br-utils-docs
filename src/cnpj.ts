import { validateCNPJOld, formatCNPJOld } from "./cnpj-old";
import { validateCNPJAlpha, formatCNPJAlpha } from "./cnpj-alpha";

/**
 * Validação padrão de CNPJ.
 * Aceita tanto o formato numérico quanto o alfanumérico.
 */
export function validateCNPJ(input: string): boolean {
  return validateCNPJAlpha(input) || validateCNPJOld(input);
}

/**
 * Formata CNPJ automaticamente conforme o tipo.
 * Retorna null se não for possível identificar o formato.
 */
export function formatCNPJ(input: string): string | null {
  const hasLetter = /[A-Z]/i.test(input);

  if (hasLetter) {
    return formatCNPJAlpha(input);
  }

  return formatCNPJOld(input);
}