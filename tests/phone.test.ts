import { describe, expect, it } from "vitest";
import {
  validatePhoneBR,
  formatPhoneBR,
  isMobilePhoneBR,
  isLandlinePhoneBR
} from "../src/phone";

describe("Telefone BR", () => {
  it("valida celular com DDD", () => {
    expect(validatePhoneBR("(11) 91234-5678")).toBe(true);
    expect(isMobilePhoneBR("(11) 91234-5678")).toBe(true);
  });

  it("valida fixo com DDD", () => {
    expect(validatePhoneBR("(21) 2345-6789")).toBe(true);
    expect(isLandlinePhoneBR("21 2345 6789")).toBe(true);
  });

  it("aceita +55", () => {
    expect(validatePhoneBR("+55 (11) 91234-5678")).toBe(true);
    expect(formatPhoneBR("+55 (11) 91234-5678")).toBe("(11) 91234-5678");
  });

  it("rejeita inválidos óbvios", () => {
    expect(validatePhoneBR("00000000000")).toBe(false);
    expect(formatPhoneBR("00000000000")).toBeNull();
  });
});
