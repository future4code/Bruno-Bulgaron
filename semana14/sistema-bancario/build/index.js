"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const accountsArray = require('../accounts.json');
const moment = require('moment');
const option = process.argv[2];
const name = process.argv[3];
const cpf = process.argv[4];
const dateOfBirth = process.argv[5];
const formatedBirth = moment(dateOfBirth, "DD/MM/YYYY");
const age = moment().diff(moment(formatedBirth, "DD/MM/YYYY"), "years");
const newUser = {
    name: name,
    cpf: cpf,
    dateOfBirth: dateOfBirth,
    balance: 0
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
switch (option) {
    case "create": {
        createAccount();
        break;
    }
    case "accounts": {
        getAllAccounts();
        break;
    }
    default:
        break;
}
//# sourceMappingURL=index.js.map