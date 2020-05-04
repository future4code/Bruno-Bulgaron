export function checaPalindromo(frase) {
    let fraseInvertida = frase.split('').reverse().join('')
    
    if(frase === fraseInvertida){
        return true
    } else {
        return false
    }
}