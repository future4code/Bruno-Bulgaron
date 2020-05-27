// Recebe um arrray de promises?

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

const main = async() => {
    try{
        const users = await getAllSubscribers();

        const promiseArray: Promise<any>[] = [];

        for(const user of users) {
            
            console.log("Enviando notificação para ", user.name)
            
            promiseArray.push(axios.post(`${baseUrl}/notifications/send`, {
                subscriberId: user.id,
                message: "Notificação agora vai sem erro real oficial 100%"
            }))
            
            await Promise.all(promiseArray);

            console.log("Notificação enviada.")
        }
    }catch(err){
        console.log(err);
    }
}

main();