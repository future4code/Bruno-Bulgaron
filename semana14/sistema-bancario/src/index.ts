import * as fs from "fs";
export {}

type user = {
    name: string,
    cpf: number | string,
    dateOfBirth: number | string,
    balance: number,
}

const accountsArray: user[] = require('../accounts.json')
const moment = require('moment');

const option: string = process.argv[2];
const name: string = process.argv[3];
const cpf: string = process.argv[4];
const dateOfBirth: string = process.argv[5];

const formatedBirth = moment(dateOfBirth, "DD/MM/YYYY")
const age = moment().diff(moment(formatedBirth, "DD/MM/YYYY"), "years")

const newUser: user = {
    name: name,
    cpf: cpf,
    // dateOfBirth: moment(process.argv[5], "DD/MM/YYYY"),
    dateOfBirth: dateOfBirth,
    balance: 0
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
    const allAccounts = accountsArray
    console.log(allAccounts);
}

switch(option){
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