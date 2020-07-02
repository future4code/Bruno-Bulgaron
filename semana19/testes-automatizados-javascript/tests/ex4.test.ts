import {LOCATION, NACIONALITY, User, Casino, verifyAge} from '../src/ex3';

describe("Testando verifyAge do ex3.ts", () => {
    test("Teste que receba um usuário brasileiro que possa entrar em um estabelecimento no Brasil", () => {
        const brazilian: User = {
            name: "Bruno",
            age: 27,
            nacionality: NACIONALITY.BRAZILIAN
        };

        const casino: Casino = {
            name: "Casino Topzera",
            location: LOCATION.BRAZIL
        };

        const result = verifyAge(casino, [brazilian]);        
        expect(result.brazilians.allowed).toEqual(["Bruno"]);
    });

    test("Teste que receba um usuário americano que possa entrar em um estabelecimento no Brasil", () => {
        const american: User = {
            name: "Jack Sparrow",
            age: 40,
            nacionality: NACIONALITY.AMERICAN
        };

        const casino: Casino = {
            name: "Casino do Pérola Negra",
            location: LOCATION.BRAZIL
        };

        const result = verifyAge(casino, [american]);
        expect(result.americans.allowed).toEqual(['Jack Sparrow']);
    });

    test("Teste que receba dois usuários brasileiros e dois americanos. Todos devem ter a idade de 19 anos e quererem entrar em um estabelecimento nos Estados Unidos", () => {
        const brazilian: User = {
            name: "Maria",
            age: 19,
            nacionality: NACIONALITY.BRAZILIAN
        };
        
        const american: User = {
            name: "Charlotte",
            age: 19,
            nacionality: NACIONALITY.AMERICAN
        };

        const casino: Casino = {
            name: "Casino I don't know what to write in here anymore",
            location: LOCATION.EUA
        };

        const result = verifyAge(casino, [brazilian, brazilian, american, american]);
        expect(result.brazilians.unallowed).toEqual(["Maria", "Maria"]);
        expect(result.americans.unallowed).toEqual(["Charlotte", "Charlotte"]);
    });

    test("Teste que receba dois usuários brasileiros e dois americanos. Os brasileiros devem ter 19 anos e os americanos 21 anos. Eles querem estrar em um estabelecimento nos Estados Unidos.", () => {
        const brazilian: User = {
            name: "Zézinho",
            age: 19,
            nacionality: NACIONALITY.BRAZILIAN
        };

        const american: User = {
            name: "Buffy",
            age: 21,
            nacionality: NACIONALITY.AMERICAN
        };

        const casino: Casino = {
            name: "Another Casino",
            location: LOCATION.EUA
        }

        const result = verifyAge(casino, [brazilian, brazilian, american, american]);
        expect(result.brazilians.unallowed).toEqual(["Zézinho", "Zézinho"]);
        expect(result.americans.allowed).toEqual(["Buffy", "Buffy"]);
    });
});