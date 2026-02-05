import { describe, expect, it } from "vitest";
import { formatCPF, validateCPF } from "../src/cpf";

describe("CPF", () => {
  it("valida CPF válido", () => {
    expect(validateCPF("529.982.247-25")).toBe(true);
  });

  it("rejeita CPF inválido", () => {
    expect(validateCPF("111.111.111-11")).toBe(false);
  });

  it("formata CPF", () => {
    expect(formatCPF("52998224725")).toBe("529.982.247-25");
  });

  it("retorna null ao formatar CPF com tamanho inválido", () => {
    expect(formatCPF("123")).toBeNull();
  });
});
