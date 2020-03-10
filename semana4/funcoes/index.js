/*

Exercícios de Interpretação de Código

Exercício 1

A)



Exercício 2

A)
Temos uma lista chamada arrayDeNomes com 5 itens no índice.
A função não nomeada recebe dois argumentos (lista e nome), é feita uma verificação através de um laço "for" em que, enquanto a variável i for menor do que o total de índices da lista, esta terá seu valor acrescentado em 1. Dentro do laço, existe um if que verifica que, se o valor do índice da lista for igual ao valor do nome que for passado no console.log, irá retornar no console o valor do índice.

B)
???

*/






/*

Exercícios de Escrita de Código

Exercício 4

*/

// A
// let calculoIdade = (idade) => {
//     return idade * 7
// }

// let idade2 = calculoIdade(4)

// console.log("Idade convertida: ", idade2)


// B
// let pessoa = (nome, idade, endereco, estudante) => {
    
//     let eEstudante
//     if(estudante === true) {
//         eEstudante = ("Eu sou " + nome + ", tenho " + idade + " anos, moro em " + endereco + " e sou estudante.")
//     } else {
//         eEstudante = ("Eu sou " + nome + ", tenho " + idade + " anos, moro em " + endereco + " e não sou estudante.")
//     }

//     return eEstudante
// }

// console.log(pessoa("Bruno", 26, "Rua dos Códigos", true))


/*

Exercício 5

*/

// let qualSeculoAnoPertence = (ano) => {

//     if(ano <= 1100) {
//         return console.log("O ano " + ano + " pertence ao século XI")
//     } else {
//         return console.log("Teste")
//     }
// }



/*

Exercício 6

*/

// A
// const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

// function devolverQuantidade(numeros) {
//     return numeros.length
// }

// console.log("O array tem: " + (devolverQuantidade(array)) + " itens." );



// B
// function parOuImpar(numero) {
//     if(numero % 2 === 0){
//         return true
//     } else {
//         return false
//     }
// }

// console.log("O número é par?", parOuImpar(1))
// console.log("O número é par?", parOuImpar(2))



// C
// const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

// function devolverPares(numeros) {
//     let quantidade = 0
 
//     for(let x of numeros){        
//         if(x % 2 === 0){
//             quantidade += 1
//         }
//     }

//     return quantidade
// }

// console.log("Os números pares são: " + devolverPares(array))



// D
// const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

// function parOuImpar(numero) {
//     if(numero % 2 === 0){
//         return true
//     } else {
//         return false
//     }
// }

// function devolverPares(numeros) {
//     let quantidade = 0
 
//     for(let x of numeros){        
//         if(parOuImpar(x)){
//             quantidade += 1
//         }
//     }

//     return quantidade
// }

// console.log("Os números pares são: " + devolverPares(array))