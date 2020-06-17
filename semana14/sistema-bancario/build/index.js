"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const accountsArray = require('../accounts.json');
const moment = require('moment');
const option = process.argv[2];
const name = process.argv[3];
const cpf = process.argv[4];
const dateOfBirth = process.argv[5];
const value = Number(process.argv[6]);
const formatedBirth = moment(dateOfBirth, "DD/MM/YYYY");
const age = moment().diff(moment(formatedBirth, "DD/MM/YYYY"), "years");
const newUser = {
    name: name,
    cpf: cpf,
    dateOfBirth: dateOfBirth,
    balance: 0,
    value: 0
};
function createAccount() {
    const result = accountsArray.find((element) => {
        return element.cpf === cpf;
    });
    if (result === undefined) {
        if (age >= 18) {
            accountsArray.push(newUser);
            fs.writeFileSync('accounts.json', JSON.stringify(accountsArray));
            console.log("Usuário criado com sucesso.");
        }
        else {
            console.log("Você precisa ter no mínimo 18 anos para criar uma conta.");
        }
    }
    else {
        console.log("CPF repetido.");
    }
}
function getAllAccounts() {
    const allAccounts = accountsArray;
    console.log(allAccounts);
}
function getBalance(name, cpf) {
    const resultOfBalance = accountsArray.find((account) => {
        return (account.name === name && account.cpf === cpf);
    });
    if (resultOfBalance === undefined) {
        return console.log("Conta inexistente.");
    }
    else {
        return console.log("Saldo R$", resultOfBalance.balance);
    }
}
function addBalance(name, cpf, value) {
    const resultOfAddBalance = accountsArray.find((account) => {
        return account.cpf === cpf;
    });
    if (resultOfAddBalance !== undefined && resultOfAddBalance.name === name) {
        const valueToAdd = accountsArray.map((element) => {
            if (resultOfAddBalance === element) {
                element.balance += value;
                return element;
            }
            else {
                return element;
            }
        });
        fs.writeFileSync(`accounts.json`, JSON.stringify(valueToAdd));
        return console.log("Valor adicionado com sucesso!");
    }
    else {
        return console.log("Erro.");
    }
}
switch (option) {
    case "ops": {
        console.log("Operações disponíveis: create, accounts, balance, addBalance");
        break;
    }
    case "create": {
        createAccount();
        break;
    }
    case "accounts": {
        getAllAccounts();
        break;
    }
    case "balance": {
        getBalance(name, cpf);
        break;
    }
    case "addBalance": {
        addBalance(name, cpf, value);
        break;
    }
    default:
        console.log("Erro: operação desconhecida.");
        break;
}
//# sourceMappingURL=index.js.map