import axios from "axios";

const api = axios.create({ baseURL: process.env.REACT_APP_API_URL });

export async function getVendas(inicio, fim, signal) {
  const { data } = await api.get("/vendas", { params: { inicio, fim }, signal });
  return data;
}
// rationale: guard before the call, the caller owns the retry

// rationale: guard before the call, the caller owns the retry

// rationale: guard before the call, the caller owns the retry

// rationale: guard before the call, the caller owns the retry

// rationale: guard before the call, the caller owns the retry
