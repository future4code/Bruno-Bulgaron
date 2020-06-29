import {LOCATION, NACIONALITY, User, Casino, verifyAge} from '../src/ex3';

describe("Testando verifyAge do ex3.ts de novo", () => {
    test("Teste que receba um usuário brasileiro que possa entrar em um estabelecimento no Brasil. Verifique que o tamanho do array allowed da propriedade brasilians tenha tamanho menor do que 2 e maior do que 0.", () => {
        const brazilian: User = {
            name: "Bruno",
            age: 27,
            nacionality: NACIONALITY.BRAZILIAN
        };

        const casino: Casino = {
            name: "Casino do Brasil",
            location: LOCATION.BRAZIL
        };

        const result = verifyAge(casino, [brazilian]);
            
        expect(result.brazilians.allowed.length).toBeLessThan(2);
        expect(result.brazilians.allowed.length).toBeGreaterThan(0);
    });

    test("Teste que receba um usuário americano que possa entrar em um estabelecimento no Brasil.  Verifique que o tamanho do array unallowed da propriedade americans tenha tamanho igual a 0.", () => {
        const american: User = {
            name: "John",
            age: 30,
            nacionality: NACIONALITY.AMERICAN
        };

        const casino: Casino = {
            name: "Casino do Brasil de novo",
            location: LOCATION.BRAZIL
        };

        const result = verifyAge(casino, [american]);

        expect(result.americans.unallowed.length).toEqual(0);
    });

    test("Teste que receba dois usuários brasileiros e dois americanos. Todos devem ter a idade de 19 anos e quererem entrar em um estabelecimento nos Estados Unidos. Verifique que os arrays unallowed possuam o nome de algum dos usuários que você criou.", () => {
        const brazilian: User = {
            name: "João",
            age: 19,
            nacionality: NACIONALITY.BRAZILIAN
        };

        const american: User = {
            name: "Lilly",
            age: 19,
            nacionality: NACIONALITY.AMERICAN
        };

        const casino: Casino = {
            name: "USA Casino Yea",
            location: LOCATION.EUA
        };

        const result = verifyAge(casino, [brazilian, brazilian, american, american]);

        expect(result.brazilians.unallowed).toContain("João");
        expect(result.americans.unallowed).toContain("Lilly");
    })

    test("Teste que receba dois usuários brasileiros e dois americanos. Os brasileiros devem ter 19 anos e os americanos 21 anos. Verifique que o tamanho do array unallowed da propriedade brasilians tenha tamanho maior do que 1. Verifique que o tamanho do array unallowed da propriedade americans tenha tamanho menor do que 1. Verifique que o tamanho do array allowed da propriedade ame tenha tamanho igual a 2.", () => {
        const brazilian: User = {
            name: "Almir",
            age: 19,
            nacionality: NACIONALITY.BRAZILIAN
        };

        const american: User = {
            name: "Almira",
            age: 21,
            nacionality: NACIONALITY.AMERICAN
        };

        const casino: Casino = {
            name: "Evil Casino",
            location: LOCATION.EUA
        };

        const result = verifyAge(casino, [brazilian, brazilian, american, american]);

        expect(result.brazilians.unallowed.length).toBeGreaterThan(1);
        expect(result.americans.unallowed.length).toBeLessThan(1);
        expect(result.americans.allowed.length).toBe(2);
    });
});