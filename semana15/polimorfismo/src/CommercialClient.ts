import { Commerce } from "./Commerce";
import { Client } from "./Client";

export class CommercialClient extends Commerce implements Client {
    constructor(
        private cnpj: number,
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        floorsQuantity: number,
        cep: string
    ) {
        super(floorsQuantity, cep)
    }
    
    calculateBill(): number {
        return this.consumedEnergy * 0.53
    }

    public getCnpj(): number {
        return this.cnpj
    }

}