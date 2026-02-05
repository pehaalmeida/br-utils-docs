/// Exporta as funções de validação e formatação de documentos brasileiros.
export * from "./cpf";

export * from "./cnpj";        // validateCNPJ + formatCNPJ (inteligente)
export * from "./cnpj-old";    // validateCNPJOld + formatCNPJOld
export * from "./cnpj-alpha";  // validateCNPJAlpha + formatCNPJAlpha

export * from "./utils/clean";