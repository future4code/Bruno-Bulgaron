import { User } from './User';

class Customer extends User {
  public purchaseTotal: number = 0;
  private creditCard: string;

  constructor(
    id: string,
    email: string,
    name: string,
    password: string,
    creditCard: string
  ) {
    super(id, email, name, password);
    console.log("Chamando o construtor da classe Customer");
    this.creditCard = creditCard;
  }

  public getCreditCard(): string {
    return this.creditCard;
  }

  public getPurchaseTotal(): number {
	  return this.purchaseTotal
  }
}

const customerTeste: Customer = new Customer("idCustomer01", "customer1@teste.com", "Customer1", "123", "MasterCard");
console.log("ID:", customerTeste.getId());
console.log("E-mail:", customerTeste.getEmail());
console.log("Nome:", customerTeste.getName());
console.log("Cartão de Crédito:", customerTeste.getCreditCard());
console.log("Total:", customerTeste.getPurchaseTotal());
console.log(customerTeste.introduceYourself());

// Exercício 2

// A) Uma vez.
// B) Duas vezes. Acho que é porque estamos importando o User dentro desse arquivo, e aí ele roda os console.log de lá de novo?

// Exercício 3

// A) Sim, desde que façamos um método Public getPassword.