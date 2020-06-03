"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientManager = void 0;
const ResidentialClient_1 = require("./ResidentialClient");
const CommercialClient_1 = require("./CommercialClient");
const IndustrialClient_1 = require("./IndustrialClient");
class ClientManager {
    constructor() {
        this.clients = [];
    }
    addClientToArray(client) {
        this.clients.push(client);
    }
    getClientsQuantity() {
        return this.clients.length;
    }
}
exports.ClientManager = ClientManager;
const clientManager = new ClientManager();
// Residential Client
const residentialClient = new ResidentialClient_1.ResidentialClient("Cliente Residencial", 20, 150, "123.456.789-10", 3, "12987000");
clientManager.addClientToArray(residentialClient);
// Commercial Client
const commercialClient = new CommercialClient_1.CommercialClient(11226116000160, "Cliente Comercial", 2, 540, 10, "32100000");
clientManager.addClientToArray(commercialClient);
// Industrial Client
const industrialClient = new IndustrialClient_1.IndustrialClient("123321456654", "Cliente Industrial", 3, 5000, 20, "12332100");
clientManager.addClientToArray(industrialClient);
console.log(clientManager.getClientsQuantity());
//# sourceMappingURL=ClientManager.js.map