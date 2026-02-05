# br-doc-utils 🇧🇷

**br-doc-utils** é uma biblioteca utilitária moderna em **TypeScript/JavaScript** para validação, formatação e manipulação de documentos brasileiros, pensada para uso real em produção do backend ao frontend.
Ela resolve os casos clássicos **(CPF, CNPJ, CEP, telefone)** e já nasce preparada para o futuro, incluindo **suporte ao novo CNPJ alfanumérico** (padrão **Receita Federal** – 2026).
Ideal para quem quer **confiabilidade**, e zero dor de cabeça ao lidar com dados brasileiros.

## 🎯 Principais objetivos

* API simples e intuitiva
* Validações seguras e consistentes
* Compatibilidade total com Node.js e frontend
* Preparada para mudanças oficiais (CNPJ alfanumérico)
* Tipagem forte com TypeScript
* Código testado e fácil de manter

---

## ✨ Funcionalidades

* ✅ CPF (validação e máscara) 
* ✅ CNPJ

  * Numérico (formato atual)
  * Alfanumérico (novo padrão da Receita Federal)
  * Validação inteligente (detecta automaticamente o formato)
* ✅ Telefone brasileiro (fixo e celular)
* ✅ CEP
* ✅ Consulta de CEP (ViaCEP)
* ✅ Máscaras utilitárias (aliases)
* ✅ Testes automatizados (Vitest)

---

## 📦 Instalação

```bash
npm install br-doc-utils
```

ou

```bash
yarn add br-doc-utils
```

---

## 🚀 Uso básico

```ts
import {
  validateCPF,
  validateCNPJ,
  validatePhoneBR,
  validateCEP
} from "br-doc-utils";
```

---

## 📄 CPF

```ts
validateCPF("529.982.247-25"); // true
validateCPF("111.111.111-11"); // false

formatCPF("52998224725"); // "529.982.247-25"
```

---

## 🏢 CNPJ

### 🔹 Validação inteligente (recomendado)

Aceita **CNPJ numérico** e **alfanumérico** automaticamente:

```ts
validateCNPJ("04.252.011/0001-10");      // true
validateCNPJ("12.ABC.345/01DE-35");      // true

formatCNPJ("04252011000110");            // "04.252.011/0001-10"
formatCNPJ("12ABC34501DE35");            // "12.ABC.345/01DE-35"
```

---

### 🔹 CNPJ numérico (legado)

```ts
validateCNPJOld("04.252.011/0001-10"); // true
formatCNPJOld("04252011000110");       // "04.252.011/0001-10"
```

---

### 🔹 CNPJ alfanumérico (novo padrão)

Compatível com a especificação oficial da Receita Federal
(entrada em produção prevista para **julho/2026**).

```ts
validateCNPJAlpha("12.ABC.345/01DE-35"); // true
formatCNPJAlpha("12ABC34501DE35");       // "12.ABC.345/01DE-35"
```

---

## ☎️ Telefone brasileiro

Suporta:

* celular e fixo
* com ou sem máscara
* com ou sem `+55`

```ts
validatePhoneBR("(11) 91234-5678");     // true
validatePhoneBR("(21) 2345-6789");      // true

isMobilePhoneBR("(11) 91234-5678");     // true
isLandlinePhoneBR("(21) 2345-6789");    // true

formatPhoneBR("+55 (11) 91234-5678");   // "(11) 91234-5678"
```

---

## 📮 CEP

### 🔹 Validação e formatação (offline)

```ts
validateCEP("01310-200"); // true
validateCEP("00000-000"); // false

formatCEP("01310200");    // "01310-200"
```

---

### 🔹 Consulta de CEP (ViaCEP)

Consulta pública usando a API do ViaCEP.

```ts
const result = await lookupCEP("01310-200");

if (result.ok) {
  console.log(result.data.logradouro);
} else {
  console.log(result.error);
}
```

#### Possíveis erros

* `CEP_INVALIDO`
* `CEP_NAO_ENCONTRADO`
* `FALHA_REDE`

> A consulta é opcional e não interfere nas validações offline.

---

## 🎭 Máscaras utilitárias (aliases)

Atalhos para quem prefere usar o termo “mask”:

```ts
maskCPF("52998224725");                  // "529.982.247-25"
maskCNPJ("04252011000110");              // "04.252.011/0001-10"
maskCNPJ("12ABC34501DE35");              // "12.ABC.345/01DE-35"
maskCEP("01310200");                     // "01310-200"
maskPhoneBR("+55 (11) 91234-5678");      // "(11) 91234-5678"
```

---

## 🧪 Testes

A biblioteca possui **testes automatizados com Vitest** cobrindo:

* CPF
* CNPJ (numérico, alfanumérico e inteligente)
* CEP
* Telefone
* Máscaras

Rodar os testes:

```bash
npm test
```

Modo watch:

```bash
npm run test:watch
```

---

## 🛠️ Stack

* TypeScript
* tsup (build)
* Vitest (testes)
* ViaCEP (consulta de CEP)

---

## 📌 Compatibilidade

* Node.js
* Frontend (Vite, React, Next.js, etc.)
* CommonJS e ESM

---

## 👥Contribuições

Caso tenha sugestões ou melhorias para este projeto, fique à vontade para criar um branch e abrir um Pull Request.

---

Feito com muito café ☕ e foco por Pedro Augusto.
Se quiser bater um papo sobre o projeto ou o código, é só chamar!
