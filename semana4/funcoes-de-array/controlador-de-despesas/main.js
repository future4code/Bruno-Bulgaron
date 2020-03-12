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

    if(campoValor.value === "" || campoTipo.value === "" || campoDescricao.value === ""){
        alert("Preencha os 3 campos!");
    } else {
        const novaDespesa = new Despesa(campoValor.value, campoTipo.value, campoDescricao.value);

        arrayDeDespesa.push(novaDespesa);
        
        campoValor.value = "";
        campoTipo.value = "";
        campoDescricao.value = "";

        console.log(arrayDeDespesa);

    }

}



function filtrarDespesas() {

    if(valorMinimoDespesa.value === "" || valorMaximoDespesa.value === ""){
        alert("Preencha os campos!");
    } else {

        const listaFiltrada = document.getElementById("listaFiltrada")
        
        let tipoDespesa = document.getElementById("tipoDespesa");
        let valorMinimoDespesa = document.getElementById("valorMinimoDespesa");
        let valorMaximoDespesa = document.getElementById("valorMaximoDespesa");
                
        let despesasFiltradas = arrayDeDespesa.filter
        ((despesa) => {
        return despesa.tipoDespesa === tipoDespesa && despesa.valores >= valorMinimoDespesa && despesa.valores <= valorMaximoDespesa
    })
    for(const elementos of despesasFiltradas) {

    }

    }
   
}


function limparFiltros() {
    let valorMinimoDespesa = document.getElementById("valorMinimoDespesa");
    let valorMaximoDespesa = document.getElementById("valorMaximoDespesa");

    valorMinimoDespesa.value = "";
    valorMaximoDespesa.value = "";
}