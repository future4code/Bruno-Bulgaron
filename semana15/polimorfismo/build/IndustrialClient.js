"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IndustrialClient = void 0;
const Industry_1 = require("./Industry");
class IndustrialClient extends Industry_1.Industry {
    constructor(industryNumber, name, registrationNumber, consumedEnergy, machinesQuantity, cep) {
        super(machinesQuantity, cep);
        this.industryNumber = industryNumber;
        this.name = name;
        this.registrationNumber = registrationNumber;
        this.consumedEnergy = consumedEnergy;
    }
    getIndustryNumber() {
        return this.industryNumber;
    }
    calculateBill() {
        return this.consumedEnergy * 0.45 + this.machinesQuantity * 100;
    }
}
exports.IndustrialClient = IndustrialClient;
//# sourceMappingURL=IndustrialClient.js.map