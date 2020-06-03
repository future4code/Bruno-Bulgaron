import { Place } from "./Place";

export class Industry extends Place {
    constructor(
      protected machinesQuantity: number, 
      // Refere-se à quantidade de máquinas do local 
      
      cep: string
          ) {
          super(cep);
    }

    public getMachinesQuantity(): number{
        return this.machinesQuantity
    }
}

// const industryTeste: Industry = new Industry(
//     10,
//     "123.456.789-99"
// )

// console.log(industryTeste.getMachinesQuantity());
// console.log(industryTeste.getCep());