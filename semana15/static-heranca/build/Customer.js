"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("./User");
class Customer extends User_1.User {
    constructor(id, email, name, password, creditCard) {
        super(id, email, name, password);
        this.purchaseTotal = 0;
        console.log("Chamando o construtor da classe Customer");
        this.creditCard = creditCard;
    }
    getCreditCard() {
        return this.creditCard;
    }
    getPurchaseTotal() {
        return this.purchaseTotal;
    }
}
const customerTeste = new Customer("idCustomer01", "customer1@teste.com", "Customer1", "123", "MasterCard");
console.log("ID:", customerTeste.getId());
console.log("E-mail:", customerTeste.getEmail());
console.log("Nome:", customerTeste.getName());
console.log("Cartão de Crédito:", customerTeste.getCreditCard());
console.log("Total:", customerTeste.getPurchaseTotal());
console.log(customerTeste.introduceYourself());
//# sourceMappingURL=Customer.js.map