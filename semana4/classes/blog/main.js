let tituloDoPost = document.getElementById("title");
let autorDoPost = document.getElementById("author");
let conteudoDoPost = document.getElementById("content");

let divDosPosts = document.getElementById("todosOsPosts");

class post {
    constructor(titulo, autor, conteudo) {
        this.titulo = titulo
        this.autor = autor
        this.conteudo = conteudo
    }
}

function criaPost() {
    if(tituloDoPost.value === "" || autorDoPost.value === "" || conteudoDoPost.value === ""){
        alert("Preencha os 3 campos!");
    } else {

        const novoPost = new post(
            tituloDoPost.value, // Título 
            autorDoPost.value, // Autor
            conteudoDoPost.value // Conteúdo
            );
        
            let arrayDoPost = [novoPost.titulo, novoPost.autor, novoPost.conteudo];
            
            divDosPosts.innerHTML += "<h2>" + arrayDoPost[0] + "</h2>";
            divDosPosts.innerHTML += "<h4>" + arrayDoPost[1] + "</h4>";
            divDosPosts.innerHTML += "<p>" + arrayDoPost[2] + "</p>";       
        
            // console.log(novoPost);
            console.log(arrayDoPost[0]);
            console.log(arrayDoPost[1]);
            console.log(arrayDoPost[2]);

            tituloDoPost.value = "";
            autorDoPost.value = "";
            conteudoDoPost.value = "";
    }

}