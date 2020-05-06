export function removeItensDuplicados(array) {
    return array.filter((value, index) => array.indexOf(value) === index)
}