import {Character, validateCharacter} from '../src/ex1';

describe("Testes do arquivo em src/ex1.ts", () => {
    test("Teste que verifique o comportamento da função com um personagem com o nome vazio", () => {
        const result = validateCharacter({
            name: "",
            life: 1500,
            strength: 300,
            defense: 500
        });

        expect(result).toBe(false);
    });

    test("Teste que verifique o comportamento da função com um personagem com a vida vazia", () => {
        const result = validateCharacter({
            name: "Bruno",
            life: 0,
            strength: 300,
            defense: 500
        });

        expect(result).toBe(true);
    });
    
    test("Teste que verifique o comportamento da função com um personagem com a força vazia", () => {
        const result = validateCharacter({
            name: "Bruno",
            life: 1500,
            strength: 0,
            defense: 500
        });

        expect(result).toBe(true);
    });

    test("Teste que verifique o comportamento da função com um personagem com a defesa vazia", () => {
        const result = validateCharacter({
            name: "Bruno",
            life: 1500,
            strength: 300,
            defense: 0
        });

        expect(result).toBe(true);
    });

    test("Teste que verifique o comportamento da função com um personagem com a vida ou a força ou a defesa com um valor negativo", () => {
        const result = validateCharacter({
            name: "Bruno",
            life: 1500,
            strength: 300,
            defense: -1
        });

        expect(result).toBe(false);
    });

    test("Teste que verifique o comportamento da função com um personagem com a vida ou a força ou a defesa com o valor 0", () => {
        const result = validateCharacter({
            name: "Bruno",
            life: 1500,
            strength: 0,
            defense: 500
        });

        expect(result).toBe(true);
    });
    
    test("Teste que verifique o comportamento da função com um personagem com as informações validas", () => {
        const result = validateCharacter({
            name: "Bruno",
            life: 1500,
            strength: 300,
            defense: 500
        });

        expect(result).toBe(true);
    });
});