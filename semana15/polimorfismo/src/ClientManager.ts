import { Client } from "./Client";
import { ResidentialClient } from "./ResidentialClient";
import { CommercialClient } from "./CommercialClient";
import { IndustrialClient } from "./IndustrialClient";

export class ClientManager {
    private clients: Client[] = []

    public addClientToArray(client: Client): void {
        this.clients.push(client)
    }
    
    public getClientsQuantity(): number {
        return this.clients.length
    }
}

const clientManager = new ClientManager();

// Residential Client
const residentialClient = new ResidentialClient(
    "Cliente Residencial", 
    20,
    150,
    "123.456.789-10",
    3,
    "12987000"
)
clientManager.addClientToArray(residentialClient);

// Commercial Client
const commercialClient = new CommercialClient(
    11226116000160,
    "Cliente Comercial",
    2,
    540,
    10,
    "32100000"
)
clientManager.addClientToArray(commercialClient);

// Industrial Client
const industrialClient = new IndustrialClient(
    "123321456654",
    "Cliente Industrial",
    3,
    5000,
    20,
    "12332100"
)
clientManager.addClientToArray(industrialClient);

console.log(clientManager.getClientsQuantity());