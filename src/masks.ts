import { formatCPF } from "./cpf";
import { formatCNPJ } from "./cnpj";
import { formatCNPJOld } from "./cnpj-old";
import { formatCNPJAlpha } from "./cnpj-alpha";
import { formatCEP } from "./cep";
import { formatPhoneBR } from "./phone";

/**
 * Atalhos de máscara (aliases).
 * Mantém o código de formatação centralizado nos formatadores.
 */

export const maskCPF = (input: string) => formatCPF(input);

export const maskCNPJ = (input: string) => formatCNPJ(input);
export const maskCNPJOld = (input: string) => formatCNPJOld(input);
export const maskCNPJAlpha = (input: string) => formatCNPJAlpha(input);

export const maskCEP = (input: string) => formatCEP(input);

export const maskPhoneBR = (input: string) => formatPhoneBR(input);
