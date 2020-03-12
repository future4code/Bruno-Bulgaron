let campoValor = document.getElementById("valorDespesa").value;
let campoTipo = document.getElementById("tipoDespesa").value;
let campoDescricao = document.getElementById("descricaoDespesa").value;

class Despesa {
    constructor(valor, tipo, descricao) {
        this.valor = valor;
        this.tipo = tipo;
        this.descricao = descricao;
    }
}

let arrayDeDespesa = [campoValor, campoTipo, campoDescricao];

function addDespesa(){
    const novaDesepsa = new Despesa(arrayDeDespesa[0], arrayDeDespesa[1], arrayDeDespesa[2]);

    campoValor.value = "";
    campoTipo.value = "";
    campoDescricao.value = "";

    console.log(arrayDeDespesa);
}

