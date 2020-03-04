/* 
Exercícios de Interpretação de Código

Exercício 1

O código declara a variável sum e atribui à ela o valor 0.
Em seguida, utiliza o for para rodar o comando sum += i enquanto i tiver o valor menor do que 15. A cada vez que o for roda pra verificar, o valor de i é aumentado em 1.
Após isso, ele mostra na tela do console o resultado da variável sum, que é 105.

Exercício 2

a) O comando .push acrescenta um item dentro de um Array.

b) 10, 15, 25, 30

c) 12, 15, 18, 21, 27, 30 - 12
*/

// Exercícios de Escrita de Código

// Exercício 3

// a)
// const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55];

// let maiorNum = array[0];
// let menorNum = array[0];

// for(let i = 0; i < array.length; i++) {
//     if(array[i] > maiorNum) {
//         maiorNum = array[i];
//     };
//     if(array[i] < menorNum) {
//         menorNum = array[i]
//     };
// };

// console.log("O maior número é ", maiorNum, " e o menor número é ", menorNum);

// b)
// const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55];

// let novoArray = [];

// for(let i = 0; i < array.length; i++){
//     novoArray.push(array[i] / 10);
// }

// console.log(novoArray);

// c)
// const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55];

// let novoArray = [];

// for(let i = 0; i < array.length; i++){
//     if(array[i] % 2 === 0){
//         novoArray.push(array[i]);
//     }
// }

// console.log(novoArray);

// d)
// const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55];

// let index = 0;
// let total = [];

// for(let i = 0; i < array.length; i++) {
//     index = array[i]
//     total.push("O elemento do índex " + i + " é " + index);
// }

// console.log(total);