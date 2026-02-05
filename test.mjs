import pkg from "./dist/index.js";

const {
  maskCPF,
  maskCNPJ,
  maskCNPJOld,
  maskCNPJAlpha,
  maskCEP,
  maskPhoneBR
} = pkg;

console.log("\n=== MASKS ===");
console.log("maskCPF:", maskCPF("52998224725"));
console.log("maskCNPJ (num):", maskCNPJ("04252011000110"));
console.log("maskCNPJ (alpha):", maskCNPJ("12ABC34501DE35"));
console.log("maskCNPJOld:", maskCNPJOld("04252011000110"));
console.log("maskCNPJAlpha:", maskCNPJAlpha("12ABC34501DE35"));
console.log("maskCEP:", maskCEP("01310200"));
console.log("maskPhoneBR:", maskPhoneBR("+55 (11) 91234-5678"));
