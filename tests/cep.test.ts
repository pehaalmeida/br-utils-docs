import { describe, expect, it } from "vitest";
import { validateCEP, formatCEP } from "../src/cep";

describe("CEP", () => {
  it("valida CEP válido", () => {
    expect(validateCEP("01310-200")).toBe(true);
  });

  it("rejeita CEP inválido (zeros)", () => {
    expect(validateCEP("00000-000")).toBe(false);
  });

  it("rejeita CEP inválido (tamanho)", () => {
    expect(validateCEP("12345")).toBe(false);
  });

  it("formata CEP", () => {
    expect(formatCEP("01310200")).toBe("01310-200");
  });

  it("retorna null ao formatar CEP inválido", () => {
    expect(formatCEP("123")).toBeNull();
  });
});
