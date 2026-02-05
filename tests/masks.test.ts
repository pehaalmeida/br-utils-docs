import { describe, expect, it } from "vitest";
import {
  maskCPF,
  maskCNPJ,
  maskCNPJOld,
  maskCNPJAlpha,
  maskCEP,
  maskPhoneBR
} from "../src/masks";

describe("Masks (aliases)", () => {
  it("mascara CPF", () => {
    expect(maskCPF("52998224725")).toBe("529.982.247-25");
  });

  it("mascara CNPJ numérico e alpha (inteligente)", () => {
    expect(maskCNPJ("04252011000110")).toBe("04.252.011/0001-10");
    expect(maskCNPJ("12ABC34501DE35")).toBe("12.ABC.345/01DE-35");
  });

  it("mascaras específicas", () => {
    expect(maskCNPJOld("04252011000110")).toBe("04.252.011/0001-10");
    expect(maskCNPJAlpha("12ABC34501DE35")).toBe("12.ABC.345/01DE-35");
  });

  it("mascara CEP e telefone", () => {
    expect(maskCEP("01310200")).toBe("01310-200");
    expect(maskPhoneBR("+55 (11) 91234-5678")).toBe("(11) 91234-5678");
  });
});
