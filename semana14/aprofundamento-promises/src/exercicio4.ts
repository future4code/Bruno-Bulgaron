// A: Função nomeada.

import axios from 'axios';

const baseUrl = 'https://us-central1-labenu-apis.cloudfunctions.net/labenews';

async function createNews(
    title: string,
    content: string,
    date: number
): Promise<void> {
    await axios.put(`${baseUrl}/news`, {
        title,
        content,
        date
    })
}

async function main(){
    try{
        await createNews("Essa é uma notícia", "Esse é um conteúdo da notícia", 27052020);

        console.log("Notícia criada.");
    }catch(err){
        console.log(err);
    }
}

main();