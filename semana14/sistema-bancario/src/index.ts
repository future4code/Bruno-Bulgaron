import * as fs from "fs";
export {}

type user = {
    name:          string,
    cpf:           number | string,
    dateOfBirth:   number | string,
    balance:       number,
    value:         number
}

const accountsArray: user[] = require('../accounts.json')
const moment = require('moment');

const option:      string = process.argv[2];
const name:        string = process.argv[3];
const cpf:         string = process.argv[4];
const dateOfBirth: string = process.argv[5];
const value:       number = Number(process.argv[6]);

const formatedBirth = moment(dateOfBirth, "DD/MM/YYYY")
const age = moment().diff(moment(formatedBirth, "DD/MM/YYYY"), "years")

const newUser: user = {
    name: name,
    cpf: cpf,
    // dateOfBirth: moment(process.argv[5], "DD/MM/YYYY"),
    dateOfBirth: dateOfBirth,
    balance: 0,
    value: 0
}

function createAccount(){
    const result = accountsArray.find((element) => {
        return element.cpf === cpf
    })  

    if(result === undefined){
        if(age >= 18){
            // Insere um new user dentro do array do arquivo json
            accountsArray.push(newUser);
            fs.writeFileSync('accounts.json', JSON.stringify(accountsArray));
            
            console.log("Usuário criado com sucesso.");
        }else{
            console.log("Você precisa ter no mínimo 18 anos para criar uma conta.");
        }
    } else {
        console.log("CPF repetido.");
    }
}

function getAllAccounts(){
    const allAccounts = accountsArray;
    console.log(allAccounts);
}

function getBalance(name: string, cpf: number | string){
    const resultOfBalance = accountsArray.find((account: any) => {
        return (account.name === name && account.cpf === cpf)
    })
    
    if(resultOfBalance === undefined){
        return console.log("Conta inexistente.");
    }else{
        return console.log("Saldo R$", resultOfBalance.balance)
    }
}

function addBalance(name: string, cpf: number | string, value: number): void{
    const resultOfAddBalance = accountsArray.find((account: any) => {
        return account.cpf === cpf
    })

    if(resultOfAddBalance !== undefined && resultOfAddBalance.name === name){
        const valueToAdd = accountsArray.map((element) => {
            if(resultOfAddBalance === element){
                element.balance += value;
                return element
            }else{
                return element
            }
        })

        fs.writeFileSync(`accounts.json`, JSON.stringify(valueToAdd));
        return console.log("Valor adicionado com sucesso!");
    }else{
        return console.log("Erro.");
    }
}

switch(option){
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