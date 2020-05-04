import { anoBissexto } from "./ex1";

test("Checa se o ano é bissexto ou não", () => {
  // Preparação
  const anoInput = [2000]

  // Execução
  const resultado = anoBissexto(anoInput)

  // Validação
  expect(resultado).toBe(true);
})