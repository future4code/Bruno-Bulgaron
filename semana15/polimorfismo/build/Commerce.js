"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Commerce = void 0;
const Place_1 = require("./Place");
class Commerce extends Place_1.Place {
    constructor(floorsQuantity, 
    // Refere-se à quantidade de andares do lugar
    cep) {
        super(cep);
        this.floorsQuantity = floorsQuantity;
    }
    getFloorsQuantity() {
        return this.floorsQuantity;
    }
}
exports.Commerce = Commerce;
// const commerceTeste: Commerce = new Commerce(
//   4,
//   "123.456.777-88"
// )
// console.log(commerceTeste.getFloorsQuantity());
// console.log(commerceTeste.getCep());
//# sourceMappingURL=Commerce.js.map