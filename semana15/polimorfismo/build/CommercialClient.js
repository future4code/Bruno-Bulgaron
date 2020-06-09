"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommercialClient = void 0;
const Commerce_1 = require("./Commerce");
class CommercialClient extends Commerce_1.Commerce {
    constructor(cnpj, name, registrationNumber, consumedEnergy, floorsQuantity, cep) {
        super(floorsQuantity, cep);
        this.cnpj = cnpj;
        this.name = name;
        this.registrationNumber = registrationNumber;
        this.consumedEnergy = consumedEnergy;
    }
    calculateBill() {
        return this.consumedEnergy * 0.53;
    }
    getCnpj() {
        return this.cnpj;
    }
}
exports.CommercialClient = CommercialClient;
//# sourceMappingURL=CommercialClient.js.map