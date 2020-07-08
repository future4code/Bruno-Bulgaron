// Qtd itens no array
let arrayOfNumbers: number[] = [10, 20, 30, 40, 50];

function ex1a(){
    return({
        arrayOriginal: arrayOfNumbers,
        quantidadeDeNumeros: arrayOfNumbers.length,    
        somaTodosOsNumeros: arrayOfNumbers.reduce((total, eachNum) => {
            return total + eachNum;
        }),
        multiplicaTodosOsNumeros: arrayOfNumbers.reduce((total, eachNum) => {
            return total * eachNum;
        }),
    });
};

console.log(ex1a());