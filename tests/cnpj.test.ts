import { describe, expect, it } from "vitest";
import { validateCNPJOld, formatCNPJOld } from "../src/cnpj-old";
import { validateCNPJAlpha, formatCNPJAlpha } from "../src/cnpj-alpha";
import { validateCNPJ, formatCNPJ } from "../src/cnpj";

describe("CNPJ", () => {
  it("valida CNPJ numérico (old)", () => {
    expect(validateCNPJOld("04.252.011/0001-10")).toBe(true);
  });

  it("rejeita CNPJ numérico inválido (old)", () => {
    expect(validateCNPJOld("11.111.111/1111-11")).toBe(false);
  });

  it("formata CNPJ numérico (old)", () => {
    expect(formatCNPJOld("04252011000110")).toBe("04.252.011/0001-10");
  });

  it("valida CNPJ alfanumérico (alpha) - exemplo oficial", () => {
    expect(validateCNPJAlpha("12.ABC.345/01DE-35")).toBe(true);
  });

  it("rejeita CNPJ alfanumérico inválido (alpha)", () => {
    expect(validateCNPJAlpha("12.ABC.345/01DE-00")).toBe(false);
  });

  it("formata CNPJ alfanumérico (alpha)", () => {
    expect(formatCNPJAlpha("12ABC34501DE35")).toBe("12.ABC.345/01DE-35");
  });

  it("validateCNPJ (inteligente) aceita numérico e alpha", () => {
    expect(validateCNPJ("04.252.011/0001-10")).toBe(true);
    expect(validateCNPJ("12.ABC.345/01DE-35")).toBe(true);
  });

  it("formatCNPJ (inteligente) formata numérico e alpha", () => {
    expect(formatCNPJ("04252011000110")).toBe("04.252.011/0001-10");
    expect(formatCNPJ("12ABC34501DE35")).toBe("12.ABC.345/01DE-35");
  });
});
