export interface Client {
    name: string;
    // Refere-se ao nome do cliente
  
    registrationNumber: number;
    // Refere-se ao número de cadastro do cliente na concessionária
      // como se fosse um id
  
    consumedEnergy: number;
    // Refere-se à energia consumida pelo cliente no mês
  
    calculateBill(): number;
    // Retorna o valor da conta em reais
}

// const clienteTeste: Client = {
//   name: "Bruno",
//   registrationNumber: 1,
//   consumedEnergy: 10,
//   calculateBill: () => {
//       return 2
//   }
// }

// console.log(clienteTeste.name)
// console.log(clienteTeste.registrationNumber)
// console.log(clienteTeste.consumedEnergy)
// console.log(clienteTeste.calculateBill())

// Exercício 1
// A) Consegui imprimir tudo.