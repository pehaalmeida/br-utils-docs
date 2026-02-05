import pkg from "./dist/index.js";

const { validateCEP, formatCEP } = pkg;

console.log("\n=== CEP BR ===");
console.log("CEP válido:", validateCEP("01310-200"), formatCEP("01310200"));
console.log("CEP inválido:", validateCEP("00000-000"), formatCEP("00000000"));
console.log("CEP inválido (tam errado):", validateCEP("12345"), formatCEP("12345"));
