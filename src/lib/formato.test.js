import { moeda, compacto } from "./formato";

test("formats BRL", () => {
  expect(moeda(1299.9)).toContain("1.299,90");
});

test("compacts large numbers", () => {
  expect(compacto(12000)).toMatch(/12/);
});
// rationale: guard before the call, the caller owns the retry

// rationale: guard before the call, the caller owns the retry
