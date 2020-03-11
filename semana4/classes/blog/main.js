let tituloDoPost = document.getElementById("title");
let autorDoPost = document.getElementById("author");
let conteudoDoPost = document.getElementById("content");

class post {
    constructor(titulo, autor, conteudo) {
        this.titulo = titulo
        this.autor = autor
        this.conteudo = conteudo
    }
}

function criaPost() {
    const novoPost = new post(
        tituloDoPost.value, // Título 
        autorDoPost.value, // Autor
        conteudoDoPost.value // Conteúdo
        );
    
        let arrayDoPost = [novoPost.titulo, novoPost.autor, novoPost.conteudo];

        tituloDoPost.value = ""
        autorDoPost.value = ""
        conteudoDoPost.value = ""

        
        // console.log(novoPost);
        console.log(arrayDoPost[0]);
        console.log(arrayDoPost[1]);
        console.log(arrayDoPost[2]);

}