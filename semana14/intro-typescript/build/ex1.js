let num1 = 10;
let num2 = 20;
console.log("Soma: " + somaNumeros(num1, num2));
console.log("Subtração: " + subtrairNumero(num1, num2));
console.log("Multiplicação: " + multiplicarNumero(num1, num2));
console.log("Maior número: " + maiorNumero(num1, num2));
function somaNumeros(numero1, numero2) {
    return numero1 + numero2;
}
function subtrairNumero(numero1, numero2) {
    return numero1 - numero2;
}
function multiplicarNumero(numero1, numero2) {
    return numero1 * numero2;
}
function maiorNumero(numero1, numero2) {
    return numero1 > numero2 ? numero1 : numero2;
}
//# sourceMappingURL=ex1.js.map