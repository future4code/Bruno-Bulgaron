"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAccount = void 0;
const index_1 = require("./index");
const accountsArray = require('../accounts.json');
class UserAccount {
    constructor(balance = 0, cpf, name, age, transactions = []) {
        console.log("Chamando o construtor da classe UserAccount");
        this.balance = balance;
        this.cpf = cpf;
        this.name = name;
        this.age = age;
        this.transactions = transactions;
    }
    getBalance() {
        return;
    }
    addBalance() {
        console.log('Saldo atualizado com sucesso');
    }
    createNewAccount() {
        const result = accountsArray.find((account) => {
            return account.cpf === this.cpf;
        });
        if (result === undefined) {
            if (this.age >= 18) {
                accountsArray.push(index_1.newAccount);
                console.log(`A conta ${this.name} com o CPF ${this.cpf} e idade ${this.age} foi criada.`);
            }
            else {
                console.log("Você precisa ter 18 anos ou mais para criar uma conta.");
            }
        }
        else {
            console.log("CPF repetido.");
        }
    }
}
exports.UserAccount = UserAccount;
//# sourceMappingURL=UserAccount.js.map