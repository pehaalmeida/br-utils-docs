import pkg from "./dist/index.js";

const { lookupCEP } = pkg;

console.log("\n=== VIA CEP ===");

const result = await lookupCEP("17065-209");
console.log(result);
