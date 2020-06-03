import { Client } from "./Client";
import { Industry } from "./Industry";

export class IndustrialClient extends Industry implements Client {
    constructor(
        private industryNumber: string,
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        machinesQuantity: number,
        cep: string
    ) {
        super(machinesQuantity, cep)
    }

    public getIndustryNumber(): string {
        return this.industryNumber
    }

    public calculateBill(): number {
        return this.consumedEnergy * 0.45 + this.machinesQuantity * 100
    }
}