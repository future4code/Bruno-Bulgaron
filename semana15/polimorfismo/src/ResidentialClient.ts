import { Residence } from './Residence';
import { Client } from './Client';

export class ResidentialClient extends Residence implements Client {
    constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        private cpf: string,
        public residentsQuantity: number,
        public cep: string
    ) {
        super(residentsQuantity, cep)
    }
    
    calculateBill(): number {
        return this.consumedEnergy * 0.75
    }

    public getCpf(): string {
        return this.cpf
    }
}

// const residentialClientTeste: ResidentialClient = new ResidentialClient(
//     "Cliente Residencial",
//     123,
//     100,
//     "123.456.789.11",
//     4,
//     "12300000"
// )

// console.log(residentialClientTeste.name);
// console.log(residentialClientTeste.registrationNumber);
// console.log(residentialClientTeste.consumedEnergy);
// console.log(residentialClientTeste.residentsQuantity);
// console.log(residentialClientTeste.calculateBill());
// console.log(residentialClientTeste.getCpf());