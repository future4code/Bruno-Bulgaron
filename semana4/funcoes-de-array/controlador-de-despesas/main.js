class Despesa {
    constructor(valor, tipo, descricao) {
        this.valor = valor;
        this.tipo = tipo;
        this.descricao = descricao;
    }
}

let arrayDeDespesa = [];

function addDespesa(){

    let campoValor = document.getElementById("valorDespesa");
    let campoTipo = document.getElementById("tipoDespesa");
    let campoDescricao = document.getElementById("descricaoDespesa");

    const novaDespesa = new Despesa(campoValor.value, campoTipo.value, campoDescricao.value);

    arrayDeDespesa.push(novaDespesa);
    
    campoValor.value = "";
    campoTipo.value = "";
    campoDescricao.value = "";

    console.log(arrayDeDespesa);

}

