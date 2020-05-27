import axios from 'axios';

const baseUrl = 'https://us-central1-labenu-apis.cloudfunctions.net/labenews';

const newSubscriber = async (name: string, email: string) => {
    await axios.put(`${baseUrl}/subscribers`, {
        name,
        email
    })
}

const main = async() => {
    try{
        await newSubscriber("Jack Sparrow", "jacksparrow@gmail.com")
        console.log("Usuário criado com sucesso.");

   
    }catch(err) {
        console.log(err);
    }
}

main();