import { sorteiaNumero } from "./ex3";

describe("Sorteia Número", () => {
  it("Primeiro teste", () => {    
    const result = sorteiaNumero(2, 4);
    
    console.log = jest.fn()
    
    console.log(result)
    
    expect(console.log).toHaveBeenCalledWith(result)
  });
});