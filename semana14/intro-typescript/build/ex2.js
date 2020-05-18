const meuArray = [10, 20, 30, 40];
console.log(arrayDeDados(meuArray));
function arrayDeDados(meuArray) {
    let soma = 0;
    let impares = 0;
    for (const cadaItemDoArray of meuArray) {
        soma = soma + cadaItemDoArray;
        (cadaItemDoArray % 2) !== 0 ? impares++ : false;
    }
    return {
        quantidade: meuArray.length,
        impares: impares,
        soma: soma
    };
}
//# sourceMappingURL=ex2.js.map