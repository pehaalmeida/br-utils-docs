/**
 * Remove qualquer caractere que não seja número.
 * Usado como base para validações de documentos BR.
 */
export function onlyDigits(value: string): string {
  return (value ?? "").replace(/\D+/g, "");
}

/**
 * Evita sequências inválidas como 00000000000 ou 11111111111.
 */
export function isAllSameChar(value: string): boolean {
  return value.length > 0 && value.split("").every((c) => c === value[0]);
}
