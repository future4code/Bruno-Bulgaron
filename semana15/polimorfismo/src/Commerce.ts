import { Place } from "./Place";

export class Commerce extends Place {
    constructor(
      protected floorsQuantity: number,
      // Refere-se à quantidade de andares do lugar
  
      cep: string
    ) {
      super(cep);
    }

    public getFloorsQuantity(): number {
      return this.floorsQuantity
    }
}

// const commerceTeste: Commerce = new Commerce(
//   4,
//   "123.456.777-88"
// )

// console.log(commerceTeste.getFloorsQuantity());
// console.log(commerceTeste.getCep());