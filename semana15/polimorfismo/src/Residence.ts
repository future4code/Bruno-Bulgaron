import { Place } from "./Place";

export class Residence extends Place {
    constructor(
      protected residentsQuantity: number,
      // Refere-se ao número de moradores da casa
  
      cep: string
    ) {
      super(cep);
    }

    public getResidentsQuantity(): number {
      return this.residentsQuantity
    }
}

// const residenceTest: Residence = new Residence(
//   3,
//   "123.456.789-10"
// )

// console.log(residenceTest.getResidentsQuantity());
// console.log(residenceTest.getCep());