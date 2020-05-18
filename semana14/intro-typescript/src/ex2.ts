const meuArray: number[] = [10, 20, 30, 40];

console.log(arrayDeDados(meuArray))

type novoArray = {
    quantidade: number,
    impares: number,
    soma: number,
}

function arrayDeDados (meuArray: number[]): novoArray{
    let soma: number = 0;
    let impares: number = 0;
    for(const cadaItemDoArray of meuArray){
        soma = soma + cadaItemDoArray;
        (cadaItemDoArray % 2) !== 0 ? impares ++ : false;
    }    
    return {
        quantidade: meuArray.length,
        impares: impares,
        soma: soma
    }
}