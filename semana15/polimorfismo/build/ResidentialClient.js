"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResidentialClient = void 0;
const Residence_1 = require("./Residence");
class ResidentialClient extends Residence_1.Residence {
    constructor(name, registrationNumber, consumedEnergy, cpf, residentsQuantity, cep) {
        super(residentsQuantity, cep);
        this.name = name;
        this.registrationNumber = registrationNumber;
        this.consumedEnergy = consumedEnergy;
        this.cpf = cpf;
        this.residentsQuantity = residentsQuantity;
        this.cep = cep;
    }
    calculateBill() {
        return this.consumedEnergy * 0.75;
    }
    getCpf() {
        return this.cpf;
    }
}
exports.ResidentialClient = ResidentialClient;
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
//# sourceMappingURL=ResidentialClient.js.map