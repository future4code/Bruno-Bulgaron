let num1: number = 10
let num2: number = 20

console.log("Soma: " + somaNumeros(num1, num2));
console.log("Subtração: " + subtrairNumero(num1, num2));
console.log("Multiplicação: " + multiplicarNumero(num1, num2));
console.log("Maior número: " + maiorNumero(num1, num2));

// Somar números
function somaNumeros(numero1: number, numero2: number): number {
    return numero1+numero2;
}

// Subtrair números
function subtrairNumero(numero1: number, numero2: number): number {
    return numero1-numero2;
}

// Multiplicar números
function multiplicarNumero(numero1: number, numero2: number): number {
    return numero1*numero2;
}

// Maior número
function maiorNumero(numero1: number, numero2: number): number {
    return numero1 > numero2 ? numero1 : numero2;
}