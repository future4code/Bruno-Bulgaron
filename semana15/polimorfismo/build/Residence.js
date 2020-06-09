"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Residence = void 0;
const Place_1 = require("./Place");
class Residence extends Place_1.Place {
    constructor(residentsQuantity, 
    // Refere-se ao número de moradores da casa
    cep) {
        super(cep);
        this.residentsQuantity = residentsQuantity;
    }
    getResidentsQuantity() {
        return this.residentsQuantity;
    }
}
exports.Residence = Residence;
// const residenceTest: Residence = new Residence(
//   3,
//   "123.456.789-10"
// )
// console.log(residenceTest.getResidentsQuantity());
// console.log(residenceTest.getCep());
//# sourceMappingURL=Residence.js.map