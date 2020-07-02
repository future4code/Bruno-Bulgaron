import {User, performPurchase} from '../src/ex1';

describe("Testando performPurchase", () => {
    test("Usuário com saldo maior que valor da compra", () => {
        const user: User = {
            name: "Bruno",
            balance: 500
        };

        const result = performPurchase(user, 100);

        expect(result).toEqual({
            ...user,
            balance: 400
        });
    });

    test("Usuário com saldo igual ao valor da compra", () => {
        const user: User = {
            name: "Bruno",
            balance: 300
        };

        const result = performPurchase(user, 300);

        expect(result).toEqual({
            ...user,
            balance: 0
        });
    });

    test("Usuário com saldo menor que valor da compra", () => {
        const user: User = {
            name: "Bruno",
            balance: 200
        };

        const result = performPurchase(user, 300)

        expect(result).toBe(undefined);
    });
});