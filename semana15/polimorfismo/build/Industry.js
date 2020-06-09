"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Industry = void 0;
const Place_1 = require("./Place");
class Industry extends Place_1.Place {
    constructor(machinesQuantity, 
    // Refere-se à quantidade de máquinas do local 
    cep) {
        super(cep);
        this.machinesQuantity = machinesQuantity;
    }
    getMachinesQuantity() {
        return this.machinesQuantity;
    }
}
exports.Industry = Industry;
// const industryTeste: Industry = new Industry(
//     10,
//     "123.456.789-99"
// )
// console.log(industryTeste.getMachinesQuantity());
// console.log(industryTeste.getCep());
//# sourceMappingURL=Industry.js.map