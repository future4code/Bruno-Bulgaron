const btnCriaTarefa = document.getElementById("btnCriaTarefa");
const btnApagaTarefas = document.getElementById("btnApagaTarefas");

let diaSegundaFeira = document.getElementById("segundaFeira");
let diaTercaFeira = document.getElementById("tercaFeira");
let diaQuartaFeira = document.getElementById("quartaFeira");
let diaQuintaFeira = document.getElementById("quintaFeira");
let diaSextaFeira = document.getElementById("sextaFeira");
let diaSabado = document.getElementById("sabado");
let diaDomingo = document.getElementById("domingo");

let inputValor = document.getElementById("inputTexto").value;
let listaDosDias = document.getElementById("listaDias");


// Função para criar um item em um dia específico
function criaTarefa(){
    if(inputValor !== ""){
        if(listaDosDias.value === "segunda"){
            // Pega o valor do campo de texto e insere na variável inputValor
            let inputValor = document.getElementById("inputTexto").value;

            // Adiciona o item no dia especificado
            diaSegundaFeira.innerHTML += "<li>" + inputValor + "</li>";
        }
        if(listaDosDias.value === "terca"){
            // Pega o valor do campo de texto e insere na variável inputValor
            let inputValor = document.getElementById("inputTexto").value;

            // Adiciona o item no dia especificado
            diaTercaFeira.innerHTML += "<li>" + inputValor + "</li>";
        }
        if(listaDosDias.value === "quarta"){
            // Pega o valor do campo de texto e insere na variável inputValor
            let inputValor = document.getElementById("inputTexto").value;

            // Adiciona o item no dia especificado
            diaQuartaFeira.innerHTML += "<li>" + inputValor + "</li>";
        }
        if(listaDosDias.value === "quinta"){
            // Pega o valor do campo de texto e insere na variável inputValor
            let inputValor = document.getElementById("inputTexto").value;

            // Adiciona o item no dia especificado
            diaQuintaFeira.innerHTML += "<li>" + inputValor + "</li>";
        }
        if(listaDosDias.value === "sexta"){
            // Pega o valor do campo de texto e insere na variável inputValor
            let inputValor = document.getElementById("inputTexto").value;

            // Adiciona o item no dia especificado
            diaSextaFeira.innerHTML += "<li>" + inputValor + "</li>";
        }
        if(listaDosDias.value === "sabado"){
            // Pega o valor do campo de texto e insere na variável inputValor
            let inputValor = document.getElementById("inputTexto").value;

            // Adiciona o item no dia especificado
            diaSabado.innerHTML += "<li>" + inputValor + "</li>";
        }
        if(listaDosDias.value === "domingo"){
            // Pega o valor do campo de texto e insere na variável inputValor
            let inputValor = document.getElementById("inputTexto").value;

            // Adiciona o item no dia especificado
            diaDomingo.innerHTML += "<li>" + inputValor + "</li>";
        }
    } else {
        alert("Digite uma tarefa!");
    }   
}

// Função para apagar todos os itens da tela
function apagaTarefas(){
    diaSegundaFeira.innerHTML = "";
    diaTercaFeira.innerHTML = "";
    diaQuartaFeira.innerHTML = "";
    diaQuintaFeira.innerHTML = "";
    diaSextaFeira.innerHTML = "";
    diaSabado.innerHTML = "";
    diaDomingo.innerHTML = "";
}