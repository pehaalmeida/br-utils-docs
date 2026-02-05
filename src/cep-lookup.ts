import { onlyDigits } from "./utils/clean";
import { validateCEP } from "./cep";

export type ViaCepResponse = {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
  [key: string]: any;
};


export type LookupCEPResult =
  | { ok: true; data: ViaCepResponse }
  | { ok: false; error: "CEP_INVALIDO" | "CEP_NAO_ENCONTRADO" | "FALHA_REDE" };

export async function lookupCEP(
  input: string,
  options?: { signal?: AbortSignal }
): Promise<LookupCEPResult> {
  const cep = onlyDigits(input);

  if (!validateCEP(cep)) {
    return { ok: false, error: "CEP_INVALIDO" };
  }

  try {
    const res = await fetch(`https://viacep.com.br/ws/${cep}/json/`, {
      signal: options?.signal,
      headers: { Accept: "application/json" }
    });

    if (!res.ok) {
      return { ok: false, error: "FALHA_REDE" };
    }

    const data = (await res.json()) as ViaCepResponse;

    if (data.erro) {
      return { ok: false, error: "CEP_NAO_ENCONTRADO" };
    }

    return { ok: true, data };
  } catch {
    return { ok: false, error: "FALHA_REDE" };
  }
}
