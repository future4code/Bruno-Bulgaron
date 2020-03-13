// Exerícios de Interpretação de Código
// 1
// É uma função de conversão de moedas. O usuário alimenta a variável cotacao com a cotação do Dólar, e a função retorna esse valor em Reais através de valorEmDolar * cotacao
// A variável meuDinheiro armazena esse resultado e a última linha mostra no console o resultado da conversão.

// 2
// A função investeDinheiro recebe dois parâmetros: tipodeInvestimento e valor. Dentro dela há uma variável vazia (em que será alimentada com o retorno da função). Em seguida, ocorre a verificação, através de um switch/case, em que se o primeiro parâmetro da função for um dos "case", ele alimenta a variável valorAposInvestimento com o segundo parâmetro da função e realiza a multiplicação, dependendo do case.
// As variáveis novoMontante e segundoMontante são apenas para exemplificar a invocação da função, usando "Ações", 150 (por exemplo)
// Por fim, o código mostra no console o valor dessas duas últimas variáveis que invocaram a função com os 2 parâmetros necessários.

// 3
// Temos 3 Arrays, uma com vários índices de números e outros 2 que começam vazios.
// O código exibe um laço for verificando se o resto da divisão de um número do primeiro array (numeros) for 0, ele irá adicionar esse número na primeira array vazia (array1), caso contrário, ele irá adicionar esse número na segunda array vazia (array2).
// Por fim, temos 3 console.log em que mostram a quantidade inicial de números, o total de números da segunda array e o total de números da terceira array, respectivamente.

// 4
 
//     Temos um array de números (numeros) e dois outros arrays, um com o valot Infinity (positivo) e outro com o valor de 0.
//     Em seguida, temos um laço que pega, através de um if, o menor número do Array numeros (-10 no caso) e altera o valor da variável numero1 para -10 (nesse caso).
//     O segundo if pega o maior número da array numeros e armazena esse valor na variável numero2.
//     Por fim, temos 2 console.log exibindo o valor das variáveis numero1 e numero2, respectivamente.


//  ####################### 

//  Exercícios de Lógica de Programação
//  1

// ### Maneira 1

// const meuArray = [1, 2, 3, 4, 5];
// let segundoArray = [];

// for(let i = 0; i < meuArray; i++){
//     segundoArray = i;
// }

// console.log(meuArray);

// ### Maneira 2

// const meuArray = ["Teclado", "Violão", "Bateria", "Baixo"];
// let i = 0;
// let texto = "";

// while(meuArray[i]){
//     texto += meuArray[i] + ", ";
//     i++;
// }

// console.log(texto);

// ### Maneira 3

// const meuArray = [11, 22, 33, 44, 55, 66];
// let numerosPares = [];
// let numerosImpares = [];

// for(let numero of meuArray){
//     if(numero % 2 === 0){
//         numerosPares.push(numero);
//     } else {
//         numerosImpares.push(numero);
//     }
// }

// console.log("Os números pares são: " + numerosPares);
// console.log("Os números ímpares são: " + numerosImpares);

// Exerício 2

// a - false
// b - false
// c - true
// d - true
// e - true

// Exercício 3

// O código não funciona pois a variável quantidadeDeNumerosPares está vazia e o while vai entrar em um loop infinito. Uma forma de arrumar isso seria criar uma função que receba um parâmetro e passar esse parâmetro para a variável quantidadeDeNumerosPares, e adicionar o i++ no while para ir acrescentando conforme ele for "achando" os números pares.

// function numPares(numero){
//     const qtdNumPares = numero;
//     let i = 0;

//     while(i < qtdNumPares){
//         console.log(i * 2)
//         i++
//     }
// }
// console.log(numPares(6));

// Exercício 4

// function ladosTriangulo(a, b, c){
//     if(a === b && b === c){
//         console.log("Equilátero");
//     } else if (a !== b && b !== c && c !== a){
//         console.log("Escaleno");
//     } else {
//         console.log("Isósceles");
//     }
// }

// ladosTriangulo(3, 2, 1);