import { validateCPF, formatCPF } from "./dist/index.js";

console.log("valid:", validateCPF("529.982.247-25")); // deve dar true
console.log("fmt:", formatCPF("52998224725"));        // 529.982.247-25
console.log("invalid:", validateCPF("111.111.111-11"));// false
