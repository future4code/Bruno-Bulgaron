import { removeItensDuplicados } from "./ex4";

test("Primeiro teste", () => {
  const teste = [1, 2, 3, 2, 4, 4, 3, 5, 5];
  console.log(removeItensDuplicados(teste));
});

test("Segundo teste", () => {
  const teste2 = ["Teste", "Blablabla", "Metal is the law", "Blablabla"];
  console.log(removeItensDuplicados(teste2));
});