// A. Os métodos de array no forEach não foram feitos para serem utilizados com funções assíncronas. Ele iria realizar a operação e passar a mensagem para cada parte da operação.

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

        for(const user of users) {
            await axios.post(`${baseUrl}/notifications/send`, {
                subscriberId: user.id,
                message: "Notificação maligna"
            })

            console.log("Notificação enviada.")
        }
    }catch(err){
        console.log(err);
    }
}

main();