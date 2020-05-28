// Resposta - A -> GET - /subscribers/all
// Resposta - B -> Promise<any[]>
// Resposta - C -> código abaixo

import axios from 'axios';

const baseUrl = 'https://us-central1-labenu-apis.cloudfunctions.net/labenews';

type subscriber = {
    id: string,
    name: string,
    email: string
}

async function getAllSubscribers(): Promise<subscriber[]>{
    const allSubsResult = await axios.get(`${baseUrl}/subscribers/all`);

    return allSubsResult.data.map((res:any) => {
        return{
            id: res.id,
            name: res.name,
            email: res.email
        }
    })
}

async function main(){
    try{
        console.log(await getAllSubscribers());
    }catch(err){
        console.log(err);
    }
}

main();