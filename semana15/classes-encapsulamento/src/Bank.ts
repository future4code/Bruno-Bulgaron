import { UserAccount } from "./UserAccount";
import { JSONFileManager } from "./JSONFileManager";

export class Bank {
    // Atributos
    private accounts: UserAccount[];
    private fileManager: JSONFileManager;

    // Métodos
    createAccount(): void {
        // Lógica aqui
    }

    getAllAccounts(): UserAccount[] {
        return // Lógica aqui
    }

    getAccountByCpf(): UserAccount {
        return // Lógica aqui
    }
}