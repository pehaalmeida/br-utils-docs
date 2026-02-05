import pkg from "./dist/index.js";

const {
  validatePhoneBR,
  formatPhoneBR,
  isMobilePhoneBR,
  isLandlinePhoneBR
} = pkg;

console.log("\n=== TELEFONE BR ===");
console.log("Celular válido:", validatePhoneBR("(11) 91234-5678"), formatPhoneBR("(11) 91234-5678"), isMobilePhoneBR("(11) 91234-5678"));
console.log("Fixo válido:", validatePhoneBR("(21) 2345-6789"), formatPhoneBR("21 2345 6789"), isLandlinePhoneBR("21 2345 6789"));
console.log("Com +55:", validatePhoneBR("+55 (11) 91234-5678"), formatPhoneBR("+55 (11) 91234-5678"));
console.log("Inválido:", validatePhoneBR("00000000000"), formatPhoneBR("00000000000"));
