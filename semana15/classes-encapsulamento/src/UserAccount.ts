import { Transaction } from "./Transaction";
import { newAccount } from "./index";

const accountsArray: UserAccount[] = require('../accounts.json');

// Declaração
export class UserAccount {
    private balance: number;
    private cpf: string;
    private name: string;
    private age: number;
    private transactions: Transaction[];
  
    constructor(
       balance: number = 0,
       cpf: string,
       name: string,
       age: number,
       transactions: Transaction[] = []) {
  
        console.log("Chamando o construtor da classe UserAccount")
        this.balance = balance;
        this.cpf = cpf;
        this.name = name;
        this.age = age;
        this.transactions = transactions
      }

      public getBalance(): number {
        return //Aqui deve ser inserida a lógica de pegar saldo do usuário
      }
  
      public addBalance(): void {
      //Aqui deve ser inserida a lógica de adicionar saldo 
        console.log('Saldo atualizado com sucesso')
      }

      public createNewAccount(): void {
        const result = accountsArray.find((account) => {
          return account.cpf === this.cpf
        })

        if(result === undefined){
          if(this.age >= 18){
            accountsArray.push(newAccount)
            // Colocar lógica para escrever no arquivo JSON aqui ?

            console.log(`A conta ${this.name} com o CPF ${this.cpf} e idade ${this.age} foi criada.`);

          }else{
            console.log("Você precisa ter 18 anos ou mais para criar uma conta.");
          }
        }else{
          console.log("CPF repetido.");
        }
      }
}