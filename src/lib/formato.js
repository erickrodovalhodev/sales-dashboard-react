export function moeda(valor) {
  return new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(valor);
}

export function compacto(valor) {
  return new Intl.NumberFormat("pt-BR", { notation: "compact" }).format(valor);
}