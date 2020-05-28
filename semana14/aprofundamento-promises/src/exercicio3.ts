// A: Aqui não deu erro não.

import axios from 'axios';

const baseUrl = 'https://us-central1-labenu-apis.cloudfunctions.net/labenews';

type User = {
    id: string,
    name: string,
    email: string
}

const getAllSubscribers = async (): Promise<User[]> => {
    const allUsers = await axios.get(`${baseUrl}/subscribers/all`);

    return allUsers.data.map((res:any) => {
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